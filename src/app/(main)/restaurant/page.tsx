'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { Star, Share2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

import imgBurgerKing from '@/assets/icon/burger king symbol.png';
import imgHero1 from '@/assets/image/burger 1.png';
import imgHero2 from '@/assets/image/Home-page.png';
import imgHero3 from '@/assets/image/burger 2.png';
import imgHero4 from '@/assets/image/burger 3.png';
import menu1 from '@/assets/image/menu-1.png';
import menu2 from '@/assets/image/menu-2.png';
import menu3 from '@/assets/image/menu-3.png';
import menu4 from '@/assets/image/menu-4.png';
import profileImg from '@/assets/image/profile.png';

export default function RestaurantDetailPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('All Menu');

  const cartItems = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const decreaseItem = useCartStore((state) => state.decreaseItem);
  const totalItems = useCartStore((state) => state.getTotalItems());
  const totalPrice = useCartStore((state) => state.getTotalPrice());

  const menus = [
    {
      id: 'm1',
      name: 'Whopper Burger',
      price: 50000,
      category: 'Food',
      image: menu1.src,
    },
    {
      id: 'm2',
      name: 'Spaghetti Bolognese',
      price: 45000,
      category: 'Food',
      image: menu2.src,
    },
    {
      id: 'm3',
      name: 'French Fries',
      price: 25000,
      category: 'Food',
      image: menu3.src,
    },
    {
      id: 'm4',
      name: 'Pepperoni Pizza',
      price: 85000,
      category: 'Food',
      image: menu4.src,
    },
  ];

  const filteredMenus =
    activeTab === 'All Menu'
      ? menus
      : menus.filter((m) => m.category === activeTab);

  const reviews = [
    {
      id: 1,
      name: 'Michael Brown',
      date: '25 August 2025, 12:00',
      rating: 5,
      comment:
        'What a wonderful experience! The food is absolutely delightful.',
    },
    {
      id: 2,
      name: 'Sarah Davis',
      date: '25 August 2025, 12:30',
      rating: 5,
      comment:
        'Absolutely amazing! The staff was wonderful and the food was...',
    },
    {
      id: 3,
      name: 'David Wilson',
      date: '24 August 2025, 14:00',
      rating: 5,
      comment:
        'The place exceeded my expectations. The staff were very welcoming.',
    },
  ];

  return (
    <main className='w-full min-h-screen bg-[#F8F9FA] flex flex-col relative pb-24 md:pb-28'>
      <Navbar />

      <div className='pt-20 md:pt-28 container mx-auto px-4 md:px-6 max-w-7xl flex-grow'>
        {/* --- 1. HERO IMAGES --- */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8'>
          <div className='h-48 md:h-[400px] rounded-xl md:rounded-2xl overflow-hidden'>
            <img
              src={imgHero1.src}
              alt='Burger King'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='grid grid-cols-2 gap-3 md:gap-4 h-48 md:h-[400px]'>
            <div className='col-span-2 rounded-xl md:rounded-2xl overflow-hidden'>
              <img
                src={imgHero2.src}
                alt='Promo'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='rounded-xl md:rounded-2xl overflow-hidden'>
              <img
                src={imgHero3.src}
                alt='Food'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='rounded-xl md:rounded-2xl overflow-hidden'>
              <img
                src={imgHero4.src}
                alt='Food'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>

        {/* --- 2. RESTAURANT INFO --- */}
        <div className='flex justify-between items-start mb-6 md:mb-8'>
          <div className='flex items-center gap-3 md:gap-4'>
            <div className='w-14 h-14 md:w-16 md:h-16 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm'>
              <img
                src={imgBurgerKing.src}
                alt='Burger King'
                className='w-8 h-8 md:w-10 md:h-10 object-contain'
              />
            </div>
            <div>
              <h1 className='text-xl md:text-2xl font-bold text-gray-900'>
                Burger King
              </h1>
              <div className='flex items-center gap-1 mt-0.5 md:mt-1'>
                <Star
                  size={14}
                  fill='#FFC107'
                  color='#FFC107'
                  className='w-3 h-3 md:w-4 md:h-4'
                />
                <span className='font-medium text-gray-900 text-xs md:text-sm'>
                  4.9
                </span>
              </div>
              <p className='text-xs md:text-sm text-gray-500 mt-0.5 md:mt-1'>
                Jakarta Selatan • 2.4 km
              </p>
            </div>
          </div>

          <button className='flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition'>
            <Share2 size={14} className='text-gray-600 md:w-4 md:h-4' />
            <span className='text-xs md:text-sm font-medium text-gray-700'>
              Share
            </span>
          </button>
        </div>
        <div className='w-full h-px bg-gray-200 mb-6 md:mb-8'></div>

        {/* --- 3. MENU SECTION --- */}
        <h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6'>
          Menu
        </h2>

        {/* TABS (Bisa di-scroll ke samping di HP) */}
        <div className='flex items-center gap-2 md:gap-3 mb-6 md:mb-8 overflow-x-auto pb-2 scrollbar-hide whitespace-nowrap'>
          {['All Menu', 'Food', 'Drink'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-1.5 md:px-6 md:py-2 rounded-full border text-xs md:text-sm font-medium transition-all ${
                activeTab === tab
                  ? 'border-[#C12116] text-[#C12116] bg-red-50'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300 bg-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* MENU GRID */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8'>
          {filteredMenus.map((menu) => {
            const cartItem = cartItems.find((item) => item.id === menu.id);
            const qty = cartItem ? cartItem.qty : 0;

            return (
              <div
                key={menu.id}
                className='bg-white rounded-xl md:rounded-2xl p-3 md:p-4 shadow-sm border border-gray-100 flex flex-col'
              >
                <img
                  src={menu.image}
                  alt={menu.name}
                  className='w-full h-32 md:h-40 object-cover rounded-lg md:rounded-xl mb-3 md:mb-4'
                />
                <h3 className='font-bold text-gray-900 text-sm md:text-base mb-1'>
                  {menu.name}
                </h3>
                <div className='flex items-center justify-between mt-auto pt-2'>
                  <span className='font-semibold text-gray-900 text-sm md:text-base'>
                    Rp{menu.price.toLocaleString('id-ID')}
                  </span>

                  {qty === 0 ? (
                    <button
                      onClick={() =>
                        addItem({ ...menu, restaurant: 'Burger King', qty: 1 })
                      }
                      className='px-4 py-1.5 md:px-6 md:py-1.5 bg-[#C12116] text-white text-xs md:text-sm font-medium rounded-full hover:bg-[#a01b12] transition'
                    >
                      Add
                    </button>
                  ) : (
                    <div className='flex items-center gap-2 md:gap-3 bg-gray-50 border border-gray-200 rounded-full px-1 py-1'>
                      <button
                        onClick={() => decreaseItem(menu.id)}
                        className='w-5 h-5 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center text-gray-600 shadow-sm'
                      >
                        <Minus size={12} className='md:w-[14px] md:h-[14px]' />
                      </button>
                      <span className='font-medium text-xs md:text-sm text-gray-900 w-2 text-center'>
                        {qty}
                      </span>
                      <button
                        onClick={() =>
                          addItem({
                            ...menu,
                            restaurant: 'Burger King',
                            qty: 1,
                          })
                        }
                        className='w-5 h-5 md:w-6 md:h-6 bg-[#C12116] rounded-full flex items-center justify-center text-white shadow-sm'
                      >
                        <Plus size={12} className='md:w-[14px] md:h-[14px]' />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className='flex justify-center mb-6 md:mb-8'>
          <button className='px-6 py-2 md:px-8 md:py-2.5 bg-white border border-gray-200 text-gray-700 text-sm md:text-base font-medium rounded-full hover:bg-gray-50 transition shadow-sm'>
            Show More
          </button>
        </div>
        <div className='w-full h-px bg-gray-200 mb-6 md:mb-8'></div>

        {/* --- 4. REVIEW SECTION --- */}
        <h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-2'>
          Review
        </h2>
        <div className='flex items-center gap-2 mb-6 md:mb-8'>
          <Star
            size={16}
            fill='#FFC107'
            color='#FFC107'
            className='md:w-5 md:h-5'
          />
          <span className='font-bold text-base md:text-lg text-gray-900'>
            4.9
          </span>
          <span className='text-xs md:text-sm text-gray-500'>(24 Ulasan)</span>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8'>
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className='bg-white border border-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm'
            >
              <div className='flex items-center gap-3 mb-3'>
                <img
                  src={profileImg.src}
                  alt={rev.name}
                  className='w-8 h-8 md:w-10 md:h-10 rounded-full object-cover'
                />
                <div>
                  <h4 className='font-bold text-gray-900 text-xs md:text-sm'>
                    {rev.name}
                  </h4>
                  <p className='text-[10px] md:text-xs text-gray-500'>
                    {rev.date}
                  </p>
                </div>
              </div>
              <div className='flex gap-1 mb-2 md:mb-3'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    fill={i < rev.rating ? '#FFC107' : '#E5E7EB'}
                    color={i < rev.rating ? '#FFC107' : '#E5E7EB'}
                    className='md:w-3.5 md:h-3.5'
                  />
                ))}
              </div>
              <p className='text-xs md:text-sm text-gray-600 line-clamp-3'>
                {rev.comment}
              </p>
            </div>
          ))}
        </div>

        <div className='flex justify-center mb-12 md:mb-16'>
          <button className='px-6 py-2 md:px-8 md:py-2.5 bg-white border border-gray-200 text-gray-700 text-sm md:text-base font-medium rounded-full hover:bg-gray-50 transition shadow-sm'>
            Show More
          </button>
        </div>
      </div>

      <Footer />

      {/* --- 5. FLOATING BOTTOM NAVBAR (Keranjang Notifikasi) --- */}
      {totalItems > 0 && (
        <div className='fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 animate-fade-in-up'>
          <div className='container mx-auto px-4 md:px-6 py-3 md:py-4 max-w-7xl flex items-center justify-between'>
            <div className='flex items-center gap-3 md:gap-4'>
              <div className='relative'>
                <ShoppingBag
                  size={24}
                  className='text-gray-900 md:w-7 md:h-7'
                />
              </div>
              <div className='flex flex-col'>
                <span className='font-bold text-gray-900 text-sm md:text-base'>
                  {totalItems} Items
                </span>
                <span className='font-bold text-[#C12116] text-sm md:text-base'>
                  Rp{totalPrice.toLocaleString('id-ID')}
                </span>
              </div>
            </div>
            <button
              onClick={() => router.push('/cart')}
              className='px-6 py-2 md:px-10 md:py-3 bg-[#C12116] hover:bg-[#a01b12] text-white text-sm md:text-base font-semibold rounded-full transition-colors shadow-sm'
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
