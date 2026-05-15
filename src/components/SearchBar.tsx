import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useState, type FormEvent } from "react";

export function SearchBar({ initial = "", autoFocus = false }: { initial?: string; autoFocus?: boolean }) {
  const [q, setQ] = useState(initial);
  const navigate = useNavigate();

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    navigate({ to: "/search", search: { q: q.trim() } });
  }

  return (
    <form
      onSubmit={onSubmit}
      className="group flex w-full items-center gap-3 rounded-full border border-foreground/10 bg-card px-5 py-3 shadow-soft transition focus-within:border-foreground/25 focus-within:shadow-lift md:px-6 md:py-4"
    >
      <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
      <input
        autoFocus={autoFocus}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search a politician, party, or promise…"
        className="w-full bg-transparent text-base outline-none placeholder:text-muted-foreground md:text-lg"
      />
      <button
        type="submit"
        className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-cream transition-transform hover:scale-105 active:scale-95"
      >
        Dig
      </button>
    </form>
  );
}
