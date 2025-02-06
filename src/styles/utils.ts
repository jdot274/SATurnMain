// Utility styles and helper functions
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const utilityStyles = {
  glassmorphism: {
    base: 'backdrop-blur-xl bg-white/5 border border-white/10',
    hover: 'hover:bg-white/10 transition-all duration-300',
  },
  gradients: {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-400',
    secondary: 'bg-gradient-to-r from-purple-600 to-purple-400',
    success: 'bg-gradient-to-r from-green-600 to-green-400',
    danger: 'bg-gradient-to-r from-red-600 to-red-400',
  },
};