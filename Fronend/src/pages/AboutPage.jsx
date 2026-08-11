import { 
  Sparkles, ArrowRight, EyeOff, Brain, FileText, CheckCircle2, User, Check,
  Cpu, Languages, Eye, Target, Diamond, Lightbulb, Search, Code, Rocket, Trophy, Compass
} from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';

// Import local assets matching the user's reference design
import heroImg from '../assets/57271925-3a45-4c54-8adf-abb740ba7a86.png'; // Panda Mascot next to tablet
import allInOneImg from '../assets/unnamed (9).jpg'; // Screenshot editor workspace with PDF sidebar

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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} className="fade-slide-up">
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
                    color: '#0f172a', 
                    lineHeight: '1.25', 
                    margin: 0,
                    letterSpacing: '-0.5px'
                  }}>
                    Hanora – Học tiếng Trung<br />
                    thông minh hơn mỗi ngày
                  </h1>
                </div>
                
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.65', margin: 0, maxWidth: '520px' }}>
                  Hanora là nền tảng học tiếng Trung ứng dụng AI giúp bạn học từ vựng, đọc hiểu, dịch tài liệu và luyện tập hiệu quả trong một hệ sinh thái duy nhất.
                </p>
                
                {/* Badge Pills Row (Single Unified Bar with dividers) */}
                <div style={{ 
                  display: 'inline-flex', 
                  flexDirection: 'row', 
                  alignItems: 'center', 
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '0.6rem 1.25rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.02)',
                  width: 'fit-content',
                  maxWidth: '100%',
                  gap: '1rem',
                  marginTop: '0.5rem',
                  flexWrap: 'wrap'
                }}>
                  {[
                    { label: 'AI hỗ trợ', icon: 'AI' },
                    { label: 'Học tập cá nhân hóa', icon: User },
                    { label: 'Dễ sử dụng', icon: Check },
                    { label: 'Hiệu quả & bền vững', icon: Sparkles }
                  ].map((pill, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      {idx > 0 && (
                        <div style={{ width: '1px', height: '1.25rem', backgroundColor: '#e2e8f0' }}></div>
                      )}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.85rem',
                        color: '#475569',
                        fontWeight: '600'
                      }}>
                        {typeof pill.icon === 'string' ? (
                          <div style={{ 
                            width: '1.35rem', 
                            height: '1.35rem', 
                            borderRadius: '50%', 
                            backgroundColor: 'rgba(22, 143, 239, 0.08)', 
                            color: 'var(--color-primary)', 
                            fontSize: '0.6rem', 
                            fontWeight: '900', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            flexShrink: 0 
                          }}>{pill.icon}</div>
                        ) : (
                          <div style={{ 
                            width: '1.35rem', 
                            height: '1.35rem', 
                            borderRadius: '50%', 
                            backgroundColor: 'rgba(22, 143, 239, 0.08)', 
                            color: 'var(--color-primary)', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            flexShrink: 0 
                          }}>
                            <pill.icon size={11} />
                          </div>
                        )}
                        <span>{pill.label}</span>
                      </div>
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
        <section style={{ padding: '2rem 0', display: 'flex', flexDirection: 'column', gap: '4rem', width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
          
          {/* Subsection 2.1: Real-world problems */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ textAlign: 'center', position: 'relative' }}>
              <h2 style={{ fontSize: '2.2rem', color: '#0f172a', fontWeight: '800', lineHeight: '1.3', maxWidth: '800px', margin: '0 auto', position: 'relative', display: 'inline-block' }}>
                Hanora được tạo ra để giải quyết những vấn đề thực tế<br />
                trong quá trình học tiếng Trung.
                <span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', position: 'absolute', top: '-0.25rem', right: '-1rem', fontWeight: 'bold' }}>+</span>
              </h2>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1.25rem' 
            }}>
              {[
                {
                  title: 'Tài liệu phân tán',
                  desc: 'Việc tìm kiếm và tổng hợp tài liệu học mất nhiều thời gian và công sức.',
                  icon: FileText
                },
                {
                  title: 'Từ vựng khó ghi nhớ',
                  desc: 'Học xong dễ quên vì thiếu phương pháp ôn tập khoa học.',
                  icon: Brain
                },
                {
                  title: 'Thiếu cá nhân hóa',
                  desc: 'Phương pháp học chung không phù hợp với mục tiêu và trình độ mỗi người.',
                  icon: Cpu
                },
                {
                  title: 'Dịch thuật phức tạp',
                  desc: 'Đọc hiểu và dịch tài liệu mất nhiều bước, gián đoạn quá trình học.',
                  icon: Languages
                },
                {
                  title: 'Thiếu động lực học tập',
                  desc: 'Khó duy trì thói quen học tập mỗi ngày một cách bền vững.',
                  icon: Compass
                }
              ].map((item, idx) => (
                <div key={idx} className="card scale-hover" style={{ 
                  padding: '2.5rem 1.5rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '1.25rem', 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #e2e8f0', 
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.015)'
                }}>
                  <div style={{ 
                    width: '3.25rem', 
                    height: '3.25rem', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(22, 143, 239, 0.05)', 
                    color: 'var(--color-primary)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <item.icon size={22} />
                  </div>
                  <h3 style={{ fontSize: '1rem', color: '#0f172a', fontWeight: '800', margin: 0 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.825rem', lineHeight: '1.6', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Subsection 2.2: Vision - Mission - Core Values */}
          <div style={{ 
            backgroundColor: 'rgba(219, 234, 254, 0.25)', 
            border: '1px solid rgba(226, 232, 240, 0.8)', 
            borderRadius: '24px', 
            padding: '3.5rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem'
          }}>
            <div style={{ textAlign: 'center', position: 'relative' }}>
              <h2 style={{ fontSize: '2.2rem', color: '#0f172a', fontWeight: '800', margin: 0, position: 'relative', display: 'inline-block' }}>
                Tầm nhìn – Sứ mệnh – Giá trị cốt lõi
                <span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', position: 'absolute', top: '-0.25rem', right: '-1rem', fontWeight: 'bold' }}>+</span>
              </h2>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: '2rem' 
            }}>
              
              {/* Vision Card */}
              <div className="card" style={{ 
                padding: '2.5rem 2rem', 
                backgroundColor: '#ffffff', 
                border: '1px solid #e2e8f0', 
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                textAlign: 'left',
                boxShadow: '0 4px 20px rgba(0,0,0,0.01)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ 
                    width: '2.5rem', 
                    height: '2.5rem', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(22, 143, 239, 0.08)', 
                    color: 'var(--color-primary)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Eye size={18} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', color: '#0f172a', fontWeight: '800', margin: 0 }}>Tầm nhìn</h3>
                </div>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.65', margin: 0 }}>
                  Trở thành nền tảng học tiếng Trung hàng đầu ứng dụng AI, giúp hàng triệu người học trên thế giới tiếp cận tri thức một cách dễ dàng, cá nhân hóa và hiệu quả.
                </p>
              </div>

              {/* Mission Card */}
              <div className="card" style={{ 
                padding: '2.5rem 2rem', 
                backgroundColor: '#ffffff', 
                border: '1px solid #e2e8f0', 
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                textAlign: 'left',
                boxShadow: '0 4px 20px rgba(0,0,0,0.01)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ 
                    width: '2.5rem', 
                    height: '2.5rem', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(22, 143, 239, 0.08)', 
                    color: 'var(--color-primary)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Target size={18} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', color: '#0f172a', fontWeight: '800', margin: 0 }}>Sứ mệnh</h3>
                </div>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.65', margin: 0 }}>
                  Hanora tận dụng công nghệ AI để đồng hành cùng người học, cung cấp trải nghiệm học tập thông minh, tiết kiệm thời gian và mang lại kết quả thực chất.
                </p>
              </div>

              {/* Core Values Card */}
              <div className="card" style={{ 
                padding: '2.5rem 2rem', 
                backgroundColor: '#ffffff', 
                border: '1px solid #e2e8f0', 
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                textAlign: 'left',
                boxShadow: '0 4px 20px rgba(0,0,0,0.01)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ 
                    width: '2.5rem', 
                    height: '2.5rem', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(22, 143, 239, 0.08)', 
                    color: 'var(--color-primary)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Diamond size={18} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', color: '#0f172a', fontWeight: '800', margin: 0 }}>Giá trị cốt lõi</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[
                    'Lấy người học làm trung tâm',
                    'Không ngừng đổi mới',
                    'Chất lượng & Hiệu quả',
                    'Minh bạch & Trách nhiệm'
                  ].map((val, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#475569' }}>
                      <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>•</span>
                      <span>{val}</span>
                    </li>
                  ))}
                </ul>
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

              <div className="timeline-row">
                {[
                  {
                    date: '2024.05',
                    title: 'Ý tưởng',
                    desc: 'Nhận thấy những khó khăn thực tế của người học tiếng Trung, nhóm bắt đầu hình thành ý tưởng Hanora.',
                    icon: Lightbulb
                  },
                  {
                    date: '2024.07',
                    title: 'Nghiên cứu & Phân tích',
                    desc: 'Nghiên cứu người dùng, phân tích nhu cầu và xây dựng giải pháp ban đầu.',
                    icon: Search
                  },
                  {
                    date: '2024.09',
                    title: 'Phát triển MVP',
                    desc: 'Xây dựng phiên bản MVP với các tính năng cơ bản và kiểm thử nội bộ.',
                    icon: Code
                  },
                  {
                    date: '2025.01',
                    title: 'Hoàn thiện sản phẩm',
                    desc: 'Tích hợp AI, tối ưu trải nghiệm và mở rộng hệ thống tính năng.',
                    icon: Rocket
                  },
                  {
                    date: '2025.05',
                    title: 'Ra mắt & Đoạt giải',
                    desc: 'Hanora chính thức hoàn thiện và đoạt Giải Ba tại cuộc thi FShark 2026.',
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
                    <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-primary)', letterSpacing: '0.5px' }}>
                      {step.date}
                    </span>
                    
                    {/* Title */}
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>
                      {step.title}
                    </h4>
                    
                    {/* Description */}
                    <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: '1.6', margin: 0, maxWidth: '170px' }}>
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>

        {/* ==========================================
           SECTION 03: ALL-IN-ONE ECOSYSTEM
           ========================================== */}
        <section style={{ padding: '4rem 0', maxWidth: '1440px', width: '100%', margin: '0 auto' }}>
          <div style={{ 
            backgroundColor: 'var(--color-bg-card)', 
            border: '1px solid var(--color-border)', 
            borderRadius: 'var(--radius-xl)', 
            padding: '3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            textAlign: 'left',
            boxShadow: 'var(--shadow-sm)'
          }}>
            {/* Left side */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{
                padding: '0.35rem 0.75rem',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                color: 'var(--color-primary)',
                backgroundColor: 'var(--color-primary-light)',
                borderRadius: 'var(--radius-full)',
                width: 'fit-content'
              }}>
                Giải pháp Hanora
              </div>
              
              <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', color: 'var(--deep-blue)', margin: 0 }}>
                Hệ sinh thái All-in-One
              </h2>
              
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
                Hanora kết hợp không gian làm việc tài liệu, quản lý từ vựng thông minh, hệ thống ôn tập Flashcard (Spaced Repetition) và Trợ lý AI DeepSeek vào một nền tảng duy nhất, liền mạch.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Không gian làm việc tích hợp dịch thuật AI',
                  'Trích xuất và quản lý từ vựng tự động',
                  'Ôn tập cá nhân hóa với thuật toán thông minh'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--deep-blue)', fontWeight: '500' }}>
                    <div style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center' }}>
                      <CheckCircle2 size={18} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side screenshot */}
            <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img src={allInOneImg} alt="Workspace" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
            </div>
          </div>
        </section>

        {/* ==========================================
           SECTION 04: QUOTE BANNER
           ========================================== */}
        <section style={{ 
          margin: '3rem auto',
          maxWidth: '1440px',
          width: '100%',
          padding: '5rem 2rem',
          backgroundColor: '#1d4ed8', 
          backgroundImage: 'linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%)',
          borderRadius: 'var(--radius-xl)',
          color: 'var(--white)',
          textAlign: 'center',
          position: 'relative',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div style={{ fontSize: '5rem', lineHeight: '1', fontFamily: 'serif', color: 'rgba(255, 255, 255, 0.2)', marginBottom: '0.5rem' }}>“</div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', maxWidth: '800px', margin: '0 auto', lineHeight: '1.4', color: 'var(--white)' }}>
            Biến việc học tiếng Trung thành một hành trình chủ động, cá nhân hóa và hiệu quả.
          </h2>
        </section>

      </div>
    </MainLayout>
  );
}
export default AboutPage;
