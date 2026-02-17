import { NavLink } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './Navbar.css';

// Import Logo
import logoNav from '../assets/logo.png'; // Pastikan nama file sesuai

export default function Navbar() {
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const handleDeadClick = (e) => {
    e.preventDefault();
  };

  return (
    <nav className="navbar">
      
      {/* 1. BAGIAN KIRI: LOGO & BRAND */}
      <div className="nav-brand">
        <img src={logoNav} alt="Stress Capital" className="brand-logo" />
        <span className="brand-text">StressCapital.</span>
      </div>

      {/* 2. BAGIAN TENGAH: MENU (Tetap di tengah layar) */}
      <div className="nav-links">
        <NavLink to="/" className="nav-item" end>
          Home
        </NavLink>
        
        <NavLink to="/about" className="nav-item">
          About
        </NavLink>

        <a href="#" className="nav-item" onClick={handleDeadClick}>
          Article
        </a>
        
        <a href="#" className="btn-payment" onClick={handleDeadClick}>
          PAYMENT
        </a>
      </div>

      {/* 3. BAGIAN KANAN: LOGOUT */}
      <button onClick={handleLogout} className="btn-logout">
        Logout
      </button>

    </nav>
  );
}