import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

type Tab = "Languages" | "Tools & Platforms" | "Soft Skills";

const ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const languages = [
  { name: "C",          icon: `${ICON}/c/c-original.svg`                     },
  { name: "C++",        icon: `${ICON}/cplusplus/cplusplus-original.svg`      },
  { name: "Java",       icon: `${ICON}/java/java-original.svg`                },
  { name: "JavaScript", icon: `${ICON}/javascript/javascript-original.svg`    },
  { name: "HTML5",      icon: `${ICON}/html5/html5-original.svg`              },
  { name: "CSS3",       icon: `${ICON}/css3/css3-original.svg`                },
  { name: "MySQL",      icon: `${ICON}/mysql/mysql-original.svg`              },
];

const tools = [
  { name: "PowerPoint", icon: "📊" },
  { name: "Word",       icon: "📝" },
  { name: "VS Code",    icon: `${ICON}/vscode/vscode-original.svg`            },
  { name: "Git",        icon: `${ICON}/git/git-original.svg`                  },
  { name: "GitHub",     icon: `${ICON}/github/github-original.svg`            },
];

const soft = [
  { name: "Effective Communication", icon: "💬" },
  { name: "Problem Solving",         icon: "🧩" },
  { name: "Team Collaboration",      icon: "🤝" },
  { name: "Adaptability",            icon: "🌱" },
  { name: "Attention to Detail",     icon: "🔍" },
];

function Badge({ icon, name }: { icon: string; name: string }) {
  const isImage = icon.startsWith("http");
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-bg-secondary px-4 py-2 shadow-sm transition hover:scale-105 hover:shadow-md"
      style={{ borderColor: "var(--border-color)" }}
    >
      {isImage ? (
        <img src={icon} alt="" className="h-5 w-5" />
      ) : (
        <span className="text-base">{icon}</span>
      )}
      <span className="text-sm font-medium text-text-primary">{name}</span>
    </div>
  );
}

export function Skills() {
  const [tab, setTab] = useState<Tab>("Languages");
  const tabs: Tab[]   = ["Languages", "Tools & Platforms", "Soft Skills"];

  return (
    <section id="skills" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <SectionHeader title="Technical Skills" subtitle="My expertise across various technologies and tools" />

      {/* Tab buttons */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              tab === t
                ? "bg-aurora text-white shadow-md"
                : "border border-border-soft bg-bg-secondary text-text-secondary hover:text-text-primary hover:shadow-sm"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          {tab === "Languages" && (
            <div className="flex flex-wrap justify-center gap-3">
              {languages.map((s) => <Badge key={s.name} {...s} />)}
            </div>
          )}
          {tab === "Tools & Platforms" && (
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((s) => <Badge key={s.name} {...s} />)}
            </div>
          )}
          {tab === "Soft Skills" && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {soft.map((s) => (
                <div
                  key={s.name}
                  className="glass-card flex items-center gap-4 rounded-xl p-5 hover:-translate-y-1"
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-2xl"
                    style={{ background: "var(--gradient-subtle)" }}
                  >
                    {s.icon}
                  </div>
                  <p className="font-medium text-text-primary">{s.name}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
