import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, EyeOff, Brain, FileText, CheckCircle2, User, Check,
  Cpu, Languages, Eye, Target, Diamond, Lightbulb, Search, Code, Rocket, Trophy, Compass, Users, Volume2
} from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';

// Import local assets matching the user's reference design
import heroImg from '../assets/57271925-3a45-4c54-8adf-abb740ba7a86.png'; // Panda Mascot next to tablet
import allInOneImg from '../assets/unnamed (9).jpg'; // Screenshot editor workspace with PDF sidebar
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';
import avatar4 from '../assets/avatar4.png';
import avatar5 from '../assets/avatar5.png';
import avatar6 from '../assets/avatar6.png';
import StreakImage from '../assets/StreakImage-removebg-preview.png';
import heroIllustration from '../assets/f27340dc-8d23-4810-86c0-127ef9a3cd3d.png'; // Trophy with Mascot
import awardImage from '../assets/1786444073342_2139156838608309818_4679679961168383332_0ca75879ac1ee6e9e4d6053ed35c4477.jpg'; // FShark award photo
import cyeImage from '../assets/775261061_122129776293344863_7153611600208407045_n.jpg'; // CYE Junior award photo

export function AboutPage() {
  return (
    <MainLayout>
      <div className="container" style={{ padding: '2rem 0', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* ==========================================
           SECTION 01: HERO SECTION
           ========================================== */}
        <section style={{ 
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          padding: '4rem 0 3rem', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          boxSizing: 'border-box',
          overflow: 'hidden',
          borderBottom: '1px solid var(--color-border)',
          marginBottom: '2.5rem'
        }}>
          <div style={{ maxWidth: '1480px', width: '100%', padding: '0 1.5rem', margin: '0 auto' }}>
            <style>{`
              .about-hero-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                gap: 2rem;
                width: 100%;
                align-items: center;
                text-align: left;
              }
              @media (min-width: 992px) {
                .about-hero-grid {
                  grid-template-columns: 3.5fr 6.5fr !important;
                }
                .about-hero-right-col {
                  margin-right: -4rem !important;
                }
              }
            `}</style>
            <div className="about-hero-grid" style={{ width: '100%', maxWidth: '100%' }}>
              
              {/* Left Column Content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }} className="fade-slide-up">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ 
                    fontSize: '0.85rem', 
                    fontWeight: '800', 
                    color: 'var(--color-primary)', 
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    position: 'relative',
                    display: 'inline-block'
                  }}>
                    Giới thiệu Hanora<span style={{ color: 'var(--color-primary)', fontSize: '0.9rem', marginLeft: '2px' }}>+</span>
                  </div>

                  <h1 style={{ 
                    fontSize: '2.6rem', 
                    fontWeight: '800', 
                    color: 'var(--deep-blue)', 
                    lineHeight: '1.25', 
                    margin: 0,
                    letterSpacing: '-0.5px'
                  }}>
                    Hanora – Học tiếng Trung<br />
                    thông minh hơn mỗi ngày
                  </h1>
                </div>
                
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.65', margin: 0, maxWidth: '520px' }}>
                  Hanora là nền tảng học tiếng Trung ứng dụng AI giúp bạn học từ vựng, đọc hiểu, dịch tài liệu và luyện tập hiệu quả trong một hệ sinh thái duy nhất.
                </p>
                
                {/* Badge Pills Row (Separate individual pills) */}
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '0.75rem',
                  marginTop: '0.5rem',
                  justifyContent: 'flex-start',
                  width: '100%'
                }}>
                  {[
                    { label: 'AI hỗ trợ', icon: 'AI' },
                    { label: 'Học tập cá nhân hóa', icon: User },
                    { label: 'Dễ sử dụng', icon: Check },
                    { label: 'Hiệu quả & bền vững', icon: Sparkles }
                  ].map((pill, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      backgroundColor: 'rgba(22, 143, 239, 0.05)',
                      border: '1px solid rgba(22, 143, 239, 0.1)',
                      borderRadius: '99px',
                      padding: '0.4rem 1rem',
                      fontSize: '0.85rem',
                      color: 'var(--color-text-secondary)',
                      fontWeight: '600',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.01)'
                    }}>
                      {typeof pill.icon === 'string' ? (
                        <span style={{ 
                          fontSize: '0.7rem', 
                          fontWeight: '900', 
                          color: 'var(--color-primary)' 
                        }}>{pill.icon}</span>
                      ) : (
                        <span style={{ 
                          color: 'var(--color-primary)',
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          <pill.icon size={13} />
                        </span>
                      )}
                      <span>{pill.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column Showcase Image (borderless raw mockup containing devices) */}
              <div className="about-hero-right-col fade-slide-up-delay-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <div className="glow-breath" style={{ 
                  width: '100%',
                  maxWidth: '100%',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden'
                }}>
                  <img src={heroImg} alt="Hanora Platform Devices Mockup" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==========================================
           SECTION 02: REAL-WORLD PROBLEMS & MISSION
           ========================================== */}
        <section style={{ padding: '2rem 0', display: 'flex', flexDirection: 'column', gap: '3.5rem', width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2rem', 
            textAlign: 'left', 
            alignItems: 'stretch' 
          }}>
            {/* Column 1: Hanora là gì? */}
            <div className="scale-hover" style={{ 
              padding: '2.5rem 2.25rem', 
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '24px',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '2rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Subtle accent background blur */}
              <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '120px', height: '120px', borderRadius: '50%', backgroundColor: 'rgba(22, 143, 239, 0.04)', filter: 'blur(30px)' }}></div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <span style={{ 
                  padding: '0.35rem 0.75rem', 
                  fontSize: '0.8rem', 
                  fontWeight: 'bold', 
                  color: 'var(--color-primary)', 
                  backgroundColor: 'rgba(22, 143, 239, 0.06)', 
                  borderRadius: '99px',
                  width: 'fit-content'
                }}>
                  Giới thiệu cốt lõi
                </span>
                
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--deep-blue)', margin: 0 }}>
                  Hanora là gì?
                </h3>
                
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
                  Hanora là nền tảng học tiếng Trung ứng dụng AI giúp người học biến những tài liệu tiếng Trung thực tế thành một <strong>môi trường học tập tương tác sinh động</strong>.
                </p>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
                  Người dùng có thể tải tài liệu cá nhân lên, đọc trực tiếp trên giao diện của Hanora, tra cứu từ theo ngữ cảnh, lưu trữ từ vựng vào kho cá nhân và tự động biên soạn thành Flashcard thông minh để học ôn tập.
                </p>
              </div>

              {/* Styled Checklist Grid */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '0.75rem', 
                borderTop: '1px solid #f1f5f9', 
                paddingTop: '1.5rem',
                marginTop: '0.5rem'
              }}>
                {[
                  'Đọc PDF/DOCX',
                  'Tra từ ngữ cảnh',
                  'Kho từ cá nhân',
                  'Flashcard SRS'
                ].map((item, idx) => (
                  <div key={idx} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    padding: '0.5rem 0.75rem',
                    backgroundColor: 'rgba(22, 143, 239, 0.04)',
                    border: '1px solid rgba(22, 143, 239, 0.06)',
                    borderRadius: '10px',
                    fontSize: '0.8rem', 
                    color: 'var(--color-text-secondary)', 
                    fontWeight: '600' 
                  }}>
                    <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Hanora giải quyết vấn đề gì? */}
            <div className="scale-hover" style={{ 
              padding: '2.5rem 2.25rem', 
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '24px',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '2rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <span style={{ 
                  padding: '0.35rem 0.75rem', 
                  fontSize: '0.8rem', 
                  fontWeight: 'bold', 
                  color: '#ef4444', 
                  backgroundColor: 'rgba(239, 68, 68, 0.06)', 
                  borderRadius: '99px',
                  width: 'fit-content'
                }}>
                  Vấn đề & Giải pháp
                </span>
                
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--deep-blue)', margin: 0 }}>
                  Hanora giải quyết vấn đề gì?
                </h3>
                
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
                  Học tiếng Trung không nên bị gián đoạn. Người học hiện nay phải kết hợp rời rạc nhiều công cụ khác nhau:
                </p>

                {/* Traditional Workflow Diagram */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', margin: '0.25rem 0' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: '800', color: '#94a3b8', letterSpacing: '0.5px' }}>
                    QUY TRÌNH RỜI RẠC TRƯỚC ĐÂY:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.35rem' }}>
                    {['Tài liệu', 'App tra từ', 'Dịch thuật', 'AI', 'Flashcard'].map((step, idx) => (
                      <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                        {idx > 0 && <span style={{ color: '#cbd5e1', fontSize: '0.75rem' }}>➔</span>}
                        <span style={{
                          fontSize: '0.75rem',
                          padding: '0.25rem 0.5rem',
                          backgroundColor: '#f8fafc',
                          border: '1px dashed #e2e8f0',
                          borderRadius: '6px',
                          color: '#64748b',
                          fontWeight: '600'
                        }}>{step}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hanora Workflow Diagram */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', margin: '0.25rem 0' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--color-primary)', letterSpacing: '0.5px' }}>
                    WORKFLOW THỐNG NHẤT VỚI HANORA:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.35rem' }}>
                    {['Đọc', 'Tra cứu', 'Lưu từ', 'Ôn tập', 'Phát âm'].map((step, idx) => (
                      <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                        {idx > 0 && <span style={{ color: 'var(--color-primary)', fontSize: '0.75rem' }}>➔</span>}
                        <span style={{
                          fontSize: '0.75rem',
                          padding: '0.25rem 0.5rem',
                          backgroundColor: 'rgba(22, 143, 239, 0.08)',
                          border: '1px solid rgba(22, 143, 239, 0.15)',
                          borderRadius: '6px',
                          color: 'var(--color-primary)',
                          fontWeight: 'bold'
                        }}>{step}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Core USP Banner */}
                <div style={{ 
                  backgroundColor: 'rgba(22, 143, 239, 0.03)', 
                  borderLeft: '3px solid var(--color-primary)', 
                  padding: '0.75rem 1rem', 
                  borderRadius: '0 8px 8px 0',
                  marginTop: '0.5rem'
                }}>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
                    Điểm khác biệt của Hanora là không chỉ dừng lại ở tra nghĩa thông thường, mà hướng tới <strong>giúp người học học sâu và ghi nhớ từ vựng ngay trên ngữ cảnh đang đọc.</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3: Tầm nhìn, Sứ mệnh & Giá trị cốt lõi */}
            <div className="scale-hover" style={{ 
              padding: '2.5rem 2rem', 
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '24px',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <span style={{ 
                  padding: '0.35rem 0.75rem', 
                  fontSize: '0.8rem', 
                  fontWeight: 'bold', 
                  color: '#8b5cf6', 
                  backgroundColor: 'rgba(139, 92, 246, 0.06)', 
                  borderRadius: '99px',
                  width: 'fit-content'
                }}>
                  Định hướng & Giá trị
                </span>
                
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--deep-blue)', margin: 0 }}>
                  Tầm nhìn & Sứ mệnh
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {/* Vision Card */}
                  <div style={{
                    padding: '0.85rem 1rem',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    display: 'flex',
                    gap: '0.75rem'
                  }}>
                    <div style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center' }}><Eye size={18} /></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--deep-blue)' }}>Tầm nhìn (Vision)</span>
                      <span style={{ fontSize: '0.775rem', color: 'var(--color-text-secondary)', lineHeight: '1.4' }}>
                        Trở thành nền tảng học tiếng Trung AI hàng đầu thông qua nội dung thực tế.
                      </span>
                    </div>
                  </div>

                  {/* Mission Card */}
                  <div style={{
                    padding: '0.85rem 1rem',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    display: 'flex',
                    gap: '0.75rem'
                  }}>
                    <div style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center' }}><Target size={18} /></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--deep-blue)' }}>Sứ mệnh (Mission)</span>
                      <span style={{ fontSize: '0.775rem', color: 'var(--color-text-secondary)', lineHeight: '1.4' }}>
                        Đơn giản hóa việc học bằng cách tích hợp liền mạch đọc, tra cứu, lưu và ôn tập từ vựng.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Giá trị cốt lõi */}
              <div style={{ 
                borderTop: '1px solid #f1f5f9', 
                paddingTop: '1.25rem',
                marginTop: '0.5rem'
              }}>
                <strong style={{ fontSize: '0.85rem', color: '#1e293b', display: 'block', marginBottom: '0.75rem' }}>
                  Giá trị cốt lõi:
                </strong>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  {[
                    { label: 'Learner First', text: 'Học viên là trung tâm', color: 'rgba(22, 143, 239, 0.05)', textColor: 'var(--color-primary)' },
                    { label: 'Simple', text: 'Đơn giản hóa', color: 'rgba(16, 185, 129, 0.05)', textColor: '#10b981' },
                    { label: 'Personalized', text: 'Cá nhân hóa', color: 'rgba(139, 92, 246, 0.05)', textColor: '#8b5cf6' },
                    { label: 'Innovative', text: 'Đổi mới sáng tạo', color: 'rgba(245, 158, 11, 0.05)', textColor: '#f59e0b' }
                  ].map((val, idx) => (
                    <div key={idx} style={{
                      padding: '0.4rem 0.6rem',
                      backgroundColor: val.color,
                      border: `1px solid ${val.textColor}1a`,
                      borderRadius: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.1rem'
                    }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: '800', color: val.textColor }}>{val.label}</span>
                      <span style={{ fontSize: '0.65rem', color: 'var(--color-text-secondary)' }}>{val.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Subsection 2.3: Development Roadmap */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', padding: '1rem 0' }}>
            <div style={{ textAlign: 'center', position: 'relative' }}>
              <h2 style={{ fontSize: '2.2rem', color: '#0f172a', fontWeight: '800', margin: 0, position: 'relative', display: 'inline-block' }}>
                Hành trình phát triển
                <span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', position: 'absolute', top: '-0.25rem', right: '-1rem', fontWeight: 'bold' }}>+</span>
              </h2>
            </div>

            <div style={{ position: 'relative', width: '100%', padding: '1rem 0' }} className="timeline-container-scroll">
              <style>{`
                .timeline-container-scroll {
                  overflow-x: auto;
                }
                .timeline-container-scroll::-webkit-scrollbar {
                  display: none;
                }
                .timeline-row {
                  display: flex;
                  flex-direction: row;
                  flex-wrap: nowrap;
                  justify-content: space-between;
                  position: relative;
                  width: 100%;
                  min-width: 900px;
                  padding-bottom: 1rem;
                }
              `}</style>
              
              {/* Connecting Dashed Line */}
              <div style={{
                position: 'absolute',
                top: '2.25rem',
                left: '8%',
                right: '8%',
                height: '1px',
                borderTop: '2px dashed #cbd5e1',
                zIndex: 0
              }}></div>

              <div className="timeline-row" style={{ minWidth: '1100px' }}>
                {[
                  {
                    date: '04/2026 – 05/2026',
                    title: '01 — Xây dựng MVP',
                    desc: 'Xây dựng phiên bản đầu tiên và kiểm chứng nhu cầu thực tế. PDF · DOCX · OCR · Reader · Tra từ · Vocabulary · Flashcard',
                    icon: Lightbulb
                  },
                  {
                    date: '05/2026 – 08/2026',
                    title: '02 — Hoàn thiện sản phẩm',
                    desc: 'Cải thiện trải nghiệm dựa trên phản hồi người dùng và tối ưu hệ thống. UX/UI · Vocabulary · Flashcard · Learning Experience',
                    icon: Code
                  },
                  {
                    date: '09/2026 – 12/2026',
                    title: '03 — AI Pronunciation',
                    desc: 'Mở rộng từ trải nghiệm đọc sang luyện nói và phát âm bằng AI. Speech Recognition · Tone · Intonation',
                    icon: Volume2
                  },
                  {
                    date: '01/2027 – 03/2027',
                    title: '04 — AI Tutor',
                    desc: 'Phát triển trợ lý học tập AI có khả năng hỗ trợ người học theo ngữ cảnh và nhu cầu cá nhân. Q&A · Grammar · Learning Suggestions',
                    icon: Cpu
                  },
                  {
                    date: '03/2027 – 12/2027',
                    title: '05 — Hanora Mobile',
                    desc: 'Đưa Hanora lên thiết bị di động để người học có thể học mọi lúc, mọi nơi. iOS · Android · Data Synchronization',
                    icon: Rocket
                  },
                  {
                    date: '2028+',
                    title: '06 — Mở rộng hệ sinh thái',
                    desc: 'Mở rộng Hanora từ nền tảng học tiếng Trung thành hệ sinh thái học ngôn ngữ ứng dụng AI. Multi-language · Community',
                    icon: Trophy,
                    isGold: true
                  }
                ].map((step, idx) => (
                  <div key={idx} style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    gap: '0.75rem', 
                    zIndex: 1, 
                    flex: 1, 
                    textAlign: 'center',
                    padding: '0 0.75rem' 
                  }}>
                    {/* Circle Icon wrapper */}
                    <div style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '50%',
                      backgroundColor: '#ffffff',
                      border: `2px solid ${step.isGold ? 'rgb(245, 158, 11)' : 'var(--color-primary)'}`,
                      color: step.isGold ? 'rgb(245, 158, 11)' : 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
                      flexShrink: 0
                    }}>
                      <step.icon size={16} />
                    </div>
                    
                    {/* Date */}
                    <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-primary)', letterSpacing: '0.5px' }}>
                      {step.date}
                    </span>
                    
                    {/* Title */}
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>
                      {step.title}
                    </h4>
                    
                    {/* Description */}
                    <p style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: '1.6', margin: 0, maxWidth: '170px' }}>
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>


        {/* ==========================================
           SECTION 04: THÀNH TỰU NỔI BẬT (FSHARK & METRICS)
           ========================================== */}
        <section style={{ padding: '2rem 0', width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', width: '100%', alignItems: 'center', textAlign: 'left' }}>
            
            {/* Left Column Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <span style={{ 
                  fontSize: '0.85rem', 
                  fontWeight: '800', 
                  color: 'var(--color-primary)', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1.5px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2px'
                }}>
                  Thành tựu Hanora <span style={{ fontSize: '0.9rem' }}>+</span>
                </span>
                <h2 style={{ 
                  fontSize: '2.4rem', 
                  fontWeight: '800', 
                  color: 'var(--deep-blue)', 
                  lineHeight: '1.25', 
                  margin: 0,
                  letterSpacing: '-0.5px'
                }}>
                  Những cột mốc tự hào<br />
                  trên hành trình kiến tạo<br />
                  <span style={{ color: 'var(--color-primary)' }}>giá trị giáo dục</span>
                </h2>
              </div>
              
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.65', margin: 0 }}>
                Hanora không ngừng nỗ lực để mang đến giải pháp học tiếng Trung thông minh, hiệu quả và dễ tiếp cận nhất cho người học.
              </p>
            </div>

            {/* Right Column Showcase Image */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <div className="glow-breath" style={{ 
                width: '100%',
                maxWidth: '650px',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <img 
                  src={heroIllustration} 
                  alt="Hanora Trophy with Mascot" 
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} 
                />
              </div>
            </div>

          </div>

          {/* Awards details grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '2.5rem', 
            alignItems: 'stretch', 
            textAlign: 'left',
            marginTop: '3.5rem'
          }}>
            {/* Left Card: FShark */}
            <div className="card scale-hover" style={{
              padding: '2.5rem 2.25rem',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.5rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgb(245, 158, 11)' }}>
                  <div style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(245, 158, 11, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Trophy size={28} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.35rem', fontWeight: '800', margin: 0, color: 'var(--deep-blue)' }}>Giải 3 FSHARK 2026</h4>
                    <p style={{ fontSize: '0.85rem', margin: '0.15rem 0 0', color: 'var(--color-primary)', fontWeight: '700' }}>FPT University Đà Nẵng</p>
                  </div>
                </div>
                
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.65', margin: 0 }}>
                  Hanora đạt Giải 3 tại cuộc thi FShark 2026 - Cuộc thi khởi nghiệp công nghệ uy tín dành cho sinh viên.
                </p>
              </div>

              {/* FShark Image */}
              <div style={{ 
                borderRadius: '16px', 
                overflow: 'hidden', 
                border: '1px solid #f1f5f9',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                aspectRatio: '16/11',
                width: '100%'
              }}>
                <img 
                  src={awardImage} 
                  alt="Giải 3 FShark 2026" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                />
              </div>
            </div>

            {/* Right Card: CYE Junior */}
            <div className="card scale-hover" style={{
              padding: '2.5rem 2.25rem',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.5rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(249, 115, 22, 0.08)',
                    color: 'rgb(249, 115, 22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Rocket size={28} />
                  </div>
                  <div>
                    <span style={{
                      padding: '0.2rem 0.6rem',
                      fontSize: '0.7rem',
                      fontWeight: 'bold',
                      color: '#f59e0b',
                      backgroundColor: 'rgba(245, 158, 11, 0.08)',
                      borderRadius: '6px',
                      display: 'inline-block',
                      marginBottom: '0.25rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      CUỘC THI ĐANG DIỄN RA
                    </span>
                    <h4 style={{ fontSize: '1.35rem', fontWeight: '800', margin: 0, color: 'var(--deep-blue)' }}>Chung kết CYE JUNIOR VIETNAM 2026</h4>
                  </div>
                </div>
                
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.65', margin: 0 }}>
                  Một cột mốc đáng nhớ của HANORA, ghi dấu hành trình không ngừng hoàn thiện, đổi mới và phát triển.
                </p>
              </div>

              {/* CYE Image */}
              <div style={{ 
                borderRadius: '16px', 
                overflow: 'hidden', 
                border: '1px solid #f1f5f9',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                aspectRatio: '16/11',
                width: '100%'
              }}>
                <img 
                  src={cyeImage} 
                  alt="Chung kết CYE Junior Vietnam 2026" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
           SECTION 05: ĐỘI NGŨ PHÁT TRIỂN
           ========================================== */}
        <section style={{ padding: '2rem 0', textAlign: 'center', width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--deep-blue)', marginBottom: '0.5rem' }}>
              ĐỘI NGŨ HANORA
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>
              Những thành viên tâm huyết đồng sáng lập và kiến tạo nền tảng Hanora.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', justifyContent: 'center' }}>
            {[
              { name: 'Nguyễn Nam Sơn', role: 'CEO', img: avatar1 },
              { name: 'Nguyễn Lê Minh Hiền', role: 'CFO', img: avatar2 },
              { name: 'Vũ Lê Duy', role: 'CISO', img: avatar3 },
              { name: 'Trần Văn Tùng', role: 'CTO', img: avatar4 },
              { name: 'Kiều Thị Thu Phương', role: 'CPO', img: avatar5 },
              { name: 'Dương Thị Thảo Nhi', role: 'CMO', img: avatar6 }
            ].map((member, idx) => (
              <div key={idx} className="card scale-hover" style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: '1rem',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '20px',
                padding: '2rem 1.5rem',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ 
                  width: '120px', 
                  height: '120px', 
                  borderRadius: '50%', 
                  overflow: 'hidden',
                  border: '3px solid rgba(22, 143, 239, 0.1)',
                  boxShadow: 'var(--shadow-sm)',
                  backgroundColor: 'var(--color-bg)'
                }}>
                  <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 'bold', color: 'var(--deep-blue)', margin: '0 0 0.25rem' }}>{member.name}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: '600', margin: 0 }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
           SECTION 06: QUOTE BANNER & CTA
           ========================================== */}
        <section style={{ 
          margin: '3rem auto 1rem',
          maxWidth: '1440px',
          width: '100%',
          padding: '5rem 2rem',
          backgroundColor: '#1d4ed8', 
          backgroundImage: 'linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%)',
          borderRadius: 'var(--radius-xl)',
          color: 'var(--white)',
          textAlign: 'center',
          position: 'relative',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          <div style={{ fontSize: '5rem', lineHeight: '1', fontFamily: 'serif', color: 'rgba(255, 255, 255, 0.2)', marginBottom: '-1.5rem' }}>“</div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', maxWidth: '800px', margin: '0 auto', lineHeight: '1.4', color: 'var(--white)' }}>
            Biến việc học tiếng Trung thành một hành trình chủ động, cá nhân hóa và hiệu quả.
          </h2>
          <div style={{ marginTop: '1rem' }}>
            <Link to="/contact" className="btn btn-primary" style={{ 
              backgroundColor: '#ffffff', 
              color: '#1d4ed8', 
              fontWeight: 'bold', 
              padding: '0.85rem 2.25rem', 
              borderRadius: '9999px',
              textDecoration: 'none',
              transition: 'transform 0.2s',
              border: 'none',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}>
              Liên hệ hợp tác &rarr;
            </Link>
          </div>
        </section>

      </div>
    </MainLayout>
  );
}
export default AboutPage;
