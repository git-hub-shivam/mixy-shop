import { products } from '@/utils/content';
import { ProductCard } from '@/components/shared/ProductCard';
import { SectionHeading } from '@/components/shared/SectionHeading';

const BuyerProducts = () => (
  <main className="mx-auto max-w-7xl px-6 py-24">
    <SectionHeading eyebrow="Shop" title="Explore the Mixy Shop collection" description="Search, filter, and discover elevated essentials for a refined wardrobe." />
    <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </main>
);

export default BuyerProducts;
