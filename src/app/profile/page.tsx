import Link from 'next/link'

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-white">👨‍💻</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-800">John Doe</h1>
              <p className="text-gray-600 mt-2">Pengembang Full Stack</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Tentang Saya</h2>
                <p className="text-gray-700 mb-4">
                  Saya adalah pengembang full-stack yang antusias dengan pengalaman lebih dari 5 tahun dalam membangun aplikasi web. Saya senang bekerja dengan teknologi modern seperti React, Next.js, dan Node.js.
                </p>
                <p className="text-gray-700">
                  Di luar dunia pemrograman, saya senang menjelajahi teknologi baru, membaca blog teknologi, atau menikmati kegiatan di luar ruangan.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Keahlian</h2>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS'].map((skill) => (
                    <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>

                <h2 className="text-xl font-semibold mt-6 mb-4">Kontak</h2>
                <div className="space-y-2">
                  <p className="text-gray-700">📧 john.doe@email.com</p>
                  <p className="text-gray-700">📱 +1 (555) 123-4567</p>
                  <p className="text-gray-700">🌐 linkedin.com/in/johndoe</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link 
                href="/contact" 
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Hubungi Saya
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
