import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Shuffle } from "lucide-react";
import { getRandomFlip } from "@/data/flips";
import { FlipCard } from "@/components/FlipCard";

export const Route = createFileRoute("/random")({
  head: () => ({
    meta: [
      { title: "Daily Flip — पलटू" },
      { name: "description", content: "A random political U-turn, served fresh. Spin again for another receipt." },
    ],
  }),
  component: RandomPage,
});

function RandomPage() {
  const [flip, setFlip] = useState(() => getRandomFlip());

  function next() {
    setFlip(getRandomFlip(flip.id));
  }

  return (
    <main className="relative mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
      {/* cinematic backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.72 0.18 55 / 0.18), transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <span className="text-mono text-[10px] uppercase tracking-[0.45em] text-muted-foreground">
          The Daily Flip
        </span>
        <h1 className="text-hindi mt-3 text-6xl font-bold text-ink md:text-7xl">
          आज का पलटू
        </h1>
        <p className="text-display mt-3 text-lg italic text-muted-foreground md:text-xl">
          One U-turn, freshly excavated.
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={flip.id}
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <FlipCard flip={flip} />
        </motion.div>
      </AnimatePresence>

      <div className="mt-10 flex flex-col items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={next}
          className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-cream shadow-lift transition hover:opacity-90"
        >
          <Shuffle className="h-4 w-4" />
          Reveal another
        </motion.button>
        <span className="text-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Receipts only · पलटू
        </span>
      </div>
    </main>
  );
}
