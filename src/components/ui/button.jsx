import React from 'react';
import clsx from 'clsx';

const BASE = 'inline-flex items-center justify-center rounded-md font-medium transition-transform transform-gpu focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

const VARIANTS = {
  default: 'bg-gradient-to-r from-primary to-accent text-white hover:brightness-110 shadow-[0_8px_30px_rgba(120,72,255,0.16)]',
  ghost: 'bg-transparent hover:bg-white/5 text-primary border border-transparent',
  secondary: 'bg-gradient-to-r from-secondary to-primary text-white hover:brightness-110 shadow-[0_6px_20px_rgba(59,130,246,0.12)]',
};

// extra neon/glow utility applied via className in components when needed
const NEON = 'ring-2 ring-primary/30 hover:shadow-[0_8px_40px_rgba(99,102,241,0.12)]';

const SIZES = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-3 text-base',
};

const Button = React.forwardRef(({ children, variant = 'default', size = 'md', className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={clsx(BASE, VARIANTS[variant], SIZES[size], NEON, className)}
      {...props}
    >
      {children}
    </button>
  );
});

export { Button };