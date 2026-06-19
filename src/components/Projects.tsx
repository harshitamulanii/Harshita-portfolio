import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    title: "Portfolio",
    description:
      "A modern and responsive portfolio to showcase my skills, projects, certifications, and achievements. Focused on clean UI/UX, interactivity, and performance.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/harshitamulanii/Harshita-portfolio",
    demo: "https://harshitamulanii.github.io/Harshita-portfolio/",
  },
  {
    title: "Net-Banking Pro",
    description:
      "A banking management application for handling account operations and transaction management, built with OOP principles in Java.",
    tech: ["Java", "JSwing", "AWS", "MySQL"],
    github: "https://github.com/harshitamulanii",
  },
  {
    title: "Smart Study-Buddy Chatbot",
    description:
      "An AI-based study assistant chatbot to support students with learning guidance. Focused on accessibility, usability, and smooth UX.",
    tech: ["HTML", "CSS", "AI Tools"],
    github: "https://github.com/harshitamulanii",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <SectionHeader title="Projects" subtitle="Things I've built" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card group relative overflow-hidden rounded-2xl p-6 hover:-translate-y-2"
          >
            {/* Gradient top-bar */}
            <div className="absolute inset-x-0 top-0 h-[3px] bg-aurora" />

            <h3 className="font-display text-xl font-bold text-text-primary">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">{p.description}</p>

            {/* Tech badges — soft blue tint */}
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    background: "rgba(59,130,246,0.08)",
                    color: "var(--accent-solid)",
                    border: "1px solid rgba(59,130,246,0.20)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action icons */}
            <div className="mt-6 flex gap-2">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub repository"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-soft bg-bg-primary text-text-secondary transition hover:border-accent-teal hover:text-accent-teal hover:shadow-sm"
              >
                <Github size={15} />
              </a>
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Live demo"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-soft bg-bg-primary text-text-secondary transition hover:border-accent-pink hover:text-accent-pink hover:shadow-sm"
                >
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
