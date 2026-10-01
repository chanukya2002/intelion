import { motion, useReducedMotion } from 'framer-motion';

type DayOSMockupProps = {
  className?: string;
  compact?: boolean;
};

const modules = [
  { name: 'Tasks', value: '06', accent: 'bg-dayos/80' },
  { name: 'Expenses', value: '04', accent: 'bg-white/85' },
  { name: 'Fitness', value: '82%', accent: 'bg-emerald-300/90' },
  { name: 'Diet', value: '1,950', accent: 'bg-amber-200/90' },
];

export function DayOSMockup({ className = '', compact = false }: DayOSMockupProps) {
  const reduceMotion = useReducedMotion();
  const Wrapper = reduceMotion ? 'div' : motion.div;
  const motionProps = reduceMotion
    ? {}
    : {
        animate: { y: [0, -8, 0] },
        transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' as const },
      };

  return (
    <Wrapper
      className={`surface-panel overflow-hidden rounded-[30px] border border-white/10 p-3 shadow-premium ${className}`}
      {...motionProps}
    >
      <div className="rounded-[24px] border border-white/8 bg-[#0b1017] p-4">
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">DayOS</p>
            <p className="mt-1 text-sm font-medium text-white">Personal dashboard</p>
          </div>
          <div className="rounded-full border border-dayos/20 bg-dayos/10 px-3 py-1 text-xs text-dayos">
            Focused day
          </div>
        </div>

        <div className={`mt-4 grid gap-4 ${compact ? 'lg:grid-cols-[1.2fr_0.8fr]' : 'md:grid-cols-[1.2fr_0.8fr]'}`}>
          <div className="space-y-4">
            <div className="rounded-[22px] border border-white/8 bg-white/[0.035] p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Today</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white">Bring your day into focus.</h3>
                </div>
                <div className="h-11 w-11 rounded-2xl border border-white/8 bg-white/[0.04]" />
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {modules.map((module) => (
                  <div key={module.name} className="rounded-2xl border border-white/8 bg-black/20 px-3 py-3">
                    <div className={`h-1.5 w-10 rounded-full ${module.accent}`} />
                    <div className="mt-3 flex items-end justify-between">
                      <span className="text-sm text-slate-300">{module.name}</span>
                      <span className="text-lg font-semibold text-white">{module.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Routine</p>
                <div className="mt-4 space-y-3">
                  {[
                    ['Morning planning', '08:00'],
                    ['Expense check-in', '13:00'],
                    ['Evening walk', '19:30'],
                  ].map(([label, time]) => (
                    <div key={label} className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 px-3 py-2.5">
                      <span className="text-sm text-slate-200">{label}</span>
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[22px] border border-white/8 bg-gradient-to-br from-dayos/12 to-transparent p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Notes</p>
                <div className="mt-4 space-y-2">
                  <div className="h-2 rounded-full bg-white/10" />
                  <div className="h-2 w-5/6 rounded-full bg-white/10" />
                  <div className="h-2 w-4/6 rounded-full bg-dayos/40" />
                </div>
                <div className="mt-8 rounded-2xl border border-white/8 bg-black/20 p-3">
                  <p className="text-sm text-slate-300">Track what matters without bouncing between disconnected tools.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Weekly rhythm</p>
              <div className="mt-5 flex h-36 items-end gap-2">
                {[42, 65, 51, 72, 58, 80, 61].map((height, index) => (
                  <div key={height} className="flex-1">
                    <div
                      className={`rounded-t-2xl ${
                        index === 5 ? 'bg-dayos/85' : 'bg-white/12'
                      }`}
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Focus areas</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Tasks', 'Expenses', 'Fitness', 'Diet', 'Notes', 'Reminders'].map((item) => (
                  <span key={item} className="rounded-full border border-white/8 bg-black/20 px-3 py-1.5 text-xs text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
