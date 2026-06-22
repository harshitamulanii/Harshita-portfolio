import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: "dark" | "light";
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle theme"
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-soft bg-bg-card backdrop-blur transition hover:border-accent-teal"
    >
      <motion.span
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex"
      >
        {theme === "dark" ? (
          <Sun size={18} className="text-accent-teal" />
        ) : (
          <Moon size={18} className="text-accent-pink" />
        )}
      </motion.span>
    </button>
  );
}
