export const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="space-y-4">
    <p className="text-sm uppercase tracking-[0.35em] dark:text-blue-200 text-blue-600">{eyebrow}</p>
    <h2 className="text-3xl font-display font-semibold dark:text-white text-black md:text-4xl">{title}</h2>
    <p className="max-w-2xl text-sm dark:text-slate-300 text-gray-700">{description}</p>
  </div>
);
