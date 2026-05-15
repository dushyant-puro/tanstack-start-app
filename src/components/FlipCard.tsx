import { motion } from "framer-motion";
import { Share2, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import type { Flip } from "@/types/flip";
import { FlipScoreMeter } from "./FlipScoreMeter";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function yearsBetween(a: string, b: string) {
  const ms = Math.abs(new Date(b).getTime() - new Date(a).getTime());
  const years = ms / (1000 * 60 * 60 * 24 * 365.25);
  return years < 1 ? `${Math.round(years * 12)} mo` : `${years.toFixed(1)} yrs`;
}

export function FlipCard({ flip }: { flip: Flip }) {
  async function share() {
    const text = `${flip.politicianName} flipped on ${flip.category}. Flip score: ${flip.flipScore}/100. — पलटू`;
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({ title: "पलटू", text, url });
      } else {
        await navigator.clipboard.writeText(`${text} ${url}`);
        toast.success("Copied to clipboard");
      }
    } catch {
      /* user cancelled */
    }
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl border border-foreground/8 bg-card shadow-soft transition hover:shadow-lift"
    >
      {/* Magazine-style header band */}
      <div className="flex items-center justify-between border-b border-foreground/8 bg-secondary/40 px-6 py-3">
        <span className="text-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Filed under · <span className="text-foreground">{flip.category}</span>
        </span>
        <span className="text-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Δ {yearsBetween(flip.oldDate, flip.newDate)}
        </span>
      </div>

      <div className="p-6 md:p-8">
        {/* politician */}
        <div className="flex items-start gap-5">
          <img
            src={flip.politicianImage}
            alt={flip.politicianName}
            loading="lazy"
            width={72}
            height={72}
            className="h-16 w-16 rounded-full object-cover ring-2 ring-background md:h-20 md:w-20"
            style={{ boxShadow: "0 0 0 1px oklch(0.22 0.02 50 / 0.12)" }}
          />
          <div className="min-w-0 flex-1">
            <h3 className="text-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              {flip.politicianName}
            </h3>
            <p className="text-mono mt-1 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              {flip.party}
            </p>
          </div>
          <FlipScoreMeter score={flip.flipScore} />
        </div>

        {/* timeline */}
        <div className="relative mt-8">
          {/* vertical timeline line on mobile, horizontal on desktop */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-foreground/15 md:left-0 md:right-0 md:top-1/2 md:h-px md:w-auto md:bg-gradient-to-r md:from-foreground/15 md:via-primary/40 md:to-foreground/15" />

          <div className="grid gap-6 md:grid-cols-2 md:gap-10">
            {/* THEN */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="relative pl-9 md:pl-0"
            >
              <span className="absolute left-1.5 top-2 block h-3 w-3 rounded-full bg-foreground/40 ring-4 ring-background md:static md:mb-3 md:inline-block md:ring-0" />
              <div className="md:rounded-xl md:border md:border-foreground/8 md:bg-secondary/30 md:p-5">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Then
                  </span>
                  <span className="text-mono text-xs text-foreground/70">
                    {formatDate(flip.oldDate)}
                  </span>
                </div>
                <blockquote className="text-display mt-3 text-lg leading-snug text-foreground/85 md:text-xl">
                  “{flip.oldStatement}”
                </blockquote>
              </div>
            </motion.div>

            {/* NOW */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative pl-9 md:pl-0"
            >
              <span className="absolute left-1.5 top-2 block h-3 w-3 rounded-full bg-primary ring-4 ring-background md:static md:mb-3 md:inline-block md:ring-0" />
              <div
                className="md:rounded-xl md:border md:p-5"
                style={{
                  borderColor: "oklch(0.55 0.18 38 / 0.20)",
                  background:
                    "linear-gradient(135deg, oklch(0.72 0.18 55 / 0.08), oklch(0.55 0.18 38 / 0.04))",
                }}
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                    Now
                  </span>
                  <span className="text-mono text-xs text-primary/80">
                    {formatDate(flip.newDate)}
                  </span>
                </div>
                <blockquote className="text-display mt-3 text-lg font-medium leading-snug text-ink md:text-xl">
                  “{flip.newStatement}”
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>

        {/* footer */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-foreground/8 pt-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Sources
            </span>
            {flip.sources.map((s) => (
              <a
                key={s.label}
                href={s.url}
                className="inline-flex items-center gap-1 rounded-full border border-foreground/10 bg-secondary/40 px-3 py-1 text-xs font-medium text-foreground/75 transition hover:border-foreground/25 hover:text-foreground"
              >
                {s.label}
                <ExternalLink className="h-3 w-3" />
              </a>
            ))}
          </div>
          <button
            onClick={share}
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-cream transition hover:opacity-90"
          >
            <Share2 className="h-3.5 w-3.5" />
            Share
          </button>
        </div>
      </div>
    </motion.article>
  );
}
