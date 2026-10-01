import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

const values = [
  {
    title: 'Independent product focus',
    description: 'Intelion is positioned as a product brand dedicated to software that earns its place in everyday routines.',
  },
  {
    title: 'Calm interaction design',
    description: 'Interfaces are designed to feel composed and intentional instead of loud, crowded, or overstimulating.',
  },
  {
    title: 'Practical utility',
    description: 'Every product direction is grounded in useful workflows, not inflated claims or novelty for its own sake.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-[1240px]">
        <SectionHeading
          eyebrow="About Intelion"
          title="Software with purpose."
          description="Intelion is an independent software and product brand focused on creating useful digital experiences with strong visual clarity and everyday relevance."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.05}>
              <div className="h-full rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-medium text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
