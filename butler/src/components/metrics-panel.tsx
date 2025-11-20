"use client";

import { householdMetrics } from "@/data/butler";
import { ArrowDown, ArrowRight, ArrowUp, Minus } from "lucide-react";

const trendIcon = {
  up: ArrowUp,
  down: ArrowDown,
  steady: Minus,
};

const trendColor = {
  up: "text-emerald-500",
  down: "text-rose-500",
  steady: "text-zinc-400",
};

export function MetricsPanel() {
  return (
    <section className="flex flex-col gap-6 rounded-3xl border border-zinc-200/70 bg-white/90 p-8 shadow-lg shadow-amber-900/5 backdrop-blur-md dark:border-zinc-700/60 dark:bg-zinc-900/70">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Household Harmony Index
        </h2>
        <button
          type="button"
          className="inline-flex items-center gap-2 text-sm font-medium text-amber-500 hover:text-amber-600"
        >
          Export report
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {householdMetrics.map((metric) => {
          const Icon = trendIcon[metric.trend];
          return (
            <article
              key={metric.id}
              className="flex flex-col gap-4 rounded-2xl border border-zinc-200/70 bg-white p-5 shadow-sm transition hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/15 dark:border-zinc-700/60 dark:bg-zinc-900/80"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                  {metric.label}
                </p>
                <span className={`flex items-center gap-2 ${trendColor[metric.trend]}`}>
                  <Icon className="h-4 w-4" />
                  {metric.trend === "steady" ? "Stable" : metric.trend === "up" ? "Improving" : "Watch"}
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
                  {metric.value}
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {metric.unit}
                </span>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Proactive alignments scheduled to maintain optimal balance across
                service and ambience directives.
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
