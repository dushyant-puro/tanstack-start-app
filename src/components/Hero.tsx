import { motion } from "framer-motion";
import { FloatingQuotes } from "./FloatingQuotes";
import { SearchBar } from "./SearchBar";
import { RandomFlipButton } from "./RandomFlipButton";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <FloatingQuotes />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 pb-24 pt-16 text-center md:pb-32 md:pt-24">
        {/* masthead rule */}
        <div className="mb-8 flex w-full items-center gap-4">
          <div className="rule flex-1" />
          <span className="text-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Vol. 01 · The Political Flip Archive
          </span>
          <div className="rule flex-1" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-hindi text-[7rem] font-bold leading-[0.85] tracking-tight text-ink md:text-[12rem] lg:text-[14rem]"
        >
          पलटू
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-3 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-foreground/30" />
          <span className="text-mono text-xs uppercase tracking-[0.5em] text-muted-foreground">
            Paltu · पलट जाना
          </span>
          <span className="h-px w-8 bg-foreground/30" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="text-display mt-8 max-w-2xl text-2xl leading-snug text-foreground/85 md:text-3xl"
        >
          They said it. Then unsaid it.{" "}
          <em className="text-primary">We remember.</em>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10 w-full max-w-2xl"
        >
          <SearchBar />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="mt-6 flex flex-col items-center gap-3"
        >
          <span className="text-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            or take a chance
          </span>
          <RandomFlipButton />
        </motion.div>
      </div>
    </section>
  );
}
