import axios from 'axios';
import { Restaurant } from '@/types';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'; // Ganti dengan URL backendmu

export const getRestaurants = async (): Promise<Restaurant[]> => {
  const { data } = await axios.get(`${BASE_URL}/api/resto`);
  return data;
};

export const getNearbyRestaurants = async (): Promise<Restaurant[]> => {
  const { data } = await axios.get(`${BASE_URL}/api/resto/nearby`);
  return data;
};

export const getRecommendedRestaurants = async (): Promise<Restaurant[]> => {
  const { data } = await axios.get(`${BASE_URL}/api/resto/recommended`);
  return data;
};

export const getBestSellerRestaurants = async (): Promise<Restaurant[]> => {
  const { data } = await axios.get(`${BASE_URL}/api/resto/best-seller`);
  return data;
};

export const getRestaurantById = async (id: string): Promise<Restaurant> => {
  const { data } = await axios.get(`${BASE_URL}/api/resto/${id}`);
  return data;
};
