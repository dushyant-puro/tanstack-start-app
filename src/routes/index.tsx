import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { TrendingSection } from "@/components/TrendingSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "पलटू — They said it. Then unsaid it. We remember." },
      { name: "description", content: "An elegant archive of political flip-flops. Compare then vs now, and discover today's biggest U-turn." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <TrendingSection />
      <footer className="mx-auto max-w-7xl border-t border-foreground/10 px-5 py-10 md:px-10">
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <span className="text-hindi text-2xl font-bold text-ink">पलटू</span>
          <p className="text-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Receipts only · An editorial archive
          </p>
          <p className="text-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            © 2026
          </p>
        </div>
      </footer>
    </main>
  );
}
