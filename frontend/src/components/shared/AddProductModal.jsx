import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Dialog, DialogContent, DialogTitle } from '@radix-ui/react-dialog';

const schema = z.object({
  name: z.string().min(3),
  price: z.number().min(1),
  category: z.string().min(2),
  imageUrl: z.string().optional(),
});

export const AddProductModal = ({ open, onOpenChange }) => {
  const form = useForm({ resolver: zodResolver(schema), defaultValues: { name: '', price: 0, category: '', imageUrl: '' } });

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        form.setValue('imageUrl', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (values) => {
    const newProduct = {
      id: Date.now().toString(),
      name: values.name,
      price: values.price,
      category: values.category,
      image: values.imageUrl || 'https://via.placeholder.com/640',
      description: `${values.name} - ${values.category}`,
    };
    const existing = JSON.parse(localStorage.getItem('custom-products') || '[]');
    existing.push(newProduct);
    localStorage.setItem('custom-products', JSON.stringify(existing));
    alert('Product added!');
    onOpenChange(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20">
        <div className="w-full max-w-md rounded-[36px] border dark:border-white/10 dark:bg-mixy-950 border-gray-300 bg-white p-8 shadow-glow backdrop-blur-xl">
          <DialogTitle className="text-xl font-semibold dark:text-white text-black">Add New Product</DialogTitle>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
            <Input label="Product name" type="text" {...form.register('name')} error={form.formState.errors.name?.message?.toString()} />
            <Input label="Price" type="number" step="1" {...form.register('price', { valueAsNumber: true })} error={form.formState.errors.price?.message?.toString()} />
            <Input label="Category" type="text" {...form.register('category')} error={form.formState.errors.category?.message?.toString()} />
            <div>
              <label className="block text-sm dark:text-slate-200 text-gray-700 mb-2">Product Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full rounded-3xl border dark:border-white/10 border-gray-300 dark:bg-white/5 bg-gray-100 px-4 py-3 dark:text-white text-black focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300/20"
              />
            </div>
            <Button type="submit" className="w-full">Create product</Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
