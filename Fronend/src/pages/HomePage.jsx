import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, Laptop, Tablet, BookOpen, Layers, 
  Cpu, Award, Users, FileText, ChevronRight, CheckCircle2, 
  AlertCircle, Star, Github, Activity, HelpCircle, Network,
  Database, Server, Cloud, ShieldAlert, Check, RefreshCw, Volume2, Flame,
  Trophy, MessageSquare, ClipboardList, Shield
} from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';

// Import local assets matching the user's reference design
import logoImg from '../assets/logo.png';
import mainImg from '../assets/main.jpg';
import heroImg from '../assets/main.jpg'; // Panda Mascot with Vietnamese conical hat
import screenshotHero from '../assets/29e2f86e-a1dd-49c5-b0f3-a703257f9de9.png'; // Laptop + Phone dashboard screenshot
import backgroundImg from '../assets/background.png'; // Local background image
import showcaseVocab from '../assets/unnamed (7).jpg'; // Showcase 1 Vocabulary
import showcaseTranslate from '../assets/unnamed (9).jpg'; // Showcase 3 Translation
import showcaseDict from '../assets/034e8958-037f-4339-bf34-0f25604d9f64.png'; // Showcase 4 Left Dictionary
import showcaseChat from '../assets/29e2f86e-a1dd-49c5-b0f3-a703257f9de9.png'; // Showcase 4 Right AI Chat
import showcaseDashboard from '../assets/unnamed (10).jpg'; // Showcase 5 Left Dashboard
import showcaseGamify from '../assets/unnamed (8).jpg'; // Showcase 5 Right Gamification/Leaderboard

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
          <div style={{ maxWidth: '1280px', width: '100%', padding: '0 1.5rem', margin: '0 auto' }}>
            <style>{`
              @media (min-width: 992px) {
                .hero-grid {
                  grid-template-columns: 3.5fr 6.5fr !important;
                }
                .hero-right-col {
                  margin-right: -4rem !important;
                }
              }
            `}</style>
            
            <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', width: '100%', alignItems: 'center', textAlign: 'left' }}>
              
              {/* Left Column Content */}
              <div className="fade-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <h1 style={{ 
                    fontSize: '4.5rem', 
                    fontWeight: '900', 
                    color: 'var(--color-primary)', 
                    margin: 0, 
                    lineHeight: '1.05',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    letterSpacing: '-1.5px'
                  }}>
                    Hanora
                  </h1>
                  <h2 style={{ 
                    fontSize: '2.5rem', 
                    fontWeight: '800', 
                    color: '#0f172a', 
                    margin: 0, 
                    lineHeight: '1.2',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    letterSpacing: '-0.5px'
                  }}>
                    Nền tảng học tiếng Trung<br />
                    thông minh với AI
                  </h2>
                </div>
                
                <p style={{ 
                  color: '#64748b', 
                  fontSize: '1rem', 
                  lineHeight: '1.6', 
                  maxWidth: '460px', 
                  margin: 0,
                  fontFamily: 'Inter, system-ui, sans-serif'
                }}>
                  Hanora giúp bạn học từ vựng, đọc hiểu tài liệu, dịch thuật và luyện tập mỗi ngày với sự hỗ trợ của trí tuệ nhân tạo.
                </p>
                
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem' }}>
                  <a href="https://hanora.id.vn" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-premium" style={{ padding: '0.85rem 1.75rem', borderRadius: 'var(--radius-full)' }}>
                    Khám phá Hanora &rarr;
                  </a>
                  <a href="https://hanora.id.vn" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-premium" style={{ padding: '0.85rem 1.75rem', borderRadius: 'var(--radius-full)' }}>
                    Tìm hiểu thêm
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
                  {/* Mockup devices showing 29e2f86e-a1dd-49c5-b0f3-a703257f9de9.png */}
                  <div className="glow-breath" style={{ width: '100%', zIndex: 1, borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                    <img src={screenshotHero} alt="Hanora Dashboard mockup" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} />
                  </div>
                  
                  {/* Mascot panda wearing Vietnamese conical hat (main.jpg) */}
                  <div style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    position: 'absolute',
                    bottom: '-40px',
                    left: '-40px',
                    border: '4px solid var(--white)',
                    boxShadow: 'var(--shadow-lg)',
                    zIndex: 10,
                    overflow: 'hidden',
                    backgroundColor: 'var(--white)'
                  }}>
                    <img src={heroImg} alt="Panda Mascot" className="float-animation" style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
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
           SECTION 02: ECOSYSTEM CARDS ROW
           ========================================== */}
        {/* ==========================================
           SECTION 02: ECOSYSTEM CARDS ROW
           ========================================== */}
        <section style={{ padding: '2.5rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: 'var(--deep-blue)', marginBottom: '0.5rem', position: 'relative', display: 'inline-block' }}>
              Hệ sinh thái học tập Hanora<span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', position: 'absolute', top: '2px', right: '-15px' }}>+</span>
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>
              Tất cả công cụ bạn cần để học tiếng Trung hiệu quả trong một nền tảng duy nhất.
            </p>
          </div>

          {/* Connected Cards Row */}
          <div style={{ position: 'relative', width: '100%', margin: '0 auto', maxWidth: '1200px' }}>
            {/* Solid connecting line with dots between cards */}
            <div style={{
              position: 'absolute',
              top: '3.125rem', /* alignment with icons */
              left: '8%',
              right: '8%',
              height: '2px',
              backgroundColor: 'rgba(22, 143, 239, 0.2)',
              zIndex: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div key={i} className="pulse-dot" style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: '2.5px solid var(--color-primary)',
                  backgroundColor: 'var(--white)',
                  transform: 'translateY(-0.5px)'
                }}></div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem', position: 'relative', zIndex: 2 }}>
              {(() => {
                const customIcons = [DocumentSearchIcon, VocabBookIcon, FlashcardIcon, RobotIcon, PracticeIcon, ProgressChartIcon];
                const cardsData = [
                  { title: 'Tài liệu', desc: 'Đọc và tương tác với tài liệu phong phú' },
                  { title: 'Từ vựng', desc: 'Quản lý và học từ vựng thông minh' },
                  { title: 'Flashcard', desc: 'Học từ với phương pháp lặp lại ngắt quãng' },
                  { title: 'AI Assistant', desc: 'Trợ lý AI hỗ trợ giải thích, phân tích và tạo nội dung' },
                  { title: 'Luyện tập', desc: 'Đa dạng bài tập giúp củng cố kiến thức' },
                  { title: 'Tiến trình', desc: 'Theo dõi tiến trình, XP, streak và mục tiêu' }
                ];
                
                return cardsData.map((card, idx) => {
                  const IconComponent = customIcons[idx];
                  return (
                    <div key={idx} style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      textAlign: 'center', 
                      backgroundColor: 'var(--color-bg-card)', 
                      borderRadius: 'var(--radius-md)', 
                      border: '1px solid var(--color-border)', 
                      padding: '1.5rem 1rem', 
                      boxShadow: 'var(--shadow-sm)',
                      cursor: 'pointer',
                      position: 'relative'
                    }} className="ecosystem-card scale-hover">
                      {/* Icon */}
                      <div style={{
                        width: '3.25rem',
                        height: '3.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1rem',
                        position: 'relative',
                        zIndex: 3
                      }}>
                        <IconComponent />
                      </div>

                      <h3 style={{ fontSize: '1.05rem', fontWeight: 'bold', color: 'var(--deep-blue)', marginBottom: '0.5rem' }}>
                        {card.title}
                      </h3>
                      <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', lineHeight: '1.4', margin: 0 }}>
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
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                  
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
                      <a href="https://hanora.id.vn" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem', borderRadius: 'var(--radius-full)' }}>
                        Xem chi tiết tính năng &rarr;
                      </a>
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
          maxWidth: '1200px',
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
           SECTION 07.1: OUTSTANDING ACHIEVEMENTS
           ========================================== */}
        <section style={{ padding: '3rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: 'var(--deep-blue)', marginBottom: '0.5rem', position: 'relative', display: 'inline-block' }}>
              Thành tựu nổi bật<span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', position: 'absolute', top: '2px', right: '-15px' }}>+</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', alignItems: 'stretch' }}>
            {/* Dark Blue Card */}
            <div className="scale-hover" style={{ 
              background: 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)', 
              borderRadius: 'var(--radius-lg)', 
              padding: '2.5rem 2rem', 
              color: 'var(--white)',
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              textAlign: 'left',
              boxShadow: 'var(--shadow-md)',
              minHeight: '260px',
              cursor: 'pointer'
            }}>
              <div>
                {/* Trophy icon */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
                    <path d="M12 2a6 6 0 0 1 6 6v3.5c0 1.66-1.34 3-3 3H9a3 3 0 0 1-3-3V8a6 6 0 0 1 6-6z" fill="#f59e0b" fillOpacity="0.2" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '800', margin: '0 0 0.25rem', color: 'var(--white)' }}>Giải 3</h3>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: '0 0 1rem', color: '#93c5fd' }}>FSHARK 2026</h4>
                <p style={{ fontSize: '0.85rem', color: '#bfdbfe', lineHeight: '1.5', margin: 0 }}>
                  Hanora đạt Giải 3 tại cuộc thi FShark của Trường Đại học FPT Đà Nẵng.
                </p>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <a href="https://hanora.id.vn" target="_blank" rel="noopener noreferrer" style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: 'var(--white)',
                  padding: '0.6rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  transition: 'background 0.2s'
                }} className="hover-light-bg">
                  Xem chi tiết &rarr;
                </a>
              </div>
            </div>

            {/* Achievement Image Cards */}
            {[achievementImg1, achievementImg2, achievementImg3].map((img, idx) => (
              <div key={idx} className="scale-hover" style={{ 
                borderRadius: 'var(--radius-lg)', 
                border: '1px solid var(--color-border)', 
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                backgroundColor: 'var(--white)',
                cursor: 'pointer'
              }}>
                <img src={img} alt={`FShark Achievement ${idx + 1}`} style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  display: 'block' 
                }} />
              </div>
            ))}
          </div>

          {/* Pagination dots replica matching the mockup */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></span>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#e2e8f0' }}></span>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#e2e8f0' }}></span>
          </div>
        </section>

        {/* ==========================================
           SECTION 07.2: HANORA TEAM
           ========================================== */}
        <section style={{ padding: '3rem 0', textAlign: 'center' }}>
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: 'var(--deep-blue)', marginBottom: '0.5rem', position: 'relative', display: 'inline-block' }}>
              Đội ngũ Hanora<span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', position: 'absolute', top: '2px', right: '-15px' }}>+</span>
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>
              Những con người đam mê công nghệ và giáo dục.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', gap: '3rem', justifyContent: 'center', maxWidth: '1200px', margin: '0 auto', overflowX: 'auto', paddingBottom: '0.5rem' }} className="team-container-scroll">
            <style>{`
              .team-container-scroll::-webkit-scrollbar {
                display: none;
              }
              .team-container-scroll {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
            {[
              { name: 'Minh Tuấn', role: 'Frontend Developer', img: avatar1 },
              { name: 'Linh Chi', role: 'Backend Developer', img: avatar2 },
              { name: 'Đức Anh', role: 'AI Engineer', img: avatar3 },
              { name: 'Ngọc Trâm', role: 'UI/UX Designer', img: avatar4 },
              { name: 'Hoàng Việt', role: 'DevOps Engineer', img: avatar5 },
              { name: 'Thảo Vy', role: 'Project Manager', img: avatar6 }
            ].map((member, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ 
                  width: '120px', 
                  height: '120px', 
                  borderRadius: '50%', 
                  overflow: 'hidden',
                  border: '3px solid rgba(22, 143, 239, 0.1)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: 'var(--deep-blue)', margin: '0 0 0.15rem' }}>{member.name}</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: 0 }}>{member.role}</p>
                </div>
              </div>
            ))}

            {/* "Xem thêm" Member Button */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
              <Link to="/team" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ 
                  width: '120px', 
                  height: '120px', 
                  borderRadius: '50%', 
                  backgroundColor: 'rgba(22, 143, 239, 0.05)',
                  border: '3px dashed rgba(22, 143, 239, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)',
                  transition: 'background-color 0.2s, border-color 0.2s'
                }} className="team-more-circle">
                  <Users size={28} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: 'var(--color-primary)', margin: '0 0 0.15rem' }}>Xem thêm</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: 0 }}>Thành viên</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ==========================================
           SECTION 07.3: WHY HANORA
           ========================================== */}
        <section style={{ padding: '3.5rem 0', textAlign: 'center' }}>
          <style>{`
            .why-card {
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
            }
            .why-card-0 {
              background-color: rgba(59, 130, 246, 0.02) !important;
              border-color: rgba(59, 130, 246, 0.12) !important;
            }
            .why-card-0:hover {
              transform: translateY(-5px);
              background: linear-gradient(135deg, rgba(59, 130, 246, 0.07) 0%, rgba(99, 102, 241, 0.07) 100%) !important;
              border-color: rgba(59, 130, 246, 0.35) !important;
              box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.15) !important;
            }
            
            .why-card-1 {
              background-color: rgba(168, 85, 247, 0.02) !important;
              border-color: rgba(168, 85, 247, 0.12) !important;
            }
            .why-card-1:hover {
              transform: translateY(-5px);
              background: linear-gradient(135deg, rgba(168, 85, 247, 0.07) 0%, rgba(236, 72, 153, 0.07) 100%) !important;
              border-color: rgba(168, 85, 247, 0.35) !important;
              box-shadow: 0 10px 25px -5px rgba(168, 85, 247, 0.15) !important;
            }

            .why-card-2 {
              background-color: rgba(249, 115, 22, 0.02) !important;
              border-color: rgba(249, 115, 22, 0.12) !important;
            }
            .why-card-2:hover {
              transform: translateY(-5px);
              background: linear-gradient(135deg, rgba(249, 115, 22, 0.07) 0%, rgba(234, 179, 8, 0.07) 100%) !important;
              border-color: rgba(249, 115, 22, 0.35) !important;
              box-shadow: 0 10px 25px -5px rgba(249, 115, 22, 0.15) !important;
            }

            .why-card-3 {
              background-color: rgba(20, 184, 166, 0.02) !important;
              border-color: rgba(20, 184, 166, 0.12) !important;
            }
            .why-card-3:hover {
              transform: translateY(-5px);
              background: linear-gradient(135deg, rgba(20, 184, 166, 0.07) 0%, rgba(34, 197, 94, 0.07) 100%) !important;
              border-color: rgba(20, 184, 166, 0.35) !important;
              box-shadow: 0 10px 25px -5px rgba(20, 184, 166, 0.15) !important;
            }
          `}</style>
          
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: 'var(--deep-blue)', marginBottom: '2.5rem' }}>Why Hanora</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', textAlign: 'left' }}>
            {[
              { 
                title: 'AI Tiên Tiến', 
                desc: 'Hệ thống học trợ lý, câu dẫn dắt thông minh.', 
                icon: Sparkles,
                iconBg: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)'
              },
              { 
                title: 'Cá Nhân Hóa', 
                desc: 'Đo lường thời gian học tập cá nhân.', 
                icon: Activity,
                iconBg: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)'
              },
              { 
                title: 'Hiệu Quả Cao', 
                desc: 'Nhớ lâu hơn qua phương pháp ôn tập ngắt quãng.', 
                icon: Flame,
                iconBg: 'linear-gradient(135deg, #f97316 0%, #eab308 100%)'
              },
              { 
                title: 'Cộng Đồng Hỗ Trợ', 
                desc: 'Học tập chia sẻ cùng cộng đồng đạt mục tiêu.', 
                icon: Users,
                iconBg: 'linear-gradient(135deg, #14b8a6 0%, #22c55e 100%)'
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`card why-card why-card-${idx}`} 
                style={{ 
                  padding: '2.5rem 2rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1rem', 
                  borderRadius: 'var(--radius-xl)', 
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Icon Container */}
                <div style={{
                  width: '3.25rem',
                  height: '3.25rem',
                  borderRadius: '1rem',
                  background: item.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                }}>
                  <item.icon size={22} />
                </div>
                
                <h3 style={{ fontSize: '1.25rem', color: 'var(--deep-blue)', fontWeight: '800', margin: '0.25rem 0 0' }}>
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
          maxWidth: '1200px',
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
                Bắt đầu hành trình chinh phục tiếng Trung ngay hôm nay!
              </h2>
              <p style={{ color: '#bfdbfe', fontSize: '1.1rem', lineHeight: '1.6', margin: 0 }}>
                Gia nhập cộng đồng Hanora và trải nghiệm học tập học hiệu quả.
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
                  Bắt đầu ngay
                </a>
              </div>
            </div>
 
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={mainImg} alt="Panda Mascot" className="float-animation" style={{
                width: '170px',
                height: '170px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid rgba(255,255,255,0.3)',
                boxShadow: 'var(--shadow-lg)'
              }} />
            </div>
 
          </div>
        </section>

      </div>
    </MainLayout>
  );
}
export default HomePage;
