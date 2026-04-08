import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { Cross2Icon, HamburgerMenuIcon, MoonIcon, SunIcon, ArchiveIcon, BellIcon, PlusIcon, GridIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useAuth } from '@/features/auth/AuthContext';
import { AddProductModal } from './AddProductModal';

const links = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
];

const categories = [
  { label: 'Mobile', path: '/category/mobile' },
  { label: 'Clothes', path: '/category/clothes' },
  { label: 'Shoes', path: '/category/shoes' },
  { label: 'Denim', path: '/category/denim' },
  { label: 'Accessories', path: '/category/accessories' },
];

export const Navbar = ({ theme, onThemeToggle }) => {
  const [open, setOpen] = useState(false);
  const [addProductOpen, setAddProductOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { user, signout } = useAuth();

  const label = useMemo(() => (theme === 'dark' ? 'Switch to light' : 'Switch to dark'), [theme]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setOpen(false);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b dark:border-white/10 dark:bg-mixy-950/90 border-gray-300 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-full items-center justify-between px-4 md:px-6 lg:px-8 py-4 gap-2 md:gap-3">
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          <Link to="/" className="font-display text-lg font-semibold tracking-[0.2em] dark:text-white/90 text-black/90">Mixy Shop</Link>
          <span className="hidden text-xs md:text-sm dark:text-slate-400 text-gray-600 sm:inline">{user ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : 'Visitor'}</span>
        </div>
        <nav className="hidden xl:flex items-center gap-4 lg:gap-6 flex-shrink-0">
          {links.map((item) => (
            <NavLink key={item.path} to={item.path} className={({ isActive }) => `text-xs lg:text-sm uppercase tracking-[0.2em] ${isActive ? 'dark:text-white text-black' : 'dark:text-slate-400 text-gray-600 dark:hover:text-white hover:text-black'}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <nav className="hidden lg:flex items-center gap-2 lg:gap-3 flex-shrink-0">
          {categories.map((item) => (
            <NavLink key={item.path} to={item.path} className="text-xs uppercase tracking-[0.3em] dark:text-slate-400 text-gray-600 dark:hover:text-white hover:text-black">
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex lg:flex xl:hidden items-center gap-1 md:gap-1.5 flex-1 md:flex-initial px-1 md:px-2">
          <form onSubmit={handleSearch} className="flex items-center gap-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="rounded-full border dark:border-white/10 border-gray-300 dark:bg-white/5 bg-gray-100 px-3 py-2 text-xs dark:text-white text-black placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-300/40 w-28 lg:w-40"
            />
            <button type="submit" className="rounded-full border dark:border-white/10 dark:bg-white/5 border-gray-400 bg-gray-200 p-2 dark:text-slate-200 text-gray-900 transition dark:hover:bg-white/10 hover:bg-gray-300 flex-shrink-0" aria-label="Search">
              <MagnifyingGlassIcon className="w-4 h-4" />
            </button>
          </form>
        </div>
        <div className="flex items-center gap-1 md:gap-2 flex-shrink-0 overflow-hidden">
          {user?.role === 'seller' && (
            <>
              <button onClick={() => setAddProductOpen(true)} className="rounded-full border dark:border-white/10 dark:bg-white/5 border-gray-400 bg-gray-200 p-2 md:p-2.5 dark:text-slate-200 text-gray-900 transition dark:hover:bg-white/10 hover:bg-gray-300 flex-shrink-0" aria-label="Add product">
                <PlusIcon className="w-4 md:w-5 h-4 md:h-5" />
              </button>
              <Link to="/seller/dashboard" className="hidden lg:inline-flex rounded-full border dark:border-white/10 dark:bg-white/5 border-gray-400 bg-gray-200 p-2 md:p-2.5 dark:text-slate-200 text-gray-900 transition dark:hover:bg-white/10 hover:bg-gray-300 flex-shrink-0" aria-label="Dashboard">
                <GridIcon className="w-4 md:w-5 h-4 md:h-5" />
              </Link>
            </>
          )}
          {(user?.role === 'buyer' || user?.role === 'seller' || user?.role === 'admin') && (
            <Link to="/cart" className="rounded-full border dark:border-white/10 dark:bg-white/5 border-gray-400 bg-gray-200 p-2 md:p-2.5 dark:text-slate-200 text-gray-900 transition dark:hover:bg-white/10 hover:bg-gray-300 flex-shrink-0" aria-label="Cart">
              <ArchiveIcon className="w-4 md:w-5 h-4 md:h-5" />
            </Link>
          )}
          {(user?.role === 'buyer' || user?.role === 'seller' || user?.role === 'admin') && (
            <button className="hidden md:inline-flex rounded-full border dark:border-white/10 dark:bg-white/5 border-gray-400 bg-gray-200 p-2 md:p-2.5 dark:text-slate-200 text-gray-900 transition dark:hover:bg-white/10 hover:bg-gray-300 flex-shrink-0" aria-label="Notifications">
              <BellIcon className="w-4 md:w-5 h-4 md:h-5" />
            </button>
          )}
          {user ? (
            <button onClick={signout} className="hidden lg:inline-block rounded-full border dark:border-white/10 dark:bg-white/5 border-gray-400 bg-gray-200 px-3 lg:px-4 py-2 text-xs lg:text-sm dark:text-slate-200 text-gray-900 transition dark:hover:bg-white/10 hover:bg-gray-300">Logout</button>
          ) : (
            <Link to="/login" className="hidden lg:inline-block rounded-full border dark:border-white/10 dark:bg-white/5 border-gray-400 bg-gray-200 px-3 lg:px-4 py-2 text-xs lg:text-sm dark:text-slate-200 text-gray-900 transition dark:hover:bg-white/10 hover:bg-gray-300">Login</Link>
          )}
          <button onClick={onThemeToggle} aria-label={label} className="rounded-full border dark:border-white/10 dark:bg-white/5 border-gray-300 bg-gray-100 p-2 md:p-2.5 dark:text-slate-200 text-gray-800 transition dark:hover:bg-white/10 hover:bg-gray-200 flex-shrink-0" title={label}>
            {theme === 'dark' ? <SunIcon className="w-4 md:w-5 h-4 md:h-5" /> : <MoonIcon className="w-4 md:w-5 h-4 md:h-5" />}
          </button>
        </div>
        <div className="flex md:hidden items-center gap-1">
          <button onClick={onThemeToggle} aria-label={label} className="rounded-full border dark:border-white/10 dark:bg-white/5 border-gray-300 bg-gray-100 p-2 dark:text-slate-200 text-gray-800 transition dark:hover:bg-white/10 hover:bg-gray-200">
            {theme === 'dark' ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
          </button>
          <button onClick={() => setOpen(!open)} className="inline-flex items-center justify-center rounded-full border dark:border-white/10 dark:bg-white/5 border-gray-300 bg-gray-100 p-2 dark:text-slate-200 text-gray-800 transition">
            {open ? <Cross2Icon className="w-4 h-4" /> : <HamburgerMenuIcon className="w-4 h-4" />}
          </button>
        </div>
      </div>
      {open && (
        <>
          <div className="fixed inset-0 z-40 top-16 bg-black/30 md:hidden" onClick={() => setOpen(false)}></div>
          <div className="fixed left-0 right-0 top-16 z-50 w-full dark:bg-mixy-950/95 bg-white/95 backdrop-blur-lg border-b dark:border-white/10 border-gray-300 max-h-[calc(100vh-4rem)] overflow-y-auto md:hidden">
            <div className="mx-auto max-w-7xl px-6 py-6 space-y-3">
              <form onSubmit={handleSearch} className="flex items-center gap-2 mb-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="flex-1 rounded-full border dark:border-white/10 border-gray-300 dark:bg-white/5 bg-gray-100 px-4 py-2 text-sm dark:text-white text-black placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-300/40"
                />
                <button type="submit" className="rounded-full border dark:border-white/10 dark:bg-white/5 border-gray-400 bg-gray-200 p-2 dark:text-slate-200 text-gray-900 transition dark:hover:bg-white/10 hover:bg-gray-300" aria-label="Search">
                  <MagnifyingGlassIcon />
                </button>
              </form>
              {user?.role === 'seller' && (
                <>
                  <button onClick={() => { setAddProductOpen(true); setOpen(false); }} className="w-full rounded-2xl bg-orange-500 hover:bg-orange-400 px-4 py-3 text-black font-semibold transition">
                    Add Product
                  </button>
                  <Link to="/seller/dashboard" onClick={() => setOpen(false)} className="block w-full rounded-2xl dark:bg-white/10 bg-gray-200 dark:hover:bg-white/20 hover:bg-gray-300 px-4 py-3 dark:text-white text-black font-semibold transition text-center">
                    Dashboard
                  </Link>
                </>
              )}
              {(user?.role === 'buyer' || user?.role === 'seller' || user?.role === 'admin') && (
                <Link to="/cart" onClick={() => setOpen(false)} className="block w-full rounded-2xl dark:bg-white/10 bg-gray-200 dark:hover:bg-white/20 hover:bg-gray-300 px-4 py-3 dark:text-white text-black font-semibold transition text-center">
                  Cart
                </Link>
              )}
              {(user?.role === 'buyer' || user?.role === 'seller' || user?.role === 'admin') && (
                <button onClick={() => setOpen(false)} className="w-full rounded-2xl dark:bg-white/10 bg-gray-200 dark:hover:bg-white/20 hover:bg-gray-300 px-4 py-3 dark:text-white text-black font-semibold transition text-center">
                  Notifications
                </button>
              )}
              {links.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setOpen(false)} className="block w-full rounded-2xl dark:bg-white/10 bg-gray-200 dark:hover:bg-white/20 hover:bg-gray-300 px-4 py-3 dark:text-white text-black font-semibold transition text-center">
                  {item.label}
                </Link>
              ))}
              <div className="border-t dark:border-white/10 border-gray-300 pt-3">
                <p className="text-xs uppercase tracking-widest dark:text-slate-400 text-gray-600 px-4 py-2">Categories</p>
                <div className="space-y-2">
                  {categories.map((item) => (
                    <Link key={item.path} to={item.path} onClick={() => setOpen(false)} className="block w-full rounded-2xl dark:bg-white/5 bg-gray-100 dark:hover:bg-white/10 hover:bg-gray-200 px-4 py-2 dark:text-slate-300 text-gray-700 transition text-center text-sm">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="border-t dark:border-white/10 border-gray-300 pt-3 space-y-3">
                {!user && (
                  <Link to="/login" onClick={() => setOpen(false)} className="block w-full rounded-2xl dark:bg-white/10 bg-gray-200 dark:hover:bg-white/20 hover:bg-gray-300 px-4 py-3 dark:text-white text-black font-semibold transition text-center">
                    Login
                  </Link>
                )}
                {user && (
                  <button onClick={() => { signout(); setOpen(false); }} className="w-full rounded-2xl dark:bg-white/10 bg-gray-200 dark:hover:bg-white/20 hover:bg-gray-300 px-4 py-3 dark:text-white text-black font-semibold transition text-center">
                    Logout
                  </button>
                )}
                <button onClick={() => { onThemeToggle(); setOpen(false); }} className="w-full rounded-2xl dark:bg-white/10 bg-gray-200 dark:hover:bg-white/20 hover:bg-gray-300 px-4 py-3 dark:text-white text-black font-semibold transition text-center">
                  {label}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <AddProductModal open={addProductOpen} onOpenChange={setAddProductOpen} />
    </header>
  );
};
