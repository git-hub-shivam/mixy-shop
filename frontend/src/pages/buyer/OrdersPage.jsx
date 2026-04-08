import { SectionHeading } from '@/components/shared/SectionHeading';

const OrdersPage = () => (
  <main className="mx-auto max-w-6xl px-6 py-24 text-white">
    <SectionHeading eyebrow="Orders" title="Recent purchases" description="Review your latest orders and track delivery for a premium buying experience." />
    <div className="mt-12 grid gap-6">
      {['Order #1082', 'Order #1076', 'Order #1069'].map((label) => (
        <div key={label} className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-semibold text-white">{label}</p>
              <p className="text-sm text-slate-400">Delivered in 2 days</p>
            </div>
            <p className="text-lg font-semibold text-orange-400">$314</p>
          </div>
        </div>
      ))}
    </div>
  </main>
);

export default OrdersPage;
