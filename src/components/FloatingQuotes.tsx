import { motion } from "framer-motion";

const QUOTES = [
  "मैं चौकीदार हूँ",
  "अच्छे दिन आने वाले हैं",
  "ना खाऊँगा, ना खाने दूँगा",
  "मित्रों…",
  "सबका साथ, सबका विकास",
  "जुमला था",
  "On record, off record",
  "Day one, we repeal",
];

export function FloatingQuotes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {QUOTES.map((q, i) => {
        const top = (i * 13 + 6) % 88;
        const left = (i * 27 + 4) % 78;
        const duration = 24 + (i % 4) * 6;
        const delay = (i % 3) * 2;
        const isHindi = /[\u0900-\u097F]/.test(q);
        return (
          <motion.span
            key={q}
            className={`${isHindi ? "text-hindi" : "text-display italic"} absolute whitespace-nowrap text-2xl md:text-4xl`}
            style={{
              top: `${top}%`,
              left: `${left}%`,
              color: "var(--ink)",
              opacity: 0.05,
            }}
            animate={{ x: [0, 24, -16, 0], y: [0, -18, 12, 0] }}
            transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
          >
            “{q}”
          </motion.span>
        );
      })}
    </div>
  );
}
