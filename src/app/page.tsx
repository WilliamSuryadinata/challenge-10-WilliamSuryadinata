import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { Search, MapPin } from 'lucide-react';
import Link from 'next/link';

// 1. IMPORT DATA DARI FILE CONSTANTS
import { CATEGORIES, RECOMMENDED_RESTAURANTS, ICONS } from '@/lib/constants';

// 2. IMPORT BACKGROUND SAJA
import bgHome from '@/assets/image/Home-page.png';

export default function HomePage() {
  return (
    <main className='w-full min-h-screen bg-white'>
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section
        className='relative w-full h-[60vh] md:h-[80vh] min-h-[400px] md:min-h-[600px] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url('${bgHome.src}')` }}
      >
        <div className='absolute inset-0 bg-black/40 z-0'></div>
        <div className='relative z-10 w-full max-w-4xl px-4 md:px-6 flex flex-col items-center text-center mt-10 md:mt-0'>
          <h1 className='text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight'>
            Explore Culinary Experience
          </h1>
          <p className='text-sm md:text-xl text-gray-200 mb-8 md:mb-10 max-w-2xl px-4 md:px-0'>
            Search and refine your choice to discover the perfect restaurant
          </p>

          <div className='w-full max-w-3xl bg-white rounded-full p-1.5 md:p-2 flex items-center shadow-xl'>
            <div className='pl-3 md:pl-4 pr-1 md:pr-2 text-gray-400'>
              {/* Ukuran icon search disesuaikan untuk HP dan PC */}
              <Search size={20} className='md:w-6 md:h-6' />
            </div>
            <input
              type='text'
              placeholder='Search restaurants, food and drink'
              className='w-full bg-transparent border-none outline-none text-gray-800 py-2 md:py-3 px-2 text-sm md:text-lg placeholder:text-gray-400'
            />
          </div>
        </div>
      </section>

      {/* --- KONTEN UTAMA --- */}
      {/* Padding container disesuaikan untuk HP */}
      <section className='container mx-auto px-4 md:px-6 max-w-7xl py-10 md:py-16'>
        {/* 1. Fitur Kategori (DIUBAH MENJADI LINK DI SINI) */}
        {/* Diubah menjadi 3 kolom di HP agar lebih rapi */}
        <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-12 md:mb-20'>
          {CATEGORIES.map((cat, index) => {
            // Logika pengecekan: Jika namanya "All Restaurant", arahkan ke "/all-restaurant"
            const isAllRestaurant = cat.name === 'All Restaurant';

            return (
              <Link
                href={isAllRestaurant ? '/all-restaurant' : '#'}
                key={index}
                className='flex flex-col items-center justify-center p-3 md:p-6 bg-white border border-gray-100 rounded-xl md:rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer'
              >
                <img
                  src={cat.icon.src}
                  alt={cat.name}
                  className='w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-4 object-contain'
                />
                <span className='text-xs md:text-sm font-medium text-gray-700 text-center leading-tight'>
                  {cat.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* 2. Recommended Restoran */}
        <div className='flex items-center justify-between mb-6 md:mb-8'>
          <h2 className='text-xl md:text-2xl font-bold text-gray-900'>
            Recommended
          </h2>
          <Link
            href='/restaurants'
            className='text-sm md:text-base font-medium text-blue-600 hover:text-blue-800 hover:underline transition'
          >
            See all
          </Link>
        </div>

        {/* 3. Grid Restoran */}
        {/* Di HP jadi 1 kolom ke bawah, di PC kembali ke 2-3 kolom */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-20'>
          {RECOMMENDED_RESTAURANTS.map((resto, index) => (
            <Link
              href='/restaurant' // <-- TAMBAHKAN LINK ARAH KE HALAMAN RESTORAN
              key={index}
              className='flex items-center p-3 md:p-4 bg-white border border-gray-100 rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg hover:border-gray-200 transition-all duration-300 cursor-pointer'
            >
              <div className='w-16 h-16 md:w-20 md:h-20 shrink-0 bg-gray-50 rounded-lg md:rounded-xl flex items-center justify-center p-2 mr-3 md:mr-4 border border-gray-100'>
                <img
                  src={resto.icon.src}
                  alt={resto.name}
                  className='w-full h-full object-contain'
                />
              </div>

              <div className='flex-1 min-w-0'>
                <h3 className='font-bold text-base md:text-lg text-gray-900 mb-1 truncate'>
                  {resto.name}
                </h3>
                <div className='flex items-center text-xs md:text-sm text-gray-600 mb-1'>
                  <img
                    src={ICONS.star.src}
                    alt='Star'
                    className='w-3 h-3 md:w-4 md:h-4 mr-1 object-contain'
                  />
                  <span className='font-medium mr-2 md:mr-3'>
                    {resto.rating}
                  </span>
                  <span className='text-gray-400'>•</span>
                  <MapPin
                    size={12}
                    className='ml-2 md:ml-3 mr-1 text-gray-400'
                  />
                  <span className='truncate'>{resto.distance}</span>
                </div>
                <p className='text-xs md:text-sm text-gray-500 truncate'>
                  {resto.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
