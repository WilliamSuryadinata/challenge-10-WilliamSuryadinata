'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import { loginSchema, LoginFormValues } from '@/lib/validations/auth';
import logoFoody from '@/assets/icon/logo-foody-color.png';
import axios from 'axios';

import { useAuthStore } from '@/store/useAuthStore';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    setErrorMsg('');

    try {
      // Menggunakan URL lengkap secara langsung agar tidak ada salah path dari .env
      const API_URL =
        'https://be-restaurant-production.up.railway.app/api/auth/login';

      const response = await axios.post(API_URL, {
        email: data.email,
        password: data.password,
      });

      // Antisipasi jika data dari backend dibungkus dalam properti "data" tambahan
      const userData = response.data?.data?.user || response.data?.user;
      const tokenData = response.data?.data?.token || response.data?.token;

      if (tokenData) {
        login(userData, tokenData);
        localStorage.setItem('token', tokenData);
        router.push('/');
      } else {
        setErrorMsg('Gagal mendapatkan token dari server.');
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const status = error.response.status;
        const backendMsg =
          error.response.data?.message || error.response.data?.error;

        // Cek jika error 500 (Internal Server Error) dari backend
        // Seringkali backend mengalami crash / 500 jika email tidak ada di database
        if (status === 500) {
          setErrorMsg(
            'Gagal masuk. Pastikan email terdaftar dan password benar!'
          );
        }
        // Cek jika error 401/400/404 (Salah password atau email tidak ditemukan)
        else if (status === 401 || status === 404 || status === 400) {
          setErrorMsg(
            typeof backendMsg === 'string'
              ? backendMsg
              : 'Email atau password salah!'
          );
        }
        // Pesan error lainnya
        else {
          setErrorMsg(
            typeof backendMsg === 'string'
              ? backendMsg
              : 'Terjadi kesalahan pada server.'
          );
        }
      } else {
        setErrorMsg(
          'Tidak dapat terhubung ke server. Periksa koneksi internet Anda.'
        );
      }
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='flex items-center gap-2 mb-8'>
        <img
          src={logoFoody.src}
          alt='Foody Logo'
          className='w-8 h-8 object-contain'
        />
        <span className='font-bold text-xl text-black'>Foody</span>
      </div>

      <h1 className='text-3xl font-bold text-gray-900 mb-2'>Welcome Back</h1>
      <p className='text-gray-500 mb-6'>Good to see you again! Let`s eat</p>

      {/* --- TAB TOGGLE --- */}
      <div className='flex bg-gray-100 p-1 rounded-lg w-fit mb-8'>
        <Link
          href='/login'
          className='px-8 py-2 rounded-md bg-white text-gray-900 font-medium shadow-sm transition-all'
        >
          Sign In
        </Link>
        <Link
          href='/register'
          className='px-8 py-2 rounded-md text-gray-500 hover:text-gray-900 font-medium transition-all'
        >
          Sign Up
        </Link>
      </div>

      {/* --- KOTAK PERINGATAN MERAH --- */}
      {errorMsg && (
        <div className='bg-red-50 border border-red-200 text-[#C12116] px-4 py-3 rounded-lg mb-6 text-sm font-medium flex items-center gap-2 animate-fade-in'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 shrink-0'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
              clipRule='evenodd'
            />
          </svg>
          <span>{errorMsg}</span>
        </div>
      )}

      {/* --- FORM LOGIN --- */}
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        <div>
          <input
            {...register('email')}
            type='email'
            placeholder='Email'
            className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B63E5] transition-all'
          />
          {errors.email && (
            <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>
          )}
        </div>

        <div>
          <div className='relative'>
            <input
              {...register('password')}
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              className='w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C12116] transition-all'
            />
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className='text-red-500 text-xs mt-1'>
              {errors.password.message}
            </p>
          )}
        </div>

        {/* --- FITUR REMEMBER ME --- */}
        <div className='flex items-center'>
          <input
            {...register('rememberMe')}
            type='checkbox'
            id='remember'
            className='h-4 w-4 text-[#C12116] focus:ring-[#C12116] border-gray-300 rounded cursor-pointer'
          />
          <label
            htmlFor='remember'
            className='ml-2 block text-sm text-gray-700 cursor-pointer'
          >
            Remember me
          </label>
        </div>

        <button
          type='submit'
          disabled={isSubmitting}
          className='w-full bg-[#C12116] hover:bg-[#e97168] text-white font-semibold py-3 rounded-full transition-colors mt-4 disabled:opacity-70 flex justify-center items-center'
        >
          {isSubmitting ? (
            <span className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></span>
          ) : (
            'Sign In'
          )}
        </button>
      </form>
    </div>
  );
}
