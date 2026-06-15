'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { useAuthStore } from '@/store/useAuthStore';
import { MapPin, FileText, LogOut, User } from 'lucide-react';
import imgProfile from '@/assets/image/profile.png';

import MyOrders from '@/components/profile/MyOrders';

export default function ProfilePage() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();
  const searchParams = useSearchParams();

  const [activeTab, setActiveTab] = useState(() => {
    return searchParams.get('tab') === 'orders' ? 'orders' : 'profile';
  });

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <main className='w-full min-h-screen bg-[#F8F9FA] flex flex-col'>
      <Navbar />

      <div className='pt-20 md:pt-28 pb-10 md:pb-16 flex-grow container mx-auto px-4 md:px-6 max-w-6xl'>
        <div className='flex flex-col md:flex-row gap-6 md:gap-8'>
          {/* SIDEBAR PROFILE */}
          <div className='w-full md:w-1/3 lg:w-1/4'>
            <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6 flex flex-col items-center'>
              <img
                src={imgProfile.src}
                alt='Profile'
                className='w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mb-3 md:mb-4'
              />
              <h2 className='text-lg md:text-xl font-bold text-gray-900 text-center mb-4 md:mb-6'>
                {user?.name || 'William Sur'}
              </h2>

              <div className='w-full h-px bg-gray-200 mb-4 md:mb-6'></div>

              <div className='w-full flex flex-col gap-1 md:gap-2'>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`flex items-center gap-3 px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base font-medium rounded-lg transition w-full text-left ${
                    activeTab === 'profile'
                      ? 'bg-gray-100 text-black'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-black'
                  }`}
                >
                  <User size={18} className='md:w-5 md:h-5' />
                  My Profile
                </button>

                <button className='flex items-center gap-3 px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base text-gray-700 hover:bg-gray-50 hover:text-black font-medium rounded-lg transition w-full text-left'>
                  <MapPin size={18} className='md:w-5 md:h-5' />
                  Delivery Address
                </button>

                <button
                  onClick={() => setActiveTab('orders')}
                  className={`flex items-center gap-3 px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base font-medium rounded-lg transition w-full text-left ${
                    activeTab === 'orders'
                      ? 'bg-gray-100 text-black'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-black'
                  }`}
                >
                  <FileText size={18} className='md:w-5 md:h-5' />
                  My Orders
                </button>

                <button
                  onClick={handleLogout}
                  className='flex items-center gap-3 px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base text-[#C12116] hover:bg-red-50 font-medium rounded-lg transition w-full text-left mt-1 md:mt-2'
                >
                  <LogOut size={18} className='md:w-5 md:h-5' />
                  Log Out
                </button>
              </div>
            </div>
          </div>

          {/* KONTEN DINAMIS */}
          <div className='w-full md:w-2/3 lg:w-3/4'>
            {activeTab === 'profile' && (
              <>
                <h1 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6'>
                  Profile
                </h1>
                <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-5 md:p-8'>
                  <div className='flex items-center gap-6 mb-6 md:mb-10'>
                    <img
                      src={imgProfile.src}
                      alt='Profile'
                      className='w-16 h-16 md:w-20 md:h-20 rounded-full object-cover'
                    />
                  </div>
                  <div className='flex flex-col gap-4 md:gap-6'>
                    <div className='flex justify-between items-center pb-3 md:pb-4 border-b border-gray-100'>
                      <span className='text-gray-500 font-medium text-sm md:text-base'>
                        Name
                      </span>
                      <span className='text-gray-900 font-semibold text-sm md:text-base'>
                        {user?.name || 'William Sur'}
                      </span>
                    </div>
                    <div className='flex justify-between items-center pb-3 md:pb-4 border-b border-gray-100'>
                      <span className='text-gray-500 font-medium text-sm md:text-base'>
                        Email
                      </span>
                      <span className='text-gray-900 font-semibold text-sm md:text-base'>
                        {user?.email || 'william@example.com'}
                      </span>
                    </div>
                    <div className='flex justify-between items-center pb-3 md:pb-4 border-b border-gray-100'>
                      <span className='text-gray-500 font-medium text-sm md:text-base'>
                        Phone Number
                      </span>
                      <span className='text-gray-900 font-semibold text-sm md:text-base'>
                        081234567890
                      </span>
                    </div>
                  </div>
                  <div className='mt-6 md:mt-10'>
                    <button className='w-full md:w-auto px-6 py-2.5 md:px-10 md:py-3 bg-[#C12116] hover:bg-[#a01b12] text-white text-sm md:text-base font-semibold rounded-full shadow-sm transition-colors'>
                      Update Profile
                    </button>
                  </div>
                </div>
              </>
            )}
            {activeTab === 'orders' && <MyOrders />}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
