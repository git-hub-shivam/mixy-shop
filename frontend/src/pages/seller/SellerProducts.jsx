import { SectionHeading } from '@/components/shared/SectionHeading';
import { products } from '@/utils/content';
import { Cross2Icon } from '@radix-ui/react-icons';

const SellerProducts = () => {
  const customProducts = JSON.parse(localStorage.getItem('custom-products') || '[]');
  const allProducts = [...products, ...customProducts];

  const deleteProduct = (id) => {
    const updated = customProducts.filter((p) => p.id !== id);
    localStorage.setItem('custom-products', JSON.stringify(updated));
    window.location.reload(); // Simple reload to update
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-24 dark:text-white text-black">
      <SectionHeading eyebrow="Seller products" title="Your current catalog" description="Edit inventory, update pricing, and keep your premium line fresh." />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {allProducts.map((product) => (
          <div key={product.id} className="relative rounded-[32px] border dark:border-white/10 border-gray-300 dark:bg-white/5 bg-gray-100 p-6 shadow-glow backdrop-blur-xl">
            <img src={product.image} alt={product.name} className="h-52 w-full rounded-3xl object-cover" />
            <div className="mt-4 space-y-2">
              <p className="text-sm uppercase tracking-[0.35em] dark:text-blue-200 text-blue-600">{product.category}</p>
              <p className="text-lg font-semibold dark:text-white text-black">{product.name}</p>
              <p className="dark:text-slate-400 text-gray-600">${product.price}</p>
            </div>
            {customProducts.some((p) => p.id === product.id) && (
              <button
                onClick={() => deleteProduct(product.id)}
                className="absolute top-6 right-6 rounded-full border dark:border-white/10 border-gray-400 dark:bg-white/5 bg-white p-2.5 dark:text-white text-black dark:hover:bg-white/10 hover:bg-gray-100 shadow-sm transition"
                aria-label="Delete product"
              >
                <Cross2Icon className="w-5 h-5" />
              </button>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default SellerProducts;
