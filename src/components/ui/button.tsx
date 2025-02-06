import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-2xl transition-all active:scale-95',
  {
    variants: {
      variant: {
        default: 'backdrop-blur-xl bg-white/5 border border-white/10 text-white/90 hover:bg-white/10',
        success: 'backdrop-blur-xl bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/20',
        danger: 'backdrop-blur-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20',
        ghost: 'text-white/60 hover:text-white/90',
      },
      size: {
        default: 'p-4',
        sm: 'p-2 text-sm',
        lg: 'p-6 text-lg',
      },
      hasIcon: {
        true: 'gap-2',
      },
      isDisabled: {
        true: 'opacity-50 cursor-not-allowed hover:scale-100',
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  hasIcon?: boolean;
  isDisabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, hasIcon, isDisabled, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, hasIcon, isDisabled }),
          'shadow-lg hover:scale-105',
          className
        )}
        ref={ref}
        disabled={isDisabled}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };