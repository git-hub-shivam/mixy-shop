import { useMemo } from 'react';
import { useCartStore } from '@/store/cart';
import { Button } from '@/components/ui/Button';
import { Cross2Icon, PlusIcon, MinusIcon } from '@radix-ui/react-icons';

const CartPage = () => {
  const { items, removeItem, updateQuantity } = useCartStore();
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const delivery = 14;
  const total = subtotal + delivery;

  return (
    <main className="mx-auto max-w-6xl px-6 py-24 dark:text-white text-black">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-6 rounded-[36px] border dark:border-white/10 border-gray-300 dark:bg-white/5 bg-gray-100 p-8 shadow-glow backdrop-blur-xl">
          <h1 className="text-3xl font-semibold dark:text-white text-black">Your cart</h1>
          {items.length === 0 ? (
            <p className="dark:text-slate-400 text-gray-600">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex items-center gap-4 rounded-3xl border dark:border-white/10 border-gray-300 dark:bg-mixy-950/70 bg-gray-200 p-4">
                <img src={item.product.image} alt={item.product.name} className="h-24 w-24 rounded-3xl object-cover" />
                <div className="flex-1">
                  <p className="font-semibold dark:text-white text-black">{item.product.name}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="rounded-full border dark:border-white/10 border-gray-400 dark:bg-white/5 bg-white p-1 dark:text-white text-black dark:hover:bg-white/10 hover:bg-gray-100"
                      aria-label="Decrease quantity"
                    >
                      <MinusIcon />
                    </button>
                    <span className="text-sm dark:text-slate-400 text-gray-600">Qty {item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="rounded-full border dark:border-white/10 border-gray-400 dark:bg-white/5 bg-white p-1 dark:text-white text-black dark:hover:bg-white/10 hover:bg-gray-100"
                      aria-label="Increase quantity"
                    >
                      <PlusIcon />
                    </button>
                  </div>
                </div>
                <p className="text-lg font-semibold text-orange-400">${(item.product.price * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => removeItem(item.product.id)}
                  className="ml-4 rounded-full border dark:border-white/10 border-gray-400 dark:bg-white/5 bg-white p-2 dark:text-white text-black dark:hover:bg-white/10 hover:bg-gray-100 shadow-sm"
                  aria-label="Remove item"
                >
                  <Cross2Icon />
                </button>
              </div>
            ))
          )}
        </div>
        {items.length > 0 && (
          <aside className="rounded-[36px] border dark:border-white/10 border-gray-300 dark:bg-white/5 bg-gray-100 p-8 shadow-glow backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] dark:text-blue-200 text-blue-600">Order summary</p>
            <div className="mt-6 space-y-4">
              <div className="flex justify-between dark:text-slate-300 text-gray-700"><span>Items</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between dark:text-slate-300 text-gray-700"><span>Delivery</span><span>${delivery.toFixed(2)}</span></div>
              <div className="flex justify-between dark:text-white text-black"><span>Total</span><span>${total.toFixed(2)}</span></div>
            </div>
            <Button className="mt-8 w-full">Proceed to checkout</Button>
          </aside>
        )}
      </div>
    </main>
  );
};

export default CartPage;
