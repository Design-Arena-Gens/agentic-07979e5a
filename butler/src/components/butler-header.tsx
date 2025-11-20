"use client";

import { useMemo } from "react";
import { CalendarDays, Clock10, Sparkles } from "lucide-react";

const formatDate = (date: Date) =>
  date.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

const formatTime = (date: Date) =>
  date.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });

export function ButlerHeader() {
  const now = useMemo(() => new Date(), []);

  return (
    <header className="flex flex-col gap-6 rounded-3xl border border-zinc-200/70 bg-white/80 p-8 shadow-lg shadow-amber-900/5 backdrop-blur-md dark:border-zinc-700/60 dark:bg-zinc-900/60">
      <div className="flex flex-col gap-2">
        <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-900 dark:bg-amber-500/20 dark:text-amber-200">
          <Sparkles className="h-4 w-4" />
          Butler Console
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Good afternoon, Sir Percival.
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Household systems aligned. I will harmonize today&apos;s engagements
          and ensure every touchpoint is immaculate.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200/70 bg-zinc-50 px-5 py-4 dark:border-zinc-700/60 dark:bg-zinc-900/60">
          <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <CalendarDays className="h-4 w-4" />
            Date
          </div>
          <p className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {formatDate(now)}
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200/70 bg-zinc-50 px-5 py-4 dark:border-zinc-700/60 dark:bg-zinc-900/60">
          <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <Clock10 className="h-4 w-4" />
            Current Time
          </div>
          <p className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {formatTime(now)}
          </p>
        </div>
        <div className="flex flex-col justify-between rounded-2xl border border-amber-200/70 bg-gradient-to-br from-amber-100 via-orange-100 to-rose-100 px-5 py-4 dark:border-amber-500/20 dark:from-amber-500/10 dark:via-orange-500/10 dark:to-rose-500/10">
          <span className="text-sm font-medium text-amber-900 dark:text-amber-200">
            Butler Status
          </span>
          <p className="text-lg font-semibold text-amber-900 dark:text-amber-100">
            Schedules synchronized • Staff briefed • Reception prelude engaged
          </p>
        </div>
      </div>
    </header>
  );
}
