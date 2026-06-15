'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { Minus, Plus } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

import iconResto from '@/assets/icon/Resto.png';
import iconAddress from '@/assets/icon/delivery address.png';
import iconBNI from '@/assets/icon/BNI.png';
import iconBRI from '@/assets/icon/BRI.png';
import iconBCA from '@/assets/icon/BCA.png';
import iconMandiri from '@/assets/icon/Mandiri.png';

export default function CheckoutPage() {
  const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState<string>('BNI');

  const cartItems = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const decreaseItem = useCartStore((state) => state.decreaseItem);
  const totalItems = useCartStore((state) => state.getTotalItems());
  const totalPrice = useCartStore((state) => state.getTotalPrice());

  const deliveryFee = 10000;
  const serviceFee = 1000;
  const finalTotal = totalPrice > 0 ? totalPrice + deliveryFee + serviceFee : 0;

  const handleBuy = () => {
    router.push('/success');
  };

  return (
    <main className='w-full min-h-screen bg-[#F8F9FA] flex flex-col'>
      <Navbar />

      <div className='pt-20 md:pt-28 pb-10 md:pb-20 flex-grow container mx-auto px-4 md:px-6 max-w-6xl'>
        <h1 className='text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8'>
          Checkout
        </h1>

        <div className='flex flex-col lg:flex-row gap-6 md:gap-8'>
          {/* KOLOM KIRI */}
          <div className='w-full lg:w-2/3 flex flex-col gap-4 md:gap-6'>
            <div className='bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100'>
              <div className='flex items-center gap-2 md:gap-3 mb-3 md:mb-4'>
                <img
                  src={iconAddress.src}
                  alt='Address'
                  className='w-5 h-5 md:w-6 md:h-6 object-contain'
                />
                <h2 className='font-bold text-base md:text-lg text-gray-900'>
                  Delivery Address
                </h2>
              </div>
              <p className='text-gray-700 text-sm md:text-base mb-1'>
                Jl. Sudirman No. 25, Jakarta Pusat, 10220
              </p>
              <p className='text-gray-700 text-sm md:text-base mb-3 md:mb-4'>
                0812-3456-7890
              </p>
              <button className='px-5 py-1.5 md:px-6 md:py-2 border border-gray-300 text-gray-700 text-sm md:text-base font-medium rounded-full hover:bg-gray-50 transition w-fit'>
                Change
              </button>
            </div>

            <div className='bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100'>
              <div className='flex items-center justify-between mb-4 md:mb-6'>
                <div className='flex items-center gap-2 md:gap-3'>
                  <img
                    src={iconResto.src}
                    alt='Resto'
                    className='w-5 h-5 md:w-6 md:h-6 object-contain'
                  />
                  <h2 className='font-bold text-base md:text-lg text-gray-900'>
                    Burger King
                  </h2>
                </div>
                <button
                  onClick={() => router.push('/restaurant')}
                  className='px-3 py-1.5 md:px-4 md:py-2 border border-gray-300 text-gray-700 text-xs md:text-sm font-medium rounded-full hover:bg-gray-50 transition'
                >
                  Add item
                </button>
              </div>

              <div className='flex flex-col gap-4 md:gap-6'>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className='flex items-center gap-3 md:gap-4'
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-14 h-14 md:w-16 md:h-16 rounded-lg md:rounded-xl object-cover border border-gray-100'
                    />
                    <div className='flex flex-col flex-grow'>
                      <span className='font-medium text-gray-900 mb-0.5 md:mb-1 text-sm'>
                        {item.name}
                      </span>
                      <span className='font-bold text-gray-900 text-sm'>
                        Rp{item.price.toLocaleString('id-ID')}
                      </span>
                    </div>

                    <div className='flex items-center gap-2 md:gap-3 bg-white border border-gray-200 rounded-full px-1 py-1 shadow-sm'>
                      <button
                        onClick={() => decreaseItem(item.id)}
                        className='w-6 h-6 md:w-7 md:h-7 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50'
                      >
                        <Minus size={12} className='md:w-[14px] md:h-[14px]' />
                      </button>
                      <span className='font-medium text-gray-900 w-3 text-center text-xs md:text-sm'>
                        {item.qty}
                      </span>
                      <button
                        onClick={() => addItem(item)}
                        className='w-6 h-6 md:w-7 md:h-7 bg-[#C12116] rounded-full flex items-center justify-center text-white hover:bg-[#a01b12]'
                      >
                        <Plus size={12} className='md:w-[14px] md:h-[14px]' />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* KOLOM KANAN */}
          <div className='w-full lg:w-1/3 flex flex-col gap-4 md:gap-6'>
            <div className='bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100'>
              <h2 className='font-bold text-base md:text-lg text-gray-900 mb-4 md:mb-6'>
                Payment Method
              </h2>

              <div className='flex flex-col'>
                {[
                  { id: 'BNI', name: 'Bank Negara Indonesia', icon: iconBNI },
                  { id: 'BRI', name: 'Bank Rakyat Indonesia', icon: iconBRI },
                  { id: 'BCA', name: 'Bank Central Asia', icon: iconBCA },
                  { id: 'Mandiri', name: 'Mandiri', icon: iconMandiri },
                ].map((bank, index, array) => (
                  <div key={bank.id} className='flex flex-col'>
                    <label className='flex items-center justify-between cursor-pointer py-2 md:py-3 group'>
                      <div className='flex items-center gap-3 md:gap-4'>
                        <div className='w-10 h-7 md:w-12 md:h-8 border border-gray-200 rounded flex items-center justify-center bg-white'>
                          <img
                            src={bank.icon.src}
                            alt={bank.id}
                            className='max-w-[80%] max-h-[80%] object-contain'
                          />
                        </div>
                        <span className='text-gray-700 text-xs md:text-sm font-medium'>
                          {bank.name}
                        </span>
                      </div>
                      <input
                        type='radio'
                        name='paymentMethod'
                        value={bank.id}
                        checked={selectedPayment === bank.id}
                        onChange={(e) => setSelectedPayment(e.target.value)}
                        className='w-4 h-4 md:w-5 md:h-5 text-[#C12116] border-gray-300 focus:ring-[#C12116] cursor-pointer'
                      />
                    </label>
                    <div
                      className={`w-full border-t ${index === array.length - 1 ? 'border-dashed border-gray-300' : 'border-gray-100'} my-1`}
                    ></div>
                  </div>
                ))}
              </div>

              <h2 className='font-bold text-base md:text-lg text-gray-900 mt-4 md:mt-6 mb-3 md:mb-4'>
                Payment Summary
              </h2>
              <div className='flex flex-col gap-2 md:gap-3 mb-3 md:mb-4'>
                <div className='flex justify-between items-center text-xs md:text-sm'>
                  <span className='text-gray-600'>
                    Price ( {totalItems} items )
                  </span>
                  <span className='font-medium text-gray-900'>
                    Rp{totalPrice.toLocaleString('id-ID')}
                  </span>
                </div>
                <div className='flex justify-between items-center text-xs md:text-sm'>
                  <span className='text-gray-600'>Delivery Fee</span>
                  <span className='font-medium text-gray-900'>
                    Rp{deliveryFee.toLocaleString('id-ID')}
                  </span>
                </div>
                <div className='flex justify-between items-center text-xs md:text-sm'>
                  <span className='text-gray-600'>Service Fee</span>
                  <span className='font-medium text-gray-900'>
                    Rp{serviceFee.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              <div className='w-full border-t border-dashed border-gray-300 mb-3 md:mb-4'></div>

              <div className='flex justify-between items-center mb-6 md:mb-8'>
                <span className='font-bold text-gray-900 text-sm md:text-base'>
                  Total
                </span>
                <span className='font-bold text-base md:text-lg text-gray-900'>
                  Rp{finalTotal.toLocaleString('id-ID')}
                </span>
              </div>

              <button
                onClick={handleBuy}
                disabled={totalItems === 0}
                className='w-full py-2.5 md:py-3 bg-[#C12116] hover:bg-[#a01b12] text-white font-bold rounded-full shadow-sm transition disabled:opacity-50 text-sm md:text-base'
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
