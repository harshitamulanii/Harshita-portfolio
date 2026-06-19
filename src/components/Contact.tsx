import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const items = [
  { Icon: Mail,     label: "harshitamulani2005@gmail.com",     href: "mailto:harshitamulani2005@gmail.com" },
  { Icon: Phone,    label: "+91-7987755286",                   href: "tel:+917987755286"                   },
  { Icon: Linkedin, label: "linkedin.com/in/harshita-mulani-984077333",   href: "https://linkedin.com/in/harshita-mulani-984077333" },
  { Icon: Github,   label: "github.com/harshitamulanii",        href: "https://github.com/harshitamulanii"   },
];

export function Contact() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-3xl px-6 py-24">
      <SectionHeader title="Get In Touch" subtitle="I'd love to connect — reach out anytime!" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card mx-auto rounded-2xl p-8"
      >
        <ul className="space-y-3">
          {items.map(({ Icon, label, href }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition hover:border-border-soft hover:bg-bg-primary"
              >
                <span
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ background: "var(--accent-gradient)" }}
                >
                  <Icon size={17} />
                </span>
                <span className="text-sm font-medium text-text-secondary break-all transition group-hover:text-text-primary">
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Primary CTA */}
        <a
          href="mailto:harshitamulani2005@gmail.com"
          className="shimmer-btn btn-primary mt-8 flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold"
        >
          Send a Message
        </a>
      </motion.div>
    </section>
  );
}
