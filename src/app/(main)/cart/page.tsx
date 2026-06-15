'use client';

import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { Minus, Plus, ChevronRight } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

import iconResto from '@/assets/icon/Resto.png';

export default function CartPage() {
  const router = useRouter();
  const cartItems = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const decreaseItem = useCartStore((state) => state.decreaseItem);

  const groupedItems = cartItems.reduce(
    (acc, item) => {
      if (!acc[item.restaurant]) {
        acc[item.restaurant] = [];
      }
      acc[item.restaurant].push(item);
      return acc;
    },
    {} as Record<string, typeof cartItems>
  );

  return (
    <main className='w-full min-h-screen bg-[#F8F9FA] flex flex-col'>
      <Navbar />

      <div className='pt-20 md:pt-28 pb-10 md:pb-20 flex-grow container mx-auto px-4 md:px-6 max-w-4xl'>
        <h1 className='text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8'>
          My Cart
        </h1>

        {Object.keys(groupedItems).length === 0 ? (
          <div className='text-center py-12 md:py-20 bg-white rounded-xl border border-gray-100 shadow-sm px-4'>
            <p className='text-gray-500 mb-4 text-sm md:text-base'>
              Your cart is empty.
            </p>
            <button
              onClick={() => router.push('/all-restaurant')}
              className='px-6 py-2 bg-[#C12116] text-white font-medium rounded-full text-sm md:text-base'
            >
              Explore Restaurants
            </button>
          </div>
        ) : (
          <div className='flex flex-col gap-4 md:gap-6'>
            {Object.entries(groupedItems).map(([restaurantName, items]) => {
              const restaurantTotal = items.reduce(
                (total, item) => total + item.price * item.qty,
                0
              );

              return (
                <div
                  key={restaurantName}
                  className='bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100'
                >
                  <div className='flex items-center gap-2 md:gap-3 mb-4 md:mb-6'>
                    <img
                      src={iconResto.src}
                      alt='Resto'
                      className='w-5 h-5 md:w-6 md:h-6 object-contain'
                    />
                    <span className='font-bold text-base md:text-lg text-gray-900'>
                      {restaurantName}
                    </span>
                    <button
                      onClick={() => router.push('/restaurant')}
                      className='text-gray-400 hover:text-gray-700 transition ml-1'
                    >
                      <ChevronRight size={18} className='md:w-5 md:h-5' />
                    </button>
                  </div>

                  <div className='flex flex-col gap-4 md:gap-6 mb-4 md:mb-6'>
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className='flex items-center gap-3 md:gap-4'
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className='w-16 h-16 md:w-20 md:h-20 rounded-lg md:rounded-xl object-cover border border-gray-100'
                        />
                        <div className='flex flex-col flex-grow'>
                          <span className='font-medium text-gray-900 mb-1 text-sm md:text-base'>
                            {item.name}
                          </span>
                          <span className='font-bold text-gray-900 text-sm md:text-base'>
                            Rp{item.price.toLocaleString('id-ID')}
                          </span>
                        </div>

                        <div className='flex items-center gap-2 md:gap-4 bg-white border border-gray-200 rounded-full px-1 py-1 shadow-sm'>
                          <button
                            onClick={() => decreaseItem(item.id)}
                            className='w-6 h-6 md:w-8 md:h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50'
                          >
                            <Minus size={14} className='md:w-4 md:h-4' />
                          </button>
                          <span className='font-medium text-gray-900 w-3 md:w-4 text-center text-xs md:text-sm'>
                            {item.qty}
                          </span>
                          <button
                            onClick={() => addItem(item)}
                            className='w-6 h-6 md:w-8 md:h-8 bg-[#C12116] rounded-full flex items-center justify-center text-white hover:bg-[#a01b12]'
                          >
                            <Plus size={14} className='md:w-4 md:h-4' />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className='w-full border-t border-dashed border-gray-300 mb-4 md:mb-6'></div>

                  <div className='flex items-center justify-between'>
                    <div className='flex flex-col'>
                      <span className='text-gray-500 text-xs md:text-sm font-medium'>
                        Total
                      </span>
                      <span className='font-bold text-lg md:text-xl text-gray-900'>
                        Rp{restaurantTotal.toLocaleString('id-ID')}
                      </span>
                    </div>
                    <button
                      onClick={() => router.push('/checkout')}
                      className='px-6 py-2 md:px-10 md:py-3 bg-[#C12116] hover:bg-[#a01b12] text-white font-semibold rounded-full shadow-sm transition text-sm md:text-base'
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
