import Link from 'next/link'

export default function Tentang() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Tentang Aplikasi Ini</h1>
            <p className="text-xl text-gray-600">
              Aplikasi web modern yang dibangun dengan Next.js App Router
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-600">🚀 Fitur</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Next.js 15 dengan App Router</li>
                <li>• TypeScript untuk keamanan tipe</li>
                <li>• Tailwind CSS untuk styling</li>
                <li>• Routing dinamis</li>
                <li>• Desain responsif</li>
                <li>• Komponen UI modern</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">🛠️ Teknologi</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• React 18</li>
                <li>• Next.js 15</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• ESLint</li>
                <li>• PostCSS</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">Misi Kami</h2>
            <p className="text-gray-700 text-center max-w-2xl mx-auto mb-6">
              Kami bertujuan untuk menciptakan aplikasi web yang modern, efisien, dan ramah pengguna 
              dengan pengalaman pengguna yang luar biasa. Demo ini menampilkan kekuatan 
              Next.js App Router dan praktik pengembangan web masa kini.
            </p>
            
            <div className="text-center">
              <Link 
                href="/products" 
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block mr-4"
              >
                Lihat Produk
              </Link>
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
