"use client";

import { conciergeRequests } from "@/data/butler";
import {
  ArrowUpRight,
  BadgeCheck,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

const channelIcons = {
  SMS: MessageCircle,
  Email: Sparkles,
  Phone,
};

export function ConciergeBoard() {
  return (
    <section className="flex flex-col gap-6 rounded-3xl border border-zinc-200/70 bg-white/90 p-8 shadow-lg shadow-amber-900/5 backdrop-blur-md dark:border-zinc-700/60 dark:bg-zinc-900/70">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Concierge Conversations
        </h2>
        <button
          type="button"
          className="inline-flex items-center gap-2 text-sm font-medium text-amber-500 hover:text-amber-600"
        >
          Compose new
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {conciergeRequests.map((item) => {
          const Icon = channelIcons[item.channel];
          return (
            <article
              key={item.id}
              className="flex flex-col gap-4 rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-sm transition hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/15 dark:border-zinc-700/60 dark:bg-zinc-900/80"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-900 dark:bg-amber-500/20 dark:text-amber-200">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    {item.guest}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-amber-500">
                    {item.channel} channel
                  </p>
                </div>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                {item.request}
              </p>
              <div className="mt-auto flex flex-col gap-2 text-xs">
                <span className="inline-flex items-center gap-2 text-amber-500">
                  <BadgeCheck className="h-4 w-4" />
                  {item.status}
                </span>
                <span className="text-zinc-500 dark:text-zinc-400">
                  {item.eta}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
