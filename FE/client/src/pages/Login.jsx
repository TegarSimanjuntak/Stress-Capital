import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Link, useNavigate } from 'react-router-dom';
import bgImage from '../assets/login.png'; // 1. Import Gambar
import './Login.css'; // 2. Import CSS yang tadi dibuat

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await supabase.auth.signInWithPassword({ 
      email, 
      password 
    });

    if (error) {
      alert(error.message);
    } else {
      // Redirect otomatis ke home setelah login sukses
      navigate('/'); 
    }
    setLoading(false);
  };

  return (
    // 3. Pasang Background Image lewat Inline Style agar path-nya benar
    <div className="login-container" style={{ backgroundImage: `url(${bgImage})` }}>
      
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p style={{ marginBottom: '20px', color: '#ccc' }}>Silakan masuk ke akun Anda</p>
        
        <form onSubmit={handleLogin} className="input-group">
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
            placeholder="Password" 
            onChange={e => setPassword(e.target.value)} 
            required 
          />
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Processing...' : 'Login'}
          </button>
        </form>

        <p className="link-text">
          Belum punya akun? <Link to="/register">Daftar di sini</Link>
        </p>
      </div>

    </div>
  );
}