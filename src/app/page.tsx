import { FiDollarSign, FiUsers, FiShoppingCart, FiActivity } from 'react-icons/fi';

const KartuStatistik = ({ ikon, judul, nilai, perubahan }: { ikon: React.ReactNode, judul: string, nilai: string, perubahan: string }) => (
  <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-lg">
        {ikon}
      </div>
      <div>
        <p className="text-sm font-medium text-slate-400">{judul}</p>
        <p className="text-2xl font-bold text-white">{nilai}</p>
      </div>
    </div>
    <p className="text-xs text-slate-500 mt-2">{perubahan}</p>
  </div>
);

const BarisPesanan = ({ idPesanan, pelanggan, jumlah, status }: { idPesanan: string, pelanggan: string, jumlah: string, status: 'Selesai' | 'Diproses' | 'Dibatalkan' }) => {
  const warnaStatus = {
    Selesai: 'bg-green-500/20 text-green-400',
    Diproses: 'bg-yellow-500/20 text-yellow-400',
    Dibatalkan: 'bg-red-500/20 text-red-400',
  };
  return (
    <tr className="border-b border-slate-700 hover:bg-slate-800/50">
      <td className="py-3 px-4 font-mono text-sm text-slate-400">{idPesanan}</td>
      <td className="py-3 px-4">{pelanggan}</td>
      <td className="py-3 px-4 font-medium">Rp{jumlah}</td>
      <td className="py-3 px-4">
        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${warnaStatus[status]}`}>
          {status}
        </span>
      </td>
    </tr>
  );
};

export default function HalamanDasbor() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white">Ringkasan Dasbor</h1>
        <p className="text-slate-400 mt-1">Selamat datang kembali, Admin! Berikut ringkasan hari ini.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KartuStatistik ikon={<FiDollarSign size={22}/>} judul="Total Pendapatan" nilai="Rp45.231.890" perubahan="+20,1% dari bulan lalu" />
        <KartuStatistik ikon={<FiUsers size={22}/>} judul="Pengguna Baru" nilai="+2.350" perubahan="+180,1% dari bulan lalu" />
        <KartuStatistik ikon={<FiShoppingCart size={22}/>} judul="Total Penjualan" nilai="+12.234" perubahan="+19% dari bulan lalu" />
        <KartuStatistik ikon={<FiActivity size={22}/>} judul="Tingkat Aktivitas" nilai="97,2%" perubahan="+2,1% sejak satu jam lalu" />
      </div>

      <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Pesanan Terbaru</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-700 text-sm text-slate-400">
                <th className="py-2 px-4 font-semibold">ID Pesanan</th>
                <th className="py-2 px-4 font-semibold">Pelanggan</th>
                <th className="py-2 px-4 font-semibold">Jumlah</th>
                <th className="py-2 px-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              <BarisPesanan idPesanan="#A36BC" pelanggan="John Doe" jumlah="250.000" status="Selesai" />
              <BarisPesanan idPesanan="#B12CD" pelanggan="Jane Smith" jumlah="15.500" status="Diproses" />
              <BarisPesanan idPesanan="#C45DE" pelanggan="Sam Wilson" jumlah="99.990" status="Selesai" />
              <BarisPesanan idPesanan="#D87EF" pelanggan="Bucky Barnes" jumlah="45.000" status="Dibatalkan" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
