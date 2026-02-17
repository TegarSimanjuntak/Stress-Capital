import { createClient } from '@supabase/supabase-js'

// Mengambil variabel dari file .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Pastikan ada kata 'export' agar bisa dipanggil di Login.jsx
export const supabase = createClient(supabaseUrl, supabaseKey)