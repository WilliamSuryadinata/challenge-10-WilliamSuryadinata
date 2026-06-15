import { create } from 'zustand';
// Gunakan middleware persist agar login bertahan meski halaman di-refresh
import { persist } from 'zustand/middleware';

interface User {
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loginTime: number | null; // Menyimpan waktu kapan dia login
  login: (userData: User, token: string) => void;
  logout: () => void;
  checkSession: () => void; // Fungsi untuk mengecek apakah waktu habis
}

// Batas waktu: 5 jam dalam format milidetik (5 * 60 menit * 60 detik * 1000)
const SESSION_TIMEOUT = 5 * 60 * 60 * 1000;

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      loginTime: null,

      // Saat login sukses, catat waktu saat itu juga
      login: (userData, token) =>
        set({
          user: userData,
          token: token,
          loginTime: Date.now(),
        }),

      // Saat logout, hapus semua data
      logout: () =>
        set({
          user: null,
          token: null,
          loginTime: null,
        }),

      // Mengecek apakah masa berlaku sudah lewat
      checkSession: () => {
        const { loginTime, logout } = get();
        if (loginTime) {
          const currentTime = Date.now();
          // Jika (waktu sekarang - waktu login) lebih dari 5 jam
          if (currentTime - loginTime > SESSION_TIMEOUT) {
            logout(); // Paksa hapus data login
            alert(
              'Sesi login Anda telah habis (lebih dari 5 jam). Silakan login kembali.'
            );
          }
        }
      },
    }),
    {
      name: 'auth-storage', // Menyimpan ingatan ini di Local Storage Browser
    }
  )
);
