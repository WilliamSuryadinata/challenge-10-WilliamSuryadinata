// src/types/index.ts

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Menu {
  id: string;
  name: string;
  price: number;
  category: string;
  image?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  location: string;
  distance: string;
  image?: string;
  menus?: Menu[];
}

export interface CartItem {
  id: string;
  menuId: string;
  name: string;
  price: number;
  qty: number;
  image?: string;
  restaurantName: string;
}

export interface Transaction {
  id: string;
  date: string;
  total: number;
  status: 'Preparing' | 'On the Way' | 'Delivered' | 'Done' | 'Canceled';
  items: CartItem[];
}

export interface Review {
  id: string;
  restaurantId: string;
  rating: number;
  comment: string;
  userId: string;
}
