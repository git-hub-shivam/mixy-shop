import { SectionHeading } from '@/components/shared/SectionHeading';
import { ProductCard } from '@/components/shared/ProductCard';
import { products } from '@/utils/content';

const ProductsPage = () => {
  const customProducts = JSON.parse(localStorage.getItem('custom-products') || '[]');
  const allProducts = [...products, ...customProducts];

  return (
    <main className="mx-auto max-w-7xl px-6 py-24 text-white">
      <SectionHeading eyebrow="Shop all" title="Browse the full Mixy catalog" description="All products are visible without login; add to cart and buy now require authentication." />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} showActions />
        ))}
      </div>
    </main>
  );
};

export default ProductsPage;
