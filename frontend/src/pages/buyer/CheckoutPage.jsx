import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/shared/SectionHeading';

const CheckoutPage = () => (
  <main className="mx-auto max-w-6xl px-6 py-24 text-white">
    <SectionHeading eyebrow="Checkout" title="Confirm your order" description="A clean and premium checkout flow with payment details and delivery summary." />
    <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-200">Full name</label>
            <input className="mt-3 w-full rounded-3xl border border-white/10 bg-mixy-950/80 px-4 py-3 text-white" value="Valentina Rossi" readOnly />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-200">Shipping address</label>
            <input className="mt-3 w-full rounded-3xl border border-white/10 bg-mixy-950/80 px-4 py-3 text-white" value="123 Atelier Ave, Milan" readOnly />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-200">Payment method</label>
            <input className="mt-3 w-full rounded-3xl border border-white/10 bg-mixy-950/80 px-4 py-3 text-white" value="Visa ending 1234" readOnly />
          </div>
          <Button type="submit" className="w-full">Complete purchase</Button>
        </form>
      </div>
      <aside className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.35em] text-blue-200">Order details</p>
        <div className="mt-6 space-y-4 text-slate-300">
          <div className="flex justify-between"><span>Luxury Denim</span><span>$198</span></div>
          <div className="flex justify-between"><span>Structured Shirt</span><span>$128</span></div>
          <div className="flex justify-between"><span>Shipping</span><span>$14</span></div>
        </div>
        <div className="mt-8 flex justify-between border-t border-white/10 pt-6 text-white"><span>Total</span><span>$340</span></div>
      </aside>
    </div>
  </main>
);

export default CheckoutPage;
