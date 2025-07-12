import Link from 'next/link'

// Data produk dalam Bahasa Indonesia
const products = [
  {
    id: 1,
    name: 'Laptop Premium',
    price: 'Rp 19.999.000',
    image: '💻',
    description: 'Laptop performa tinggi untuk para profesional'
  },
  {
    id: 2,
    name: 'Headphone Nirkabel',
    price: 'Rp 2.999.000',
    image: '🎧',
    description: 'Headphone nirkabel dengan kualitas premium'
  },
  {
    id: 3,
    name: 'Jam Tangan Pintar',
    price: 'Rp 4.499.000',
    image: '⌚',
    description: 'Jam tangan pintar canggih dengan pelacak kesehatan'
  },
  {
    id: 4,
    name: 'Ponsel Pintar',
    price: 'Rp 10.999.000',
    image: '📱',
    description: 'Ponsel pintar flagship terbaru'
  },
  {
    id: 5,
    name: 'Tablet',
    price: 'Rp 6.999.000',
    image: '📱',
    description: 'Tablet bertenaga untuk kerja dan hiburan'
  },
  {
    id: 6,
    name: 'Kamera',
    price: 'Rp 13.499.000',
    image: '📷',
    description: 'Kamera digital profesional'
  }
]

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Produk Kami</h1>
          <p className="text-xl text-gray-600">
            Temukan koleksi produk kami yang luar biasa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link 
              key={product.id} 
              href={`/products/${product.id}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="text-6xl text-center mb-4">{product.image}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-indigo-600">{product.price}</span>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                    Lihat Detail
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  )
}