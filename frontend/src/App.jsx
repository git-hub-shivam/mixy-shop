import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AuthRoute } from '@/components/shared/AuthRoute';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { ModalProvider } from '@/components/ui/ModalProvider';

const LandingPage = lazy(() => import('@/pages/landing/LandingPage'));
const LoginPage = lazy(() => import('@/features/auth/LoginPage'));
const RegisterPage = lazy(() => import('@/features/auth/RegisterPage'));
const ProductsPage = lazy(() => import('@/pages/products/ProductsPage'));
const CategoryPage = lazy(() => import('@/pages/products/CategoryPage'));
const BuyerDashboard = lazy(() => import('@/pages/buyer/BuyerDashboard'));
const BuyerProducts = lazy(() => import('@/pages/buyer/BuyerProducts'));
const ProductDetail = lazy(() => import('@/pages/buyer/ProductDetail'));
const CartPage = lazy(() => import('@/pages/buyer/CartPage'));
const CheckoutPage = lazy(() => import('@/pages/buyer/CheckoutPage'));
const OrdersPage = lazy(() => import('@/pages/buyer/OrdersPage'));
const BuyerProfile = lazy(() => import('@/pages/buyer/ProfilePage'));
const SellerDashboard = lazy(() => import('@/pages/seller/SellerDashboard'));
const SellerProducts = lazy(() => import('@/pages/seller/SellerProducts'));
const SellerAddProduct = lazy(() => import('@/pages/seller/AddProduct'));
const SellerAnalytics = lazy(() => import('@/pages/seller/SellerAnalytics'));
const SearchPage = lazy(() => import('@/pages/SearchPage'));

function App() {
  const location = useLocation();
  const [mode, setMode] = useState(() => {
    const stored = localStorage.getItem('mixy-theme');
    return stored === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark');
    localStorage.setItem('mixy-theme', mode);
  }, [mode]);

  const toggleTheme = () => setMode((current) => (current === 'dark' ? 'light' : 'dark'));

  const routeKey = useMemo(() => location.pathname, [location.pathname]);

  return (
    <div className={`min-h-screen dark:bg-mixy-950 dark:text-white bg-white text-black`}>
      <Navbar onThemeToggle={toggleTheme} theme={mode} />
      <ModalProvider>
        <Suspense fallback={<div className="min-h-[70vh] flex items-center justify-center">Loading…</div>}>
          <AnimatePresence mode="wait">
            <motion.div
              key={routeKey}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="relative"
            >
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/category/:category" element={<CategoryPage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/buyer/dashboard" element={<AuthRoute role="buyer"><BuyerDashboard /></AuthRoute>} />
                <Route path="/buyer/products" element={<AuthRoute role="buyer"><BuyerProducts /></AuthRoute>} />
                <Route path="/cart" element={<AuthRoute role="buyer"><CartPage /></AuthRoute>} />
                <Route path="/checkout" element={<AuthRoute role="buyer"><CheckoutPage /></AuthRoute>} />
                <Route path="/orders" element={<AuthRoute role="buyer"><OrdersPage /></AuthRoute>} />
                <Route path="/profile" element={<AuthRoute role="buyer"><BuyerProfile /></AuthRoute>} />
                <Route path="/seller/dashboard" element={<AuthRoute role="seller"><SellerDashboard /></AuthRoute>} />
                <Route path="/seller/products" element={<AuthRoute role="seller"><SellerProducts /></AuthRoute>} />
                <Route path="/seller/add-product" element={<AuthRoute role="seller"><SellerAddProduct /></AuthRoute>} />
                <Route path="/seller/analytics" element={<AuthRoute role="seller"><SellerAnalytics /></AuthRoute>} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </ModalProvider>
      <Footer />
    </div>
  );
}

export default App;
