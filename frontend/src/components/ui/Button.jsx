import { forwardRef } from 'react';

export const Button = forwardRef(({ className = '', variant = 'primary', ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-300/40 ${
        variant === 'primary' ? 'bg-orange-500 text-black hover:bg-orange-400' : 'border dark:border-white/10 border-gray-300 dark:bg-white/5 bg-gray-100 dark:text-white text-black dark:hover:bg-white/10 hover:bg-gray-200'
      } ${className}`}
      {...props}
    />
  );
});

Button.displayName = 'Button';
