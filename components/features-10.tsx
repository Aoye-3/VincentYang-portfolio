"use client";

// Adapted from the licensed ReactBits Features 10 integration map.
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import type { Variants } from "motion/react";
import { Bot, CodeXml, MousePointer2, PenTool, Route, Search } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SkillNode {
  id: string;
  name: string;
  tools: string;
  description: string;
}

const positions = [
  { x: 50, y: 10 }, { x: 84.6, y: 30 }, { x: 84.6, y: 70 },
  { x: 50, y: 90 }, { x: 15.4, y: 70 }, { x: 15.4, y: 30 },
];
const icons: Record<string, LucideIcon> = {
  visual: PenTool, prototype: MousePointer2, engineering: CodeXml,
  ai: Bot, product: Route, research: Search,
};
const scatter = [
  { cx: 27, cy: 15 }, { cx: 71, cy: 9 }, { cx: 93, cy: 50 },
  { cx: 87, cy: 87 }, { cx: 13, cy: 88 }, { cx: 7, cy: 49 },
];
const container: Variants = {
  hidden: {}, show: { transition: { staggerChildren: 0.06 } },
};
const fadeIn: Variants = {
  hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.6 } },
};
const pop: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};
const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: { pathLength: 1, opacity: 1, transition: { duration: 0.8 } },
};

export function Features10({ skills, portrait, portraitAlt }: {
  skills: SkillNode[]; portrait: string; portraitAlt: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.15 });
  const [reduce, setReduce] = useState(() => matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(!document.hidden);
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = (event: MediaQueryListEvent) => setReduce(event.matches);
    const update = () => setVisible(!document.hidden);
    preference.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", update);
    return () => {
      preference.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  const running = inView && visible && !reduce;
  const selected = skills[active];

  return (
    <div className="skills-feature" ref={ref} data-motion={running ? "playing" : "paused"}>
      <motion.div className="skills-orbit" variants={container}
        initial={reduce ? false : "hidden"} whileInView="show" animate={reduce ? "show" : undefined}
        viewport={{ once: true, amount: 0.15 }} role="group" aria-label="探索我的六项能力">
        <div className="skills-atmosphere" aria-hidden="true" />
        <motion.svg className="skills-lines" viewBox="0 0 100 100" aria-hidden="true">
          {scatter.map((dot, index) => <motion.circle key={index} variants={fadeIn}
            cx={dot.cx} cy={dot.cy} r="0.4" className="skills-dot" />)}
          <motion.circle variants={fadeIn} cx="50" cy="50" r="40" className="skills-ring"
            fill="none" vectorEffect="non-scaling-stroke" />
          <motion.circle variants={fadeIn} cx="50" cy="50" r="26" className="skills-ring skills-ring-inner"
            fill="none" strokeDasharray="0.3 2.4" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          {skills.map((skill, index) => <motion.line key={skill.id} variants={draw}
            x1="50" y1="50" x2={positions[index].x} y2={positions[index].y}
            className={`skills-connector${index === active ? " is-active" : ""}`}
            vectorEffect="non-scaling-stroke" />)}
        </motion.svg>
        <div className="skills-center">
          <motion.div variants={pop} className="skills-avatar">
            {running && <motion.span className="skills-avatar-pulse" aria-hidden="true"
              animate={{ scale: [1, 1.14, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />}
            <img src={portrait} alt={portraitAlt} width="1905" height="1905" loading="lazy" />
          </motion.div>
          <span className="skills-center-name">杨雯捷</span>
        </div>
        {skills.map((skill, index) => {
          const Icon = icons[skill.id];
          return (
            <div key={skill.id} className="skill-position"
              style={{ left: `${positions[index].x}%`, top: `${positions[index].y}%` }}>
              <motion.div variants={pop}>
                <button type="button" className="skill-node" aria-pressed={index === active}
                  aria-controls="skill-detail" onPointerEnter={(event) => {
                    if (event.pointerType === "mouse") setActive(index);
                  }} onFocus={() => setActive(index)} onClick={() => setActive(index)}>
                  <motion.span className="skill-icon skill-float"
                    animate={running ? { y: [0, -3, 0] } : { y: 0 }}
                    transition={running ? { duration: 4.2 + index * 0.35, repeat: Infinity, ease: "easeInOut" } : { duration: 0 }}>
                    <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
                  </motion.span>
                  <span className="skill-label">{skill.name}</span>
                </button>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
      <p className="skills-hint">选择能力，查看实践</p>
      <div className="skill-detail" id="skill-detail" aria-live="polite" aria-atomic="true">
        <div className="skill-detail-heading"><h3>{selected.name}</h3><span>{selected.tools}</span></div>
        <p>{selected.description}</p>
      </div>
    </div>
  );
}

export default Features10;
