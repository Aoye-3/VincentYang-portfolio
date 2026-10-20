import { useEffect, useMemo, useRef, useState } from "react";
import PrismCarousel from "../components/prism-carousel";
import type { PrismCarouselHandle } from "../components/prism-carousel";

export interface WorkProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
}

const keywords: Record<string, string[]> = {
  inspiration: ["UX设计", "产品体验"],
  pmagent: ["产品体验", "设计与开发"],
  dubbingroom: ["AI配音", "创作工具"],
  jiangtian: ["AIGC影像", "分镜设计"],
  vivo: ["创意广告", "AIGC影像"],
};

export default function SelectedWork({ projects, onUnavailable }: {
  projects: WorkProject[]; onUnavailable: () => void;
}) {
  const [filter, setFilter] = useState(() => document.querySelector<HTMLElement>('[data-filter][aria-pressed="true"]')?.dataset.filter ?? "all");
  const [active, setActive] = useState(0);
  const carousel = useRef<PrismCarouselHandle>(null);
  const filtered = useMemo(() => projects.filter((project) => filter === "all" || project.category === filter), [filter, projects]);
  const items = useMemo(() => filtered.map((project) => ({
    src: project.image, alt: project.imageAlt, title: project.title, href: project.href,
  })), [filtered]);
  const current = filtered[active] ?? filtered[0];

  useEffect(() => {
    const buttons = [...document.querySelectorAll<HTMLButtonElement>("[data-filter]")];
    // main.js continues to own native filtering and the 5 / 2 / 3 result counts.
    const select = (event: Event) => {
      setActive(0);
      setFilter((event.currentTarget as HTMLButtonElement).dataset.filter!);
    };
    buttons.forEach((button) => button.addEventListener("click", select));
    return () => buttons.forEach((button) => button.removeEventListener("click", select));
  }, []);

  return (
    <div className="work-carousel" data-filtered={filter} data-active-work={current.id}
      onKeyDown={(event) => {
        if (event.defaultPrevented) return;
        if (event.key === "ArrowLeft") { event.preventDefault(); carousel.current?.previous(); }
        if (event.key === "ArrowRight") { event.preventDefault(); carousel.current?.next(); }
      }}>
      <div className="work-carousel-stage">
        <PrismCarousel key={filter} ref={carousel} items={items} aspect={16 / 9} size={0.94}
          neighborScale={0.7} gap={20} radius={18} saturation={0.12} dim={0.45}
          sweep={0.5} sweepDuration={0.8} dispersion={0.3} autoplay={false} wheel={false}
          captions={false} controls={false} dpr={1.5} className="work-prism"
          ariaLabel="精选作品轮播；左右拖动或使用左右方向键切换，回车打开当前作品"
          onIndexChange={setActive} onUnavailable={onUnavailable} />
      </div>
      <div className="work-carousel-caption" aria-live="polite" aria-atomic="true">
        <a className="work-project-heading" href={current.href}>
          <h3>{current.title}</h3>
          <span className="work-keywords">{(keywords[current.id] ?? [current.category === "ux" ? "UX设计" : "AIGC媒体"]).map((keyword) => <span key={keyword}>{keyword}</span>)}</span>
          <span className="work-project-arrow" aria-hidden="true">↗</span>
        </a>
        <a className="work-project-summary" href={current.href}>{current.description}</a>
      </div>
      <div className="work-carousel-controls" role="group" aria-label="切换作品">
        <button type="button" aria-label="上一个作品" onClick={() => carousel.current?.previous()}>←</button>
        <span className="work-carousel-counter">{String(active + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}</span>
        <button type="button" aria-label="下一个作品" onClick={() => carousel.current?.next()}>→</button>
      </div>
    </div>
  );
}
