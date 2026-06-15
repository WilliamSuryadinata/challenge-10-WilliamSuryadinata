// src/lib/api/axios.ts
import axios from 'axios';

// Membuat instance axios dengan baseURL dari environment variable atau default URL
const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    'https://be-restaurant-production.up.railway.app/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Menyisipkan Token ke Header Authorization
api.interceptors.request.use(
  (config) => {
    // Mengecek apakah berjalan di sisi client (browser)
    if (typeof window !== 'undefined') {
      // Mengambil data token dari Zustand persist di Local Storage
      const authStorage = localStorage.getItem('auth-storage');

      if (authStorage) {
        const parsedStorage = JSON.parse(authStorage);
        const token = parsedStorage?.state?.token;

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Handling Error Global (khususnya 401 Unauthorized)
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Jika token tidak valid atau expired
    if (error.response && error.response.status === 401) {
      if (typeof window !== 'undefined') {
        // Hapus token dan paksa user kembali ke halaman login
        localStorage.removeItem('auth-storage');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;
