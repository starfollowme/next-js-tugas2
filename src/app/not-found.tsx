'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiHome, FiShoppingBag, FiTool } from 'react-icons/fi';

const BotPanduan = () => (
  <svg
    width="80"
    height="120"
    viewBox="0 0 80 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="animate-robot-float drop-shadow-lg"
  >
    <rect x="10" y="40" width="60" height="50" rx="10" fill="#4A5568" />
    <rect x="15" y="45" width="50" height="40" rx="5" fill="#2D3748" />
    <circle cx="40" cy="25" r="15" fill="#4A5568" />
    <circle cx="40" cy="25" r="12" fill="#718096" />
    <circle className="animate-pulse" cx="40" cy="25" r="5" fill="#38B2AC" />
    <rect x="38" y="10" width="4" height="5" rx="2" fill="#A0AEC0" />
    <rect x="25" y="90" width="30" height="10" rx="5" fill="#4A5568" />
    <rect x="30" y="100" width="20" height="10" rx="5" fill="#2D3748" />
  </svg>
);

export default function HalamanTidakDitemukan() {
  const [glitchTeratasi, setGlitchTeratasi] = useState(false);

  const atasiGlitch = () => {
    setGlitchTeratasi(true);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden bg-slate-900">
      <div className="stars-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="nebula"></div>
      </div>

      <div className={`relative z-10 flex flex-col items-center transition-all duration-500 ${glitchTeratasi ? 'blur-none' : ''}`}>
        <div className="mb-4">
          <BotPanduan />
        </div>

        <div className="relative bg-slate-700/50 backdrop-blur-sm text-white py-3 px-5 rounded-lg mb-8 max-w-md animate-bubble-appear">
          <p className="text-lg">
            {glitchTeratasi
              ? 'Wah! Lebih baik sekarang. Mau kemana selanjutnya?'
              : 'Ups! Terjadi gangguan kosmik di matriks!'}
          </p>
          <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-slate-700/50 border-r-[10px] border-r-transparent"></div>
        </div>

        <div className="flex justify-center items-center text-[10rem] sm:text-[12rem] font-extrabold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent drop-shadow-lg mb-8 h-32">
          {!glitchTeratasi
            ? <div className="glitch-text" data-text="404">404</div>
            : '404'}
        </div>

        <div className="h-28 flex flex-col justify-center items-center">
          {!glitchTeratasi
            ? (
              <button
                onClick={atasiGlitch}
                className="flex items-center justify-center px-8 py-4 border border-amber-400 text-amber-300 text-lg font-bold rounded-md bg-amber-500/10 hover:bg-amber-500/20 transition transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/30 animate-slideUp"
              >
                <FiTool className="mr-3 animate-spin-slow" />
                Atasi Gangguan
              </button>
            ) : (
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-slideUp">
                <Link href="/" className="w-full sm:w-auto flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/50">
                  <FiHome className="h-5 w-5 mr-2" /> Beranda
                </Link>
                <Link href="/products" className="w-full sm:w-auto flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-slate-300 bg-slate-800/50 hover:bg-slate-700/50 hover:text-white transition transform hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-500/20">
                  <FiShoppingBag className="h-5 w-5 mr-2" /> Lihat Produk
                </Link>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
