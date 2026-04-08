import { forwardRef } from 'react';

export const Select = forwardRef(({ label, options, className, ...props }, ref) => (
  <label className="block text-sm dark:text-slate-200 text-gray-700">
    <span className="mb-2 block font-medium dark:text-white text-black">{label}</span>
    <select
      ref={ref}
      className={`w-full rounded-3xl border dark:border-white/10 border-gray-300 dark:bg-white/5 bg-gray-100 px-4 py-3 dark:text-white text-black focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300/20 ${className ?? ''}`}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value} className="dark:bg-mixy-950 dark:text-white bg-white text-black">{option.label}</option>
      ))}
    </select>
  </label>
));

Select.displayName = 'Select';
