// src/lib/constants.ts

// 1. IMPORT SEMUA IKON KATEGORI & RESTORAN DI SINI
import iconAllRestaurant from '@/assets/icon/All Restaurant.png';
import iconNearby from '@/assets/icon/Nearby.png';
import iconDiscount from '@/assets/icon/Discount.png';
import iconBestSeller from '@/assets/icon/Best Seller.png';
import iconDelivery from '@/assets/icon/Delivery.png';
import iconLunch from '@/assets/icon/Lunch.png';
import iconBurgerKing from '@/assets/icon/burger king symbol.png';
import iconStar from '@/assets/icon/star.png';

// 2. EXPORT DATA KATEGORI
export const CATEGORIES = [
  { name: 'All Restaurant', icon: iconAllRestaurant },
  { name: 'Nearby', icon: iconNearby },
  { name: 'Discount', icon: iconDiscount },
  { name: 'Best Seller', icon: iconBestSeller },
  { name: 'Delivery', icon: iconDelivery },
  { name: 'Lunch', icon: iconLunch },
];

// 3. EXPORT DATA RESTORAN RECOMMENDED
export const RECOMMENDED_RESTAURANTS = Array(12).fill({
  name: 'Burger King',
  rating: 4.8,
  location: 'Jl. Sudirman No. 12',
  distance: '2.5 km',
  icon: iconBurgerKing,
});

// 4. EXPORT IKON UMUM YANG SERING DIPAKAI
export const ICONS = {
  star: iconStar,
};
