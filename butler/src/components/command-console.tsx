"use client";

import { useState } from "react";
import { ArrowRight, Mic, Sparkles, Wand2 } from "lucide-react";
import { quickActions } from "@/data/butler";

export function CommandConsole() {
  const [command, setCommand] = useState("");
  const [listening, setListening] = useState(false);

  return (
    <section className="flex flex-col gap-6 rounded-3xl border border-zinc-200/70 bg-white/90 p-8 shadow-xl shadow-amber-900/5 backdrop-blur-md dark:border-zinc-700/60 dark:bg-zinc-900/70">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Immediate Service Directive
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Issue a command and I&apos;ll orchestrate the sequence, coordinating
            staff, environment, and concierge services.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setListening((state) => !state)}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
            listening
              ? "bg-amber-500 text-white shadow-lg shadow-amber-500/40"
              : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
          }`}
        >
          <Mic className="h-4 w-4" />
          {listening ? "Listening…" : "Voice Channel"}
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 rounded-2xl border border-zinc-200/70 bg-zinc-50 p-4 dark:border-zinc-700/60 dark:bg-zinc-950/60">
          <label htmlFor="butler-command" className="text-sm text-zinc-500">
            Command center
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <input
                id="butler-command"
                value={command}
                onChange={(event) => setCommand(event.target.value)}
                placeholder="Compose special welcome sequence for Mortimer party at 18:00"
                className="w-full rounded-2xl border border-transparent bg-white/90 px-5 py-3 text-base text-zinc-900 shadow-inner shadow-black/5 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/60 dark:bg-zinc-900/80 dark:text-zinc-50 dark:shadow-none"
              />
              <Wand2 className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500" />
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-amber-500/40 transition hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
            >
              <ArrowRight className="h-4 w-4" />
              Engage
            </button>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action, index) => (
            <button
              key={action}
              type="button"
              onClick={() => setCommand(action)}
              className="flex h-full flex-col items-start gap-3 rounded-2xl border border-zinc-200/70 bg-white px-4 py-4 text-left shadow-sm transition hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/15 dark:border-zinc-700/60 dark:bg-zinc-900/80"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-900 dark:bg-amber-500/20 dark:text-amber-200">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Butler Suggestion {index + 1}
                </p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-300">
                  {action}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
