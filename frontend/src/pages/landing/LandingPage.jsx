import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/shared/ProductCard';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { categories, stats, featuredItems, heroTags, products, testimonials } from '@/utils/content';

const LandingPage = () => {
  const customProducts = JSON.parse(localStorage.getItem('custom-products') || '[]');
  const allProducts = [...products, ...customProducts];
  return (
    <main className="relative overflow-hidden">
      <section className="relative dark:bg-hero-gradient bg-gradient-to-br from-blue-100 to-orange-100 pt-28 pb-16 md:pb-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:justify-between">
          <motion.div initial={{ opacity: 0, x: -36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl space-y-6">
            <span className="inline-flex rounded-full border dark:border-blue-300/20 dark:bg-white/5 border-blue-300/20 bg-blue-50 px-4 py-2 text-xs uppercase tracking-[0.35em] dark:text-blue-100 text-blue-800">Boldly modern essentials</span>
            <h1 className="text-5xl font-display font-semibold leading-tight dark:text-white text-black md:text-6xl">Mixy Shop — Premium Shirts & Denim for the modern lifestyle.</h1>
            <p className="max-w-xl text-base leading-8 dark:text-slate-300 text-gray-700">Explore luxury silhouettes and bold essentials designed for a refined wardrobe and elevated everyday wear.</p>
            <div className="flex flex-wrap items-center gap-3">
              {heroTags.map((tag) => (
                <span key={tag} className="rounded-full border dark:border-white/10 dark:bg-white/5 border-gray-300 bg-gray-100 px-4 py-2 text-sm dark:text-slate-200 text-gray-800">{tag}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-black transition hover:bg-orange-400">Shop collection</Link>
              <Link to="/register" className="inline-flex items-center justify-center rounded-full border dark:border-white/15 dark:bg-white/5 border-gray-300 bg-gray-100 px-7 py-3 text-sm font-semibold dark:text-white text-black transition dark:hover:border-blue-300/40 hover:border-blue-300/40">Become a seller</Link>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-3 md:grid-cols-5">
          {categories.map((category) => (
            <Link key={category} to={`/category/${category.toLowerCase()}`} className="rounded-full border dark:border-white/10 dark:bg-white/5 border-gray-300 bg-gray-100 px-4 py-3 text-center text-xs uppercase tracking-[0.35em] dark:text-slate-300 text-gray-700 transition dark:hover:bg-white/10 hover:bg-gray-200">
              {category}
            </Link>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-[32px] border dark:border-white/10 dark:bg-white/5 border-gray-300 bg-gray-100 p-6 shadow-glow backdrop-blur-xl">
          <SectionHeading eyebrow="Full catalog" title="Browse every product without login" description="Normal users can explore mobiles, clothes, shoes, denim, and accessories before signing in." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {allProducts.map((product) => (
              <ProductCard key={product.id} product={product} showActions />
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="overflow-hidden rounded-3xl dark:bg-white/5 bg-gray-100 p-4 dark:text-slate-300 text-gray-700 shadow-glow">
          <div className="flex animate-marquee items-center gap-8 whitespace-nowrap text-sm uppercase tracking-[0.3em] dark:text-blue-200 text-blue-600">
            <span>NEW COLLECTION</span>
            <span>LIMITED EDITION</span>
            <span>SHOP THE DROP</span>
            <span>BLACK DENIM</span>
            <span>ESSENTIAL SHIRTS</span>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-3xl border dark:border-white/10 dark:bg-white/5 border-gray-300 bg-gray-100 p-8 text-center backdrop-blur-xl">
              <p className="text-4xl font-display dark:text-white text-black">{item.value}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] dark:text-slate-400 text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading eyebrow="New arrivals" title="A modern collection in sculpted silhouettes." description="Clean lines, premium materials, and a cinematic presentation tailored for a refined wardrobe." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {allProducts.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[36px] dark:bg-white/5 bg-gray-100 p-10 shadow-glow backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] dark:text-blue-200 text-blue-600">Lookbook</p>
            <h2 className="mt-4 text-4xl font-display font-semibold dark:text-white text-black">A cinematic product showcase with intentional luxury.</h2>
            <p className="mt-5 max-w-xl dark:text-slate-300 text-gray-700">Every frame is designed to feel refined, quiet, and highly polished. This is premium streetwear with a minimalist edge.</p>
          </div>
          <div className="rounded-[36px] overflow-hidden dark:bg-mixy-950/90 bg-gray-200 p-4 shadow-xl">
            <img src="/assets/product.svg" alt="Premium denim highlight" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading eyebrow="Testimonials" title="Trusted by the boldest customers." description="A premium shopper experience with timeless pieces and careful curation." />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-3xl border dark:border-white/10 dark:bg-white/5 border-gray-300 bg-gray-100 p-8 backdrop-blur-xl">
              <p className="dark:text-slate-300 text-gray-700">"{item.quote}"</p>
              <p className="mt-6 font-semibold dark:text-white text-black">{item.name}</p>
              <p className="text-sm dark:text-slate-400 text-gray-600">{item.role}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl rounded-[36px] border dark:border-white/10 dark:bg-white/5 border-gray-300 bg-gray-100 p-12 shadow-glow backdrop-blur-xl">
          <h2 className="text-4xl font-display font-semibold dark:text-white text-black">Redefine your wardrobe with premium essentials.</h2>
          <p className="mt-5 dark:text-slate-300 text-gray-700">Experience curated shirts and denim built for a boldly modern lifestyle.</p>
          <Link to="/products" className="mt-8 inline-flex rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-black transition hover:bg-orange-400">Browse the full collection</Link>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
