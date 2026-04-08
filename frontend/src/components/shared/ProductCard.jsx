import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/features/auth/AuthContext';
import { useCartStore } from '@/store/cart';

export const ProductCard = ({ product, showActions = false }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const addItem = useCartStore((state) => state.addItem);

  const handleGuestAction = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    addItem(product);
    navigate('/cart');
  };

  const handleBuyNow = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    addItem(product);
    navigate('/checkout');
  };

  return (
    <motion.article whileHover={{ y: -6 }} className="group overflow-hidden rounded-[32px] border dark:border-white/10 dark:bg-white/5 border-gray-300 bg-gray-100 shadow-glow transition">
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <img src={product.image} alt={product.name} className="h-72 w-full object-cover" />
      </Link>
      <div className="space-y-3 p-6">
        <p className="text-xs uppercase tracking-[0.35em] dark:text-slate-400 text-gray-600">{product.category}</p>
        <Link to={`/product/${product.id}`} className="block text-xl font-semibold dark:text-white text-black">{product.name}</Link>
        <p className="text-sm dark:text-slate-300 text-gray-700">{product.description}</p>
        <p className="text-lg font-semibold text-orange-400">${product.price}</p>
        {showActions && (
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" onClick={handleGuestAction} className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-orange-400">Add to cart</button>
            <button type="button" onClick={handleBuyNow} className="rounded-full border dark:border-white/10 dark:bg-white/5 border-gray-300 bg-gray-100 px-4 py-2 text-sm font-semibold dark:text-white text-black transition dark:hover:bg-white/10 hover:bg-gray-200">Buy now</button>
          </div>
        )}
      </div>
    </motion.article>
  );
};
