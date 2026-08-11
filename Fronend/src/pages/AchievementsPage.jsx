import { 
  Star, Building, User, TrendingUp, Trophy, Lightbulb, Rocket, Users, Flag, Compass, Award, Shield, CheckCircle2, ArrowRight
} from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';

// Import local assets matching the user's reference design
import heroIllustration from '../assets/f27340dc-8d23-4810-86c0-127ef9a3cd3d.png';
import pandaMascot from '../assets/StreakImage.png';

// Import avatars
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';

export function AchievementsPage() {
  const metrics = [
    { value: '07+', label: 'Năm phát triển', icon: Star },
    { value: '1568+', label: 'Tổ chức, trường học tin tưởng sử dụng', icon: Building },
    { value: '320K+', label: 'Người học đang sử dụng Hanora', icon: User },
    { value: '98%', label: 'Mức độ hài lòng của người dùng', icon: TrendingUp },
    { value: '01', label: 'Giải thưởng lớn đạt được', icon: Trophy }
  ];

  const timelineSteps = [
    {
      date: '2018 - 2019',
      title: 'Khởi nguồn ý tưởng',
      desc: 'Bắt đầu từ mong muốn ứng dụng công nghệ vào việc học tiếng Trung hiệu quả và dễ tiếp cận.',
      icon: Lightbulb
    },
    {
      date: '2020',
      title: 'Ra mắt phiên bản đầu tiên',
      desc: 'Phiên bản MVP của Hanora được ra mắt với các tính năng cơ bản và nhận được phản hồi tích cực.',
      icon: Rocket
    },
    {
      date: '2021',
      title: 'Mở rộng và phát triển',
      desc: 'Mở rộng tính năng, hợp tác với nhiều đối tác giáo dục và doanh nghiệp lớn.',
      icon: Users
    },
    {
      date: '2022',
      title: 'Bứt phá & khẳng định',
      desc: 'Tăng trưởng mạnh mẽ về người dùng, đạt nhiều chứng nhận và giải thưởng uy tín trong lĩnh vực EdTech.',
      icon: TrendingUp
    },
    {
      date: '2023 - 2024',
      title: 'Dẫn đầu xu hướng',
      desc: 'Ứng dụng AI toàn diện, nâng cao trải nghiệm học tập và cá nhân hóa cho từng người học.',
      icon: Flag
    },
    {
      date: 'Tương lai',
      title: 'Tiếp tục vươn xa',
      desc: 'Hanora tiếp tục đổi mới để trở thành nền tảng học tiếng Trung số 1 tại Việt Nam và khu vực.',
      icon: Compass
    }
  ];

  const awards = [
    {
      title: 'Giải 3 FSHARK 2026',
      subtitle: 'FPT University Đà Nẵng',
      desc: 'Hanora đạt Giải 3 tại cuộc thi FShark 2026 - Cuộc thi khởi nghiệp công nghệ uy tín dành cho sinh viên.',
      icon: Trophy,
      isGold: true
    },
    {
      title: 'Ra mắt EdTech Vietnam 2023',
      subtitle: 'Vietnam EdTech Awards',
      desc: 'Hanora được vinh danh trong Top 10 dự án EdTech tiềm năng và có ảnh hưởng tại Việt Nam.',
      icon: Award
    },
    {
      title: 'ISO/IEC 27001:2022 Certified',
      subtitle: 'Information Security',
      desc: 'Đạt chứng nhận về Hệ thống quản lý an toàn thông tin, cam kết bảo mật dữ liệu người dùng.',
      icon: Shield
    },
    {
      title: 'Chứng nhận Sản phẩm xuất sắc 2023',
      subtitle: 'Bộ Thông tin và Truyền thông',
      desc: 'Hanora được công nhận là Sản phẩm số xuất sắc, đáp ứng các tiêu chí về chất lượng và đổi mới sáng tạo.',
      icon: CheckCircle2
    }
  ];

  const testimonials = [
    {
      quote: "Hanora là một giải pháp học tiếng Trung toàn diện, giúp sinh viên tiếp cận kiến thức dễ dàng hơn và nâng cao hiệu quả học tập rõ rệt.",
      name: "ThS. Nguyễn Văn An",
      role: "Trưởng khoa Tiếng Trung - Trường Đại học Ngoại ngữ Đà Nẵng",
      avatar: avatar1
    },
    {
      quote: "Giao diện thân thiện, nội dung phong phú và AI hỗ trợ học tập rất thông minh. Hanora thực sự là người bạn đồng hành tuyệt vời trên hành trình chinh phục tiếng Trung.",
      name: "Nguyễn Minh Châu",
      role: "Sinh viên năm 3 - Đại học Đông Á",
      avatar: avatar2
    },
    {
      quote: "Hanora đã giúp chúng tôi số hóa chương trình đào tạo và quản lý việc học hiệu quả hơn. Dữ liệu học tập chi tiết giúp cá nhân hóa lộ trình cho từng học viên.",
      name: "Lê Hoàng Sơn",
      role: "Giám đốc Trung tâm Ngoại ngữ - HUTECH",
      avatar: avatar3
    }
  ];

  return (
    <MainLayout>
      <div className="container" style={{ paddingBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* ==========================================
           SECTION 01: HERO SECTION
           ========================================== */}
        <section style={{ padding: '4rem 0 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', width: '100%', alignItems: 'center', textAlign: 'left' }}>
            
            {/* Left Column Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
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
                <h1 style={{ 
                  fontSize: '2.6rem', 
                  fontWeight: '800', 
                  color: '#0f172a', 
                  lineHeight: '1.25', 
                  margin: 0,
                  letterSpacing: '-0.5px'
                }}>
                  Những cột mốc tự hào<br />
                  trên hành trình kiến tạo<br />
                  <span style={{ color: 'var(--color-primary)' }}>giá trị giáo dục</span>
                </h1>
              </div>
              
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.65', margin: 0, maxWidth: '520px' }}>
                Hanora không ngừng nỗ lực để mang đến giải pháp học tiếng Trung thông minh, hiệu quả và dễ tiếp cận nhất cho người học.
              </p>
            </div>

            {/* Right Column Showcase Image */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <div className="glow-breath" style={{ 
                width: '100%',
                maxWidth: '760px',
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
        </section>

        {/* ==========================================
           SECTION 01B: METRICS SECTION
           ========================================== */}
        <section style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '24px',
          padding: '2.5rem 2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.015)'
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {metrics.map((item, idx) => (
              <div key={idx} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                textAlign: 'left',
                padding: '0.5rem'
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
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0f172a', lineHeight: '1.2' }}>
                    {item.value}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px', lineHeight: '1.3' }}>
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
           SECTION 02: DEVELOPMENT TIMELINE
           ========================================== */}
        <section style={{ padding: '2rem 0', display: 'flex', flexDirection: 'column', gap: '3rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#0f172a', fontWeight: '800', margin: 0, position: 'relative', display: 'inline-block' }}>
            Hành trình phát triển
            <span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', position: 'absolute', top: '-0.25rem', right: '-1rem', fontWeight: 'bold' }}>+</span>
          </h2>

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
                min-width: 1000px;
                padding-bottom: 1rem;
              }
            `}</style>
            
            {/* Connecting Dashed Line */}
            <div style={{
              position: 'absolute',
              top: '2.25rem',
              left: '6%',
              right: '6%',
              height: '1px',
              borderTop: '2px dashed #cbd5e1',
              zIndex: 0
            }}></div>

            <div className="timeline-row">
              {timelineSteps.map((step, idx) => (
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
                    border: '2px solid var(--color-primary)',
                    color: 'var(--color-primary)',
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
                  <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: '1.6', margin: 0, maxWidth: '160px' }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
           SECTION 03: AWARDS & PARTNERS DUAL GRID
           ========================================== */}
        <section style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '4rem', 
          padding: '2rem 0',
          textAlign: 'left'
        }}>
          {/* Awards Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h2 style={{ fontSize: '2.2rem', color: '#0f172a', fontWeight: '800', margin: 0, position: 'relative', display: 'inline-block' }}>
              Giải thưởng & Chứng nhận
              <span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', position: 'absolute', top: '-0.25rem', right: '-1rem', fontWeight: 'bold' }}>+</span>
            </h2>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '1rem'
            }}>
              {awards.map((award, idx) => (
                <div key={idx} className="card scale-hover" style={{
                  padding: '1.5rem 1.25rem',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.01)'
                }}>
                  <div style={{ 
                    width: '2.25rem', 
                    height: '2.25rem', 
                    borderRadius: '50%', 
                    backgroundColor: award.isGold ? 'rgba(245, 158, 11, 0.08)' : 'rgba(22, 143, 239, 0.05)', 
                    color: award.isGold ? 'rgb(245, 158, 11)' : 'var(--color-primary)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <award.icon size={16} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '800', color: '#0f172a', margin: 0, lineHeight: '1.3' }}>{award.title}</h4>
                    <span style={{ fontSize: '0.7rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>{award.subtitle}</span>
                    <p style={{ color: '#64748b', fontSize: '0.75rem', lineHeight: '1.4', margin: '4px 0 0 0' }}>{award.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partners Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h2 style={{ fontSize: '2.2rem', color: '#0f172a', fontWeight: '800', margin: 0, position: 'relative', display: 'inline-block' }}>
              Đối tác tiêu biểu
              <span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', position: 'absolute', top: '-0.25rem', right: '-1rem', fontWeight: 'bold' }}>+</span>
            </h2>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '1rem',
              height: '100%'
            }}>
              {[
                { name: 'FPT Education', type: 'Education' },
                { name: 'Đại Học Ngoại Ngữ\nĐại Học Đà Nẵng', type: 'University' },
                { name: 'HUTECH University', type: 'Technology' },
                { name: 'VTC Online', type: 'Media & Games' },
                { name: 'Zalo', type: 'Social Platform' },
                { name: 'VNG Cloud', type: 'Cloud Provider' }
              ].map((partner, idx) => (
                <div key={idx} className="card" style={{
                  padding: '1.5rem 1rem',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.005)'
                }}>
                  <span style={{ 
                    fontSize: '1rem', 
                    fontWeight: '800', 
                    color: '#0f172a', 
                    lineHeight: '1.3',
                    whiteSpace: 'pre-line'
                  }}>
                    {partner.name}
                  </span>
                  <span style={{ 
                    fontSize: '0.7rem', 
                    color: 'var(--color-primary)', 
                    fontWeight: 'bold', 
                    marginTop: '0.25rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {partner.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
           SECTION 04: TESTIMONIALS
           ========================================== */}
        <section style={{ padding: '2rem 0', display: 'flex', flexDirection: 'column', gap: '3rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#0f172a', fontWeight: '800', margin: 0, position: 'relative', display: 'inline-block' }}>
            Họ nói về Hanora
            <span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', position: 'absolute', top: '-0.25rem', right: '-1rem', fontWeight: 'bold' }}>+</span>
          </h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {testimonials.map((testi, idx) => (
              <div key={idx} className="card scale-hover" style={{
                padding: '2.25rem 1.75rem',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                boxShadow: '0 4px 25px rgba(0,0,0,0.015)',
                textAlign: 'left',
                position: 'relative'
              }}>
                {/* Quote decoration */}
                <div style={{ 
                  fontSize: '3rem', 
                  lineHeight: '1', 
                  fontFamily: 'serif', 
                  color: 'rgba(22, 143, 239, 0.15)',
                  position: 'absolute',
                  top: '1rem',
                  left: '1.5rem',
                  userSelect: 'none'
                }}>
                  “
                </div>

                <p style={{ 
                  color: '#475569', 
                  fontSize: '0.9rem', 
                  lineHeight: '1.65', 
                  margin: 0,
                  zIndex: 1,
                  minHeight: '80px'
                }}>
                  {testi.quote}
                </p>

                {/* User info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid #f1f5f9', paddingTop: '1.25rem', marginTop: 'auto' }}>
                  <img 
                    src={testi.avatar} 
                    alt={testi.name} 
                    style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', objectFit: 'cover' }} 
                  />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#0f172a' }}>{testi.name}</span>
                    <span style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '2px', lineHeight: '1.2' }}>{testi.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
           SECTION 05: CTA BANNER
           ========================================== */}
        <section
          style={{
            marginTop: '2rem',
            padding: '3rem 4rem',
            backgroundColor: '#1d4ed8',
            backgroundImage: 'linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%)',
            borderRadius: '24px',
            color: '#ffffff',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
            textAlign: 'left',
            boxShadow: '0 10px 30px rgba(29, 78, 216, 0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Mascot (Left aligned) */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
            <img 
              src={pandaMascot} 
              alt="Hanora Mascot" 
              className="float-animation"
              style={{ width: '150px', height: 'auto', display: 'block', objectFit: 'contain' }} 
            />
          </div>

          {/* Center Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', zIndex: 1 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#ffffff', margin: 0, lineHeight: '1.3' }}>
              Hanora sẽ còn chinh phục nhiều cột mốc hơn nữa!
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              Cùng chúng tôi kiến tạo tương lai giáo dục thông minh và hiệu quả.
            </p>
          </div>

          {/* Right Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', zIndex: 1 }} className="cta-btn-wrapper">
            <style>{`
              @media (max-width: 768px) {
                .cta-btn-wrapper {
                  justify-content: center !important;
                }
              }
            `}</style>
            <a
              href="https://hanora.id.vn"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#ffffff',
                color: '#1d4ed8',
                padding: '0.85rem 2rem',
                borderRadius: '99px',
                fontWeight: 'bold',
                fontSize: '0.95rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s'
              }}
              className="scale-hover"
            >
              Khám phá Hanora ngay <ArrowRight size={16} />
            </a>
          </div>
        </section>

      </div>
    </MainLayout>
  );
}
export default AchievementsPage;
