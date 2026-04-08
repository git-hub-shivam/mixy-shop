import { SectionHeading } from '@/components/shared/SectionHeading';

const OrdersPage = () => (
  <main className="mx-auto max-w-7xl px-6 py-24 dark:text-white text-black">
    <SectionHeading eyebrow="Seller orders" title="Purchase requests and fulfillment" description="Track orders, shipment status, and new buyer demand." />
    <div className="mt-12 grid gap-6">
      {['Order #3312', 'Order #3315', 'Order #3318'].map((order) => (
        <div key={order} className="rounded-[32px] border dark:border-white/10 border-gray-300 dark:bg-white/5 bg-gray-100 p-6 shadow-glow backdrop-blur-xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-semibold dark:text-white text-black">{order}</p>
              <p className="text-sm dark:text-slate-400 text-gray-600">Requested by premium buyer</p>
            </div>
            <span className="rounded-full dark:bg-blue-300/10 bg-blue-100 px-4 py-2 text-sm dark:text-blue-200 text-blue-800">Awaiting shipment</span>
          </div>
        </div>
      ))}
    </div>
  </main>
);

export default OrdersPage;
