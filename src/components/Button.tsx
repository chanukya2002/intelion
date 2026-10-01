import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
  external?: boolean;
};

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-white text-slate-950 hover:bg-slate-100 active:bg-slate-200 shadow-[0_12px_30px_rgba(255,255,255,0.12)]',
  secondary:
    'border border-white/12 bg-white/5 text-white hover:border-white/20 hover:bg-white/8 active:bg-white/12',
  ghost: 'text-white/80 hover:text-white',
};

const sharedClasses =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-[0.01em] transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-45';

export function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  ariaLabel,
  disabled = false,
  external = false,
}: ButtonProps) {
  const classes = `${sharedClasses} ${variantClasses[variant]} ${className}`.trim();

  if (href) {
    return (
      <a
        className={classes}
        href={disabled ? undefined : href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        aria-label={ariaLabel}
        aria-disabled={disabled}
      >
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link className={classes} to={disabled ? '#' : to} aria-label={ariaLabel} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} aria-label={ariaLabel} disabled={disabled}>
      {children}
    </button>
  );
}
