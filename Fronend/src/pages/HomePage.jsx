import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, Laptop, Tablet, BookOpen, Layers, 
  Cpu, Award, Users, FileText, ChevronRight, CheckCircle2, 
  AlertCircle, Star, Github, Activity, HelpCircle, Network,
  Database, Server, Cloud, ShieldAlert, Check, RefreshCw, Volume2, Flame
} from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';

// Import local assets matching the user's reference design
import logoImg from '../assets/logo.png';
import mainImg from '../assets/main.jpg';
import heroImg from '../assets/hero.png';
import screenshotHero from '../assets/unnamed.jpg'; // Hero Laptop screen
import showcaseVocab from '../assets/unnamed (7).jpg'; // Showcase 1 Vocabulary
import showcaseTranslate from '../assets/unnamed (9).jpg'; // Showcase 3 Translation
import showcaseDict from '../assets/034e8958-037f-4339-bf34-0f25604d9f64.png'; // Showcase 4 Left Dictionary
import showcaseChat from '../assets/29e2f86e-a1dd-49c5-b0f3-a703257f9de9.png'; // Showcase 4 Right AI Chat
import showcaseDashboard from '../assets/unnamed (10).jpg'; // Showcase 5 Left Dashboard
import showcaseGamify from '../assets/unnamed (8).jpg'; // Showcase 5 Right Gamification/Leaderboard

// Import technology SVGs
import awsS3Logo from '../assets/aws-s3.svg';
import azureLogo from '../assets/azure.svg';
import deepseekLogo from '../assets/deepseek.svg';
import postgresqlLogo from '../assets/postgresql.svg';
import dotnetLogo from '../assets/dotnet.svg';
import tailwindcssLogo from '../assets/tailwindcss.svg';
import kubernetesLogo from '../assets/kubernetes.svg';
import reactLogo from '../assets/react.svg';

export function HomePage() {
  const [emailSub, setEmailSub] = useState('');
  const [subbed, setSubbed] = useState(false);

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
        <section style={{ padding: '5rem 0 3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', width: '100%', alignItems: 'center', textAlign: 'left' }}>
            
            {/* Left Column Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h1 style={{ fontSize: '3rem', fontWeight: '900', lineHeight: '1.15', color: 'var(--deep-blue)' }}>
                Học tiếng Trung<br />
                thông minh hơn<br />
                cùng Hanora
              </h1>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '480px' }}>
                Sử dụng AI tiên tiến để nâng cao các kỹ năng tiếng Trung của bạn nhanh chóng và hiệu quả.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <a href="https://hanora.id.vn" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem', borderRadius: 'var(--radius-full)' }}>
                  Bắt đầu học miễn phí
                </a>
                <a href="https://hanora.id.vn" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.85rem 1.75rem', borderRadius: 'var(--radius-full)' }}>
                  Khám phá Hanora
                </a>
              </div>
            </div>

            {/* Right Column Showcase Image with live assets */}
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%' }}>
              <div style={{ 
                position: 'relative', 
                width: '100%', 
                maxWidth: '540px', 
                display: 'flex', 
                alignItems: 'center',
                paddingRight: '60px' // Space for floating overlapping mascot
              }}>
                {/* Laptop screen */}
                <div className="screenshot-frame" style={{ width: '100%', zIndex: 1 }}>
                  <div className="screenshot-bar">
                    <div className="screenshot-dot" style={{ backgroundColor: '#ef4444' }}></div>
                    <div className="screenshot-dot" style={{ backgroundColor: '#eab308' }}></div>
                    <div className="screenshot-dot" style={{ backgroundColor: '#22c55e' }}></div>
                  </div>
                  <img src={screenshotHero} alt="Hanora Dashboard" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
                </div>
                
                {/* Mascot panda */}
                <img src={heroImg} alt="Panda Mascot" className="float-animation" style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-10px',
                  border: '4px solid var(--white)',
                  boxShadow: 'var(--shadow-lg)',
                  zIndex: 10
                }} />

                {/* Floating XP / Streak status badge */}
                <div style={{ 
                  position: 'absolute', 
                  top: '15%', 
                  left: '-25px', 
                  backgroundColor: 'var(--white)', 
                  border: '1px solid var(--color-border)', 
                  borderRadius: 'var(--radius-md)', 
                  padding: '0.5rem 1rem', 
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                  textAlign: 'left',
                  zIndex: 15
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                    <Award size={14} />
                    <span>XP 250</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', fontWeight: 'bold' }}>
                    🔥 Streak: 5 ngày
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ==========================================
           SECTION 02: ADVANTAGES & PAIN POINTS GRID
           ========================================== */}
        <section style={{ padding: '4rem 0' }}>
          
          {/* Top Row: Premium features (Double-Bezel nested) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {premiumFeatures.map((feat, index) => (
              <div key={index} className="double-bezel-outer">
                <div className="double-bezel-inner" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ 
                    width: '2.5rem', 
                    height: '2.5rem', 
                    borderRadius: 'var(--radius-sm)', 
                    backgroundColor: 'var(--color-primary-light)', 
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <feat.icon size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--deep-blue)', fontWeight: 'bold' }}>{feat.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: Pain points cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {painPoints.map((point, index) => (
              <div key={index} className="card" style={{ padding: '1.5rem', borderStyle: 'dashed', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ 
                  width: '2.5rem', 
                  height: '2.5rem', 
                  borderRadius: 'var(--radius-sm)', 
                  backgroundColor: 'rgba(239, 68, 68, 0.05)', 
                  color: 'rgb(239, 68, 68)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <point.icon size={20} />
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--deep-blue)', fontWeight: 'bold' }}>{point.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>{point.desc}</p>
              </div>
            ))}
          </div>

        </section>

        {/* ==========================================
           SECTION 03: ECOSYSTEM DIAGRAM
           ========================================== */}
        <section style={{ padding: '5rem 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--deep-blue)', marginBottom: '0.5rem' }}>
              Hanora - Trung tâm học tập toàn diện với AI
            </h2>
            <p style={{ color: 'var(--color-text-secondary)' }}>Mô hình liên kết các hệ thống con cốt lõi trong hệ sinh thái.</p>
          </div>

          <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto', padding: '2rem 0' }}>
            
            {/* AI Engine Top Node */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem', position: 'relative', zIndex: 10 }}>
              <div className="ecosystem-node" style={{ 
                borderColor: 'var(--color-primary)', 
                boxShadow: 'var(--shadow-glow)',
                width: '160px',
                padding: '0.6rem 1rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                fontWeight: 'bold',
                color: 'var(--color-primary)',
                backgroundColor: 'var(--color-bg-card)'
              }}>
                <Sparkles size={16} />
                <span>AI Engine</span>
              </div>
            </div>

            {/* Middle Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px 1fr', alignItems: 'center', gap: '2rem', position: 'relative' }}>
              
              {/* Left Column (2 nodes) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'flex-end', zIndex: 10 }}>
                {/* Node 1: Thư viện tài liệu */}
                <div className="ecosystem-node" style={{ textAlign: 'left', width: '280px', display: 'flex', gap: '0.75rem', alignItems: 'flex-start', backgroundColor: 'var(--color-bg-card)' }}>
                  <div style={{ color: 'var(--color-primary)', marginTop: '0.2rem' }}>
                    <FileText size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 'bold', color: 'var(--deep-blue)', fontSize: '0.95rem', margin: '0 0 0.25rem' }}>Thư viện tài liệu</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: '1.4' }}>
                      Thư viện tài liệu, chọn tài liệu học cho mình.
                    </p>
                  </div>
                </div>

                {/* Node 2: Công cụ học tập */}
                <div className="ecosystem-node" style={{ textAlign: 'left', width: '280px', display: 'flex', gap: '0.75rem', alignItems: 'flex-start', backgroundColor: 'var(--color-bg-card)' }}>
                  <div style={{ color: 'var(--color-primary)', marginTop: '0.2rem' }}>
                    <Layers size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 'bold', color: 'var(--deep-blue)', fontSize: '0.95rem', margin: '0 0 0.25rem' }}>Công cụ học tập</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: '1.4' }}>
                      Công cụ học tập: SRS ôn tập, kiểm tra, sửa lỗi.
                    </p>
                  </div>
                </div>
              </div>

              {/* Center Circle: Hanora */}
              <div style={{ display: 'flex', justifyContent: 'center', zIndex: 10 }}>
                <div className="ecosystem-center" style={{ 
                  width: '90px', 
                  height: '90px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  padding: 0
                }}>
                  Hanora
                </div>
              </div>

              {/* Right Column (2 nodes) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'flex-start', zIndex: 10 }}>
                {/* Node 3: Cộng đồng */}
                <div className="ecosystem-node" style={{ textAlign: 'left', width: '280px', display: 'flex', gap: '0.75rem', alignItems: 'flex-start', backgroundColor: 'var(--color-bg-card)' }}>
                  <div style={{ color: 'var(--color-primary)', marginTop: '0.2rem' }}>
                    <Users size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 'bold', color: 'var(--deep-blue)', fontSize: '0.95rem', margin: '0 0 0.25rem' }}>Cộng đồng</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: '1.4' }}>
                      Cộng đồng người học tiếng Trung đông đảo.
                    </p>
                  </div>
                </div>

                {/* Node 4: Đăng ký học tập */}
                <div className="ecosystem-node" style={{ textAlign: 'left', width: '280px', display: 'flex', gap: '0.75rem', alignItems: 'flex-start', backgroundColor: 'var(--color-bg-card)' }}>
                  <div style={{ color: 'var(--color-primary)', marginTop: '0.2rem' }}>
                    <Database size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 'bold', color: 'var(--deep-blue)', fontSize: '0.95rem', margin: '0 0 0.25rem' }}>Đăng ký học tập</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: '1.4' }}>
                      Chọn lộ trình học phù hợp nhất với bản thân.
                    </p>
                  </div>
                </div>
              </div>

              {/* SVG Connecting Lines - Absolute positioned inside the middle grid */}
              <svg style={{ 
                position: 'absolute', 
                top: '-70px', 
                left: 0, 
                width: '100%', 
                height: 'calc(100% + 70px)', 
                pointerEvents: 'none', 
                zIndex: 1 
              }} viewBox="0 0 900 350">
                {/* Vertical line from AI Engine to Hanora center */}
                <path d="M 450,20 L 450,140" stroke="rgba(22, 143, 239, 0.25)" strokeWidth="2" fill="none" />
                
                {/* Left side branch path: center -> left -> split up/down */}
                <path d="M 405,185 L 355,185 A 15 15 0 0 1 340,170 L 340,115 A 15 15 0 0 0 325,100 L 290,100" stroke="rgba(22, 143, 239, 0.25)" strokeWidth="2" fill="none" />
                <path d="M 355,185 A 15 15 0 0 0 340,200 L 340,255 A 15 15 0 0 1 325,270 L 290,270" stroke="rgba(22, 143, 239, 0.25)" strokeWidth="2" fill="none" />

                {/* Right side branch path: center -> right -> split up/down */}
                <path d="M 495,185 L 545,185 A 15 15 0 0 0 560,170 L 560,115 A 15 15 0 0 1 575,100 L 610,100" stroke="rgba(22, 143, 239, 0.25)" strokeWidth="2" fill="none" />
                <path d="M 545,185 A 15 15 0 0 1 560,200 L 560,255 A 15 15 0 0 0 575,270 L 610,270" stroke="rgba(22, 143, 239, 0.25)" strokeWidth="2" fill="none" />
              </svg>

            </div>

          </div>
        </section>

        {/* ==========================================
           SECTION 04: PRODUCT SHOWCASE LIST
           ========================================== */}
        <section style={{ padding: '5rem 0' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            
            {/* Showcase 1: Vocabulary */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center', textAlign: 'left' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--deep-blue)', marginBottom: '1rem' }}>Quản lý từ vựng hiệu quả</h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', fontSize: '1rem' }}>
                  Tra, lưu và ôn tập từ vựng dễ dàng với kho tri thức thông minh.
                </p>
              </div>
              <div className="screenshot-frame">
                <div className="screenshot-bar">
                  <div className="screenshot-dot" style={{ backgroundColor: '#ef4444' }}></div>
                  <div className="screenshot-dot" style={{ backgroundColor: '#eab308' }}></div>
                  <div className="screenshot-dot" style={{ backgroundColor: '#22c55e' }}></div>
                </div>
                <img src={showcaseVocab} alt="Quản lý từ vựng" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
              </div>
            </div>

            {/* Showcase 2: Flashcard */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center', textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                {/* Simulated mobile mockups */}
                <div style={{ width: '130px', height: '220px', backgroundColor: '#0f172a', border: '3px solid #1e293b', borderRadius: 'var(--radius-md)', padding: '0.75rem', position: 'relative' }}>
                  <div style={{ width: '40px', height: '10px', backgroundColor: '#1e293b', borderRadius: 'var(--radius-full)', margin: '0 auto 0.75rem' }}></div>
                  <div style={{ height: 'calc(100% - 25px)', backgroundColor: 'var(--color-primary-light)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--color-border)' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--deep-blue)' }}>你好</span>
                  </div>
                  <span style={{ position: 'absolute', bottom: '1.25rem', left: '50%', transform: 'translateX(-50%)', fontSize: '0.65rem', color: 'var(--color-text-muted)', fontWeight: 'bold' }}>Chế độ Xem</span>
                </div>
                
                <div style={{ width: '130px', height: '220px', backgroundColor: '#0f172a', border: '3px solid #1e293b', borderRadius: 'var(--radius-md)', padding: '0.75rem', position: 'relative' }}>
                  <div style={{ width: '40px', height: '10px', backgroundColor: '#1e293b', borderRadius: 'var(--radius-full)', margin: '0 auto 0.75rem' }}></div>
                  <div style={{ height: 'calc(100% - 25px)', backgroundColor: 'var(--white)', borderRadius: 'var(--radius-sm)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', border: '1px solid var(--color-border)', padding: '0.5rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--primary-blue)' }}>[nǐ hǎo]</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', textAlign: 'center' }}>Xin chào</span>
                  </div>
                  <span style={{ position: 'absolute', bottom: '1.25rem', left: '50%', transform: 'translateX(-50%)', fontSize: '0.65rem', color: 'var(--color-text-muted)', fontWeight: 'bold' }}>Chế độ Học</span>
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--deep-blue)', marginBottom: '1rem' }}>Học với Flashcard thông minh</h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', fontSize: '1rem' }}>
                  Tập trung học với nhiều chế độ thông minh.
                </p>
              </div>
            </div>

            {/* Showcase 3: Translation Workspace */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center', textAlign: 'left' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--deep-blue)', marginBottom: '1rem' }}>Không gian Dịch Thông minh</h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', fontSize: '1rem' }}>
                  Đọc và dịch tài liệu PDF, web với sự hỗ trợ của AI.
                </p>
              </div>
              <div className="screenshot-frame">
                <div className="screenshot-bar">
                  <div className="screenshot-dot" style={{ backgroundColor: '#ef4444' }}></div>
                  <div className="screenshot-dot" style={{ backgroundColor: '#eab308' }}></div>
                  <div className="screenshot-dot" style={{ backgroundColor: '#22c55e' }}></div>
                </div>
                <img src={showcaseTranslate} alt="Không gian dịch thông minh" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
              </div>
            </div>

            {/* Showcase 4: Dictionary & Chat Side-by-Side */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', textAlign: 'left' }}>
              
              <div className="card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ padding: '1rem 1rem 0' }}>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--deep-blue)', fontWeight: 'bold', margin: '0 0 0.5rem' }}>Từ điển AI chuyên sâu</h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
                    Tra nghĩa từ hoặc câu tiếng Trung kèm dịch nghĩa lịch sự.
                  </p>
                </div>
                <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', height: '200px' }}>
                  <img src={showcaseDict} alt="Từ điển AI chuyên sâu" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>

              <div className="card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ padding: '1rem 1rem 0' }}>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--deep-blue)', fontWeight: 'bold', margin: '0 0 0.5rem' }}>Trợ lý AI 24/7</h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
                    Modern AI chat UI powered by DeepSeek API.
                  </p>
                </div>
                <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', height: '200px' }}>
                  <img src={showcaseChat} alt="Trợ lý AI 24/7" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>

            </div>

            {/* Showcase 5: Progress & Gamification Side-by-Side */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', textAlign: 'left' }}>
              
              <div className="card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ padding: '1rem 1rem 0' }}>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--deep-blue)', fontWeight: 'bold', margin: '0 0 0.5rem' }}>Theo dõi Bảng điều khiển Cá nhân</h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
                    Thống kê thời gian, biểu đồ tiến trình học để dễ dàng định hình thói quen học tập.
                  </p>
                </div>
                <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', height: '200px' }}>
                  <img src={showcaseDashboard} alt="Theo dõi Bảng điều khiển" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>

              {/* Gamification premium styled block */}
              <div className="card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ padding: '1rem 1rem 0' }}>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--deep-blue)', fontWeight: 'bold', margin: '0 0 0.5rem' }}>Thú vị hơn với Gamification</h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
                    Tích điểm kinh nghiệm (XP), thăng hạng bảng xếp hạng học tập và đạt các danh hiệu độc nhất.
                  </p>
                </div>
                <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', height: '200px' }}>
                  <img src={showcaseGamify} alt="Gamification" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ==========================================
           SECTION 05: PROCESS & PIPELINE
           ========================================== */}
        <section style={{ padding: '5rem 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', textAlign: 'left' }}>
            
            {/* Left Column: 4-Step Process */}
            <div>
              <h2 style={{ fontSize: '2rem', color: 'var(--deep-blue)', marginBottom: '2.5rem', fontWeight: '800' }}>
                4-Step Process
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { step: 'Đăng ký', desc: 'Tạo tài khoản miễn phí.' },
                  { step: 'Tải lên', desc: 'Nhập tài liệu của bạn.' },
                  { step: 'Học tập', desc: 'Sử dụng các công cụ AI.' },
                  { step: 'Theo dõi', desc: 'Xem tiến độ phát triển.' }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ 
                      width: '2rem', 
                      height: '2rem', 
                      borderRadius: '50%', 
                      backgroundColor: 'var(--color-primary-light)', 
                      color: 'var(--color-primary)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '0.9rem',
                      flexShrink: 0
                    }}>
                      {idx + 1}
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 'bold', color: 'var(--deep-blue)', fontSize: '0.95rem', margin: '0 0 0.15rem' }}>{item.step}</h4>
                      <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Tech Pipeline & Tech Stack */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--deep-blue)', marginBottom: '1.25rem', fontWeight: 'bold' }}>Tech Pipeline</h3>
                <div className="pipeline-container">
                  <div className="pipeline-step">
                    <img src={awsS3Logo} alt="AWS S3" style={{ height: '24px', width: '24px', objectFit: 'contain', marginBottom: '0.4rem' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--deep-blue)' }}>AWS S3</span>
                    <span style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>Lưu trữ</span>
                  </div>
                  <div className="pipeline-arrow"><ArrowRight size={16} /></div>
                  
                  <div className="pipeline-step">
                    <img src={azureLogo} alt="Azure" style={{ height: '24px', width: '24px', objectFit: 'contain', marginBottom: '0.4rem' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--deep-blue)' }}>Azure Vision</span>
                    <span style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>Bóc tách</span>
                  </div>
                  <div className="pipeline-arrow"><ArrowRight size={16} /></div>
                  
                  <div className="pipeline-step">
                    <img src={deepseekLogo} alt="DeepSeek" style={{ height: '24px', width: '24px', objectFit: 'contain', marginBottom: '0.4rem' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--deep-blue)' }}>DeepSeek AI</span>
                    <span style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>Tích hợp ngôn ngữ</span>
                  </div>
                  <div className="pipeline-arrow"><ArrowRight size={16} /></div>
                  
                  <div className="pipeline-step">
                    <img src={postgresqlLogo} alt="PostgreSQL" style={{ height: '24px', width: '24px', objectFit: 'contain', marginBottom: '0.4rem' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--deep-blue)' }}>PostgreSQL</span>
                    <span style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>CSDL quan hệ</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--deep-blue)', marginBottom: '1rem', fontWeight: 'bold' }}>Tech Stack</h3>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  {[
                    { name: '.NET 8', detail: 'RESTful Backend', logo: dotnetLogo },
                    { name: 'ReactJS', detail: 'Frontend SPA', logo: reactLogo },
                    { name: 'Tailwind CSS', detail: 'Styling engine', logo: tailwindcssLogo },
                    { name: 'Kubernetes', detail: 'Container orchestration', logo: kubernetesLogo }
                  ].map((stackItem, idx) => (
                    <div key={idx} style={{ 
                      backgroundColor: 'var(--color-primary-light)', 
                      border: '1px solid rgba(22, 143, 239, 0.15)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.75rem 1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}>
                      <img src={stackItem.logo} alt={stackItem.name} style={{ height: '28px', width: '28px', objectFit: 'contain' }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem', textAlign: 'left' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>{stackItem.name}</span>
                        <span style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>{stackItem.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ==========================================
           SECTION 06: GRID OF SCREENSHOTS
           ========================================== */}
        <section style={{ padding: '5rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--deep-blue)', marginBottom: '0.5rem' }}>Thư viện giao diện hệ thống</h2>
            <p style={{ color: 'var(--color-text-secondary)' }}>Hình ảnh thực tế về các màn hình chức năng hoạt động.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[showcaseVocab, showcaseTranslate, screenshotHero, showcaseGamify, showcaseDict, showcaseChat, showcaseDashboard, screenshotHero].map((img, i) => (
              <div key={i} style={{ 
                backgroundColor: 'var(--color-primary-light)', 
                border: '1px solid var(--color-border)', 
                borderRadius: 'var(--radius-md)', 
                overflow: 'hidden',
                height: '140px',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform 0.3s ease'
              }} className="hover-scale">
                <img src={img} alt={`Screenshot ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
           SECTION 07: WHY HANORA
           ========================================== */}
        <section style={{ padding: '5rem 0', borderTop: '1px solid var(--color-border)', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--deep-blue)', marginBottom: '3rem' }}>Why Hanora</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', textAlign: 'left' }}>
            {[
              { title: 'AI Tiên Tiến', desc: 'Hệ thống học trợ lý, câu dẫn dắt thông minh.' },
              { title: 'Cá Nhân Hóa', desc: 'Đo lường thời gian học tập cá nhân.' },
              { title: 'Hiệu Quả Cao', desc: 'Nhớ lâu hơn qua phương pháp ôn tập ngắt quãng.' },
              { title: 'Cộng Đồng Hỗ Trợ', desc: 'Học tập chia sẻ cùng cộng đồng đạt mục tiêu.' }
            ].map((item, idx) => (
              <div key={idx} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                  <CheckCircle2 size={18} />
                  <span style={{ fontSize: '1.05rem', color: 'var(--deep-blue)', fontWeight: 'bold' }}>{item.title}</span>
                </div>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
           SECTION 08: CTA SECTION WITH MASCOT
           ========================================== */}
        <section style={{ 
          padding: '5rem 3rem', 
          backgroundColor: 'var(--deep-blue)', 
          color: 'var(--white)',
          textAlign: 'left', 
          borderRadius: 'var(--radius-xl)', 
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-premium)',
          marginTop: '3rem'
        }}>
          {/* Background overlay details */}
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'rgba(22, 143, 239, 0.05)', pointerEvents: 'none' }}></div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--white)', lineHeight: 1.25 }}>
                Bắt đầu hành trình chinh phục tiếng Trung ngay hôm nay!
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '1.1rem', lineHeight: '1.6' }}>
                Gia nhập cộng đồng Hanora và trải nghiệm học tập học hiệu quả.
              </p>
              <div>
                <a href="https://hanora.id.vn" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.85rem 2.25rem', borderRadius: 'var(--radius-full)' }}>
                  Bắt đầu ngay
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={mainImg} alt="Panda Mascot" className="float-animation" style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid rgba(255,255,255,0.2)',
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
