import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { SudokuZenMockup } from '../mockups/SudokuZenMockup';

const points = [
  'High-clarity board design for distraction-light puzzle solving',
  'Essential controls such as notes and number entry without visual clutter',
  'Calm feedback states that feel polished on mobile',
];

export function SudokuSpotlightSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <Reveal delay={0.04}>
          <SudokuZenMockup />
        </Reveal>

        <Reveal>
          <SectionHeading
            eyebrow="Sudoku Zen"
            title="A puzzle interface designed to stay out of the way."
            description="Sudoku Zen focuses on the feel of solving: clean controls, elegant spacing, and a calmer visual tone than typical casual puzzle games."
          />
          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                <span className="mt-2 h-2 w-2 rounded-full bg-sudoku" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <Link to="/sudoku-zen" className="mt-8 inline-flex text-sm font-medium text-white transition hover:text-sudoku">
            Explore Sudoku Zen in detail →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
