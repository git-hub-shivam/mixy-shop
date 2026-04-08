import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { SectionHeading } from '@/components/shared/SectionHeading';

const schema = z.object({
  name: z.string().min(3),
  price: z.number().min(1),
  category: z.string().min(2),
  imageUrl: z.string().url(),
});

const AddProduct = () => {
  const form = useForm({ resolver: zodResolver(schema), defaultValues: { name: '', price: 0, category: '', imageUrl: 'https://via.placeholder.com/640' } });

  return (
    <main className="mx-auto max-w-5xl px-6 py-24 text-white">
      <SectionHeading eyebrow="Add product" title="Create a new premium item" description="Upload details for your next shirt or denim drop." />
      <form className="mt-12 space-y-6 rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
        <Input label="Product name" type="text" {...form.register('name')} error={form.formState.errors.name?.message?.toString()} />
        <Input label="Price" type="number" step="1" {...form.register('price', { valueAsNumber: true })} error={form.formState.errors.price?.message?.toString()} />
        <Input label="Category" type="text" {...form.register('category')} error={form.formState.errors.category?.message?.toString()} />
        <Input label="Image URL" type="url" {...form.register('imageUrl')} error={form.formState.errors.imageUrl?.message?.toString()} />
        <Button type="submit" className="w-full">Create product</Button>
      </form>
    </main>
  );
};

export default AddProduct;
