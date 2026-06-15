import type { Metadata } from 'next';
// BARIS INI WAJIB ADA AGAR TAILWIND BERJALAN
import './globals.css';

export const metadata: Metadata = {
  title: 'Foody - Explore Culinary Experience',
  description: 'Challenge 10 Restaurant App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='antialiased bg-white text-black'>{children}</body>
    </html>
  );
}
