import { SectionHeading } from '@/components/shared/SectionHeading';

const ProfilePage = () => (
  <main className="mx-auto max-w-5xl px-6 py-24 text-white">
    <SectionHeading eyebrow="Profile" title="Your account details" description="A focused area to manage your Mixy buyer profile and preferences." />
    <div className="mt-12 rounded-[36px] border border-white/10 bg-white/5 p-10 shadow-glow backdrop-blur-xl">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-blue-200">Name</p>
          <p className="mt-3 text-xl text-white">Valentina Rossi</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-blue-200">Email</p>
          <p className="mt-3 text-xl text-white">valentina@mixyshop.com</p>
        </div>
      </div>
    </div>
  </main>
);

export default ProfilePage;
