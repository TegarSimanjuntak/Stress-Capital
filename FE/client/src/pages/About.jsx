import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaDiscord, FaXTwitter } from "react-icons/fa6";

import loginBgImg from '../assets/login.png';
// lineImg tidak dipakai lagi
import logoAbout from '../assets/logo-about.png';

import './About.css';

export default function About() {
  
  const roles = [
    { title: "Founder", color: "#ffffff", members: [1, 2, 3] },
    { title: "Admin", color: "#ff4d6d", members: [1, 2, 3, 4] },
    { title: "Moderator", color: "#4d96ff", members: [1, 2, 3, 4] },
    { title: "Collab Manager", color: "#00f2ea", members: [1, 2, 3, 4] }
  ];

  return (
    <div className="about-scroll-container">
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100 }}>
         <Navbar />
      </div>

      {/* === BAGIAN ATAS: HEADER + GLASS CARD === */}
      <section 
        className="about-section-top" 
        style={{ backgroundImage: `url(${loginBgImg})` }}
      >
        <div className="about-content-wrapper">
            
            {/* LOGO */}
            <div className="about-header">
                <img src={logoAbout} alt="Stress Capital Logo" className="header-logo" />
                <div className="header-text-col">
                    <h1 className="header-stress">STRESS</h1>
                    <h1 className="header-capital">CAPITAL</h1>
                </div>
            </div>

            {/* GLASS CARD */}
            <div className="glass-card">
                <div className="card-section">
                    <h2 className="section-heading">What is..</h2>
                    <p className="section-paragraph">
                        Stress Capital, headquartered in Indonesia, is a dynamic <span className="highlight-purple">decentralized autonomous organization (DAO)</span> specializing in the crypto and NFT sectors. Our primary goal is to facilitate the inclusion of Indonesian individuals into the cryptocurrency space.
                    </p>
                </div>
                <div className="card-section">
                    <h2 className="section-heading">Our History</h2>
                    <p className="section-paragraph">
                        Stress Capital, headquartered in Indonesia, is a dynamic <span className="highlight-purple">decentralized autonomous organization (DAO)</span> specializing in the crypto and NFT sectors. Our primary goal is to facilitate the inclusion of Indonesian individuals into the cryptocurrency space.
                    </p>
                </div>
            </div>

        </div>
      </section>

      {/* === LINE DIHAPUS, LANGSUNG MASUK TEAM === */}

      {/* === BAGIAN BAWAH: TEAM (BACKGROUND HITAM POLOS) === */}
      <div className="about-section-bottom">
        <div className="about-content-wrapper">
            
            <div className="team-section-outside">
                <h2 className="section-heading">Team</h2>
                <div className="team-roles-container">
                    {roles.map((role, index) => (
                    <div key={index} className="role-group">
                        <div className="role-header">
                            <div className="role-badge" style={{ borderColor: role.color }}>
                                <span className="badge-dot" style={{ backgroundColor: role.color }}></span>
                                {role.title}
                            </div>
                            <div className="role-line"></div>
                        </div>
                        <div className="members-grid">
                            {role.members.map((m, i) => (
                                <div key={i} className="member-card">
                                <div className="member-photo-placeholder" style={{ borderBottom: `2px solid ${role.color}` }}></div>
                                <div className="member-info">
                                    <span className="member-name">John Doe</span>
                                    <div className="member-socials">
                                        <FaDiscord className="social-icon" />
                                        <FaXTwitter className="social-icon" />
                                    </div>
                                </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    ))}
                </div>

                <div className="team-footer-message">
                    <p>Feel free to contact us for any inquiries.</p>
                    <p className="trust-verify">“Don’t trust, <span className="highlight-purple">verify</span>”</p>
                </div>
            </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}