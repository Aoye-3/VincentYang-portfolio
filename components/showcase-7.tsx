"use client";

// Adapted from the licensed ReactBits Showcase7 editorial project index.
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export interface WorkProject {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  kind: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  tags: string[];
}

export function Showcase7({ projects }: { projects: WorkProject[] }) {
  const reduced = useReducedMotion();
  return projects.map((project) => (
    <motion.a key={project.id} href={project.href} data-category={project.category}
      className="work-card" aria-label={`查看 ${project.title} 作品详情`}
      initial={false} whileHover="hover" whileFocus="hover">
      <div className="work-visual">
        <img src={project.image} alt={project.imageAlt} width="1600" height="900" loading="lazy" />
      </div>
      <div className="work-copy">
        <div className="work-meta"><span className="work-category">{project.categoryLabel}</span><span className="work-kind">{project.kind}</span></div>
        <h3>{project.title}</h3>
        <p className="work-description">{project.description}</p>
        {project.tags.length > 0 && <ul className="work-tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}
      </div>
      <span className="work-open"><span>查看作品</span><motion.span className="work-arrow"
        variants={{ hover: { x: reduced ? 0 : 2, y: reduced ? 0 : -2 } }}
        transition={{ duration: 0.2 }}><ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" /></motion.span></span>
    </motion.a>
  ));
}

export default Showcase7;
