import bgAuth from '@/assets/image/login & register page.png';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex min-h-screen bg-white'>
      {/* Kiri: Gambar Background */}
      <div
        className='hidden lg:flex lg:w-1/2 relative bg-cover bg-center'
        style={{ backgroundImage: `url('${bgAuth.src}')` }}
      >
        <div className='absolute inset-0 bg-black/20'></div>
      </div>

      {/* Kanan: Area Form */}
      <div className='w-full lg:w-1/2 flex items-center justify-center p-8'>
        <div className='w-full max-w-md'>{children}</div>
      </div>
    </div>
  );
}
