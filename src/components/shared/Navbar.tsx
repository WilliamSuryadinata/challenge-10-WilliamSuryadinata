'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useAuthStore } from '@/store/useAuthStore';
import logoColor from '@/assets/icon/logo-foody-color.png';
import logoWhite from '@/assets/icon/logo-group.png';
import iconNotif from '@/assets/icon/order notification.png';
import imgProfile from '@/assets/image/profile.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const user = useAuthStore((state) => state.user);
  const checkSession = useAuthStore((state) => state.checkSession);

  // Jika sedang di halaman profile, paksa navbar menjadi versi warna solid (terang)
  const isProfilePage = pathname === '/profile';
  const isAllRestaurantPage = pathname === '/all-restaurant';
  const isRestaurantPage = pathname === '/restaurant';
  const isCartPage = pathname === '/cart';
  const iscCheckoutPage = pathname === '/checkout';
  const forceLightMode =
    isScrolled ||
    isProfilePage ||
    isAllRestaurantPage ||
    isRestaurantPage ||
    isCartPage ||
    iscCheckoutPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    checkSession();
    const interval = setInterval(() => {
      checkSession();
    }, 60000);
    return () => clearInterval(interval);
  }, [checkSession]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        forceLightMode ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between'>
        <Link href='/' className='flex items-center gap-2 md:gap-3'>
          <Image
            src={forceLightMode ? logoColor : logoWhite}
            alt='Foody Logo'
            width={40}
            height={40}
            className='object-contain w-8 h-8 md:w-10 md:h-10'
          />
          <span
            className={`font-bold text-xl md:text-2xl ${
              forceLightMode ? 'text-black' : 'text-white'
            }`}
          >
            Foody
          </span>
        </Link>

        <div className='flex items-center gap-2 md:gap-4'>
          {user ? (
            <div className='flex items-center gap-3 md:gap-6'>
              <button className='relative p-1.5 md:p-2 rounded-full hover:bg-gray-100/20 transition'>
                <img
                  src={iconNotif.src}
                  alt='Order Notification'
                  className={`w-5 h-5 md:w-6 md:h-6 object-contain transition-all duration-300 ${
                    forceLightMode ? 'brightness-0' : ''
                  }`}
                />
                <span className='absolute top-1 right-1.5 md:right-2 w-2 h-2 bg-red-500 rounded-full'></span>
              </button>

              <Link
                href='/profile'
                className='flex items-center gap-2 md:gap-3 cursor-pointer'
              >
                <img
                  src={imgProfile.src}
                  alt='Profile'
                  className='w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-white shadow-sm'
                />
                {/* Nama disembunyikan di HP agar tidak sempit, muncul kembali di PC */}
                <span
                  className={`hidden md:block font-medium ${
                    forceLightMode ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  {user.name}
                </span>
              </Link>
            </div>
          ) : (
            <>
              <Link
                href='/login'
                className={`px-4 py-2 md:px-12 md:py-3 border border-white rounded-full text-sm md:text-base font-medium transition-colors ${
                  forceLightMode
                    ? 'text-black hover:bg-gray-100'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                Sign In
              </Link>
              <Link
                href='/register'
                className='px-4 py-2 md:px-12 md:py-3 bg-white text-black text-sm md:text-base font-semibold rounded-full shadow-sm hover:bg-gray-400 transition-colors'
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
