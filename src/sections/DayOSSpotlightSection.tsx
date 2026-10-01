import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { DayOSMockup } from '../mockups/DayOSMockup';

const points = [
  'A unified visual system for tasks, planning, and personal records',
  'Focused modules for notes, reminders, expenses, and routines',
  'Mockups designed to communicate direction without overstating shipped functionality',
];

export function DayOSSpotlightSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="DayOS"
            title="A personal operating system for the details of daily life."
            description="DayOS is presented as a focused space for organizing the moving parts of everyday life—from planning and reminders to tracking and reflection."
          />
          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                <span className="mt-2 h-2 w-2 rounded-full bg-dayos" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <Link to="/dayos" className="mt-8 inline-flex text-sm font-medium text-white transition hover:text-dayos">
            Explore DayOS in detail →
          </Link>
        </Reveal>

        <Reveal delay={0.06}>
          <DayOSMockup />
        </Reveal>
      </div>
    </section>
  );
}
