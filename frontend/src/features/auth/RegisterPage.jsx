import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { useAuth } from './AuthContext';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';

const schema = z.object({
  name: z.string().min(2, 'Enter a name'),
  email: z.string().email('Enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 chars'),
  role: z.enum(['buyer', 'seller']),
});

const RegisterPage = () => {
  const { signin } = useAuth();
  const form = useForm({ resolver: zodResolver(schema), defaultValues: { name: '', email: '', password: '', role: 'buyer' } });

  const onSubmit = (values) => signin(values);

  return (
    <main className="mx-auto max-w-5xl px-6 py-24 dark:text-white text-black">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border dark:border-white/10 border-gray-300 dark:bg-white/5 bg-gray-100 p-8 shadow-glow backdrop-blur-xl"
      >
        <div className="mb-10 space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] dark:text-blue-200 text-blue-600">Create account</p>
          <h1 className="text-4xl font-display font-semibold dark:text-white text-black">Start selling or shopping with Mixy Shop</h1>
          <p className="max-w-2xl text-sm dark:text-slate-300 text-gray-700">Choose your role and unlock premium buyer and seller tools for the modern lifestyle.</p>
        </div>
        <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
          <Input label="Name" type="text" {...form.register('name')} error={form.formState.errors.name?.message} />
          <Input label="Email" type="email" {...form.register('email')} error={form.formState.errors.email?.message} />
          <Input label="Password" type="password" {...form.register('password')} error={form.formState.errors.password?.message} />
          <Select label="Role" {...form.register('role')} options={[{ value: 'buyer', label: 'Buyer' }, { value: 'seller', label: 'Seller' }]} />
          <Button type="submit" className="w-full">Create account</Button>
        </form>
        <p className="mt-6 text-sm dark:text-slate-400 text-gray-600">
          Already a member?{' '}
          <Link to="/login" className="font-medium dark:text-blue-200 text-blue-600 dark:hover:text-gold-200 hover:text-orange-600">Log in</Link>
        </p>
      </motion.section>
    </main>
  );
};

export default RegisterPage;
