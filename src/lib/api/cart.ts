import axios from 'axios';
import { CartItem } from '@/types';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const getCart = async (): Promise<CartItem[]> => {
  const { data } = await axios.get(`${BASE_URL}/api/cart`);
  return data;
};

export const addToCart = async (payload: { menuId: string; qty: number }) => {
  const { data } = await axios.post(`${BASE_URL}/api/cart`, payload);
  return data;
};

export const updateCartItem = async (id: string, qty: number) => {
  const { data } = await axios.put(`${BASE_URL}/api/cart/${id}`, { qty });
  return data;
};

export const removeCartItem = async (id: string) => {
  const { data } = await axios.delete(`${BASE_URL}/api/cart/${id}`);
  return data;
};

export const clearCart = async () => {
  const { data } = await axios.delete(`${BASE_URL}/api/cart`);
  return data;
};
