import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { appMap } from '../data/site';
import { DayOSMockup } from '../mockups/DayOSMockup';
import { SudokuZenMockup } from '../mockups/SudokuZenMockup';

export function ProductsSection() {
  return (
    <section id="products" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-[1240px]">
        <SectionHeading
          eyebrow="Products"
          title="Built for different moments."
          description="A growing product line with one shared standard: clarity, restraint, and thoughtful interaction design."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <article className="group overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(123,140,255,0.10),rgba(255,255,255,0.02))] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/16 hover:shadow-premium sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-300">
                  {appMap.dayos.category}
                </span>
                <span className="text-xs uppercase tracking-[0.22em] text-dayos">DayOS</span>
              </div>
              <div className="mt-6 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <div>
                  <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">{appMap.dayos.shortName}</h3>
                  <p className="mt-4 max-w-md text-base leading-8 text-slate-300">{appMap.dayos.description}</p>
                  <Link to="/dayos" className="mt-8 inline-flex text-sm font-medium text-white transition hover:text-dayos">
                    Explore DayOS →
                  </Link>
                </div>
                <DayOSMockup compact />
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="group overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(110,199,183,0.10),rgba(255,255,255,0.02))] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/16 hover:shadow-premium sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-300">
                  {appMap['sudoku-zen'].category}
                </span>
                <span className="text-xs uppercase tracking-[0.22em] text-sudoku">Sudoku Zen</span>
              </div>
              <div className="mt-6">
                <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">{appMap['sudoku-zen'].shortName}</h3>
                <p className="mt-4 max-w-md text-base leading-8 text-slate-300">{appMap['sudoku-zen'].description}</p>
                <SudokuZenMockup className="mt-8" />
                <Link to="/sudoku-zen" className="mt-7 inline-flex text-sm font-medium text-white transition hover:text-sudoku">
                  Explore Sudoku Zen →
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
