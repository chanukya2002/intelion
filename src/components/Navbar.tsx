import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { primaryPlayDestination } from '../data/site';
import { Button } from './Button';

const navItems = [
  { label: 'Products', to: '/#products' },
  { label: 'DayOS', to: '/dayos' },
  { label: 'Sudoku Zen', to: '/sudoku-zen' },
  { label: 'About', to: '/#about' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto flex max-w-[1240px] items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled
            ? 'border-white/10 bg-[#0b1017]/88 shadow-[0_16px_60px_rgba(0,0,0,0.26)] backdrop-blur-xl'
            : 'border-white/6 bg-[#090d12]/64 backdrop-blur-md'
        }`}
      >
        <Link to="/" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.32em] text-white">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent" />
          Intelion
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition hover:text-white ${
                  isActive && item.to !== '/#products' && item.to !== '/#about' ? 'text-white' : 'text-slate-300'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button to="/#products" variant="secondary">
            View Apps
          </Button>
          <Button href={primaryPlayDestination} variant="ghost" external={primaryPlayDestination.startsWith('http')}>
            Google Play
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-[1240px] rounded-[28px] border border-white/10 bg-[#0b1017]/94 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="rounded-2xl px-4 py-3 text-base text-slate-200 transition hover:bg-white/6 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <Button to="/#products" variant="secondary" className="w-full">
                  View Apps
                </Button>
                <Button
                  href={primaryPlayDestination}
                  variant="primary"
                  className="w-full"
                  external={primaryPlayDestination.startsWith('http')}
                >
                  Google Play
                </Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
