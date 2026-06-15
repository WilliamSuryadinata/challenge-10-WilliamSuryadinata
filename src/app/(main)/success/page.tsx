'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/useCartStore';
import { Check } from 'lucide-react';
import logoColor from '@/assets/icon/logo-foody-color.png';

export default function SuccessPage() {
  const router = useRouter();
  const clearCart = useCartStore((state) => state.clearCart);
  const totalItems = useCartStore((state) => state.getTotalItems());
  const totalPrice = useCartStore((state) => state.getTotalPrice());

  const [receipt] = useState(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    return {
      date: formattedDate,
      method: 'Bank Negara Indonesia',
      items: totalItems,
      price: totalPrice,
      delivery: 10000,
      service: 1000,
      total: totalPrice > 0 ? totalPrice + 10000 + 1000 : 0,
    };
  });

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <main className='w-full min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center p-4 md:p-6'>
      <div className='flex items-center gap-2 md:gap-3 mb-6 md:mb-8'>
        <img
          src={logoColor.src}
          alt='Foody Logo'
          className='w-8 h-8 md:w-10 md:h-10 object-contain'
        />
        <span className='font-bold text-2xl md:text-3xl text-black'>Foody</span>
      </div>

      <div className='bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-lg border border-gray-100 w-full max-w-md flex flex-col items-center text-center'>
        <div className='w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 md:mb-6'>
          <div className='w-10 h-10 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center text-white'>
            <Check size={28} strokeWidth={3} className='md:w-8 md:h-8' />
          </div>
        </div>

        <h1 className='text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2'>
          Payment Success
        </h1>
        <p className='text-gray-500 text-sm md:text-base mb-6 md:mb-8'>
          Your payment has been successfully processed.
        </p>

        <div className='w-full border-t border-dashed border-gray-300 mb-4 md:mb-6'></div>

        <div className='w-full flex flex-col gap-3 md:gap-4 mb-4 md:mb-6'>
          <div className='flex justify-between items-center text-xs md:text-sm'>
            <span className='text-gray-500'>Date</span>
            <span className='font-medium text-gray-900 text-right'>
              {receipt.date}
            </span>
          </div>
          <div className='flex justify-between items-center text-xs md:text-sm'>
            <span className='text-gray-500'>Payment Method</span>
            <span className='font-medium text-gray-900 text-right'>
              {receipt.method}
            </span>
          </div>
          <div className='flex justify-between items-center text-xs md:text-sm'>
            <span className='text-gray-500'>Price ({receipt.items} items)</span>
            <span className='font-medium text-gray-900 text-right'>
              Rp{receipt.price.toLocaleString('id-ID')}
            </span>
          </div>
          <div className='flex justify-between items-center text-xs md:text-sm'>
            <span className='text-gray-500'>Delivery Fee</span>
            <span className='font-medium text-gray-900 text-right'>
              Rp{receipt.delivery.toLocaleString('id-ID')}
            </span>
          </div>
          <div className='flex justify-between items-center text-xs md:text-sm'>
            <span className='text-gray-500'>Service Fee</span>
            <span className='font-medium text-gray-900 text-right'>
              Rp{receipt.service.toLocaleString('id-ID')}
            </span>
          </div>
        </div>

        <div className='w-full border-t border-dashed border-gray-300 mb-4 md:mb-6'></div>

        <div className='w-full flex justify-between items-center mb-8 md:mb-10'>
          <span className='font-bold text-gray-900 text-sm md:text-base'>
            Total
          </span>
          <span className='font-bold text-lg md:text-xl text-[#C12116]'>
            Rp{receipt.total.toLocaleString('id-ID')}
          </span>
        </div>

        <button
          onClick={() => router.push('/profile?tab=orders')}
          className='w-full py-2.5 md:py-3 bg-white border-2 border-[#C12116] text-[#C12116] hover:bg-red-50 font-bold rounded-full transition-colors text-sm md:text-base'
        >
          See My Orders
        </button>
      </div>
    </main>
  );
}
