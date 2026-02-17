require('dotenv').config(); // Load file .env
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = 5000;

// 1. Setup Supabase di Backend
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.use(cors());
app.use(express.json());

// ==========================================
// MIDDLEWARE (SI SATPAM)
// ==========================================
// Fungsi ini bertugas mengecek: "Kamu punya tiket (token) login gak?"
const requireAuth = async (req, res, next) => {
  // 1. Ambil token dari Header (Authorization: Bearer <TOKEN>)
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ error: 'Akses ditolak! Token tidak ada.' });
  }

  const token = authHeader.split(' ')[1]; // Ambil tokennya saja (buang kata 'Bearer')

  // 2. Cek ke Supabase: "Token ini valid gak?"
  const { data: { user }, error } = await supabase.auth.getUser(token);

  if (error || !user) {
    return res.status(401).json({ error: 'Token tidak valid atau kadaluarsa.' });
  }

  // 3. Kalau valid, simpan data user ke request supaya bisa dipake di route bawah
  req.user = user;
  next(); // Lanjut ke function berikutnya
};

// ==========================================
// ROUTES
// ==========================================

// 1. Route Public (Bisa diakses siapa saja tanpa login)
app.get('/api/hello', (req, res) => {
  res.json({ message: "✅ Backend Connected! (Public Access)" });
});

// 2. Route Private (Hanya untuk yang sudah Login)
// Perhatikan: Kita pasang 'requireAuth' sebelum function utama
app.get('/api/dashboard-data', requireAuth, (req, res) => {
  // Di sini kita bisa akses data user yang login
  const emailUser = req.user.email;
  const idUser = req.user.id;

  res.json({
    message: `Halo bos! Ini data rahasia khusus untuk kamu.`,
    user_info: {
      email: emailUser,
      id: idUser,
      status: "Verified Member"
    },
    secret_code: "PROJECT-SKRIPSI-2026-SUKSES"
  });
});

// Jalankan Server
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});