import { Github, Linkedin, Mail } from "lucide-react";

export function SocialSidebar() {
  const items = [
    { icon: Github, href: "https://github.com/harshitamulanii", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/harshitamulani", label: "LinkedIn" },
    { icon: Mail, href: "mailto:harshitamulani2005@gmail.com", label: "Email" },
  ];
  return (
    <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
      {items.map(({ icon: Icon, href, label }) => (
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
      <div
        className="mx-auto mt-1 h-16 w-px"
        style={{ background: "linear-gradient(to bottom, var(--border-color), transparent)" }}
      />
    </div>
  );
}
