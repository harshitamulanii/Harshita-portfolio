import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const items = [
  { icon: "🎤", title: "Event Hosting",       text: "Organized and hosted college events with effective audience engagement and coordination."         },
  { icon: "🗣️", title: "Public Speaking",     text: "Strong public speaking and presentation skills through stage hosting and academic activities."    },
  { icon: "🤝", title: "Samadhan",             text: "Participated in 'Samadhan,' collaborating in team-based problem-solving activities."             },
  { icon: "🛠️", title: "Technical Workshops", text: "Active participant in technical workshops, presentations, and collaborative learning events."     },
];

export function Extracurriculars() {
  return (
    <section id="extracurriculars" className="relative z-10 mx-auto max-w-5xl px-6 py-24">
      <SectionHeader title="Extracurriculars" />

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border-soft md:left-1/2" />

        <div className="space-y-10">
          {items.map((it, i) => {
            const right = i % 2 === 1;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, x: right ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className={`relative flex items-start gap-6 md:gap-12 ${right ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 z-10 -translate-x-1/2 md:left-1/2">
                  <div
                    className="h-4 w-4 rounded-full bg-aurora animate-pulse-glow"
                    style={{ boxShadow: "0 0 0 3px rgba(59,130,246,0.15)" }}
                  />
                </div>

                <div className="ml-12 flex-1 md:ml-0 md:w-1/2 md:px-8">
                  <div className="glass-card rounded-xl p-5">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{it.icon}</span>
                      <h3 className="font-display text-lg font-bold text-text-primary">{it.title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-text-secondary">{it.text}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
