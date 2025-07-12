import Link from 'next/link'
import { notFound } from 'next/navigation'

const produk = [
  {
    id: 1,
    name: 'Laptop Premium',
    price: '$1,299',
    image: '💻',
    description: 'Laptop berkinerja tinggi untuk profesional',
    fullDescription: 'Laptop premium ini dirancang untuk profesional yang membutuhkan kekuatan dan keandalan. Dilengkapi dengan layar resolusi tinggi, prosesor cepat, RAM besar, dan daya tahan baterai lama. Sempurna untuk coding, desain, dan aplikasi bisnis.',
    specs: ['Prosesor Intel Core i7', 'RAM 16GB', '512GB SSD', 'Layar 15.6" 4K', 'Baterai tahan 10 jam'],
    category: 'Elektronik'
  },
  {
    id: 2,
    name: 'Headphone Nirkabel',
    price: '$199',
    image: '🎧',
    description: 'Headphone nirkabel berkualitas premium',
    fullDescription: 'Rasakan kualitas suara superior dengan headphone nirkabel ini. Dilengkapi dengan peredam bising aktif, driver premium, dan desain nyaman. Cocok untuk musik, panggilan, dan hiburan.',
    specs: ['Peredam bising aktif', 'Bluetooth 5.0', 'Baterai 30 jam', 'Driver premium', 'Bantalan nyaman'],
    category: 'Audio'
  },
  {
    id: 3,
    name: 'Jam Tangan Pintar',
    price: '$299',
    image: '⌚',
    description: 'Jam pintar canggih dengan pelacak kesehatan',
    fullDescription: 'Tetap terhubung dan sehat dengan jam pintar ini. Lacak kebugaran, pantau kesehatan, terima notifikasi, dan akses aplikasi langsung dari pergelangan tangan Anda.',
    specs: ['Monitor detak jantung', 'Pelacak GPS', 'Tahan air', 'Pelacak tidur', 'Baterai 7 hari'],
    category: 'Perangkat Pakai'
  },
  {
    id: 4,
    name: 'Smartphone',
    price: '$699',
    image: '📱',
    description: 'Smartphone flagship terbaru',
    fullDescription: 'Smartphone flagship terbaru dengan teknologi mutakhir. Dilengkapi sistem kamera canggih, prosesor kuat, dan layar menakjubkan untuk pengalaman mobile luar biasa.',
    specs: ['Sistem tiga kamera', 'Layar OLED 6.7"', 'Penyimpanan 256GB', 'Konektivitas 5G', 'Pengisian cepat'],
    category: 'Ponsel'
  },
  {
    id: 5,
    name: 'Tablet',
    price: '$449',
    image: '📱',
    description: 'Tablet kuat untuk kerja dan hiburan',
    fullDescription: 'Tablet serbaguna sempurna untuk kerja dan hiburan. Dengan layar besar, prosesor kuat, dan daya tahan baterai lama, ideal untuk aplikasi produktivitas, streaming, dan kreasi konten.',
    specs: ['Layar 12.9"', 'Baterai tahan seharian', 'Dukungan stylus', 'Prosesor bertenaga', 'Desain ringan'],
    category: 'Tablet'
  },
  {
    id: 6,
    name: 'Kamera',
    price: '$899',
    image: '📷',
    description: 'Kamera digital profesional',
    fullDescription: 'Tangkap foto dan video memukau dengan kamera digital profesional ini. Dilengkapi autofokus canggih, sensor resolusi tinggi, dan performa hebat dalam kondisi minim cahaya.',
    specs: ['Sensor 24MP', 'Perekaman video 4K', 'Stabilisasi gambar', 'Tahan cuaca', 'Slot kartu ganda'],
    category: 'Fotografi'
  }
]

export default function DetailProduk({ params }: { params: { id: string } }) {
  const idProduk = parseInt(params.id)
  const produkDipilih = produk.find(p => p.id === idProduk)

  if (!produkDipilih) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div className="text-center">
                <div className="text-9xl mb-6">{produkDipilih.image}</div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Kategori</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {produkDipilih.category}
                  </span>
                </div>
              </div>

              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{produkDipilih.name}</h1>
                <p className="text-3xl font-bold text-blue-600 mb-6">{produkDipilih.price}</p>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3">Deskripsi</h2>
                  <p className="text-gray-700 leading-relaxed">{produkDipilih.fullDescription}</p>
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3">Spesifikasi</h2>
                  <ul className="space-y-2">
                    {produkDipilih.specs.map((spec, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                    Tambahkan ke Keranjang
                  </button>
                  <button className="w-full bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors">
                    Beli Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center space-x-4">
            <Link
              href="/products"
              className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Kembali ke Produk
            </Link>
            <Link
              href="/"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
