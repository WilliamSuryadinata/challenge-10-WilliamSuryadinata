'use client';

// PERBAIKAN 1: Sesuaikan path ke dalam folder lib
import { useRestaurants } from '@/lib/query/useRestoQuery';
// PERBAIKAN 2: Import tipe data Restaurant
import { Restaurant } from '@/types'; // Sesuaikan jika folder types di dalam lib: '@/lib/types'

export function RestoList() {
  const { data: restaurants, isLoading, error } = useRestaurants();

  if (isLoading) return <p>Loading restaurants...</p>;
  if (error) return <p>Error loading data.</p>;

  return (
    <div className='grid grid-cols-2 gap-4'>
      {/* PERBAIKAN 3: Berikan tipe data (resto: Restaurant) */}
      {restaurants?.map((resto: Restaurant) => (
        <div key={resto.id} className='p-4 border rounded-xl'>
          <h3 className='font-bold'>{resto.name}</h3>
          <p>{resto.distance}</p>
        </div>
      ))}
    </div>
  );
}
