'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiGrid, FiUser, FiInfo, FiMail, FiShoppingBag, FiLogOut } from 'react-icons/fi';

const daftarNavigasi = [
  { href: '/', label: 'Dasbor', icon: <FiGrid /> },
  { href: '/profile', label: 'Profil', icon: <FiUser /> },
  { href: '/products', label: 'Produk', icon: <FiShoppingBag /> },
  { href: '/about', label: 'Tentang', icon: <FiInfo /> },
  { href: '/contact', label: 'Kontak', icon: <FiMail /> },
];

export default function BilahSamping() {
  const pathSaatIni = usePathname();

  return (
    <aside className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark vh-100 position-sticky top-0" style={{ width: '280px' }}>
      <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4 fw-bold">AplikasiSaya</span>
      </Link>
      
      <hr />

      <div className="d-flex flex-column gap-2 mb-auto">
        {daftarNavigasi.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`btn d-flex align-items-center justify-content-start p-2 ${
              pathSaatIni === item.href 
              ? 'btn-primary' 
              : 'btn-dark'
            }`}
          >
            <span className="fs-5 me-3">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>

      <hr />

      <div className="dropdown">
        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Pengguna" width="32" height="32" className="rounded-circle me-2" />
          <strong className="fw-bold">Admin</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
          <li><a className="dropdown-item" href="#">Profil</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li>
            <button className="dropdown-item d-flex align-items-center text-danger-emphasis">
              <FiLogOut className="me-2" />
              <span>Keluar</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
