import { SectionHeading } from '@/components/shared/SectionHeading';
import { products } from '@/utils/content';
import { ProductCard } from '@/components/shared/ProductCard';

const BuyerDashboard = () => (
  <main className="mx-auto max-w-7xl px-6 py-24">
    <SectionHeading eyebrow="Buyer dashboard" title="Welcome to your Mixy wardrobe" description="Browse premium shirts, denim, and essentials with a modern buyer experience." />
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {products.slice(0, 6).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </main>
);

export default BuyerDashboard;
