import { forwardRef } from 'react';

export const Input = forwardRef(({ label, error, className = '', ...props }, ref) => (
  <label className="block text-sm dark:text-slate-200 text-gray-700">
    <span className="mb-2 block font-medium dark:text-white text-black">{label}</span>
    <input
      ref={ref}
      className={`w-full rounded-3xl border dark:border-white/10 border-gray-300 dark:bg-white/5 bg-gray-100 px-4 py-3 dark:text-white text-black dark:placeholder:text-slate-500 placeholder:text-gray-500 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300/20 ${className}`}
      {...props}
    />
    {error ? <span className="mt-2 block text-xs dark:text-orange-300 text-orange-600">{error}</span> : null}
  </label>
));

Input.displayName = 'Input';
