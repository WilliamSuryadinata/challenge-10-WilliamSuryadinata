import axios from 'axios';
import { Transaction } from '@/types'; // Sesuaikan jika folder types kamu ada di dalam lib: '@/lib/types'

// PERBAIKAN: Buat tipe data eksplisit untuk menggantikan 'any'
export interface CheckoutPayload {
  items: { menuId: string; qty: number }[];
  paymentMethod?: string;
  address?: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const checkoutOrder = async (payload: CheckoutPayload) => {
  const { data } = await axios.post(`${BASE_URL}/api/order/checkout`, payload);
  return data;
};

export const getMyOrders = async (): Promise<Transaction[]> => {
  const { data } = await axios.get(`${BASE_URL}/api/order/my-order`);
  return data;
};
