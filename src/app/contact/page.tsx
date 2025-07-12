'use client'

import Link from 'next/link'

export default function Kontak() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Hubungi Kami</h1>
            <p className="text-xl text-gray-600">
              Kami senang mendengar dari Anda. Berikut informasi kontak kami:
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Informasi Kontak</h2>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="text-2xl mr-4">📧</div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">kontak@aplikasisaya.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-2xl mr-4">📱</div>
                <div>
                  <h3 className="font-semibold">Telepon</h3>
                  <p className="text-gray-600">+62 812-3456-7890</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-2xl mr-4">📍</div>
                <div>
                  <h3 className="font-semibold">Alamat</h3>
                  <p className="text-gray-600">Jalan Utama No.123, Kota, Indonesia</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-2xl mr-4">🕒</div>
                <div>
                  <h3 className="font-semibold">Jam Operasional</h3>
                  <p className="text-gray-600">Senin–Jumat: 09.00–18.00</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">GitHub</a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/" 
              className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
