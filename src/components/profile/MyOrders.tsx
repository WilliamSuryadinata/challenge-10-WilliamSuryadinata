'use client';

import { useState } from 'react';
import { Search, Star, X } from 'lucide-react';
import iconResto from '@/assets/icon/Resto.png';
import imgBurger from '@/assets/image/burger 1.png';

export default function MyOrders() {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const statuses = ['Preparing', 'On the Way', 'Delivered', 'Done', 'Canceled'];
  const activeStatus = 'Done';

  const handleSendReview = () => {
    alert('Review berhasil dikirim ke restoran!');
    setShowReviewModal(false);
    setRating(0);
    setReviewText('');
  };

  return (
    <div className='w-full bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-8 relative'>
      <h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6'>
        My Orders
      </h2>

      {/* Search Bar */}
      <div className='flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 md:px-4 md:py-3 mb-6 md:mb-8'>
        <Search
          size={18}
          className='text-gray-400 mr-2 md:mr-3 md:w-5 md:h-5'
        />
        <input
          type='text'
          placeholder='Search your orders'
          className='w-full bg-transparent outline-none text-gray-700 text-xs md:text-sm'
        />
      </div>

      {/* Status Tabs - Bisa geser horizontal di HP */}
      <div className='flex items-center gap-2 md:gap-4 mb-6 md:mb-8 overflow-x-auto pb-2 scrollbar-hide whitespace-nowrap'>
        <span className='text-gray-900 font-bold mr-1 md:mr-2 text-sm md:text-base'>
          Status
        </span>
        {statuses.map((status) => (
          <button
            key={status}
            className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
              activeStatus === status
                ? 'bg-gray-900 text-white'
                : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Order Card */}
      <div className='border border-gray-100 rounded-xl p-4 md:p-6 shadow-sm'>
        <div className='flex items-center gap-2 md:gap-3 mb-4 md:mb-6'>
          <img
            src={iconResto.src}
            alt='Resto'
            className='w-5 h-5 md:w-6 md:h-6 object-contain'
          />
          <span className='font-bold text-base md:text-lg text-gray-900'>
            Burger King
          </span>
        </div>

        <div className='flex items-center gap-3 md:gap-4 mb-4 md:mb-6'>
          <img
            src={imgBurger.src}
            alt='Food'
            className='w-16 h-16 md:w-20 md:h-20 rounded-lg md:rounded-xl object-cover border border-gray-100'
          />
          <div className='flex flex-col flex-grow'>
            <span className='font-bold text-gray-900 mb-0.5 md:mb-1 text-sm md:text-base'>
              Whopper Burger
            </span>
            <span className='text-gray-500 text-xs md:text-sm'>
              6 x Rp50.000
            </span>
          </div>
        </div>

        <div className='w-full border-t border-gray-100 mb-3 md:mb-4'></div>

        <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
          <div className='flex flex-col'>
            <span className='text-gray-500 text-xs md:text-sm font-medium'>
              Total
            </span>
            <span className='font-bold text-base md:text-lg text-gray-900'>
              Rp300.000
            </span>
          </div>
          <button
            onClick={() => setShowReviewModal(true)}
            className='w-full sm:w-auto px-6 py-2 bg-[#C12116] hover:bg-[#a01b12] text-white text-xs md:text-sm font-semibold rounded-full shadow-sm transition'
          >
            Give Review
          </button>
        </div>
      </div>

      {/* --- MODAL GIVE REVIEW --- */}
      {showReviewModal && (
        <div className='fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 animate-fade-in'>
          <div className='bg-white rounded-2xl w-full max-w-[90%] md:max-w-md p-5 md:p-6 relative flex flex-col items-center'>
            <div className='w-full flex justify-between items-center mb-4 md:mb-6'>
              <h3 className='text-lg md:text-xl font-bold text-gray-900'>
                Give Review
              </h3>
              <button
                onClick={() => setShowReviewModal(false)}
                className='text-gray-400 hover:text-gray-700 transition'
              >
                <X size={20} className='md:w-6 md:h-6' />
              </button>
            </div>

            <p className='text-gray-900 font-semibold mb-3 md:mb-4 text-sm md:text-base'>
              Give Rating
            </p>
            <div className='flex items-center gap-1 md:gap-2 mb-6 md:mb-8'>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className='focus:outline-none transition-transform hover:scale-110'
                >
                  <Star
                    size={32}
                    fill={star <= rating ? '#FFC107' : '#E5E7EB'}
                    color={star <= rating ? '#FFC107' : '#E5E7EB'}
                    className='md:w-10 md:h-10'
                  />
                </button>
              ))}
            </div>

            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder='Please share your thoughts about our service!'
              className='w-full h-24 md:h-32 p-3 md:p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#C12116] focus:border-transparent resize-none text-xs md:text-sm mb-4 md:mb-6'
            ></textarea>

            <button
              onClick={handleSendReview}
              disabled={rating === 0}
              className='w-full py-2.5 md:py-3 bg-[#C12116] hover:bg-[#a01b12] text-white text-sm md:text-base font-bold rounded-full shadow-sm transition disabled:opacity-50'
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
