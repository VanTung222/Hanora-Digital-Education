import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, Laptop, Tablet, BookOpen, Layers, 
  Cpu, Award, Users, FileText, ChevronRight, CheckCircle2, 
  AlertCircle, Star, Github, Activity, HelpCircle, Network,
  Database, Server, Cloud, ShieldAlert, Check, RefreshCw, Volume2, Flame
} from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';

export function HomePage() {
  const [emailSub, setEmailSub] = useState('');
  const [subbed, setSubbed] = useState(false);

  // 1. Double-Bezel features grid data
  const premiumFeatures = [
    { title: 'Học cùng AI', desc: 'Cá nhân hóa lộ trình học, giải thích ngữ pháp từ câu văn thực tế.', icon: Cpu },
    { title: 'Từ vựng thông minh', desc: 'Hệ thống lưu từ vựng tự động, hỗ trợ tra cứu Pinyin tức thì.', icon: BookOpen },
    { title: 'Tài liệu đa dạng', desc: 'Tải lên sách, tài liệu PDF, truyện đọc tiếng Trung không giới hạn.', icon: FileText },
    { title: 'Theo dõi tiến độ', desc: 'Báo cáo chi tiết thời gian học, biểu đồ XP và streak trực quan.', icon: Activity }
  ];

  const painPoints = [
    { title: 'Khó ghi nhớ từ vựng', desc: 'Quên nhanh sau khi học, thiếu ngữ cảnh thực tế của từ vựng.', icon: ShieldAlert },
    { title: 'Phát âm không chuẩn', desc: 'Thiếu người sửa lỗi phát âm và phản hồi thanh điệu sai.', icon: Volume2 },
    { title: 'Tài liệu hạn chế', desc: 'Sách giáo khoa khô khan, nguồn tài liệu học không phong phú.', icon: HelpCircle },
    { title: 'Thiếu động lực học', desc: 'Dễ nản chí, không có mục tiêu rõ ràng và người đồng hành.', icon: Flame }
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
                <a href="#" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem', borderRadius: 'var(--radius-full)' }}>
                  Bắt đầu học miễn phí
                </a>
                <a href="#" className="btn btn-outline" style={{ padding: '0.85rem 1.75rem', borderRadius: 'var(--radius-full)' }}>
                  Khám phá Hanora
                </a>
              </div>
            </div>

            {/* Right Column Showcase Image */}
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <div style={{ 
                width: '100%', 
                maxWidth: '480px', 
                height: '320px', 
                backgroundColor: 'var(--color-primary-light)', 
                borderRadius: 'var(--radius-xl)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                boxShadow: 'var(--shadow-premium)',
                border: '1px solid var(--color-border)',
                overflow: 'hidden'
              }}>
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <Laptop size={72} style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }} />
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 'bold' }}>
                    [Laptop Showcase Mockup: Bảng điều khiển Hanora]
                  </p>
                </div>

                {/* Floating mascot representation */}
                <div className="float-animation" style={{ 
                  position: 'absolute', 
                  bottom: '-10px', 
                  right: '-10px', 
                  backgroundColor: 'var(--white)', 
                  border: '1px solid var(--color-border)', 
                  borderRadius: 'var(--radius-lg)', 
                  padding: '0.75rem 1.25rem', 
                  boxShadow: 'var(--shadow-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  zIndex: 10
                }}>
                  <span style={{ fontSize: '2rem' }}>🐼</span>
                  <div style={{ textAlign: 'left' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--color-primary)', display: 'block' }}>Mascot</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--deep-blue)' }}>Panda Mascot</span>
                  </div>
                </div>

                {/* Floating XP / Streak status badge */}
                <div style={{ 
                  position: 'absolute', 
                  top: '1.5rem', 
                  left: '-1.5rem', 
                  backgroundColor: 'var(--white)', 
                  border: '1px solid var(--color-border)', 
                  borderRadius: 'var(--radius-md)', 
                  padding: '0.5rem 1rem', 
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                  textAlign: 'left',
                  zIndex: 10
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                    <Award size={14} />
                    <span>XP 250</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>
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

          <div className="ecosystem-container">
            {/* Top Node */}
            <div className="ecosystem-node" style={{ borderColor: 'var(--color-primary)', boxShadow: 'var(--shadow-glow)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                <Sparkles size={16} />
                <span>AI Engine</span>
              </div>
            </div>

            {/* Vertical connector line */}
            <div style={{ width: '2px', height: '20px', backgroundColor: 'var(--color-border)' }}></div>

            {/* Center Node */}
            <div className="ecosystem-center">
              Hanora Platform
            </div>

            {/* Sub-system Row */}
            <div className="ecosystem-row" style={{ marginTop: '1rem' }}>
              
              {/* Left nodes column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="ecosystem-node">
                  <h4 style={{ fontWeight: 'bold', color: 'var(--deep-blue)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>Thư viện tài liệu</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: 0 }}>Kho sách, tài liệu, giáo trình PDF trực quan.</p>
                </div>
                <div className="ecosystem-node">
                  <h4 style={{ fontWeight: 'bold', color: 'var(--deep-blue)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>Công cụ học tập</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: 0 }}>Từ vựng, Flashcards, SRS, Theo dõi tiến độ.</p>
                </div>
              </div>

              {/* Right nodes column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="ecosystem-node">
                  <h4 style={{ fontWeight: 'bold', color: 'var(--deep-blue)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>Cộng đồng</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: 0 }}>Giao lưu học tập cùng cộng đồng trên toàn quốc.</p>
                </div>
                <div className="ecosystem-node">
                  <h4 style={{ fontWeight: 'bold', color: 'var(--deep-blue)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>Đăng ký học tập</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: 0 }}>Chọn bài học, tài liệu của riêng mình để học.</p>
                </div>
              </div>

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
                  Tra cứu và ôn tập từ vựng dễ dàng với kho tri thức thông minh. Lưu trữ và phân loại các từ mới theo các cấp độ để theo dõi trạng thái học tập.
                </p>
              </div>
              <div className="screenshot-frame">
                <div className="screenshot-bar">
                  <div className="screenshot-dot" style={{ backgroundColor: '#ef4444' }}></div>
                  <div className="screenshot-dot" style={{ backgroundColor: '#eab308' }}></div>
                  <div className="screenshot-dot" style={{ backgroundColor: '#22c55e' }}></div>
                </div>
                <div className="screenshot-content">
                  [Screenshot Giao Diện Từ Vựng]
                </div>
              </div>
            </div>

            {/* Showcase 2: Flashcard */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center', textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                {/* Simulated mobile mockups */}
                <div style={{ width: '130px', height: '220px', backgroundColor: '#0f172a', border: '3px solid #1e293b', borderRadius: 'var(--radius-md)', padding: '0.75rem', position: 'relative' }}>
                  <div style={{ width: '40px', height: '10px', backgroundColor: '#1e293b', borderRadius: 'var(--radius-full)', margin: '0 auto 0.75rem' }}></div>
                  <div style={{ height: 'calc(100% - 25px)', backgroundColor: 'var(--color-primary-light)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyCenter: 'center', justifyContent: 'center', border: '1px solid var(--color-border)' }}>
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
                  Tập trung học với nhiều chế độ xem phong phú khác nhau, hỗ trợ lật thẻ nhanh chóng và phát âm bản xứ chuẩn chỉnh.
                </p>
              </div>
            </div>

            {/* Showcase 3: Translation Workspace */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center', textAlign: 'left' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--deep-blue)', marginBottom: '1rem' }}>Không gian Dịch thông minh</h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', fontSize: '1rem' }}>
                  Đọc và dịch tài liệu PDF, trang web với sự hỗ trợ đắc lực của mô hình AI. Nhấp vào từ vựng để tra nghĩa trực tiếp trên văn bản đang học.
                </p>
              </div>
              <div className="screenshot-frame">
                <div className="screenshot-bar">
                  <div className="screenshot-dot" style={{ backgroundColor: '#ef4444' }}></div>
                  <div className="screenshot-dot" style={{ backgroundColor: '#eab308' }}></div>
                  <div className="screenshot-dot" style={{ backgroundColor: '#22c55e' }}></div>
                </div>
                <div className="screenshot-content" style={{ height: '240px' }}>
                  [Screenshot Giao Diện Workspace Đọc/Dịch và AI Chat]
                </div>
              </div>
            </div>

            {/* Showcase 4: Dictionary & Chat Side-by-Side */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', textAlign: 'left' }}>
              
              <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--deep-blue)', fontWeight: 'bold', margin: 0 }}>Từ điển AI chuyên sâu</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
                  Định nghĩa chi tiết từ Hán kèm câu ví dụ thực tế và giải thích ngữ pháp bổ trợ.
                </p>
                <div style={{ backgroundColor: 'var(--color-primary-light)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', height: '160px', display: 'flex', alignItems: 'center', justifyCenter: 'center', justifyContent: 'center', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
                  [Screenshot Từ Điển Chi Tiết]
                </div>
              </div>

              <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--deep-blue)', fontWeight: 'bold', margin: 0 }}>Trợ lý AI 24/7</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
                  Trò chuyện, hỏi ngữ pháp hoặc yêu cầu AI dịch thuật tự động thông qua giao diện chat DeepSeek.
                </p>
                <div style={{ backgroundColor: 'var(--color-primary-light)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', height: '160px', display: 'flex', alignItems: 'center', justifyCenter: 'center', justifyContent: 'center', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
                  [Screenshot AI Chat UI]
                </div>
              </div>

            </div>

            {/* Showcase 5: Progress & Gamification Side-by-Side */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', textAlign: 'left' }}>
              
              <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--deep-blue)', fontWeight: 'bold', margin: 0 }}>Theo dõi Bảng điều khiển Cá nhân</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
                  Thống kê thời gian, biểu đồ tiến trình học để dễ dàng định hình thói quen học tập.
                </p>
                <div style={{ backgroundColor: 'var(--color-primary-light)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', height: '160px', display: 'flex', alignItems: 'center', justifyCenter: 'center', justifyContent: 'center', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
                  [Screenshot Dashboard Progress]
                </div>
              </div>

              {/* Gamification premium styled block */}
              <div className="card-premium" style={{ 
                background: 'linear-gradient(135deg, #4f46e5, #06b6d4)', 
                color: 'var(--white)',
                padding: '2rem', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1.25rem',
                border: 'none'
              }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--white)', fontWeight: 'bold', margin: 0 }}>Thú vị hơn với Gamification</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
                  Tích điểm kinh nghiệm (XP), thăng hạng bảng xếp hạng học tập và đạt các danh hiệu độc nhất.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.75rem' }}>🛡️</span>
                    <div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 'bold', display: 'block' }}>Level 10</span>
                      <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>Panda Master</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.25rem' }}>
                    <span title="Gold Medal" style={{ fontSize: '1.25rem' }}>🥇</span>
                    <span title="Silver Medal" style={{ fontSize: '1.25rem' }}>🥈</span>
                    <span title="Bronze Medal" style={{ fontSize: '1.25rem' }}>🥉</span>
                  </div>
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
                  { step: 'Đăng ký', desc: 'Tạo tài khoản học tập miễn phí trên hệ thống.' },
                  { step: 'Tải lên', desc: 'Nhập hoặc tải lên tài liệu PDF/Text bạn muốn đọc hiểu.' },
                  { step: 'Học tập', desc: 'Sử dụng các công cụ dịch, highlight và hỏi trợ lý AI.' },
                  { step: 'Theo dõi', desc: 'Xem thống kê tiến trình, XP và streak học tập hàng ngày.' }
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
                    <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--deep-blue)' }}>AWS S3</span>
                    <span style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>Lưu trữ tài liệu</span>
                  </div>
                  <div className="pipeline-arrow"><ArrowRight size={16} /></div>
                  
                  <div className="pipeline-step">
                    <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--deep-blue)' }}>Azure Vision</span>
                    <span style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>Bóc tách OCR</span>
                  </div>
                  <div className="pipeline-arrow"><ArrowRight size={16} /></div>
                  
                  <div className="pipeline-step">
                    <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--deep-blue)' }}>DeepSeek AI</span>
                    <span style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>Dịch thuật & Hỏi đáp</span>
                  </div>
                  <div className="pipeline-arrow"><ArrowRight size={16} /></div>
                  
                  <div className="pipeline-step">
                    <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--deep-blue)' }}>PostgreSQL</span>
                    <span style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>Cơ sở dữ liệu</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--deep-blue)', marginBottom: '1rem', fontWeight: 'bold' }}>Tech Stack</h3>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  {[
                    { name: '.NET 8', detail: 'RESTful Backend' },
                    { name: 'ReactJS', detail: 'Frontend SPA' },
                    { name: 'Tailwind CSS', detail: 'Styling engine' },
                    { name: 'Kubernetes', detail: 'Container orchestration' }
                  ].map((stackItem, idx) => (
                    <div key={idx} style={{ 
                      backgroundColor: 'var(--color-primary-light)', 
                      border: '1px solid rgba(22, 143, 239, 0.15)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.5rem 1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.15rem'
                    }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>{stackItem.name}</span>
                      <span style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>{stackItem.detail}</span>
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
            {[...Array(8)].map((_, i) => (
              <div key={i} style={{ 
                backgroundColor: 'var(--color-primary-light)', 
                border: '1px solid var(--color-border)', 
                borderRadius: 'var(--radius-md)', 
                height: '140px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-muted)',
                fontSize: '0.75rem',
                boxShadow: 'var(--shadow-sm)'
              }}>
                [Screenshot {i + 1}]
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
              { title: 'AI Tiên Tiến', desc: 'Trợ lý học tập thông minh phân tích sâu sắc ngữ nghĩa, giải thích cấu trúc nhanh chóng.' },
              { title: 'Cá Nhân Hóa', desc: 'Lộ trình và tài liệu do chính bạn lựa chọn, học theo tốc độ tiếp thu của riêng bạn.' },
              { title: 'Hiệu Quả Cao', desc: 'Ghi nhớ từ vựng sâu sắc và lâu dài nhờ ứng dụng thuật toán lặp lại ngắt quãng SRS.' },
              { title: 'Cộng Đồng Hỗ Trợ', desc: 'Kết nối cùng những người học tiếng Trung có chung mục tiêu để cùng phát triển.' }
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
                Gia nhập cộng đồng người học thông minh của Hanora và trải nghiệm phương pháp học tập tương tác hiện đại nhất.
              </p>
              <div>
                <a href="#" className="btn btn-primary" style={{ padding: '0.85rem 2.25rem', borderRadius: 'var(--radius-full)' }}>
                  Bắt đầu ngay
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="float-animation" style={{ 
                width: '180px', 
                height: '180px', 
                borderRadius: '50%', 
                backgroundColor: 'rgba(255,255,255,0.08)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '6rem',
                border: '2px solid rgba(255,255,255,0.1)'
              }}>
                🐼
              </div>
            </div>

          </div>
        </section>

      </div>
    </MainLayout>
  );
}
export default HomePage;
