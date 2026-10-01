import { motion, useReducedMotion } from 'framer-motion';

type SudokuZenMockupProps = {
  className?: string;
  phone?: boolean;
};

const puzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

export function SudokuZenMockup({ className = '', phone = false }: SudokuZenMockupProps) {
  const reduceMotion = useReducedMotion();
  const Wrapper = reduceMotion ? 'div' : motion.div;
  const motionProps = reduceMotion
    ? {}
    : {
        animate: { y: [0, 6, 0] },
        transition: { duration: 9, repeat: Infinity, ease: 'easeInOut' as const },
      };

  return (
    <Wrapper
      className={`surface-panel overflow-hidden rounded-[32px] border border-white/10 shadow-premium ${className}`}
      {...motionProps}
    >
      <div className={`rounded-[28px] border border-white/8 bg-[#0a0f15] ${phone ? 'p-3' : 'p-5'}`}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">Sudoku Zen</p>
            <p className="mt-1 text-sm font-medium text-white">Calm puzzle flow</p>
          </div>
          <div className="rounded-full border border-sudoku/20 bg-sudoku/10 px-3 py-1 text-xs text-sudoku">Medium</div>
        </div>

        <div className={`mt-4 ${phone ? 'space-y-4' : 'grid gap-4 lg:grid-cols-[1.05fr_0.95fr]'}`}>
          <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-3">
            <div className="grid grid-cols-9 overflow-hidden rounded-[20px] border border-white/8">
              {puzzle.flatMap((row, rowIndex) =>
                row.map((value, columnIndex) => {
                  const selected = rowIndex === 4 && columnIndex === 4;
                  const related = rowIndex === 4 || columnIndex === 4;
                  const boxEdge =
                    columnIndex === 2 || columnIndex === 5 ? 'border-r-[1.5px] border-r-white/15' : 'border-r border-r-white/6';
                  const rowEdge =
                    rowIndex === 2 || rowIndex === 5 ? 'border-b-[1.5px] border-b-white/15' : 'border-b border-b-white/6';

                  return (
                    <div
                      key={`${rowIndex}-${columnIndex}`}
                      className={`flex aspect-square items-center justify-center text-sm font-medium sm:text-base ${boxEdge} ${rowEdge} ${
                        selected
                          ? 'bg-sudoku/25 text-white'
                          : related
                            ? 'bg-white/[0.035] text-slate-100'
                            : 'bg-transparent text-slate-300'
                      }`}
                    >
                      {value || ''}
                    </div>
                  );
                }),
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.24em] text-slate-500">Session</span>
                <span className="text-sm text-slate-300">08:24</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {Array.from({ length: 9 }, (_, index) => (
                  <button
                    key={index + 1}
                    type="button"
                    className={`rounded-2xl border py-3 text-base font-medium transition ${
                      index === 4
                        ? 'border-sudoku/30 bg-sudoku/18 text-white'
                        : 'border-white/8 bg-black/20 text-slate-200 hover:border-white/15 hover:bg-white/[0.06]'
                    }`}
                    aria-label={`Place number ${index + 1}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-white/8 bg-gradient-to-br from-sudoku/12 to-transparent p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Notes</p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-slate-400">
                {[1, 3, 4, 0, 7, 8, 0, 0, 9].map((value, index) => (
                  <div key={index} className="rounded-xl border border-white/8 bg-black/20 px-3 py-2 text-center">
                    {value || '·'}
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl border border-white/8 bg-black/20 px-3 py-3 text-sm text-slate-300">
                Subtle motion and strong contrast keep the board clear without making the experience feel busy.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
