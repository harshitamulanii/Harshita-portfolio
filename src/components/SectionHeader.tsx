import { motion } from "framer-motion";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

export function SectionHeader({
  title,
  subtitle,
  center = true,
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <motion.div {...reveal} className={center ? "mb-12 text-center" : "mb-12"}>
      <h2 className="font-display text-3xl font-bold text-text-primary md:text-4xl">{title}</h2>
      {/* Arctic Dawn accent bar — gradient underline */}
      <div className={`mt-3 h-[3px] w-16 rounded-full bg-aurora ${center ? "mx-auto" : ""}`} />
      {subtitle && <p className="mt-4 text-text-secondary">{subtitle}</p>}
    </motion.div>
  );
}

export const revealProps = reveal;
