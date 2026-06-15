'use client';

import Link from 'next/link';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { Star } from 'lucide-react';
import imgBurgerKing from '@/assets/icon/burger king symbol.png';

export default function AllRestaurantPage() {
  const distances = ['Nearby', 'Within 1 km', 'Within 3 km', 'Within 5 km'];
  const ratings = [5, 4, 3, 2, 1];

  const restaurants = [
    {
      id: 1,
      name: 'Burger King',
      rating: 4.5,
      location: 'Jl. Jenderal Sudirman',
      distance: '1.2 km',
      image: imgBurgerKing.src,
    },
    {
      id: 2,
      name: 'Burger King (Malioboro)',
      rating: 4.8,
      location: 'Jl. Malioboro',
      distance: '3.5 km',
      image: imgBurgerKing.src,
    },
    {
      id: 3,
      name: 'Burger King (Gejayan)',
      rating: 4.3,
      location: 'Jl. Affandi Gejayan',
      distance: '2.1 km',
      image: imgBurgerKing.src,
    },
    {
      id: 4,
      name: 'Burger King (Kaliurang)',
      rating: 4.6,
      location: 'Jl. Kaliurang KM 5',
      distance: '4.0 km',
      image: imgBurgerKing.src,
    },
    {
      id: 5,
      name: 'Burger King (Seturan)',
      rating: 4.4,
      location: 'Jl. Seturan Raya',
      distance: '1.8 km',
      image: imgBurgerKing.src,
    },
    {
      id: 6,
      name: 'Burger King (Maguwo)',
      rating: 4.7,
      location: 'Jl. Ringroad Utara',
      distance: '5.2 km',
      image: imgBurgerKing.src,
    },
    {
      id: 7,
      name: 'Burger King (Bantul)',
      rating: 4.2,
      location: 'Jl. Bantul KM 6',
      distance: '6.5 km',
      image: imgBurgerKing.src,
    },
    {
      id: 8,
      name: 'Burger King (Godean)',
      rating: 4.5,
      location: 'Jl. Godean KM 4',
      distance: '3.8 km',
      image: imgBurgerKing.src,
    },
  ];

  return (
    <main className='w-full min-h-screen bg-[#F8F9FA] flex flex-col'>
      <Navbar />

      <div className='pt-20 md:pt-28 pb-10 md:pb-16 flex-grow container mx-auto px-4 md:px-6 max-w-7xl'>
        <h1 className='text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8'>
          All Restaurant
        </h1>

        <div className='flex flex-col lg:flex-row gap-6 md:gap-8'>
          {/* --- SIDEBAR FILTER (Kiri) --- */}
          <div className='w-full lg:w-1/4 flex-shrink-0'>
            <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6'>
              <h2 className='text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6'>
                Filter
              </h2>

              {/* DISTANCE */}
              <div className='mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3 md:mb-4'>
                  Distance
                </h3>
                <div className='flex flex-col gap-2 md:gap-3'>
                  {distances.map((dist, index) => (
                    <label
                      key={index}
                      className='flex items-center gap-3 cursor-pointer group'
                    >
                      <input
                        type='checkbox'
                        className='w-4 h-4 text-[#C12116] border-gray-300 rounded focus:ring-[#C12116] cursor-pointer'
                      />
                      <span className='text-sm md:text-base text-gray-600 group-hover:text-gray-900 transition-colors'>
                        {dist}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className='w-full h-px bg-gray-200 my-4 md:my-6'></div>

              {/* PRICE */}
              <div className='mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3 md:mb-4'>
                  Price
                </h3>
                <div className='flex flex-col gap-3 md:gap-4'>
                  <div className='flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#C12116] focus-within:border-transparent transition-all'>
                    <span className='bg-gray-100 px-3 md:px-4 py-2 md:py-3 text-black font-medium border-r border-gray-300 text-sm md:text-base'>
                      Rp
                    </span>
                    <input
                      type='number'
                      placeholder='Minimum Price'
                      className='w-full px-3 py-2 md:py-3 outline-none text-sm text-gray-900 bg-white'
                    />
                  </div>
                  <div className='flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#C12116] focus-within:border-transparent transition-all'>
                    <span className='bg-gray-100 px-3 md:px-4 py-2 md:py-3 text-black font-medium border-r border-gray-300 text-sm md:text-base'>
                      Rp
                    </span>
                    <input
                      type='number'
                      placeholder='Maximum Price'
                      className='w-full px-3 py-2 md:py-3 outline-none text-sm text-gray-900 bg-white'
                    />
                  </div>
                </div>
              </div>

              <div className='w-full h-px bg-gray-200 my-4 md:my-6'></div>

              {/* RATING */}
              <div>
                <h3 className='font-semibold text-gray-800 mb-3 md:mb-4'>
                  Rating
                </h3>
                <div className='flex flex-col gap-2 md:gap-3'>
                  {ratings.map((rate, index) => (
                    <label
                      key={index}
                      className='flex items-center gap-3 cursor-pointer group'
                    >
                      <input
                        type='checkbox'
                        className='w-4 h-4 text-[#C12116] border-gray-300 rounded focus:ring-[#C12116] cursor-pointer'
                      />
                      <div className='flex items-center gap-2 text-gray-600 group-hover:text-gray-900 transition-colors'>
                        <Star
                          size={16}
                          fill='#FFC107'
                          color='#FFC107'
                          className='w-4 h-4 md:w-5 md:h-5'
                        />
                        <span className='font-medium text-sm md:text-base'>
                          {rate}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* --- KONTEN UTAMA: DAFTAR RESTORAN (Kanan) --- */}
          <div className='w-full lg:w-3/4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
              {/* Mapping Daftar Restoran */}
              {restaurants.map((resto) => (
                <Link
                  href='/restaurant'
                  key={resto.id}
                  className='bg-white border border-gray-100 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-row items-center gap-3 md:gap-4'
                >
                  {/* Gambar Restoran (Kiri) */}
                  <div className='w-20 h-20 md:w-24 md:h-24 shrink-0 bg-gray-50 rounded-lg md:rounded-xl flex items-center justify-center border border-gray-100 p-1.5 md:p-2'>
                    <img
                      src={resto.image}
                      alt={resto.name}
                      className='w-12 h-12 md:w-16 md:h-16 object-contain'
                    />
                  </div>

                  {/* Info Restoran (Kanan) */}
                  <div className='flex flex-col flex-1 overflow-hidden'>
                    <h3 className='font-bold text-base md:text-lg text-gray-900 mb-1 truncate'>
                      {resto.name}
                    </h3>

                    <div className='flex items-center gap-1 mb-1'>
                      <Star
                        size={14}
                        fill='#FFC107'
                        color='#FFC107'
                        className='w-3 h-3 md:w-4 md:h-4'
                      />
                      <span className='font-medium text-gray-900 text-xs md:text-sm'>
                        {resto.rating}
                      </span>
                    </div>

                    <div className='flex flex-col gap-0.5 md:gap-1 mt-0.5 md:mt-1'>
                      <span className='text-xs md:text-sm text-gray-500 truncate'>
                        {resto.location}
                      </span>
                      <span className='text-xs md:text-sm font-medium text-[#C12116] whitespace-nowrap'>
                        {resto.distance}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
