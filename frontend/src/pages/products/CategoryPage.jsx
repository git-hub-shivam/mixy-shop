import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ProductCard } from '@/components/shared/ProductCard';
import { products } from '@/utils/content';

const CategoryPage = () => {
  const { category } = useParams();
  const customProducts = JSON.parse(localStorage.getItem('custom-products') || '[]');
  const allProducts = [...products, ...customProducts];
  const filtered = useMemo(
    () => allProducts.filter((product) => product.category.toLowerCase() === category?.toLowerCase()),
    [category, allProducts]
  );

  return (
    <main className="mx-auto max-w-7xl px-6 py-24 text-white">
      <SectionHeading eyebrow="Category" title={category ? `${category} collection` : 'Category'} description="Explore products curated by category without login." />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.length > 0 ? (
          filtered.map((product) => <ProductCard key={product.id} product={product} showActions />)
        ) : (
          <div className="rounded-[36px] border border-white/10 bg-white/5 p-12 text-center text-slate-300">No products found in this category.</div>
        )}
      </div>
    </main>
  );
};

export default CategoryPage;
