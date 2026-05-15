import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/5 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="text-hindi text-3xl font-bold leading-none tracking-tight text-ink">
            पलटू
          </span>
          <span className="text-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            / paltu
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {[
            { to: "/", label: "Home" },
            { to: "/search", label: "Archive" },
            { to: "/random", label: "Daily Flip" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-3.5 py-1.5 font-medium text-muted-foreground transition-colors hover:text-foreground md:px-4"
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
