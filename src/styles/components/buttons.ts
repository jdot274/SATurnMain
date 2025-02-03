// Button styles
export const buttonStyles = {
  base: 'inline-flex items-center justify-center rounded-lg transition-all active:scale-95',
  variants: {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-white/5 border border-white/10 text-white/90 hover:bg-white/10',
    success: 'bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30',
    danger: 'bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30',
  },
  sizes: {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  },
};