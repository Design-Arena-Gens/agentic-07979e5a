"use client";

import { useState } from "react";
import { appointments } from "@/data/butler";
import {
  MapPin,
  Timer,
  CheckCircle2,
  ChevronRight,
  CalendarClock,
} from "lucide-react";

export function Agenda() {
  const [focusId, setFocusId] = useState(appointments[0]?.id);

  return (
    <section className="flex flex-col gap-6 rounded-3xl border border-zinc-200/70 bg-white/90 p-8 shadow-lg shadow-amber-900/5 backdrop-blur-md dark:border-zinc-700/60 dark:bg-zinc-900/70">
      <div className="flex items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          <CalendarClock className="h-5 w-5 text-amber-500" />
          Today&apos;s Schedule
        </h2>
        <button
          type="button"
          className="inline-flex items-center gap-2 text-sm font-medium text-amber-500 hover:text-amber-600"
        >
          View full log
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid gap-5 lg:grid-cols-[280px,1fr]">
        <div className="flex flex-col gap-3">
          {appointments.map((appointment) => {
            const active = appointment.id === focusId;
            return (
              <button
                key={appointment.id}
                type="button"
                onClick={() => setFocusId(appointment.id)}
                className={`flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                  active
                    ? "border-amber-400 bg-amber-50 shadow-sm dark:border-amber-500/40 dark:bg-amber-500/10"
                    : "border-zinc-200/70 bg-white hover:border-amber-300 hover:bg-amber-50/50 dark:border-zinc-700/60 dark:bg-zinc-900/70"
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wide text-amber-500">
                    {appointment.type}
                  </span>
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {appointment.label}
                  </span>
                </div>
                <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  {appointment.start} – {appointment.end}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-3 rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-sm dark:border-zinc-700/60 dark:bg-zinc-900/80">
          {appointments
            .filter((item) => item.id === focusId)
            .map((item) => (
              <div key={item.id} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold uppercase tracking-wide text-amber-500">
                    {item.type}
                  </span>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                    {item.label}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                  <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                    <Timer className="h-4 w-4 text-amber-500" />
                    {item.start} – {item.end}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                    <MapPin className="h-4 w-4 text-amber-500" />
                    {item.location}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200">
                    <CheckCircle2 className="h-4 w-4" />
                    Preparations complete
                  </span>
                </div>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  Staff briefings are delivered, hospitality notes aligned, and
                  transport contingencies set. I will alert you if timings shift
                  or resources require realignment.
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
