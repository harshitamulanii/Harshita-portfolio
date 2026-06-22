import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const items = [
    { Icon: Github, href: "https://github.com/harshitamulanii" },
    { Icon: Linkedin, href: "https://linkedin.com/in/harshita-mulani-984077333" },
    { Icon: Mail, href: "mailto:harshitamulani2005@gmail.com" },
  ];
  return (
    <footer className="relative z-10 border-t border-border-soft py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center">
        <p className="text-sm text-text-secondary">
          Designed &amp; Built by{" "}
          <span className="font-semibold text-text-primary">Harshita Mulani</span>
        </p>
        <div className="flex gap-3">
          {items.map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-soft bg-bg-secondary text-text-secondary transition hover:border-accent-teal hover:text-accent-teal hover:shadow-sm"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
        <p className="text-xs text-text-secondary">© 2025 Harshita Mulani</p>
      </div>
    </footer>
  );
}
