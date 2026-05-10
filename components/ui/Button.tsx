import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'ghost-dark';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
  loading?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-[#48A9A6] text-white hover:bg-[#3A8E8B] hover:shadow-[0_4px_24px_rgba(72,169,166,0.25)]',
  secondary: 'bg-[#F4F7D5] text-[#171717] hover:bg-[#E8ED9F]',
  ghost: 'border border-black/[0.12] text-[#171717] hover:border-transparent hover:bg-black/[0.05]',
  'ghost-dark': 'border border-white/[0.15] text-white hover:border-transparent hover:bg-white/[0.08]',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-10 px-5 text-sm gap-1.5',
  md: 'h-12 px-6 text-base gap-2',
  lg: 'h-14 px-8 text-lg gap-2',
};

export function Button({
  variant = 'primary',
  size = 'md',
  withArrow = false,
  loading = false,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium',
        'transition-all duration-150',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#48A9A6]',
        'active:scale-[0.98]',
        'disabled:opacity-40 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          <span>Sending…</span>
        </>
      ) : (
        <>
          {children}
          {withArrow && <ArrowRight size={16} strokeWidth={1.5} />}
        </>
      )}
    </button>
  );
}
