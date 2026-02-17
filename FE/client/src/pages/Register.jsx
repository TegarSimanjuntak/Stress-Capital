import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Link, useNavigate } from 'react-router-dom';
import bgImage from '../assets/login.png'; // Pastikan nama file gambar sesuai
import './Login.css'; // Kita pakai CSS yang sama dengan Login

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate(); // Opsional: kalau mau langsung redirect setelah daftar

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signUp({ 
      email, 
      password 
    });

    if (error) {
      alert(error.message);
    } else {
      alert('Registrasi Berhasil! Silakan cek email untuk verifikasi.');
      // navigate('/login'); // Bisa diaktifkan kalau mau auto pindah ke login
    }
    setLoading(false);
  };

  return (
    // Menggunakan class "login-container" agar background dan layout sama persis
    <div className="login-container" style={{ backgroundImage: `url(${bgImage})` }}>
      
      <div className="login-card">
        <h2>Create Account</h2>
        <p style={{ marginBottom: '20px', color: '#ccc' }}>Mulai perjalanan barumu di sini</p>
        
        <form onSubmit={handleRegister} className="input-group">
          <input 
            className="input-field"
            type="email" 
            placeholder="Email Address" 
            onChange={e => setEmail(e.target.value)} 
            required 
          />
          <input 
            className="input-field"
            type="password" 
            placeholder="Create Password" 
            onChange={e => setPassword(e.target.value)} 
            required 
          />
          
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Processing...' : 'Daftar Sekarang'}
          </button>
        </form>

        <p className="link-text">
          Sudah punya akun? <Link to="/login">Login di sini</Link>
        </p>
      </div>

    </div>
  );
}