"use client";

import { announcements, recommendationHighlights } from "@/data/butler";
import { BellRing, Lightbulb, Megaphone, ShieldCheck } from "lucide-react";

const emphasisVariant = {
  info: "bg-sky-500/10 text-sky-600 dark:bg-sky-500/20 dark:text-sky-200",
  warning:
    "bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-200",
  success:
    "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-200",
};

export function AnnouncementFeed() {
  return (
    <section className="grid gap-6 rounded-3xl border border-zinc-200/70 bg-white/90 p-8 shadow-lg shadow-amber-900/5 backdrop-blur-md dark:border-zinc-700/60 dark:bg-zinc-900/70 lg:grid-cols-[2fr,1fr]">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Megaphone className="h-5 w-5 text-amber-500" />
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Butler Dispatches
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {announcements.map((note) => (
            <article
              key={note.id}
              className="flex flex-col gap-3 rounded-2xl border border-zinc-200/70 bg-white p-5 shadow-sm transition hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/15 dark:border-zinc-700/60 dark:bg-zinc-900/80"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold">
                  <ShieldCheck className="h-4 w-4 text-amber-500" />
                  briefing
                </span>
                {note.emphasis && (
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${emphasisVariant[note.emphasis]}`}
                  >
                    <BellRing className="h-4 w-4" />
                    {note.emphasis}
                  </span>
                )}
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {note.timestamp}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {note.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                {note.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <aside className="flex flex-col gap-4 rounded-2xl border border-zinc-200/70 bg-zinc-50 p-6 dark:border-zinc-700/60 dark:bg-zinc-950/60">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-amber-500" />
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Strategic Recommendations
          </h3>
        </div>
        <ul className="flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-300">
          {recommendationHighlights.map((item) => (
            <li
              key={item.id}
              className="rounded-2xl border border-zinc-200/70 bg-white p-4 shadow-sm transition hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/15 dark:border-zinc-700/60 dark:bg-zinc-900/80"
            >
              <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                {item.title}
              </p>
              <p className="mt-1 text-sm">{item.body}</p>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
