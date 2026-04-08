import { useState, useMemo } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { products } from '@/utils/content';
import { ProductCard } from '@/components/shared/ProductCard';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q') || '';
  const [localQuery, setLocalQuery] = useState(query);

  const allProducts = useMemo(() => {
    const customProducts = JSON.parse(localStorage.getItem('custom-products') || '[]');
    return [...products, ...customProducts];
  }, []);

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery)
    );
  }, [query, allProducts]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (localQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(localQuery)}`);
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-24 dark:text-white text-black">
      <div className="mb-12">
        <h1 className="text-4xl font-display font-semibold dark:text-white text-black mb-4">Search Results</h1>
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            placeholder="Search products..."
            className="flex-1 rounded-full border dark:border-white/10 border-gray-300 dark:bg-white/5 bg-gray-100 px-6 py-3 dark:text-white text-black placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-300/40"
          />
          <button
            type="submit"
            className="rounded-full bg-orange-500 hover:bg-orange-400 px-6 py-3 text-black font-semibold transition"
          >
            Search
          </button>
        </form>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="dark:text-slate-400 text-gray-600 mb-4">
            {query ? `No products found for "${query}"` : 'Enter a search term to find products'}
          </p>
          <Link to="/products" className="inline-block rounded-full bg-orange-500 hover:bg-orange-400 px-6 py-3 text-black font-semibold transition">
            Browse All Products
          </Link>
        </div>
      ) : (
        <div>
          <p className="text-sm dark:text-slate-400 text-gray-600 mb-8">
            Found {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} matching "{query}"
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} showActions />
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default SearchPage;
