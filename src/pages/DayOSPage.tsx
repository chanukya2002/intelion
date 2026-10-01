import { Button } from '../components/Button';
import { PageTransition } from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { appMap, isConfiguredUrl } from '../data/site';
import { DayOSMockup } from '../mockups/DayOSMockup';

const philosophy = [
  {
    title: 'Everything in one place',
    description:
      'DayOS is framed around reducing fragmentation across the personal tools you reach for during the day, giving related information a consistent home.',
  },
  {
    title: 'Designed around your life',
    description:
      'The DayOS showcase highlights modules for tasks, reminders, notes, expenses, diet, fitness, and personal tracking as part of one broader product system.',
  },
  {
    title: 'Clear product language',
    description:
      'This website intentionally avoids claims about sync, AI, cloud services, or backend capabilities that are not confirmed in the available product information.',
  },
];

export function DayOSPage() {
  const app = appMap.dayos;

  return (
    <PageTransition>
      <SEO
        title="DayOS — Your Personal Operating System | Intelion"
        description="Explore DayOS, Intelion's personal operating system concept for planning, tracking, and organizing everyday life."
        path="/dayos"
      />

      <section className="px-4 pb-12 pt-14 sm:px-6 sm:pb-20 sm:pt-20">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">DayOS</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">{app.shortName}</h1>
            <p className="mt-4 text-lg text-slate-300">{app.headline}</p>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">{app.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/#products">Back to products</Button>
              <Button
                href={app.playStoreUrl || '/support'}
                variant="secondary"
                external={isConfiguredUrl(app.playStoreUrl)}
                disabled={!app.playStoreUrl}
              >
                {isConfiguredUrl(app.playStoreUrl) ? 'Google Play' : 'Play link not configured'}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <DayOSMockup />
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-[1240px]">
          <SectionHeading
            eyebrow="Philosophy"
            title="A structured system for personal context."
            description="The DayOS showcase is built as a product presentation: visual, specific, and careful not to overstate what is confirmed."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {philosophy.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <div className="h-full rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                  <h2 className="text-lg font-medium text-white">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-[1240px]">
          <SectionHeading
            eyebrow="Product areas"
            title="Designed around the moving parts of daily life."
            description="These are the areas DayOS is presented around on this site. If your shipped app differs, update the centralized configuration copy before deployment."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {app.productAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 0.03}>
                <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(123,140,255,0.10),rgba(255,255,255,0.03))] p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-medium text-white">{area.title}</h3>
                    <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-300">
                      Focus area
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{area.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-[1240px]">
          <Reveal>
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <SectionHeading
                eyebrow="Product positioning"
                title="Local-first philosophy, expressed carefully."
                description="If DayOS is released with local-first data ownership, storage controls, or offline-first behavior, update this section with the exact implementation details. The current version keeps the philosophy directional rather than making unsupported technical claims."
              />
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
