import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, Laptop, Tablet, BookOpen, Layers, 
  Cpu, Award, Users, FileText, ChevronRight, CheckCircle2, 
  AlertCircle, Star, Github, Activity, HelpCircle, Network,
  Database, Server, Cloud, ShieldAlert, Check, RefreshCw, Volume2, Flame,
  Trophy, MessageSquare, ClipboardList, Shield, Search, Bookmark, Brain, GraduationCap, School
} from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';

// Import local assets matching the user's reference design
import logoImg from '../assets/logo.png';
import mainImg from '../assets/main-removebg-preview.png';
import heroImg from '../assets/main-removebg-preview.png'; // Panda Mascot with Vietnamese conical hat
import screenshotHero from '../assets/29e2f86e-a1dd-49c5-b0f3-a703257f9de9-removebg-preview.png'; // Laptop + Phone dashboard screenshot
import backgroundImg from '../assets/background.png'; // Local background image
import showcaseVocab from '../assets/unnamed (7).jpg'; // Showcase 1 Vocabulary
import showcaseTranslate from '../assets/unnamed (9).jpg'; // Showcase 3 Translation
import showcaseDict from '../assets/034e8958-037f-4339-bf34-0f25604d9f64.png'; // Showcase 4 Left Dictionary
import showcaseChat from '../assets/29e2f86e-a1dd-49c5-b0f3-a703257f9de9.png'; // Showcase 4 Right AI Chat
import showcaseDashboard from '../assets/d6667edd-6bce-4de6-b6b4-5a9c0812edd9.png'; // Showcase 5 Left Dashboard
import showcaseGamify from '../assets/unnamed (8).jpg'; // Showcase 5 Right Gamification/Leaderboard
import pandaMascot from '../assets/StreakImage-removebg-preview.png'; // Mascot image for CTA section

// Import achievements images
import achievementImg1 from '../assets/1786444073342_2139156838608309818_4679679961168383332_0ca75879ac1ee6e9e4d6053ed35c4477.jpg';
import achievementImg2 from '../assets/1786424166582_6483377057259363436_g570967728523958137_2f69394830afdf092f9906e204de83dd.jpg';
import achievementImg3 from '../assets/1786424166545_6483377057259363436_g570967728523958137_dbc8b815070440145a69c4f61371ba1e.jpg';

// Import avatar images
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';
import avatar4 from '../assets/avatar4.png';
import avatar5 from '../assets/avatar5.png';
import avatar6 from '../assets/avatar6.png';


// Import technology SVGs
import awsS3Logo from '../assets/aws-s3.svg';
import azureLogo from '../assets/azure.svg';
import deepseekLogo from '../assets/deepseek.svg';
import postgresqlLogo from '../assets/postgresql.svg';
import dotnetLogo from '../assets/dotnet.svg';
import tailwindcssLogo from '../assets/tailwindcss.svg';
import kubernetesLogo from '../assets/kubernetes.svg';
import reactLogo from '../assets/react.svg';

const DocumentSearchIcon = () => (
  <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="blueGradDoc" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>
    <rect x="6" y="4" width="20" height="26" rx="4" fill="url(#blueGradDoc)" />
    <line x1="11" y1="10" x2="21" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="11" y1="15" x2="21" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="11" y1="20" x2="17" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="24" r="5" fill="#60a5fa" stroke="white" strokeWidth="2" />
    <line x1="27.5" y1="27.5" x2="31" y2="31" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const VocabBookIcon = () => (
  <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="blueGradBook" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>
    <path d="M6 8C6 6.5 8 5 18 5C28 5 30 6.5 30 8V28C30 29.5 28 31 18 31C8 31 6 29.5 6 28V8Z" fill="url(#blueGradBook)" />
    <line x1="18" y1="5" x2="18" y2="31" stroke="#1e3a8a" strokeWidth="1" />
    <path d="M8 7H16V29H8C7 29 8 28 8 27V7Z" fill="#60a5fa" opacity="0.3" />
    <path d="M12 14L15 22M18 14L15 22M13.5 19H16.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="18" r="3" stroke="white" strokeWidth="2" />
    <path d="M22 23C23 21 25 21 26 23" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const FlashcardIcon = () => (
  <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="blueGradCard" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>
    <rect x="10" y="4" width="20" height="22" rx="3" fill="#93c5fd" opacity="0.5" />
    <rect x="8" y="7" width="20" height="22" rx="3" fill="#60a5fa" opacity="0.8" />
    <rect x="6" y="10" width="20" height="22" rx="3" fill="url(#blueGradCard)" />
    <rect x="10" y="16" width="12" height="4" rx="1" fill="white" />
    <circle cx="12" cy="24" r="1.5" fill="white" />
    <circle cx="16" cy="24" r="1.5" fill="white" />
    <circle cx="20" cy="24" r="1.5" fill="white" />
  </svg>
);

const RobotIcon = () => (
  <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="blueGradRobot" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>
    <rect x="4" y="14" width="4" height="8" rx="2" fill="#60a5fa" />
    <rect x="28" y="14" width="4" height="8" rx="2" fill="#60a5fa" />
    <circle cx="18" cy="18" r="12" fill="url(#blueGradRobot)" />
    <circle cx="13" cy="17" r="2.5" fill="white" />
    <circle cx="23" cy="17" r="2.5" fill="white" />
    <circle cx="10" cy="21" r="1.5" fill="#f87171" />
    <circle cx="26" cy="21" r="1.5" fill="#f87171" />
    <path d="M15 22C16 23.5 20 23.5 21 22" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M26 6L27 9L30 10L27 11L26 14L25 11L22 10L25 9L26 6Z" fill="#38bdf8" />
  </svg>
);

const PracticeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="blueGradPrac" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>
    <rect x="6" y="4" width="20" height="28" rx="4" fill="url(#blueGradPrac)" />
    <line x1="10" y1="10" x2="18" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="10" y1="15" x2="22" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="10" y1="20" x2="20" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="10" y1="25" x2="16" y2="25" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M22 28L30 16L32 18L24 30L22 28Z" fill="#60a5fa" stroke="white" strokeWidth="1.5" />
    <path d="M22 28L21 31L24 30L22 28Z" fill="#f59e0b" />
  </svg>
);

const ProgressChartIcon = () => (
  <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="blueGradProg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>
    <rect x="4" y="6" width="28" height="24" rx="4" fill="url(#blueGradProg)" />
    <line x1="8" y1="24" x2="28" y2="24" stroke="white" strokeWidth="1.5" opacity="0.4" />
    <rect x="9" y="18" width="3" height="6" rx="1" fill="#93c5fd" />
    <rect x="14" y="14" width="3" height="10" rx="1" fill="#60a5fa" />
    <rect x="19" y="11" width="3" height="13" rx="1" fill="white" />
    <rect x="24" y="8" width="3" height="16" rx="1" fill="#f59e0b" />
    <path d="M10.5 18L15.5 14L20.5 11L25.5 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const HskLibraryIcon = () => (
  <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="blueGradHsk" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>
    <rect x="6" y="4" width="24" height="28" rx="4" fill="url(#blueGradHsk)" />
    <path d="M12 12H24M12 18H24M12 24H18" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <rect x="20" y="20" width="10" height="10" rx="2" fill="#60a5fa" stroke="white" strokeWidth="1.5" />
    <text x="21" y="27.5" fill="white" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">HSK</text>
  </svg>
);

export function HomePage() {
  const [emailSub, setEmailSub] = useState('');
  const [subbed, setSubbed] = useState(false);
  const [activeTab, setActiveTab] = useState('vocab');

  // 1. Double-Bezel features grid data
  const premiumFeatures = [
    { title: 'Học cùng AI', desc: 'Cá nhân hóa lộ trình, sửa lỗi câu.', icon: Cpu },
    { title: 'Từ vựng thông minh', desc: 'Học thông qua ghi nhớ lâu dài.', icon: BookOpen },
    { title: 'Tài liệu đa dạng', desc: 'Nguồn tài liệu, tin tức cập nhật.', icon: FileText },
    { title: 'Theo dõi tiến độ', desc: 'Báo cáo chi tiết, thống kê trực quan.', icon: Activity }
  ];

  const painPoints = [
    { title: 'Khó ghi nhớ từ vựng', desc: 'Quên nhanh, không nhớ ngữ cảnh.', icon: ShieldAlert },
    { title: 'Phát âm không chuẩn', desc: 'Thiếu phản hồi, tự học khó khăn.', icon: Volume2 },
    { title: 'Tài liệu hạn chế', desc: 'Nguồn học không phong phú, cổ.', icon: HelpCircle },
    { title: 'Thiếu động lực', desc: 'Dễ nản chí, không có mục tiêu.', icon: Flame }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailSub) {
      setSubbed(true);
      setEmailSub('');
    }
  };

  return (
    <MainLayout>
      <div className="homepage" style={{ paddingBottom: '4rem' }}>
        
        {/* ==========================================
           SECTION 01: HERO SECTION
           ========================================== */}
        <section style={{ 
          minHeight: '90vh',
          padding: '8rem 0 5rem', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0.15)), url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          borderBottom: '1px solid var(--color-border)',
          marginBottom: '2.5rem'
        }}>
          <div style={{ maxWidth: '1480px', width: '100%', padding: '0 1.5rem', margin: '0 auto' }}>
            <style>{`
              @media (min-width: 992px) {
                .hero-grid {
                  grid-template-columns: 3.5fr 6.5fr !important;
                }
                .hero-right-col {
                  margin-right: -4rem !important;
                }
              }
              @media (max-width: 767px) {
                .hero-mascot-container {
                  width: 120px !important;
                  height: 120px !important;
                  bottom: -35px !important;
                  left: -20px !important;
                }
              }
            `}</style>
            
            <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', width: '100%', alignItems: 'center', textAlign: 'left' }}>
              
              {/* Left Column Content */}
              <div className="fade-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(22, 143, 239, 0.06)',
                  border: '1px solid rgba(22, 143, 239, 0.15)',
                  borderRadius: '99px',
                  padding: '0.4rem 1rem',
                  fontSize: '0.85rem',
                  color: 'var(--color-primary)',
                  fontWeight: '600',
                  width: 'fit-content',
                  marginBottom: '0.5rem'
                }}>
                  <Sparkles size={14} />
                  <span>Nền tảng học tiếng Trung ứng dụng AI</span>
                </div>

                <h1 style={{ 
                  fontSize: '3rem', 
                  fontWeight: '900', 
                  color: '#0f172a', 
                  margin: 0, 
                  lineHeight: '1.2',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  letterSpacing: '-1px'
                }}>
                  Học tiếng Trung trực tiếp từ chính <span style={{ color: 'var(--color-primary)' }}>tài liệu bạn đọc</span>.
                </h1>
                
                <p style={{ 
                  color: '#475569', 
                  fontSize: '1.1rem', 
                  lineHeight: '1.6', 
                  maxWidth: '480px', 
                  margin: 0,
                  fontFamily: 'Inter, system-ui, sans-serif'
                }}>
                  Đọc, tra cứu, lưu và ghi nhớ từ vựng ngay trên tài liệu PDF, DOCX, hình ảnh. Tất cả trong một nền tảng.
                </p>
                
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
                  <a href="https://hanora.id.vn" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem', borderRadius: '8px', fontWeight: 'bold' }}>
                    Bắt đầu học miễn phí &rarr;
                  </a>
                  <a href="https://hanora.id.vn" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.85rem 1.75rem', borderRadius: '8px', fontWeight: 'bold', borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>
                    Khám phá Hanora
                  </a>
                </div>
              </div>

              {/* Right Column Showcase Image with live assets */}
              <div className="hero-right-col fade-slide-up-delay-1" style={{ display: 'flex', justifyContent: 'flex-end', position: 'relative', width: '100%' }}>
                <div style={{ 
                  position: 'relative', 
                  width: '100%', 
                  maxWidth: '820px', 
                  display: 'flex', 
                  alignItems: 'center'
                }}>
                  {/* Mockup devices showing 29e2f86e-a1dd-49c5-b0f3-a703257f9de9-removebg-preview.png */}
                  <div style={{ width: '100%', zIndex: 1 }}>
                    <img src={screenshotHero} alt="Hanora Dashboard mockup" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} />
                  </div>
                  
                  <div className="hero-mascot-container" style={{
                    width: '220px',
                    height: '220px',
                    position: 'absolute',
                    bottom: '-65px',
                    left: '-65px',
                    zIndex: 10
                  }}>
                    <img src={heroImg} alt="Panda Mascot" className="float-animation" style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }} />
                  </div>

                </div>
              </div>

            </div>
            {/* Scroll Down Mouse Indicator */}
            <div style={{ 
              position: 'absolute', 
              bottom: '2rem', 
              left: '50%', 
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              opacity: 0.8,
              zIndex: 20
            }} onClick={() => {
              window.scrollTo({
                top: window.innerHeight * 0.90,
                behavior: 'smooth'
              });
            }}>
              <div style={{
                width: '24px',
                height: '38px',
                borderRadius: '12px',
                border: '2px solid var(--deep-blue)',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '6px'
              }}>
                <div className="scroll-dot" style={{
                  width: '4px',
                  height: '8px',
                  borderRadius: '2px',
                  backgroundColor: 'var(--deep-blue)',
                  animation: 'scrollAnimation 1.8s infinite ease-in-out'
                }}></div>
              </div>
            </div>
            
            <style>{`
              @keyframes scrollAnimation {
                0% { transform: translateY(0); opacity: 1; }
                50% { transform: translateY(6px); opacity: 0.3; }
                100% { transform: translateY(0); opacity: 1; }
              }
            `}</style>

          </div>
        </section>

        {/* ==========================================
           SECTION 01.1: GIỚI THIỆU NGẮN VỀ NỀN TẢNG
           ========================================== */}
        <section style={{ 
          padding: '4rem 2rem', 
          backgroundColor: '#ffffff', 
          borderRadius: 'var(--radius-xl)',
          border: '1px solid #e2e8f0',
          boxShadow: 'var(--shadow-sm)',
          maxWidth: '1440px',
          margin: '2rem auto',
          textAlign: 'left'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span style={{ 
                padding: '0.35rem 0.75rem', 
                fontSize: '0.8rem', 
                fontWeight: 'bold', 
                color: 'var(--color-primary)', 
                backgroundColor: 'rgba(22, 143, 239, 0.06)', 
                borderRadius: 'var(--radius-full)',
                display: 'inline-block',
                marginBottom: '1rem'
              }}>
                Giới thiệu ngắn
              </span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--deep-blue)', marginBottom: '1.25rem', lineHeight: '1.3' }}>
                Một nền tảng cho cả quá trình học
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                Khi học tiếng Trung từ tài liệu thực tế, người học thường phải sử dụng nhiều công cụ khác nhau để tra từ, tìm hiểu ngữ cảnh, lưu từ và ôn tập. Hanora được xây dựng để kết nối những bước này thành một trải nghiệm liền mạch.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
                Với Hanora, người học có thể nhấn trực tiếp vào từ hoặc cụm từ trong tài liệu để xem nghĩa, Pinyin, từ loại, ví dụ và giải thích theo ngữ cảnh mà không cần rời khỏi tài liệu đang đọc.
              </p>
            </div>
            
            {/* Screenshot on the right */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={screenshotHero} alt="Hanora Platform Screenshot" style={{ width: '100%', maxWidth: '580px', height: 'auto' }} />
            </div>
          </div>
        </section>

        {/* ==========================================
           SECTION 01.2: VẤN ĐỀ CỦA NGƯỜI HỌC
           ========================================== */}
        <section style={{ padding: '3.5rem 0', textAlign: 'center' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: 'var(--deep-blue)', marginBottom: '0.5rem' }}>
              Vấn đề người học tiếng Trung gặp phải
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>
              Những khó khăn phổ biến khiến hành trình chinh phục tiếng Trung của bạn bị gián đoạn.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', textAlign: 'left' }}>
            {painPoints.map((item, idx) => (
              <div 
                key={idx} 
                className="card scale-hover" 
                style={{ 
                  padding: '2.5rem 2rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1rem', 
                  borderRadius: 'var(--radius-xl)', 
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{
                  width: '3.25rem',
                  height: '3.25rem',
                  borderRadius: '1rem',
                  backgroundColor: 'rgba(239, 68, 68, 0.05)',
                  color: '#ef4444',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <item.icon size={22} />
                </div>
                
                <h3 style={{ fontSize: '1.25rem', color: 'var(--deep-blue)', fontWeight: '800', margin: 0 }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
           SECTION 02: ECOSYSTEM CARDS ROW
           ========================================== */}
        <section style={{ padding: '2.5rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: 'var(--deep-blue)', marginBottom: '0.5rem', position: 'relative', display: 'inline-block' }}>
              Hệ sinh thái học tập Hanora<span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', position: 'absolute', top: '2px', right: '-15px' }}>+</span>
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>
              Tất cả công cụ bạn cần để học tiếng Trung hiệu quả trong một nền tảng duy nhất.
            </p>
          </div>

          <div style={{ position: 'relative', width: '100%', margin: '0 auto', maxWidth: '1440px' }}>
            <style>{`
              .ecosystem-flex-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 1.5rem;
                position: relative;
                z-index: 2;
                width: 100%;
              }
              .ecosystem-card {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                background-color: var(--color-bg-card);
                border-radius: var(--radius-md);
                border: 1px solid var(--color-border);
                padding: 2.25rem 1.5rem;
                box-shadow: var(--shadow-sm);
                cursor: pointer;
                position: relative;
                transition: transform 0.2s, box-shadow 0.2s;
                flex: 1 1 calc(25% - 1.5rem);
                min-width: 280px;
                max-width: 320px;
              }
              .ecosystem-icon-wrapper {
                width: 3.25rem;
                height: 3.25rem;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 1.25rem;
                position: relative;
                z-index: 3;
              }
              @media (max-width: 1200px) {
                .ecosystem-card {
                  flex: 1 1 calc(33.333% - 1.5rem);
                  max-width: 340px;
                }
              }
              @media (max-width: 900px) {
                .ecosystem-card {
                  flex: 1 1 calc(50% - 1.5rem);
                  max-width: 360px;
                }
              }
              @media (max-width: 600px) {
                .ecosystem-card {
                  flex: 1 1 100%;
                  max-width: 100%;
                }
              }
            `}</style>

            <div className="ecosystem-flex-container">
              {(() => {
                const customIcons = [
                  DocumentSearchIcon, 
                  VocabBookIcon, 
                  VocabBookIcon, 
                  FlashcardIcon, 
                  ProgressChartIcon, 
                  PracticeIcon, 
                  HskLibraryIcon
                ];
                const cardsData = [
                  { title: '📖 Đọc tài liệu', desc: 'Đọc trực tiếp tài liệu PDF, DOCX trên Hanora.' },
                  { title: '🔍 Tra từ theo ngữ cảnh', desc: 'Tra nghĩa, Pinyin, từ loại và ví dụ ngay trên tài liệu đang đọc.' },
                  { title: '📚 Kho từ vựng cá nhân', desc: 'Lưu và quản lý những từ vựng bạn muốn ghi nhớ.' },
                  { title: '🧠 Flashcard thông minh', desc: 'Biến từ vựng đã lưu thành Flashcard và hỗ trợ ôn tập với Spaced Repetition.' },
                  { title: '📈 Theo dõi tiến trình', desc: 'Theo dõi quá trình học và những từ vựng bạn đã tích lũy.' },
                  { title: '🎙️ AI Pronunciation', desc: 'Coming Soon — Luyện phát âm và nhận phản hồi với công nghệ AI.' },
                  { title: '📑 Thư viện HSK', desc: 'Tài liệu HSK theo từng cấp độ - dễ dàng tìm kiếm và lựa chọn tài liệu.' }
                ];
                
                return cardsData.map((card, idx) => {
                  const IconComponent = customIcons[idx];
                  return (
                    <div 
                      key={idx} 
                      className="ecosystem-card scale-hover"
                    >
                      {/* Icon */}
                      <div className="ecosystem-icon-wrapper">
                        <IconComponent />
                      </div>

                      <h3 style={{ fontSize: '1.15rem', fontWeight: 'bold', color: 'var(--deep-blue)', marginBottom: '0.5rem', marginTop: 0 }}>
                        {card.title}
                      </h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.5', margin: 0 }}>
                        {card.desc}
                      </p>
                    </div>
                  );
                });
              })()}
            </div>
          </div>
        </section>

        {/* ==========================================
           SECTION 03: INTERACTIVE TABS SHOWCASE
           ========================================== */}
        <section style={{ padding: '2.5rem 0', position: 'relative' }}>
          
          {/* Left-Right navigation arrows */}
          <div style={{
            position: 'absolute',
            left: '-2rem',
            top: '55%',
            transform: 'translateY(-50%)',
            width: '3.5rem',
            height: '3.5rem',
            borderRadius: '50%',
            backgroundColor: 'var(--white)',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-secondary)',
            cursor: 'pointer',
            zIndex: 10
          }} onClick={() => {
            const tabKeys = ['vocab', 'flashcard', 'translate', 'ai', 'progress'];
            const currentIndex = tabKeys.indexOf(activeTab);
            const nextIndex = (currentIndex - 1 + tabKeys.length) % tabKeys.length;
            setActiveTab(tabKeys[nextIndex]);
          }}>
            <ArrowRight size={20} style={{ transform: 'rotate(180deg)' }} />
          </div>

          <div style={{
            position: 'absolute',
            right: '-2rem',
            top: '55%',
            transform: 'translateY(-50%)',
            width: '3.5rem',
            height: '3.5rem',
            borderRadius: '50%',
            backgroundColor: 'var(--white)',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-secondary)',
            cursor: 'pointer',
            zIndex: 10
          }} onClick={() => {
            const tabKeys = ['vocab', 'flashcard', 'translate', 'ai', 'progress'];
            const currentIndex = tabKeys.indexOf(activeTab);
            const nextIndex = (currentIndex + 1) % tabKeys.length;
            setActiveTab(tabKeys[nextIndex]);
          }}>
            <ArrowRight size={20} />
          </div>

          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: 'var(--deep-blue)', marginBottom: '0.5rem', position: 'relative', display: 'inline-block' }}>
              Khám phá Hanora<span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', position: 'absolute', top: '2px', right: '-15px' }}>+</span>
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>
              Trải nghiệm giao diện hiện đại, thân thiện và tối ưu cho việc học.
            </p>
          </div>

          {/* Tab Menu Header */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', borderBottom: '1px solid var(--color-border)', marginBottom: '2rem', paddingBottom: '0.75rem' }}>
            {[
              { id: 'vocab', label: 'Từ vựng' },
              { id: 'flashcard', label: 'Flashcard' },
              { id: 'translate', label: 'Dịch thuật' },
              { id: 'ai', label: 'AI Assistant' },
              { id: 'progress', label: 'Tiến trình' }
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  border: 'none',
                  background: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  color: activeTab === tab.id ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                  cursor: 'pointer',
                  position: 'relative',
                  paddingBottom: '0.75rem',
                  transition: 'color 0.2s ease'
                }}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div style={{
                    position: 'absolute',
                    bottom: '-1px',
                    left: 0,
                    right: 0,
                    height: '3px',
                    backgroundColor: 'var(--color-primary)',
                    borderRadius: 'var(--radius-full)'
                  }}></div>
                )}
              </button>
            ))}
          </div>

          {/* Tab content data definition */}
          {(() => {
            const tabContent = {
              vocab: {
                title: 'Quản lý từ vựng thông minh',
                desc: 'Lưu trữ, tra cứu và ôn tập từ vựng một cách hiệu quả. Hanora giúp bạn ghi nhớ lâu hơn và học tập có hệ thống.',
                checklists: [
                  'Tra cứu nhanh chóng',
                  'Phân loại khoa học',
                  'Ôn tập thông minh',
                  'Theo dõi tiến trình'
                ],
                img: showcaseDict
              },
              flashcard: {
                title: 'Học với Flashcard thông minh',
                desc: 'Học từ vựng qua phương pháp lặp lại ngắt quãng (SRS) khoa học. Các chế độ xem và kiểm tra đa dạng giúp ghi nhớ từ mới nhanh chóng.',
                checklists: [
                  'Ôn tập ngắt quãng (SRS)',
                  'Nhiều chế độ thông minh',
                  'Hình ảnh minh họa trực quan',
                  'Luyện phát âm chuẩn'
                ],
                img: showcaseGamify
              },
              translate: {
                title: 'Không gian dịch thuật thông minh',
                desc: 'Học tiếng Trung qua việc đọc tài liệu thực tế. Nhấp vào từ bất kỳ để tra nghĩa, bôi đen cụm từ để dịch nghĩa lịch sự ngay lập tức.',
                checklists: [
                  'Đọc tài liệu trực tiếp',
                  'Dịch thuật thông minh bằng AI',
                  'Lưu từ mới ngay lập tức',
                  'Tra từ điển tích hợp'
                ],
                img: showcaseTranslate
              },
              ai: {
                title: 'Trợ lý AI 24/7 chuyên sâu',
                desc: 'Trò chuyện bằng tiếng Trung cùng AI để nâng cao khả năng giao tiếp và phản xạ tự nhiên. AI hỗ trợ sửa lỗi ngữ pháp chi tiết.',
                checklists: [
                  'Hỗ trợ giải đáp 24/7',
                  'Giải thích ngữ pháp chi tiết',
                  'Luyện đối thoại thực tế',
                  'Tạo ví dụ minh họa tự động'
                ],
                img: showcaseChat
              },
              progress: {
                title: 'Theo dõi bảng điều khiển cá nhân',
                desc: 'Nhìn lại hành trình học tập hàng ngày với các chỉ số thống kê về thời gian học, từ vựng tích lũy và XP đạt được.',
                checklists: [
                  'Thống kê thời gian thực',
                  'Danh hiệu đạt được',
                  'Bảng xếp hạng tuần/tháng',
                  'Gợi ý lộ trình cá nhân hóa'
                ],
                img: showcaseDashboard
              }
            };

            const current = tabContent[activeTab];

            return (
              <div style={{ backgroundColor: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', padding: '3.5rem 3rem', boxShadow: 'var(--shadow-md)', position: 'relative' }}>
                <style>{`
                  @keyframes tabFadeIn {
                    from { opacity: 0; transform: scale(0.98); }
                    to { opacity: 1; transform: scale(1); }
                  }
                  .ecosystem-card:hover {
                    transform: translateY(-5px);
                    border-color: var(--color-primary) !important;
                    box-shadow: var(--shadow-md) !important;
                  }
                `}</style>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                  
                  {/* Left Column Content */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--deep-blue)', margin: 0 }}>
                      {current.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
                      {current.desc}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {current.checklists.map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--deep-blue)', fontWeight: '600' }}>
                          <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                          <span style={{ fontSize: '0.95rem' }}>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ marginTop: '0.5rem' }}>
                      <Link to="/solutions" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem', borderRadius: 'var(--radius-full)' }}>
                        Xem chi tiết tính năng &rarr;
                      </Link>
                    </div>
                  </div>

                  {/* Right Column Image */}
                  <div style={{ 
                    borderRadius: 'var(--radius-md)', 
                    border: '1px solid var(--color-border)', 
                    boxShadow: 'var(--shadow-md)', 
                    overflow: 'hidden', 
                    backgroundColor: 'var(--white)',
                    aspectRatio: '16/10',
                    position: 'relative'
                  }}>
                    <img 
                       key={activeTab}
                       src={current.img} 
                       alt={current.title} 
                       style={{ 
                         width: '100%', 
                         height: '100%', 
                         objectFit: 'cover', 
                         display: 'block',
                         animation: 'tabFadeIn 0.4s ease'
                       }} 
                    />
                  </div>

                </div>
              </div>
            );
          })()}
        </section>

        {/* ==========================================
           SECTION 04: STAT METRICS BANNER
           ========================================== */}
        <div style={{
          maxWidth: '1440px',
          width: '100%',
          margin: '2rem auto 2.5rem',
          background: 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)',
          color: 'var(--white)',
          padding: '2rem 2.5rem',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '1.25rem',
          boxShadow: '0 10px 25px -5px rgba(29, 78, 216, 0.15)'
        }}>
          <style>{`
            @media (max-width: 991px) {
              .stat-col {
                border-right: none !important;
                border-bottom: 1px solid rgba(255, 255, 255, 0.15);
                padding-bottom: 1rem;
              }
              .stat-col:last-child {
                border-bottom: none !important;
                padding-bottom: 0;
              }
            }
          `}</style>
          
          {/* Panda Vector Logo Watermark */}
          <img src={logoImg} alt="Panda Watermark" style={{
            position: 'absolute',
            right: '2%',
            bottom: '-25px',
            height: '130px',
            opacity: 0.15,
            pointerEvents: 'none',
            zIndex: 1
          }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', position: 'relative', zIndex: 2 }}>
            {[
              { val: '1568+', label: 'Từ vựng', icon: MessageSquare },
              { val: '32+', label: 'Tính năng', icon: ClipboardList },
              { val: '07+', label: 'Công nghệ tích hợp', icon: Shield },
              { val: '06', label: 'Thành viên phát triển', icon: Users },
              { val: '01', label: 'Giải thưởng', icon: Trophy }
            ].map((stat, idx) => (
              <div key={idx} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '1rem',
                padding: '0.5rem 1rem',
                borderRight: idx < 4 ? '1px solid rgba(255, 255, 255, 0.2)' : 'none'
              }} className="stat-col">
                {/* Outlined Icon Circle */}
                <div style={{ 
                  width: '2.75rem', 
                  height: '2.75rem', 
                  borderRadius: '50%', 
                  border: '1.5px solid rgba(255, 255, 255, 0.35)',
                  backgroundColor: 'transparent',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <stat.icon size={18} style={{ color: 'var(--white)' }} />
                </div>

                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: '800', lineHeight: '1.1' }}>{stat.val}</div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.8, fontWeight: 'bold' }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================
           SECTION 05: WHY HANORA (DIỂM KHÁC BIỆT)
           ========================================== */}
        <section style={{ padding: '4rem 0', textAlign: 'center' }}>
          <div style={{ marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: 'var(--deep-blue)', marginBottom: '1rem' }}>
              Vì sao chọn Hanora?
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Không chỉ là một công cụ dịch thông thường. Hanora tập trung vào một bước xa hơn: <strong>Giúp bạn biến từ vừa gặp thành từ có thể ghi nhớ.</strong>
            </p>
          </div>
          
          {/* Luồng quy trình thiết kế cao cấp với Card và Icon */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', alignItems: 'center', width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
              HANORA KẾT NỐI LIỀN MẠCH QUY TRÌNH HỌC TẬP
            </h3>

            {/* Step pipeline */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1.25rem',
              width: '100%',
              maxWidth: '1200px'
            }}>
              {[
                { step: '01', title: 'Tài liệu thực tế', desc: 'Tải lên PDF, DOCX, ảnh giáo trình tiếng Trung.', icon: FileText, bg: 'rgba(22, 143, 239, 0.05)' },
                { step: '02', title: 'Tra cứu ngữ cảnh', desc: 'Click để tra từ, xem phiên âm, nghĩa và ví dụ tức thì.', icon: Search, bg: 'rgba(59, 130, 246, 0.05)' },
                { step: '03', title: 'Kho từ vựng cá nhân', desc: 'Lưu trữ các từ đã tra cứu vào từ điển của riêng bạn.', icon: Bookmark, bg: 'rgba(16, 185, 129, 0.05)' },
                { step: '04', title: 'Flashcard tự động', desc: 'Hệ thống tự động đồng bộ từ vựng đã lưu thành thẻ học.', icon: Layers, bg: 'rgba(245, 158, 11, 0.05)' },
                { step: '05', title: 'Ôn tập SRS', desc: 'Luyện tập ngắt quãng thông minh giúp ghi nhớ dài hạn.', icon: Brain, bg: 'rgba(139, 92, 246, 0.05)' }
              ].map((item, idx) => (
                <div key={idx} className="card scale-hover" style={{
                  padding: '2rem 1.5rem',
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  position: 'relative'
                }}>
                  {/* Step bubble */}
                  <span style={{ 
                    position: 'absolute', 
                    top: '0.75rem', 
                    right: '0.75rem', 
                    fontSize: '0.8rem', 
                    fontWeight: '800', 
                    color: 'var(--color-primary)',
                    opacity: 0.5
                  }}>
                    {item.step}
                  </span>

                  {/* Icon container */}
                  <div style={{
                    width: '3.25rem',
                    height: '3.25rem',
                    borderRadius: '50%',
                    backgroundColor: item.bg,
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <item.icon size={20} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 'bold', color: 'var(--deep-blue)', margin: 0 }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>



        {/* ==========================================
           SECTION 08: CTA SECTION WITH MASCOT
           ========================================== */}
        <section style={{ 
          padding: '3rem 4rem', 
          background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)', 
          color: 'var(--white)',
          textAlign: 'left', 
          borderRadius: 'var(--radius-xl)', 
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-premium)',
          marginTop: '3rem',
          width: '100%',
          maxWidth: '1440px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          {/* Background overlay details */}
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'rgba(255, 255, 255, 0.05)', pointerEvents: 'none' }}></div>
  
          <div className="cta-grid-container" style={{ position: 'relative', zIndex: 1 }}>
            <style>{`
              .cta-grid-container {
                display: grid;
                grid-template-columns: 7fr 3fr;
                gap: 3rem;
                align-items: center;
              }
              @media (max-width: 768px) {
                .cta-grid-container {
                  grid-template-columns: 1fr;
                  text-align: center;
                  gap: 2rem;
                }
              }
              .cta-button-clear {
                transition: all 0.2s ease !important;
              }
              .cta-button-clear:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 15px rgba(0,0,0,0.12) !important;
                background-color: #f8fafc !important;
              }
            `}</style>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--white)', lineHeight: 1.25 }}>
                Đừng chỉ tra từ. Hãy học từ đó.
              </h2>
              <p style={{ color: '#bfdbfe', fontSize: '1.1rem', lineHeight: '1.6', margin: 0 }}>
                Biến chính những tài liệu bạn đang đọc thành tài liệu học tập của riêng bạn cùng Hanora.
              </p>
              <div>
                <a href="https://hanora.id.vn" target="_blank" rel="noopener noreferrer" className="cta-button-clear" style={{ 
                  display: 'inline-block',
                  padding: '0.85rem 2.25rem', 
                  borderRadius: '9999px', 
                  backgroundColor: '#ffffff', 
                  color: '#1d4ed8', 
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
                  textAlign: 'center'
                }}>
                  Bắt đầu học
                </a>
              </div>
            </div>
  
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={pandaMascot} alt="Panda Mascot" className="float-animation" style={{
                width: '180px',
                height: 'auto',
                display: 'block',
                objectFit: 'contain'
              }} />
            </div>
  
          </div>
        </section>

      </div>
    </MainLayout>
  );
}
export default HomePage;
