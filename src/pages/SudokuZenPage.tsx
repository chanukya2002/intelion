import { Button } from '../components/Button';
import { PageTransition } from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { appMap, isConfiguredUrl } from '../data/site';
import { SudokuZenMockup } from '../mockups/SudokuZenMockup';

const detailCards = [
  {
    title: 'Board clarity',
    description: 'A refined board layout keeps visual density under control while preserving strong legibility for each number and state.',
  },
  {
    title: 'Essential interactions',
    description: 'Selected cells, keypad actions, and notes are presented with small motion cues instead of loud visual effects.',
  },
  {
    title: 'Completion feel',
    description: 'The product direction aims for satisfying feedback that still feels calm, premium, and focused.',
  },
];

export function SudokuZenPage() {
  const app = appMap['sudoku-zen'];
  const playConfigured = isConfiguredUrl(app.playStoreUrl);

  return (
    <PageTransition>
      <SEO
        title="Sudoku Zen — A Calm Sudoku Experience | Intelion"
        description="Explore Sudoku Zen, Intelion's polished Android Sudoku experience designed around clarity and calm gameplay."
        path="/sudoku-zen"
      />

      <section className="px-4 pb-12 pt-14 sm:px-6 sm:pb-20 sm:pt-20">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Sudoku Zen</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">{app.shortName}</h1>
            <p className="mt-4 text-lg text-slate-300">{app.headline}</p>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">{app.description}</p>
            <div id="download" className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={playConfigured ? app.playStoreUrl : '/support'} external={playConfigured}>
                {playConfigured ? 'Available on Google Play' : 'Configure Google Play URL'}
              </Button>
              <Button to="/#products" variant="secondary">
                Back to products
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <SudokuZenMockup />
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-[1240px]">
          <SectionHeading
            eyebrow="Experience"
            title="Built to feel focused on every tap."
            description="Sudoku Zen is positioned as a calm mobile puzzle experience with interface choices that prioritize rhythm and readability."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {detailCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.04}>
                <div className="h-full rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                  <h2 className="text-lg font-medium text-white">{card.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{card.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-[1240px]">
          <Reveal>
            <div className="grid gap-6 rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(110,199,183,0.10),rgba(255,255,255,0.03))] p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="eyebrow">Available on Google Play</p>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-white">Distribution stays configurable.</h2>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  The Play Store destination is kept in the centralized app configuration so you can publish, replace, or update listing URLs without rebuilding the site architecture.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                <p className="text-sm font-medium text-white">Current destination</p>
                <p className="mt-3 break-all text-sm leading-7 text-slate-300">
                  {playConfigured ? app.playStoreUrl : app.playStoreLabel}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
