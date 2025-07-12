import './globals.css';
import { Inter } from 'next/font/google';
import Navigasi from './components/Navbar';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter' 
});

export const metadata = {
  title: 'AplikasiSaya | Showcase Modern Next.js',
  description: 'Aplikasi demo yang dirancang profesional menggunakan Next.js App Router, dengan antarmuka elegan dan animasi yang halus.',
};

export default function TataLetakUtama({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark">
      <body className={`${inter.variable} font-sans bg-slate-900 text-slate-200 overflow-x-hidden`}>
        <div className="relative min-h-screen">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse-slow animation-delay-2000"></div>

          <div className="relative z-20">
            <Navigasi />
            <main className="pt-8 pb-16">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
