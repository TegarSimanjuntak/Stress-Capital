import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// 1. Import Icon dari Library
import { FaGithub, FaDiscord, FaXTwitter } from "react-icons/fa6"; 

import landingImg from '../assets/landing.png';
import loginBgImg from '../assets/login.png';
import lineImg from '../assets/line.png';

import './LandingPage.css';

export default function LandingPage() {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) setUserEmail(user.email);
    };
    getUser();
  }, []);

  return (
    <div className="scroll-container">
      {/* Navbar Fixed */}
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100 }}>
         <Navbar />
      </div>
     
      {/* === BAGIAN 1: GAMBAR LANDING + MEDSOS === */}
      <section 
        className="fullscreen-section hero-container" 
        style={{ backgroundImage: `url(${landingImg})` }}
      >
        {/* Container Tombol Medsos (Overlay di atas gambar) */}
        <div className="social-links-container">
            {/* GITHUB */}
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="social-btn">
              <FaGithub />
            </a>

            {/* DISCORD */}
            <a href="https://discord.gg/yourserver" target="_blank" rel="noreferrer" className="social-btn">
              <FaDiscord />
            </a>

            {/* X / TWITTER */}
            <a href="https://x.com/yourusername" target="_blank" rel="noreferrer" className="social-btn">
              <FaXTwitter />
            </a>
        </div>
      </section>


      {/* === BAGIAN 2: CONTENT "WHAT IS STRESS CAPITAL" === */}
      <div className="line-container what-is-section">
          {/* Gambar Background Garis */}
          <img src={lineImg} alt="divider" className="divider-line" />
          
          {/* KONTEN TEKS (Overlay) */}
          <div className="what-is-content">
              <h3 className="text-small">what is</h3>
              <h1 className="text-large">
                STRESS <br />
                <span className="text-purple">CAPITAL?</span>
              </h1>
              
              <p className="text-description">
                Stress Capital, headquartered in Indonesia, is a dynamic <span className="purple-highlight">decentralized autonomous organization (DAO)</span> specializing in the crypto and NFT sectors. Our primary goal is to facilitate the inclusion of Indonesian individuals into the cryptocurrency space by offering educational resources on the broader crypto ecosystem and fostering participation in international projects. Our diverse team of <span className="purple-highlight">32</span> professionals, including the founder, admin, moderator, and collaboration manager, works cohesively to achieve these objectives.
              </p>

              <button className="btn-read-more">Read more</button>
          </div>
      </div>


      {/* === BAGIAN 3: LATEST NEWS (GAMBAR LOGIN) === */}
      <section 
        className="fullscreen-section" 
        style={{ backgroundImage: `url(${loginBgImg})` }}
      >
         {/* KONTEN LATEST NEWS */}
         <div className="news-container">
            <h2 className="news-title">Latest News</h2>
            
            {/* Kotak Abu-abu Kosong (Placeholder) */}
            <div className="news-card-placeholder"></div>
            
            <button className="btn-see-more">See More</button>
         </div>
      </section>


      {/* === BAGIAN 4: QUOTE SECTION === */}
      <div className="line-container quote-section">
          {/* Gambar Background Garis */}
          <img src={lineImg} alt="divider" className="divider-line" />

          {/* KONTEN QUOTE (Overlay) */}
          <div className="quote-content">
              <h2 className="quote-text">
                “Do you want to be right or do you want to <br />
                make money?”
              </h2>
              <p className="quote-author">Advena 2023</p>
          </div>
      </div>

      <Footer />
    </div>
  );
}