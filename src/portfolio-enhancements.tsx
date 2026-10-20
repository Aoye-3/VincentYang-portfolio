import { createRoot } from "react-dom/client";
import { animate } from "motion";
import HoverPreview from "../components/hover-preview";

const reduced = matchMedia("(prefers-reduced-motion: reduce)");
const creativeMount = document.getElementById("creative-preview-root");

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

// Animate content feedback, leaving the existing sticky-card transforms alone.
let feedback: ReturnType<typeof animate> | undefined;
document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => {
  feedback?.stop();
  if (reduced.matches) return;
  const content = [...document.querySelectorAll<HTMLElement>("[data-category]:not([hidden]) .work-copy, [data-category]:not([hidden]) .work-visual")];
  feedback = animate(content, { opacity: [0.6, 1] }, { duration: 0.24 });
}));

const portrait = document.querySelector<HTMLElement>(".about-portrait");
if (portrait && !reduced.matches) {
  const observer = new IntersectionObserver(async (entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    observer.disconnect();
    try {
      const { default: PixelReveal } = await import("../components/pixel-reveal");
      if (reduced.matches) return;
      const image = portrait.querySelector("img")!;
      const layer = document.createElement("div");
      layer.className = "portrait-pixel-layer";
      layer.setAttribute("aria-hidden", "true");
      portrait.append(layer);
      portrait.dataset.pixelReveal = "playing";
      const root = createRoot(layer);
      let finished = false;
      const finish = (complete: boolean) => {
        if (finished) return;
        finished = true;
        root.unmount();
        layer.remove();
        portrait.dataset.pixelReveal = complete ? "complete" : "fallback";
        reduced.removeEventListener("change", stop);
        clearTimeout(deadline);
      };
      // The native portrait underneath also covers WebGL/texture failure.
      const stop = () => finish(false);
      const deadline = setTimeout(stop, 2400);
      reduced.addEventListener("change", stop);
      root.render(<PixelReveal imageSrc={image.src} duration={0.9} gridSize={8} edgeHeight={0.12}
        transitionColor="#0b0e16" triggerOnce onRevealComplete={() => finish(true)} />);
    } catch {
      portrait.dataset.pixelReveal = "fallback";
    }
  }, { threshold: 0.15 });
  observer.observe(portrait);
}
