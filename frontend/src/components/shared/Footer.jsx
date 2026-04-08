import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className="border-t dark:border-white/10 border-gray-300 dark:bg-mixy-950/90 bg-white/90 py-10 dark:text-slate-400 text-gray-600">
    <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="font-display text-lg dark:text-white text-black">Mixy Shop</p>
        <p className="mt-2 text-sm dark:text-slate-400 text-gray-600">Premium Shirts & Denim curated for the boldly modern lifestyle.</p>
      </div>
      <div className="flex flex-wrap items-center gap-6 text-sm">
        <Link to="/" className="dark:hover:text-white hover:text-black">Home</Link>
      </div>
      <p className="text-sm dark:text-slate-500 text-gray-500">© 2026 Mixy Shop. Crafted for premium modern commerce.</p>
    </div>
  </footer>
);
