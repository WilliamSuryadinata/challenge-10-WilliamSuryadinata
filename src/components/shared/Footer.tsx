import Link from 'next/link';

// 1. IMPORT KEDUA GAMBAR SECARA LANGSUNG DARI FOLDER ASSETS
import logoFoody from '@/assets/icon/logo-foody-color.png';
import socialIcons from '@/assets/icon/Social Media Icons.png';

export function Footer() {
  return (
    <footer className='bg-[#0A0D12] text-white pt-16 pb-10'>
      <div className='container mx-auto px-6 max-w-7xl'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8'>
          {/* Kolom 1: Logo, Deskripsi, dan Social Media (Lebih Lebar) */}
          <div className='md:col-span-6 lg:col-span-5'>
            <Link href='/' className='flex items-center gap-3 mb-6'>
              {/* 2. Gunakan tag <img> standar dengan properti .src hasil import */}
              <img
                src={logoFoody.src}
                alt='Foody Logo'
                className='w-10 h-10 object-contain'
              />
              <span className='font-bold text-2xl'>Foody</span>
            </Link>

            <p className='text-gray-400 leading-relaxed mb-8 max-w-sm'>
              Enjoy homemade flavors & chef’s signature dishes, freshly prepared
              every day. Order online or visit our nearest branch.
            </p>

            <div>
              <h4 className='font-semibold mb-4'>Follow on Social Media</h4>
              <div className='flex gap-4'>
                {/* 3. Gunakan gambar gabungan Social Media Icons.png aslimu */}
                <img
                  src={socialIcons.src}
                  alt='Social Media'
                  className='h-8 object-contain cursor-pointer hover:opacity-80 transition'
                />
              </div>
            </div>
          </div>

          {/* Kolom 2: Menu Utama */}
          <div className='md:col-span-3 lg:col-span-3 lg:col-start-7'>
            <h4 className='font-bold text-lg mb-6'>Menu</h4>
            <ul className='space-y-4 text-gray-400'>
              <li>
                <Link href='#' className='hover:text-white transition'>
                  All Food
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white transition'>
                  Nearby
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white transition'>
                  Discount
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white transition'>
                  Best Seller
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white transition'>
                  Delivery
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white transition'>
                  Lunch
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Help */}
          <div className='md:col-span-3 lg:col-span-2'>
            <h4 className='font-bold text-lg mb-6'>Help</h4>
            <ul className='space-y-4 text-gray-400'>
              <li>
                <Link href='#' className='hover:text-white transition'>
                  How to Order
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white transition'>
                  Payment Methods
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white transition'>
                  Track My Orders
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white transition'>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white transition'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
