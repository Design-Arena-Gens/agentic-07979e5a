import { ButlerHeader } from "@/components/butler-header";
import { CommandConsole } from "@/components/command-console";
import { TaskGrid } from "@/components/task-grid";
import { Agenda } from "@/components/agenda";
import { ConciergeBoard } from "@/components/concierge-board";
import { MetricsPanel } from "@/components/metrics-panel";
import { AnnouncementFeed } from "@/components/announcement-feed";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-amber-50 via-zinc-50 to-white font-sans text-zinc-900 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-72 max-w-4xl rounded-3xl bg-amber-500/10 blur-3xl dark:bg-amber-500/20" />
      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-6 pb-16 pt-16 sm:px-10 lg:px-12">
        <ButlerHeader />
        <CommandConsole />
        <div className="grid gap-8 lg:grid-cols-[2fr,1.25fr]">
          <TaskGrid />
          <div className="flex flex-col gap-8">
            <Agenda />
            <MetricsPanel />
          </div>
        </div>
        <ConciergeBoard />
        <AnnouncementFeed />
      </main>
    </div>
  );
}
