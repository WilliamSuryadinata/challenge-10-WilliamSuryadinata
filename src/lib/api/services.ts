// src/lib/api/services.ts
import api from './axios';

// Tipe data umum untuk menggantikan 'any' agar lolos aturan ESLint
type ApiParams = Record<string, unknown>;
type ApiData = Record<string, unknown>;

// ==========================================
// 1. AUTHENTICATION ENDPOINTS
// ==========================================
export const AuthAPI = {
  register: (data: ApiData) => api.post('/auth/register', data),
  login: (data: ApiData) => api.post('/auth/login', data),
  getProfile: () => api.get('/auth/profile'),
  updateProfile: (data: ApiData) => api.put('/auth/profile', data),
};

// ==========================================
// 2. RESTAURANT & MENU ENDPOINTS
// ==========================================
export const RestoAPI = {
  // Mendapatkan daftar restoran dengan query filter
  getRestaurants: (params?: ApiParams) => api.get('/resto', { params }),

  // Mendapatkan detail restoran by ID (termasuk menu & review)
  getDetail: (id: string, params?: ApiParams) =>
    api.get(`/resto/${id}`, { params }),

  // Mencari restoran by Nama
  search: (params?: ApiParams) => api.get('/resto/search', { params }),

  // Mengambil urutan rating tertinggi
  getBestSeller: (params?: ApiParams) =>
    api.get('/resto/best-seller', { params }),

  // Endpoints yang membutuhkan Auth
  getRecommended: () => api.get('/resto/recommended'),
  getNearby: (params?: ApiParams) => api.get('/resto/nearby', { params }),
};

// ==========================================
// 3. CART ENDPOINTS (Auth Required)
// ==========================================
export const CartAPI = {
  getCart: () => api.get('/cart'),
  addItem: (data: { restaurantId: string; menuId: string; quantity: number }) =>
    api.post('/cart', data),
  updateItemQty: (id: string, quantity: number) =>
    api.put(`/cart/${id}`, { quantity }),
  deleteItem: (id: string) => api.delete(`/cart/${id}`),
  clearCart: () => api.delete('/cart'),
};

// ==========================================
// 4. ORDER / CHECKOUT ENDPOINTS (Auth Required)
// ==========================================
export const OrderAPI = {
  checkout: (data: ApiData) => api.post('/order/checkout', data),
  getMyOrders: (params?: ApiParams) => api.get('/order/my-order', { params }),
};

// ==========================================
// 5. REVIEW ENDPOINTS (Auth Required)
// ==========================================
export const ReviewAPI = {
  addReview: (data: ApiData) => api.post('/review', data),
  getMyReviews: () => api.get('/review/my-reviews'),
  getRestoReviews: (restaurantId: string) =>
    api.get(`/review/restaurant/${restaurantId}`),
  updateReview: (id: string, data: ApiData) => api.put(`/review/${id}`, data),
  deleteReview: (id: string) => api.delete(`/review/${id}`),
};
