import { useQuery } from '@tanstack/react-query';
// PERBAIKAN: Ubah path menjadi @/lib/api/resto
import {
  getRestaurants,
  getNearbyRestaurants,
  getRestaurantById,
} from '@/lib/api/resto';

export const useRestaurants = () => {
  return useQuery({
    queryKey: ['restaurants'],
    queryFn: getRestaurants,
  });
};

export const useNearbyRestaurants = () => {
  return useQuery({
    queryKey: ['restaurants', 'nearby'],
    queryFn: getNearbyRestaurants,
  });
};

export const useRestaurantDetail = (id: string) => {
  return useQuery({
    queryKey: ['restaurant', id],
    queryFn: () => getRestaurantById(id),
    enabled: !!id,
  });
};
