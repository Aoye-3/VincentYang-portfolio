"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { useState, useRef, useCallback, useEffect } from "react";
import "./hover-preview.css";

export interface HoverTarget {
  /** The text to highlight and make interactive */
  text: string;
  /** URL of the image to display on hover */
  imageUrl: string;
  /** Optional URL to navigate to on click */
  linkUrl?: string;
  /** Optional alt text for the image */
  altText?: string;
}

export interface HoverPreviewProps {
  /** Text content with placeholders for targets (use {0}, {1}, etc.) */
  content: string;
  /** Array of target configurations */
  targets: HoverTarget[];
  /** Callback when a target is clicked */
  onTargetClick?: (target: HoverTarget, index: number) => void;
  /** Position of the image relative to the target text */
  imagePosition?: "above" | "below" | "left" | "right" | "aside";
  /** Enter animation duration in seconds */
  enterSpeed?: number;
  /** Exit animation duration in seconds */
  exitSpeed?: number;
  /** Maximum rotation angle for the image (in degrees) */
  maxRotation?: number;
  /** Maximum offset for image movement (in pixels) */
  maxOffset?: number;
  /** Image width in pixels */
  imageWidth?: number;
  /** Image height in pixels */
  imageHeight?: number;
  /** Additional CSS classes for the container */
  className?: string;
  /** Additional CSS classes for target text */
  targetClassName?: string;
  /** Padding around target text to expand hover area (in pixels) */
  targetPadding?: number;
  /** Image border radius */
  imageBorderRadius?: string;
  /** Show shadow on image */
  showImageShadow?: boolean;
}

const HoverPreview = ({
  content,
  targets,
  onTargetClick,
  imagePosition = "above",
  enterSpeed = 0.2,
  exitSpeed = 0.15,
  maxRotation = 12,
  maxOffset = 15,
  imageWidth = 200,
  imageHeight = 200,
  className = "",
  targetClassName = "",
  targetPadding = 4,
  imageBorderRadius = "0.75rem",
  showImageShadow = true,
}: HoverPreviewProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const reduceMotion = useReducedMotion();
  const targetRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => {
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
  }, []);

  useEffect(() => {
    targets.forEach((target) => {
      const img = new Image();
      img.src = target.imageUrl;
    });
  }, [targets]);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const rotation = useMotionValue(0);
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  const smoothCursorX = useSpring(cursorX, { stiffness: 250, damping: 20 });
  const smoothCursorY = useSpring(cursorY, { stiffness: 250, damping: 20 });
  const smoothRotation = useSpring(rotation, { stiffness: 150, damping: 15 });
  const smoothOffsetX = useSpring(offsetX, { stiffness: 150, damping: 15 });
  const smoothOffsetY = useSpring(offsetY, { stiffness: 150, damping: 15 });

  const finalX = useTransform(() => {
    const spacing = 24;
    const cx = smoothCursorX.get();
    const ox = smoothOffsetX.get();
    switch (imagePosition) {
      case "aside":
        return window.innerWidth - imageWidth - Math.max(24, window.innerWidth * 0.07);
      case "left":
        return cx - imageWidth - spacing + ox;
      case "right":
        return cx + spacing + ox;
      case "above":
      case "below":
      default:
        return cx - imageWidth / 2 + ox;
    }
  });

  const finalY = useTransform(() => {
    const spacing = 24;
    const cy = smoothCursorY.get();
    const oy = smoothOffsetY.get();
    switch (imagePosition) {
      case "above":
        return cy - imageHeight - spacing + oy;
      case "below":
        return cy + spacing + oy;
      case "left":
      case "right":
      default:
        return cy - imageHeight / 2 + oy;
    }
  });
  const boundedX = useTransform(finalX, (value) => Math.max(16, Math.min(window.innerWidth - imageWidth - 16, value)));
  const boundedY = useTransform(finalY, (value) => Math.max(88, Math.min(window.innerHeight - imageHeight - 100, value)));
  useEffect(() => {
    const close = () => { setIsVisible(false); setHoveredIndex(null); };
    if (reduceMotion) close();
    window.addEventListener('scroll', close, { passive: true });
    window.addEventListener('resize', close);
    return () => {
      window.removeEventListener('scroll', close);
      window.removeEventListener('resize', close);
    };
  }, [reduceMotion]);

  const handleMouseEnter = useCallback(
    (index: number, event: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>) => {
      if (reduceMotion || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }

      const isFirstHover = !isVisible;
      const bounds = event.currentTarget.getBoundingClientRect();
      const pointX = 'clientX' in event ? event.clientX : bounds.left + bounds.width / 2;
      const pointY = 'clientY' in event ? event.clientY : bounds.top;

      if (isFirstHover) {
        cursorX.jump(pointX);
        cursorY.jump(pointY);
        smoothCursorX.jump(pointX);
        smoothCursorY.jump(pointY);

        rotation.jump(0);
        smoothRotation.jump(0);

        offsetX.jump(0);
        smoothOffsetX.jump(0);

        offsetY.jump(0);
        smoothOffsetY.jump(0);
      }

      setHoveredIndex(index);
      setIsVisible(true);
    },
    [
      isVisible,
      reduceMotion,
      cursorX,
      cursorY,
      smoothCursorX,
      smoothCursorY,
      rotation,
      smoothRotation,
      offsetX,
      smoothOffsetX,
      offsetY,
      smoothOffsetY,
    ],
  );

  const handleMouseMove = useCallback(
    (index: number, event: React.MouseEvent<HTMLElement>) => {
      if (hoveredIndex !== index) return;

      const currentX = event.clientX;
      const currentY = event.clientY;
      cursorX.set(currentX);
      cursorY.set(currentY);

      const target = event.currentTarget;
      const rect = target.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = currentX - centerX;
      const deltaY = currentY - centerY;

      const rot = Math.max(
        -maxRotation,
        Math.min(maxRotation, (deltaX / rect.width) * maxRotation * 2),
      );

      const offX = Math.max(
        -maxOffset,
        Math.min(maxOffset, (deltaX / rect.width) * maxOffset * 2),
      );
      const offY = Math.max(
        -maxOffset,
        Math.min(maxOffset, (deltaY / rect.height) * maxOffset * 2),
      );

      rotation.set(rot);
      offsetX.set(offX);
      offsetY.set(offY);
    },
    [
      hoveredIndex,
      maxRotation,
      maxOffset,
      cursorX,
      cursorY,
      rotation,
      offsetX,
      offsetY,
    ],
  );

  const handleMouseLeave = useCallback(() => {
    hideTimeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
      setIsVisible(false);
    }, 50);
  }, []);

  const handleClick = useCallback(
    (target: HoverTarget, index: number) => {
      if (onTargetClick) {
        onTargetClick(target, index);
      } else if (target.linkUrl) {
        window.open(target.linkUrl, "_blank", "noopener,noreferrer");
      }
    },
    [onTargetClick],
  );

  const renderContent = () => {
    const parts: (string | React.ReactElement)[] = [];
    let lastIndex = 0;

    const placeholderRegex = /\{(\d+)\}/g;
    let match;

    while ((match = placeholderRegex.exec(content)) !== null) {
      const placeholderIndex = parseInt(match[1], 10);

      if (match.index > lastIndex) {
        parts.push(content.slice(lastIndex, match.index));
      }

      if (targets[placeholderIndex]) {
        const target = targets[placeholderIndex];
        parts.push(
          <a
            key={`target-${placeholderIndex}`}
            ref={(el) => {
              targetRefs.current[placeholderIndex] = el;
            }}
            onMouseEnter={(e) => handleMouseEnter(placeholderIndex, e)}
            onMouseMove={(e) => handleMouseMove(placeholderIndex, e)}
            onMouseLeave={handleMouseLeave}
            onFocus={(e) => handleMouseEnter(placeholderIndex, e)}
            onBlur={handleMouseLeave}
            onKeyDown={(e) => { if (e.key === 'Escape') { setIsVisible(false); setHoveredIndex(null); } }}
            href={target.linkUrl}
            onClick={onTargetClick ? (e) => { e.preventDefault(); handleClick(target, placeholderIndex); } : undefined}
            className={`hover-preview-target ${targetClassName}`}
            style={{
              padding: `${targetPadding}px`,
              margin: `-${targetPadding}px`,
            }}
          >
            {target.text}
          </a>,
        );
      }

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < content.length) {
      parts.push(content.slice(lastIndex));
    }

    return parts;
  };

  return (
    <div className={`hover-preview-container ${className}`}>
      {renderContent()}

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.85,
        }}
        transition={{
          duration: reduceMotion ? 0 : isVisible ? enterSpeed : exitSpeed,
          ease: isVisible ? "easeOut" : "easeIn",
        }}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: boundedX,
          y: boundedY,
          width: imageWidth,
          height: imageHeight,
          rotate: smoothRotation,
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform, opacity",
        }}
        className="hover-preview-image-wrapper"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {hoveredIndex !== null && targets[hoveredIndex] && (
            <motion.div
              key={`image-${hoveredIndex}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="hover-preview-image-inner"
            >
              <img
                src={targets[hoveredIndex].imageUrl}
                alt={
                  targets[hoveredIndex].altText || targets[hoveredIndex].text
                }
                width={imageWidth}
                height={imageHeight}
                className={`hover-preview-image ${showImageShadow ? "hover-preview-image-shadow" : ""}`}
                style={{
                  borderRadius: imageBorderRadius,
                  width: imageWidth,
                  height: imageHeight,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

HoverPreview.displayName = "HoverPreview";

export default HoverPreview;
