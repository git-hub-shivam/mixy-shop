import { SectionHeading } from '@/components/shared/SectionHeading';

const SellerAnalytics = () => {
  // Mock data
  const ordersData = [
    { month: 'Jan', orders: 45 },
    { month: 'Feb', orders: 52 },
    { month: 'Mar', orders: 38 },
    { month: 'Apr', orders: 61 },
  ];
  const maxOrders = Math.max(...ordersData.map(d => d.orders));

  const stocksData = [
    { product: 'Headphones', stock: 120 },
    { product: 'Laptops', stock: 85 },
    { product: 'Phones', stock: 200 },
    { product: 'Tablets', stock: 95 },
  ];
  const maxStock = Math.max(...stocksData.map(d => d.stock));

  const profitLoss = {
    totalRevenue: 15420,
    totalCost: 11200,
    profit: 4220,
    loss: 0,
  };

  const recentOrders = [
    { id: '3312', customer: 'John Doe', amount: 299, status: 'Shipped' },
    { id: '3315', customer: 'Jane Smith', amount: 499, status: 'Processing' },
    { id: '3318', customer: 'Bob Johnson', amount: 199, status: 'Delivered' },
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-24 dark:text-white text-black">
      <SectionHeading eyebrow="Seller analytics" title="Performance insights" description="Track your sales, inventory, and financial metrics with detailed analytics." />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Orders Graph */}
        <div className="rounded-[32px] border dark:border-white/10 border-gray-300 dark:bg-white/5 bg-gray-100 p-8 shadow-glow backdrop-blur-xl">
          <h3 className="text-xl font-semibold dark:text-white text-black mb-6">Monthly Orders</h3>
          <div className="space-y-4">
            {ordersData.map((data) => (
              <div key={data.month} className="flex items-center gap-4">
                <span className="w-12 text-sm dark:text-slate-400 text-gray-600">{data.month}</span>
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                  <div
                    className="bg-orange-500 h-4 rounded-full"
                    style={{ width: `${(data.orders / maxOrders) * 100}%` }}
                  ></div>
                </div>
                <span className="w-12 text-sm text-right dark:text-white text-black">{data.orders}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stocks */}
        <div className="rounded-[32px] border dark:border-white/10 border-gray-300 dark:bg-white/5 bg-gray-100 p-8 shadow-glow backdrop-blur-xl">
          <h3 className="text-xl font-semibold dark:text-white text-black mb-6">Stock Levels</h3>
          <div className="space-y-4">
            {stocksData.map((data) => (
              <div key={data.product} className="flex items-center gap-4">
                <span className="flex-1 text-sm dark:text-slate-400 text-gray-600">{data.product}</span>
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                  <div
                    className="bg-blue-500 h-4 rounded-full"
                    style={{ width: `${(data.stock / maxStock) * 100}%` }}
                  ></div>
                </div>
                <span className="w-12 text-sm text-right dark:text-white text-black">{data.stock}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Profit/Loss */}
        <div className="rounded-[32px] border dark:border-white/10 border-gray-300 dark:bg-white/5 bg-gray-100 p-8 shadow-glow backdrop-blur-xl">
          <h3 className="text-xl font-semibold dark:text-white text-black mb-6">Financial Overview</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-500">${profitLoss.totalRevenue}</p>
              <p className="text-sm dark:text-slate-400 text-gray-600">Total Revenue</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-500">${profitLoss.totalCost}</p>
              <p className="text-sm dark:text-slate-400 text-gray-600">Total Cost</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-500">${profitLoss.profit}</p>
              <p className="text-sm dark:text-slate-400 text-gray-600">Profit</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-500">${profitLoss.loss}</p>
              <p className="text-sm dark:text-slate-400 text-gray-600">Loss</p>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="rounded-[32px] border dark:border-white/10 border-gray-300 dark:bg-white/5 bg-gray-100 p-8 shadow-glow backdrop-blur-xl">
          <h3 className="text-xl font-semibold dark:text-white text-black mb-6">Recent Orders</h3>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 rounded-3xl dark:bg-mixy-950/70 bg-gray-200">
                <div>
                  <p className="font-semibold dark:text-white text-black">Order #{order.id}</p>
                  <p className="text-sm dark:text-slate-400 text-gray-600">{order.customer}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-orange-400">${order.amount}</p>
                  <p className="text-sm dark:text-slate-400 text-gray-600">{order.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SellerAnalytics;