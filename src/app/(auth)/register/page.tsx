'use client';

import { useState } from 'react';
import Link from 'next/link';
// 1. Import useRouter ditambahkan di sini
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import { registerSchema, RegisterFormValues } from '@/lib/validations/auth';
import logoFoody from '@/assets/icon/logo-foody-color.png';

export default function RegisterPage() {
  // State untuk mengatur mata pada 2 kolom password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // 2. Panggil useRouter
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    // Simulasi jeda waktu seolah-olah sedang mengirim data ke server (1 detik)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Data Register:', data);

    // 3. Notifikasi sukses dan arahkan otomatis ke halaman login
    alert('Registrasi berhasil! Silakan login.');
    router.push('/login');
  };

  return (
    <div className='flex flex-col py-6'>
      <div className='flex items-center gap-2 mb-6'>
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
          className='px-8 py-2 rounded-md text-gray-500 hover:text-gray-900 font-medium transition-all'
        >
          Sign In
        </Link>
        <Link
          href='/register'
          className='px-8 py-2 rounded-md bg-white text-gray-900 font-medium shadow-sm transition-all'
        >
          Sign Up
        </Link>
      </div>

      {/* --- FORM REGISTER --- */}
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div>
          <input
            {...register('name')}
            type='text'
            placeholder='Name'
            className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B63E5] transition-all'
          />
          {errors.name && (
            <p className='text-red-500 text-xs mt-1'>{errors.name.message}</p>
          )}
        </div>

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

        {/* KOLOM PHONE NUMBER (BARU DITAMBAHKAN) */}
        <div>
          <input
            {...register('phoneNumber')}
            type='tel'
            placeholder='Number Phone'
            className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B63E5] transition-all'
          />
          {errors.phoneNumber && (
            <p className='text-red-500 text-xs mt-1'>
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        {/* KOLOM PASSWORD */}
        <div>
          <div className='relative'>
            <input
              {...register('password')}
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              className='w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B63E5] transition-all'
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

        {/* KOLOM CONFIRM PASSWORD */}
        <div>
          <div className='relative'>
            <input
              {...register('passwordConfirmation')}
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder='Confirm Password'
              className='w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B63E5] transition-all'
            />
            <button
              type='button'
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
            >
              {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
          {errors.passwordConfirmation && (
            <p className='text-red-500 text-xs mt-1'>
              {errors.passwordConfirmation.message}
            </p>
          )}
        </div>

        <button
          type='submit'
          disabled={isSubmitting}
          className='w-full bg-[#C12116] hover:bg-[#e97168] text-white font-semibold py-3 rounded-full transition-colors mt-6 disabled:opacity-70'
        >
          {isSubmitting ? 'Creating account...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}
