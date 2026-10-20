import { Component, useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { useInView } from "motion/react";
import InfiniteGallery from "../components/infinite-gallery";
import type { GalleryImage } from "../components/infinite-gallery";

export interface UniverseProject extends GalleryImage { title: string; href: string }

class GalleryBoundary extends Component<{ children: ReactNode; onFailure: () => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { this.props.onFailure(); }
  render() { return this.state.failed ? null : this.props.children; }
}

export default function WorkUniverse({ projects }: { projects: UniverseProject[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.15 });
  const [active, setActive] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [reduce, setReduce] = useState(() => matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [visible, setVisible] = useState(!document.hidden);
  const onReady = useCallback(() => setReady(true), []);
  const onFailure = useCallback(() => { setFailed(true); setActive(false); }, []);

  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const motion = (event: MediaQueryListEvent) => setReduce(event.matches);
    const visibility = () => setVisible(!document.hidden);
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setActive(false); };
    preference.addEventListener("change", motion);
    document.addEventListener("visibilitychange", visibility);
    window.addEventListener("keydown", escape);
    return () => {
      preference.removeEventListener("change", motion);
      document.removeEventListener("visibilitychange", visibility);
      window.removeEventListener("keydown", escape);
    };
  }, []);
  useEffect(() => { if (!inView || !visible) setActive(false); }, [inView, visible]);

  const paused = failed || !inView || !visible || (!active && (userPaused || reduce));
  const status = failed || !ready || (reduce && !active) ? "作品预览" : active ? "探索中" : paused ? "漫游已暂停" : "自动漫游";

  return (
    <div ref={ref} className={`universe-player${ready && !failed ? " is-ready" : ""}`}
      data-mode={active ? "exploring" : "preview"} data-playback={paused ? "paused" : "playing"}>
      <div className="universe-frame" id="universe-viewport" aria-label={`${projects.length} 件作品封面组成的三维画廊`}>
        <div className="universe-poster" aria-hidden="true">
          {projects.map((project) => <img key={project.href} src={project.url} alt="" width={project.width} height={project.height} />)}
        </div>
        <div className="universe-canvas" aria-hidden="true">
          <GalleryBoundary onFailure={onFailure}>
            <InfiniteGallery images={projects} density={4} imageSize={18} cellSize={90} viewRange={1}
              fogNear={90} fogFar={220} imageRadius={0.09} autoZoom={!active && !userPaused && !reduce}
              autoZoomSpeed={0.14} driftAmount={5} dragSpeed={1} interactive={active}
              paused={paused} allowImageFocusOnClick={active} onReady={onReady}
              backgroundColor="#080c12" fogColor="#080c12" />
          </GalleryBoundary>
        </div>
        <span className="universe-frame-label">{String(projects.length).padStart(2, "0")} 件作品 · 3D GALLERY</span>
        {active && <span className="universe-gesture"><span className="universe-pointer-hint">拖动移动 · 滚轮穿行 · Esc 退出</span><span className="universe-touch-hint">单指拖动 · 双指缩放 · 下方退出</span></span>}
      </div>
      <div className="universe-controls">
        {failed ? <a className="button button-primary" href="#work-title">查看全部作品 <span aria-hidden="true">↗</span></a>
          : <button className="button button-primary" type="button" disabled={!ready}
              aria-controls="universe-viewport" aria-pressed={active} onClick={() => setActive(!active)}>
              {active ? "退出探索" : "开始探索"}<span aria-hidden="true">{active ? "×" : "↗"}</span>
            </button>}
        <span className="universe-status" role="status">{status}</span>
        {!active && !reduce && ready && !failed && <button type="button" className="universe-pause"
          aria-pressed={userPaused} onClick={() => setUserPaused(!userPaused)}>{userPaused ? "继续漫游" : "暂停漫游"}</button>}
      </div>
    </div>
  );
}
