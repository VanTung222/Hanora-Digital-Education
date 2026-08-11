import { useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { 
  Github, Linkedin, Mail, CheckCircle2, X, Star, Users, Lightbulb, Shield,
  Zap, BookOpen, TrendingUp, Cpu, Briefcase, Award, Smile, Code, Clock, ArrowRight,
  Package, Edit, LifeBuoy, GraduationCap
} from 'lucide-react';

// Import whitelisted avatar images
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';
import avatar4 from '../assets/avatar4.png';
import avatar5 from '../assets/avatar5.png';
import avatar6 from '../assets/avatar6.png';

// Import illustrations and photos
import teamPhoto from '../assets/89a77990-468b-4e9e-affa-4dce029fac40.png'; // Hanora team group photo
import meetingPhoto from '../assets/ba056100-5adf-4b20-954e-35b886288ec9.png'; // Hanora culture group meeting
import pandaMascot from '../assets/StreakImage.png'; // Streak image wrapper

export function TeamPage() {
  const [selectedMember, setSelectedMember] = useState(null);

  const leaders = [
    {
      name: 'Trần Nguyễn Minh',
      role: 'CEO & Co-founder',
      image: avatar1,
      desc: '15+ năm kinh nghiệm trong lĩnh vực công nghệ giáo dục và AI. Từng lãnh đạo nhiều dự án EdTech quy mô lớn tại Việt Nam.',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Lê Hoàng Nam',
      role: 'CTO & Co-founder',
      image: avatar3,
      desc: 'Chuyên gia về AI và hệ thống phân tán. 10+ năm kinh nghiệm phát triển nền tảng công nghệ hiệu năng cao.',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Nguyễn Thu Hà',
      role: 'COO',
      image: avatar4,
      desc: 'Chuyên gia vận hành và chiến lược. 8+ năm kinh nghiệm xây dựng và phát triển hệ thống quy mô lớn.',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Phạm Đức Anh',
      role: 'CPO',
      image: avatar5,
      desc: 'Tập trung vào trải nghiệm người dùng và sản phẩm giáo dục, đồng hành cùng hàng triệu người học.',
      linkedin: 'https://linkedin.com'
    }
  ];

  const departments = [
    { name: 'Phát triển sản phẩm', eng: 'Product Development', count: '25+ thành viên', icon: Package },
    { name: 'Công nghệ & AI', eng: 'Technology & AI', count: '30+ thành viên', icon: Cpu },
    { name: 'Thiết kế & Trải nghiệm', eng: 'Design & UX', count: '12+ thành viên', icon: Edit },
    { name: 'Giáo dục & Nội dung', eng: 'Education & Content', count: '18+ thành viên', icon: BookOpen },
    { name: 'Kinh doanh & Marketing', eng: 'Business & Marketing', count: '15+ thành viên', icon: TrendingUp },
    { name: 'Vận hành & Hỗ trợ', eng: 'Operations & Support', count: '10+ thành viên', icon: LifeBuoy }
  ];

  const stats = [
    { value: '110+', label: 'Thành viên' },
    { value: '30+', label: 'Kỹ sư công nghệ' },
    { value: '20+', label: 'Chuyên gia giáo dục' },
    { value: '08+', label: 'Năm kinh nghiệm trung bình' },
    { value: '01', label: 'Chung sứ mệnh vì giáo dục Việt Nam' }
  ];

  const benefits = [
    { title: 'Môi trường linh hoạt', desc: 'Làm việc linh hoạt, tin tưởng và trao quyền.', icon: Smile },
    { title: 'Cơ hội phát triển', desc: 'Lộ trình phát triển rõ ràng, đào tạo và mentoring 1-1.', icon: TrendingUp },
    { title: 'Phúc lợi toàn diện', desc: 'Bảo hiểm sức khỏe, du lịch, team building, quà tặng...', icon: Award },
    { title: 'Văn phòng hiện đại', desc: 'Không gian làm việc tiện nghi, sáng tạo và truyền cảm hứng.', icon: Lightbulb },
    { title: 'Cân bằng cuộc sống', desc: 'Chúng tôi tôn trọng thời gian cá nhân và gia đình của bạn.', icon: Clock },
    { title: 'Cổ phần & Ghi nhận', desc: 'Chính sách ESOP hấp dẫn và ghi nhận xứng đáng.', icon: Shield }
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
                  Đội ngũ Hanora <span style={{ fontSize: '0.9rem' }}>+</span>
                </span>
                <h1 style={{ 
                  fontSize: '2.6rem', 
                  fontWeight: '800', 
                  color: '#0f172a', 
                  lineHeight: '1.25', 
                  margin: 0,
                  letterSpacing: '-0.5px'
                }}>
                  Những con người tài năng<br />
                  kiến tạo tương lai giáo dục
                </h1>
              </div>
              
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.65', margin: 0, maxWidth: '520px' }}>
                Chúng tôi là những nhà giáo dục, kỹ sư, nhà thiết kế và chuyên gia công nghệ cùng chung sứ mệnh ứng dụng AI để mang đến trải nghiệm học tập thông minh và hiệu quả cho hàng triệu người học.
              </p>

              {/* 4 horizontal micro-cards */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '1rem',
                marginTop: '0.5rem'
              }}>
                {[
                  { title: "Tài năng & đam mê", icon: Zap },
                  { title: "Hợp tác & tôn trọng", icon: Users },
                  { title: "Sáng tạo & đổi mới", icon: Lightbulb },
                  { title: "Trách nhiệm & tận tâm", icon: Shield }
                ].map((item, idx) => (
                  <div key={idx} className="card" style={{ 
                    padding: '1rem 1.25rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem', 
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.01)'
                  }}>
                    <div style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center' }}>
                      <item.icon size={16} />
                    </div>
                    <h4 style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>
                      {item.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column Showcase Image */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <div className="glow-breath" style={{ 
                width: '100%',
                maxWidth: '760px',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
              }}>
                <img 
                  src={teamPhoto} 
                  alt="Hanora Team Group Photo" 
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} 
                />
              </div>
            </div>

          </div>
        </section>

        {/* ==========================================
           SECTION 02: LEADERSHIP TEAM
           ========================================== */}
        <section style={{ padding: '2rem 0', display: 'flex', flexDirection: 'column', gap: '2.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#0f172a', fontWeight: '800', margin: 0, position: 'relative', display: 'inline-block' }}>
            Ban lãnh đạo Hanora
            <span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', position: 'absolute', top: '-0.25rem', right: '-1rem', fontWeight: 'bold' }}>+</span>
          </h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
            gap: '2rem' 
          }}>
            {leaders.map((leader, idx) => (
              <div key={idx} className="card scale-hover" style={{
                padding: '2.5rem 1.75rem',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '1.25rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.01)'
              }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                  <img src={leader.image} alt={leader.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <h3 style={{ fontSize: '1.15rem', color: '#0f172a', fontWeight: '800', margin: 0 }}>
                    {leader.name}
                  </h3>
                  <span style={{ color: '#64748b', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {leader.role}
                  </span>
                  
                  {/* LinkedIn Icon */}
                  <a 
                    href={leader.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                      marginTop: '0.25rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-primary)',
                      textDecoration: 'none'
                    }}
                  >
                    <Linkedin size={16} />
                  </a>
                </div>

                <p style={{ color: '#475569', fontSize: '0.8rem', lineHeight: '1.6', margin: 0 }}>
                  {leader.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Pagination dots replica */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></span>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#cbd5e1' }}></span>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#cbd5e1' }}></span>
          </div>
        </section>

        {/* ==========================================
           SECTION 03: DEPARTMENTS
           ========================================== */}
        <section style={{ padding: '2rem 0', display: 'flex', flexDirection: 'column', gap: '2.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#0f172a', fontWeight: '800', margin: 0, position: 'relative', display: 'inline-block' }}>
            Các phòng ban
            <span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', position: 'absolute', top: '-0.25rem', right: '-1rem', fontWeight: 'bold' }}>+</span>
          </h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
            gap: '1.25rem' 
          }}>
            {departments.map((dept, idx) => (
              <div key={idx} className="card scale-hover" style={{
                padding: '1.5rem 1.25rem',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '0.5rem',
                boxShadow: '0 2px 15px rgba(0,0,0,0.005)'
              }}>
                <div style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(22, 143, 239, 0.05)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.25rem'
                }}>
                  <dept.icon size={16} />
                </div>
                
                <h4 style={{ fontSize: '0.9rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>{dept.name}</h4>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{dept.eng}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 'bold', marginTop: '4px' }}>{dept.count}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
           SECTION 03B: BLUE STATS BANNER
           ========================================== */}
        <section style={{
          backgroundColor: '#1d4ed8',
          backgroundImage: 'linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%)',
          borderRadius: '24px',
          padding: '2.5rem 2rem',
          color: '#ffffff',
          boxShadow: '0 10px 30px rgba(29, 78, 216, 0.15)'
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
            gap: '1.5rem',
            textAlign: 'center'
          }}>
            {stats.map((stat, idx) => (
              <div key={idx} style={{ 
                display: 'flex', 
                flexDirection: 'column',
                gap: '0.25rem',
                borderRight: idx < stats.length - 1 ? '1px solid rgba(255, 255, 255, 0.15)' : 'none'
              }} className="stat-col">
                <style>{`
                  @media (max-width: 768px) {
                    .stat-col {
                      border-right: none !important;
                      border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
                      padding-bottom: 1rem !important;
                    }
                    .stat-col:last-child {
                      border-bottom: none !important;
                      padding-bottom: 0 !important;
                    }
                  }
                `}</style>
                <span style={{ fontSize: '2.2rem', fontWeight: '900', color: '#ffffff', lineHeight: '1.2' }}>
                  {stat.value}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.8)', fontWeight: 'bold' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
           SECTION 04: HANORA CULTURE
           ========================================== */}
        <section style={{ padding: '2rem 0', display: 'flex', flexDirection: 'column', gap: '3rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#0f172a', fontWeight: '800', margin: 0, position: 'relative', display: 'inline-block' }}>
            Văn hóa Hanora
            <span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', position: 'absolute', top: '-0.25rem', right: '-1rem', fontWeight: 'bold' }}>+</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            textAlign: 'left',
            alignItems: 'center'
          }}>
            {/* Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { title: 'Đặt người học làm trung tâm', desc: 'Mọi quyết định đều hướng đến trải nghiệm tốt nhất cho người học.', icon: Lightbulb },
                { title: 'Không ngừng học hỏi', desc: 'Chúng tôi khuyến khích tinh thần học hỏi, chia sẻ và phát triển mỗi ngày.', icon: GraduationCap },
                { title: 'Thử thách & Đổi mới', desc: 'Dám nghĩ, dám làm, không ngại thử thách để tạo ra giá trị đột phá.', icon: Zap },
                { title: 'Tôn trọng & Hợp tác', desc: 'Chúng tôi tin rằng sự tôn trọng và hợp tác là nền tảng của một đội ngũ mạnh mẽ.', icon: Users }
              ].map((val, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ 
                    width: '2.25rem', 
                    height: '2.25rem', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(22, 143, 239, 0.05)', 
                    color: 'var(--color-primary)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <val.icon size={16} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>{val.title}</h4>
                    <p style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: '1.5', margin: 0 }}>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Culture Meeting Photo */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ 
                borderRadius: '24px', 
                overflow: 'hidden', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                width: '100%'
              }}>
                <img 
                  src={meetingPhoto} 
                  alt="Hanora Culture Meeting" 
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
                />
              </div>
            </div>

            {/* Testimonial Quote with Mascot */}
            <div style={{ 
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '24px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              alignSelf: 'stretch',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div style={{ fontSize: '3rem', fontFamily: 'serif', color: 'rgba(22, 143, 239, 0.15)', lineHeight: '1', position: 'absolute', top: '1.5rem', left: '2rem' }}>
                “
              </div>
              
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.65', margin: 0, zIndex: 1 }}>
                Chúng tôi không chỉ xây dựng một nền tảng công nghệ, mà còn xây dựng một tương lai học tập tốt đẹp hơn cho tất cả mọi người.
              </p>
              
              <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#0f172a', alignSelf: 'flex-start', borderTop: '1px solid #cbd5e1', paddingTop: '0.5rem', width: '100%' }}>
                – Đội ngũ Hanora –
              </span>

              {/* Bottom right Mascot */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                <img 
                  src={pandaMascot} 
                  alt="Hanora Panda Culture" 
                  style={{ width: '100px', height: 'auto', objectFit: 'contain' }} 
                />
              </div>
            </div>

          </div>
        </section>

        {/* ==========================================
           SECTION 05: CAREERS - GIA NHẬP HANORA
           ========================================== */}
        <section style={{ padding: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#0f172a', fontWeight: '800', margin: 0, position: 'relative', display: 'inline-block' }}>
            Gia nhập Hanora
            <span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', position: 'absolute', top: '-0.25rem', right: '-1rem', fontWeight: 'bold' }}>+</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem', margin: '0 auto 2rem', maxWidth: '600px' }}>
            Chúng tôi luôn mang đến môi trường làm việc lý tưởng để bạn phát triển và tỏa sáng.
          </p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {benefits.map((benefit, idx) => (
              <div key={idx} className="card scale-hover" style={{
                padding: '2rem 1.5rem',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '0.75rem',
                boxShadow: '0 4px 15px rgba(0,0,0,0.005)'
              }}>
                <div style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(22, 143, 239, 0.05)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <benefit.icon size={16} />
                </div>
                
                <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>{benefit.title}</h4>
                <p style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: '1.5', margin: 0 }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
           SECTION 06: CTA BANNER
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
              style={{ width: '130px', height: 'auto', display: 'block', objectFit: 'contain' }} 
            />
          </div>

          {/* Center Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', zIndex: 1 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#ffffff', margin: 0, lineHeight: '1.3' }}>
              Bạn muốn cùng chúng tôi kiến tạo tương lai giáo dục?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              Hanora luôn tìm kiếm những con người tài năng và đam mê công nghệ.
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
              Gia nhập Hanora <ArrowRight size={16} />
            </a>
          </div>
        </section>

      </div>
    </MainLayout>
  );
}
export default TeamPage;
