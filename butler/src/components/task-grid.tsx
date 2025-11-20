"use client";

import { useMemo, useState } from "react";
import { clsx } from "clsx";
import { ClipboardList, Filter, Loader2 } from "lucide-react";
import { ButlerTask, tasks } from "@/data/butler";

type StatusFilter = ButlerTask["status"] | "All";

const statusStyles: Record<ButlerTask["status"], string> = {
  Ready: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-200",
  "In Progress":
    "bg-sky-500/10 text-sky-600 dark:bg-sky-500/20 dark:text-sky-200",
  Scheduled:
    "bg-violet-500/10 text-violet-600 dark:bg-violet-500/20 dark:text-violet-200",
};

const priorityStyles: Record<ButlerTask["priority"], string> = {
  High: "text-rose-500",
  Medium: "text-amber-500",
  Low: "text-emerald-500",
};

export function TaskGrid() {
  const [filter, setFilter] = useState<StatusFilter>("All");

  const filteredTasks = useMemo(() => {
    if (filter === "All") return tasks;
    return tasks.filter((task) => task.status === filter);
  }, [filter]);

  const counts = useMemo(() => {
    return tasks.reduce(
      (acc, task) => {
        acc[task.status] = (acc[task.status] ?? 0) + 1;
        return acc;
      },
      {} as Record<ButlerTask["status"], number>
    );
  }, []);

  return (
    <section className="flex flex-col gap-6 rounded-3xl border border-zinc-200/70 bg-white/90 p-8 shadow-lg shadow-amber-900/5 backdrop-blur-md dark:border-zinc-700/60 dark:bg-zinc-900/70">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            <ClipboardList className="h-5 w-5 text-amber-500" />
            Butler Task Ledger
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            A curated overview of orchestration checkpoints aligned for today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Filter className="h-4 w-4 text-zinc-400" />
          <div className="flex items-center gap-2 rounded-full bg-zinc-100 p-1 text-sm dark:bg-zinc-800">
            {(["All", "Ready", "In Progress", "Scheduled"] as StatusFilter[]).map(
              (status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setFilter(status)}
                  className={clsx(
                    "rounded-full px-3 py-1 font-medium transition",
                    filter === status
                      ? "bg-white text-zinc-900 shadow-md shadow-black/10 dark:bg-zinc-900 dark:text-zinc-50 dark:shadow-none"
                      : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                  )}
                >
                  {status}
                  {status !== "All" && (
                    <span className="ml-1.5 text-xs text-amber-500">
                      {counts[status as ButlerTask["status"]] ?? 0}
                    </span>
                  )}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredTasks.map((task) => (
          <article
            key={task.id}
            className="flex flex-col gap-4 rounded-2xl border border-zinc-200/70 bg-white p-5 shadow-sm transition hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/15 dark:border-zinc-700/60 dark:bg-zinc-900/80"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-amber-500">
                  {task.category}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {task.title}
                </h3>
              </div>
              <span
                className={clsx(
                  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
                  statusStyles[task.status]
                )}
              >
                {task.status}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">
                {task.due}
              </span>
              <span className={priorityStyles[task.priority]}>
                Priority: {task.priority}
              </span>
              {task.notes && (
                <span className="flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-300">
                  <Loader2 className="h-3 w-3 animate-spin" />
                  {task.notes}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
