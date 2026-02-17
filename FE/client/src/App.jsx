import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { supabase } from './supabaseClient';

import Login from './pages/Login';
import Register from './pages/Register';
import LandingPage from './pages/LandingPage';
import About from './pages/About';

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cek session awal
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Dengar perubahan auth (login/logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) return null; // Tunggu sebentar sampai cek session selesai

  return (
    <Router>
      <Routes>
        {/* LOGIC BARU: */}
        
        {/* 1. Kalau akses root ('/'), cek session:
               - Ada session? Masuk LandingPage
               - Gak ada? Lempar ke Login */}
        <Route path="/" element={session ? <LandingPage /> : <Navigate to="/login" />} />

        {/* 2. Halaman Login & Register (Hanya untuk yang belum login) */}
        <Route path="/login" element={!session ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!session ? <Register /> : <Navigate to="/" />} />

        {/* 3. Halaman About (Bisa diakses public atau mau diprotect juga boleh, ini contoh diprotect) */}
        <Route path="/about" element={session ? <About /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;