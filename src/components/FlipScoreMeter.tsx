import { motion } from "framer-motion";

export function FlipScoreMeter({ score, size = 84 }: { score: number; size?: number }) {
  const r = size / 2 - 7;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, score)) / 100;
  const color =
    score >= 85 ? "var(--rust)" : score >= 70 ? "var(--saffron)" : "oklch(0.55 0.10 50)";

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="oklch(0.22 0.02 50 / 0.10)" strokeWidth={5} />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={5}
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c * (1 - pct) }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-display text-2xl font-semibold leading-none" style={{ color }}>
          {score}
        </span>
        <span className="mt-1 text-mono text-[8px] uppercase tracking-[0.2em] text-muted-foreground">
          flip
        </span>
      </div>
    </div>
  );
}
