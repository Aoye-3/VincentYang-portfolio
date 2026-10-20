import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { animate } from "motion";
import HoverPreview from "../components/hover-preview";
import Showcase7, { type WorkProject } from "../components/showcase-7";
import Features10, { type SkillNode } from "../components/features-10";

const reduced = matchMedia("(prefers-reduced-motion: reduce)");
const creativeMount = document.getElementById("creative-preview-root");
const workMount = document.getElementById("work-gallery-mount");
const universeMount = document.getElementById("work-universe-mount");

if (universeMount) {
  // 当前作品宇宙包含 5 个独立作品封面；空间会重复这些封面。
  // 新增作品：在 index.html 的此挂载点添加 data-universe-project，并同步右侧作品入口。
  const projects = [...universeMount.querySelectorAll<HTMLAnchorElement>("[data-universe-project]")].map((link) => {
    const image = link.querySelector("img")!;
    return { title: image.alt, href: link.getAttribute("href")!, url: image.getAttribute("src")!, width: Number(image.getAttribute("width")), height: Number(image.getAttribute("height")) };
  });
  const observer = new IntersectionObserver(async (entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    observer.disconnect();
    try {
      const { default: WorkUniverse } = await import("./work-universe");
      createRoot(universeMount).render(<WorkUniverse projects={projects} />);
    } catch {
      // Native cover links remain available if the 3D chunk cannot load.
    }
  }, { rootMargin: "300px" });
  observer.observe(universeMount);
}

if (workMount) {
  const projects: WorkProject[] = [...workMount.querySelectorAll<HTMLAnchorElement>(".work-card")].map((link) => ({
    id: link.dataset.workId!,
    title: link.querySelector("h3")!.textContent!,
    category: link.dataset.category!,
    categoryLabel: link.querySelector(".work-category")!.textContent!,
    kind: link.querySelector(".work-kind")!.textContent!,
    description: link.querySelector(".work-description")!.textContent!,
    image: link.querySelector("img")!.getAttribute("src")!,
    imageAlt: link.querySelector("img")!.alt,
    href: link.getAttribute("href")!,
    tags: [...link.querySelectorAll(".work-tags li")].map((tag) => tag.textContent!),
  }));
  // The native filter may already be selected while the island downloads.
  flushSync(() => createRoot(workMount).render(<Showcase7 projects={projects} />));
  workMount.dataset.enhanced = "true";
  document.querySelector<HTMLButtonElement>('[data-filter][aria-pressed="true"]')?.click();
}

if (creativeMount) {
  // Keep native links and real thumbnails available before the island loads.
  const projects = [...creativeMount.querySelectorAll<HTMLAnchorElement>("a.interest-card")].map((link) => ({
    title: link.querySelector("h3")!.textContent!,
    label: link.querySelector(".eyebrow")!.textContent!,
    description: link.querySelector("p")!.textContent!,
    image: link.querySelector<HTMLImageElement>("img")!.getAttribute("src")!,
    href: link.getAttribute("href")!,
    className: link.classList.contains("film-card") ? "film-card" : "awards-card",
  }));
  createRoot(creativeMount).render(projects.map((project) => (
    <article className="creative-preview-item" key={project.href}>
      <img className="creative-thumbnail" src={project.image} alt="" width="160" height="112" loading="lazy" />
      <div>
        <p className="eyebrow">{project.label}</p>
        <HoverPreview
          content="{0}"
          targets={[{ text: project.title, imageUrl: project.image, linkUrl: project.href, altText: project.label }]}
          targetClassName={`interest-card ${project.className}`}
          imagePosition="aside"
          maxRotation={3}
          maxOffset={6}
          imageWidth={320}
          imageHeight={220}
          enterSpeed={0.22}
          exitSpeed={0.14}
        />
        <p className="creative-description">{project.description}</p>
      </div>
      <span className="creative-arrow" aria-hidden="true">↗</span>
    </article>
  )));
  creativeMount.classList.add("is-enhanced");
}

// Filtering stays immediate; a short fade acknowledges the new result set.
let feedback: ReturnType<typeof animate> | undefined;
document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => {
  feedback?.complete();
  if (reduced.matches) return;
  const content = [...document.querySelectorAll<HTMLElement>("[data-category]:not([hidden]) .work-copy, [data-category]:not([hidden]) .work-visual")];
  feedback = animate(content, { opacity: [0.6, 1] }, { duration: 0.24 });
}));

const aboutMount = document.getElementById("about-orbit-mount");
if (aboutMount) {
  const image = aboutMount.querySelector("img")!;
  const skills: SkillNode[] = [...aboutMount.querySelectorAll<HTMLElement>("[data-skill-id]")].map((node) => ({
    id: node.dataset.skillId!,
    name: node.querySelector("strong")!.textContent!,
    tools: node.querySelector("span")!.textContent!,
    description: node.querySelector("p")!.textContent!,
  }));
  createRoot(aboutMount).render(<Features10 skills={skills} portrait={image.getAttribute("src")!} portraitAlt={image.alt} />);
}
