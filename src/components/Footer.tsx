import { Link } from 'react-router-dom';
import { siteConfig } from '../data/site';

const footerLinks = [
  { label: 'Products', to: '/#products' },
  { label: 'DayOS', to: '/dayos' },
  { label: 'Sudoku Zen', to: '/sudoku-zen' },
  { label: 'Privacy', to: '/privacy' },
  { label: 'Support', to: '/support' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white">Intelion</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">Thoughtful software for everyday life.</p>
        </div>

        <div className="flex flex-col gap-5 md:items-end">
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
            {footerLinks.map((link) => (
              <Link key={link.label} to={link.to} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-sm text-slate-500">© {siteConfig.year} Intelion</p>
        </div>
      </div>
    </footer>
  );
}
