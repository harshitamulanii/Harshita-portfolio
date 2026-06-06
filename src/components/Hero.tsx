import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import harshitaImg from "../assets/harshita.png";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export function Hero() {
  return (
    <section id="home" className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 pb-16">
      <div className="grid w-full items-center gap-12 md:grid-cols-2">

        {/* ── Text column ── */}
        <div className="order-2 md:order-1">
          <motion.p {...fade(0)} className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-text-secondary shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-aurora inline-block" />
            Available for opportunities
          </motion.p>

          <motion.h1
            {...fade(0.15)}
            className="mt-5 font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl"
          >
            {/* Gradient name — the Arctic Dawn hero treatment */}
            <span className="text-aurora">Harshita Mulani</span>
          </motion.h1>

          <motion.h2 {...fade(0.3)} className="mt-3 font-display text-xl font-semibold text-text-secondary md:text-2xl">
            Student &amp; Developer
          </motion.h2>

          <motion.p
            {...fade(0.45)}
            className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary"
          >
            Driven and detail-oriented Computer Science undergraduate at SISTec, Bhopal.
            Passionate about building practical projects, solving real-world problems, and
            growing through technology and collaboration.
          </motion.p>

          {/* CTA buttons */}
          <motion.div {...fade(0.6)} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="shimmer-btn btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              View My Work <ArrowRight size={16} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn-outline inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              Resume <Download size={16} />
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div {...fade(0.75)} className="mt-8 flex gap-3">
            {[
              { Icon: Github,   href: "https://github.com/harshitamulani",          label: "GitHub"   },
              { Icon: Linkedin, href: "https://linkedin.com/in/harshitamulani",     label: "LinkedIn" },
              { Icon: Mail,     href: "mailto:harshitamulani2005@gmail.com",        label: "Email"    },
              { Icon: Phone,    href: "tel:+917987755286",                          label: "Phone"    },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-soft bg-bg-secondary text-text-secondary shadow-sm transition hover:border-accent-teal hover:text-accent-teal hover:shadow-md"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── Photo column ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 flex justify-center md:order-2"
        >
          <div className="relative animate-float">
            {/* Gradient ring */}
            <div className="absolute -inset-[3px] aurora-ring rounded-full opacity-100 blur-[2px]" />
            {/* Outer ambient glow */}
            <div className="absolute -inset-6 rounded-full animate-pulse-glow"
              style={{ background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(99,102,241,0.10) 50%, transparent 75%)" }}
            />
            <div
              className="relative h-64 w-64 overflow-hidden rounded-full border-[3px] md:h-80 md:w-80"
              style={{
                borderColor: "var(--accent-solid)",
                boxShadow: "0 0 24px rgba(59,130,246,0.35), 0 0 48px rgba(99,102,241,0.15)"
              }}
            >
              <img
                src={harshitaImg}
                alt="Harshita Mulani"
                className="relative z-10 h-full w-full object-cover"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
              {/* Fallback initials */}
              <div className="absolute inset-0 flex items-center justify-center bg-bg-secondary font-display text-6xl font-bold text-aurora">
                HM
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
