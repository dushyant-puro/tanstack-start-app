import { createFileRoute } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { motion } from "framer-motion";
import { searchFlips } from "@/data/flips";
import { FlipCard } from "@/components/FlipCard";
import { SearchBar } from "@/components/SearchBar";
import { searchWithAI } from "@/lib/ai-search";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const searchSchema = z.object({
  q: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/search-old")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "The Archive — पलटू" },
      { name: "description", content: "Search the political flip archive. Compare then vs now statements." },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q } = Route.useSearch();
  const [results, setResults] = useState(searchFlips(q));
  const [reasoning, setReasoning] = useState("");
  const [insights, setInsights] = useState("");
  const [loading, setLoading] = useState(false);
  const [usingAI, setUsingAI] = useState(false);

  useEffect(() => {
    if (!q.trim()) {
      setResults(searchFlips(q));
      setReasoning("");
      setInsights("");
      setUsingAI(false);
      return;
    }

    setLoading(true);
    searchWithAI(q)
      .then((response) => {
        setResults(response.results);
        setReasoning(response.reasoning);
        setInsights(response.insights);
        setUsingAI(response.usingAI);
      })
      .catch((error) => {
        console.error("Search error:", error);
        setResults(searchFlips(q));
        setUsingAI(false);
      })
      .finally(() => setLoading(false));
  }, [q]);

  return (
    <main className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <div className="mb-6 text-center">
          <span className="text-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            The Archive
          </span>
          <h1 className="text-display mt-2 text-4xl font-semibold text-ink md:text-5xl">
            Search the <em className="text-primary">flip</em> record
          </h1>
        </div>
        <SearchBar initial={q} autoFocus />
        <p className="text-mono mt-5 text-center text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          {q ? `Results for “${q}”` : "All flips"} · {results.length} found
        </p>
      </motion.div>

      {results.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-foreground/8 bg-card p-14 text-center shadow-soft">
          <p className="text-hindi text-4xl font-bold text-ink">कुछ नहीं मिला</p>
          <p className="mt-3 text-sm text-muted-foreground">
            No flips matched “{q}”. Try a politician's name, party, or topic.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {results.map((flip) => (
            <FlipCard key={flip.id} flip={flip} />
          ))}
        </div>
      )}
    </main>
  );
}
