import { motion } from "framer-motion";
import { SectionHeader, revealProps } from "./SectionHeader";

const info = [
  { icon: "🎓", label: "Degree",    value: "B.Tech – CSE, SISTec Bhopal (2024–2028)"      },
  { icon: "🏫", label: "School",    value: "St. Aloysius Sr. Sec. School (PCM, 2024)"      },
  { icon: "📧", label: "Email",     value: "harshitamulani2005@gmail.com"                  },
  { icon: "📞", label: "Phone",     value: "+91-7987755286"                                },
  { icon: "🌐", label: "GitHub",    value: "https://github.com/harshitamulani2005-stack"                    },
  { icon: "💼", label: "LinkedIn",  value: "https://linkedin.com/in/harshita-mulani-984077333"               },
  { icon: "🗣️", label: "Languages", value: "English, Hindi"                               },
];

export function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2 md:items-start">

        <div>
          <SectionHeader title="About Me" center={false} />
          <motion.p {...revealProps} className="text-base leading-relaxed text-text-secondary">
            I'm a first-year B.Tech Computer Science Engineering student at Sagar Institute of
            Science &amp; Technology, Bhopal (2024–2028). I love building things — from banking
            management apps to AI-powered study assistants. I'm always eager to learn new
            technologies, collaborate on meaningful projects, and push my skills forward.
          </motion.p>
        </div>

        <motion.div {...revealProps} className="glass-card rounded-2xl p-6">
          <ul className="space-y-4">
            {info.map((i) => (
              <li
                key={i.label}
                className="flex items-start gap-3 border-b border-border-soft pb-3 last:border-0 last:pb-0"
              >
                <span className="mt-0.5 text-xl">{i.icon}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-widest text-text-secondary">{i.label}</p>
                  <p className="truncate font-medium text-text-primary">{i.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
