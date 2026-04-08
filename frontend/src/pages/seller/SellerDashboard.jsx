import { useState } from 'react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { AddProductModal } from '@/components/shared/AddProductModal';

const SellerDashboard = () => {
  const [addProductOpen, setAddProductOpen] = useState(false);

  return (
    <main className="mx-auto max-w-7xl px-6 py-24 dark:text-white text-black">
      <SectionHeading eyebrow="Seller dashboard" title="Manage your Mixy Shop collection" description="Create products, review orders, and monitor inventory from one premium dashboard." />
      <div className="mt-12 flex gap-4 flex-wrap">
        <Link to="/seller/products">
          <Button>Products</Button>
        </Link>
        <Button onClick={() => setAddProductOpen(true)}>Add Product</Button>
        <Link to="/seller/orders">
          <Button>Orders</Button>
        </Link>
        <Link to="/seller/analytics">
          <Button>Analytics</Button>
        </Link>
      </div>
      <AddProductModal open={addProductOpen} onOpenChange={setAddProductOpen} />
    </main>
  );
};

export default SellerDashboard;
