import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '@/utils/content';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/Button';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useMemo(() => products.find((item) => item.id === id), [id]);

  if (!product) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-24 text-white">
        <p>Product not found.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-24 text-white">
      <SectionHeading eyebrow="Product detail" title={product.name} description={product.description} />
      <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[36px] bg-white/5 p-8 shadow-glow">
          <img src={product.image} alt={product.name} className="h-[520px] w-full rounded-[28px] object-cover" />
        </div>
        <div className="space-y-8 rounded-[36px] border border-white/10 bg-white/5 p-10 shadow-glow backdrop-blur-xl">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-blue-200">{product.category}</p>
            <p className="text-3xl font-semibold text-white">${product.price}</p>
            <p className="text-slate-300">Luxurious materials, premium cut and a confident finish for modern wardrobe staples.</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>Fit</span>
              <span>Regular</span>
            </div>
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>Material</span>
              <span>Cotton blend</span>
            </div>
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>Availability</span>
              <span>In stock</span>
            </div>
          </div>
          <Button className="w-full">Add to cart</Button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
