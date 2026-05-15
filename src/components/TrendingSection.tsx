import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { TrendingUp, ArrowUpRight } from "lucide-react";
import { getTrendingFlips } from "@/data/flips";
import { FlipScoreMeter } from "./FlipScoreMeter";

export function TrendingSection() {
  const flips = getTrendingFlips(6);
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <div className="mb-12 flex items-end justify-between gap-4 border-b border-foreground/10 pb-6">
        <div>
          <span className="text-mono inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            <TrendingUp className="h-3.5 w-3.5 text-primary" />
            This Week's Reading
          </span>
          <h2 className="text-display mt-3 text-4xl font-semibold leading-tight text-ink md:text-6xl">
            Trending <em className="text-primary">flips</em>
          </h2>
        </div>
        <Link
          to="/search"
          search={{ q: "" }}
          className="text-mono inline-flex shrink-0 items-center gap-1 text-xs uppercase tracking-[0.25em] text-foreground/70 hover:text-foreground"
        >
          See archive <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {flips.map((f, i) => (
          <motion.div
            key={f.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/search"
              search={{ q: f.politicianName }}
              className="group flex h-full flex-col gap-5 rounded-2xl border border-foreground/8 bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                  {f.category}
                </span>
                <FlipScoreMeter score={f.flipScore} size={56} />
              </div>

              <div className="flex items-center gap-3">
                <img
                  src={f.politicianImage}
                  alt={f.politicianName}
                  loading="lazy"
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover ring-1 ring-foreground/10"
                />
                <div className="min-w-0">
                  <p className="text-display text-xl font-semibold leading-tight text-ink">
                    {f.politicianName}
                  </p>
                  <p className="text-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {f.party}
                  </p>
                </div>
              </div>

              <div className="space-y-3 border-t border-foreground/8 pt-4">
                <p className="text-sm leading-snug text-muted-foreground line-clamp-2">
                  <span className="text-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60">Then · </span>
                  “{f.oldStatement}”
                </p>
                <p className="text-display text-base leading-snug text-ink line-clamp-2">
                  <span className="text-mono text-[10px] not-italic uppercase tracking-[0.25em] text-primary">Now · </span>
                  “{f.newStatement}”
                </p>
              </div>

              <span className="text-mono mt-auto inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.3em] text-foreground/60 group-hover:text-foreground">
                Read flip <ArrowUpRight className="h-3 w-3" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
