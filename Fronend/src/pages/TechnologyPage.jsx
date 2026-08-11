import { Link } from 'react-router-dom';
import { 
  Database, Github, Sparkles, Server, Cpu, Eye, Cloud, GitBranch, ArrowRight,
  Shield, Lock, Share2, BookOpen, TrendingUp, Check, CheckCircle2, Award
} from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';

// Import local assets matching the user's reference design
import heroIllustration from '../assets/b932b4fd-e75b-4077-af7a-42a92f49ded6.png';
import pandaMascot from '../assets/StreakImage.png';

// Import technology SVGs
import awsS3Logo from '../assets/aws-s3.svg';
import azureLogo from '../assets/azure.svg';
import deepseekLogo from '../assets/deepseek.svg';
import postgresqlLogo from '../assets/postgresql.svg';
import dotnetLogo from '../assets/dotnet.svg';
import reactLogo from '../assets/react.svg';

export function TechnologyPage() {
  const gridTechs = [
    {
      name: 'ReactJS',
      desc: 'Xây dựng giao diện hiện đại, tương tác mượt mà',
      logo: reactLogo
    },
    {
      name: '.NET 8 / C#',
      desc: 'Backend mạnh mẽ, hiệu năng cao, bảo mật',
      logo: dotnetLogo
    },
    {
      name: 'PostgreSQL',
      desc: 'Cơ sở dữ liệu quan hệ ổn định và tin cậy',
      logo: postgresqlLogo
    },
    {
      name: 'DeepSeek API',
      desc: 'AI thông minh hỗ trợ giải thích, phân tích và tạo nội dung',
      logo: deepseekLogo
    },
    {
      name: 'Azure Computer Vision',
      desc: 'OCR và xử lý hình ảnh cho tài liệu thông minh',
      logo: azureLogo
    },
    {
      name: 'AWS S3',
      desc: 'Lưu trữ tập tin an toàn, khả năng mở rộng cao',
      logo: awsS3Logo
    },
    {
      name: 'Git / GitHub',
      desc: 'Quản lý phiên bản và hợp tác hiệu quả',
      icon: Github
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
                  Công nghệ Hanora <span style={{ fontSize: '0.9rem' }}>+</span>
                </span>
                <h1 style={{ 
                  fontSize: '2.6rem', 
                  fontWeight: '800', 
                  color: '#0f172a', 
                  lineHeight: '1.25', 
                  margin: 0,
                  letterSpacing: '-0.5px'
                }}>
                  Công nghệ hiện đại<br />
                  Nền tảng vững chắc
                </h1>
              </div>
              
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.65', margin: 0, maxWidth: '520px' }}>
                Hanora được xây dựng trên kiến trúc công nghệ hiện đại, kết hợp AI tiên tiến và hệ thống cloud mạnh mẽ mang đến trải nghiệm học tập mượt mà và thông minh.
              </p>

              {/* 4 horizontal micro-cards */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '1rem',
                marginTop: '0.5rem'
              }}>
                {[
                  { title: "Hiện đại", desc: "Công nghệ tân tiến, luôn cập nhật", icon: Cpu },
                  { title: "Ổn định", desc: "Kiến trúc vững chắc, hiệu năng cao", icon: Server },
                  { title: "Bảo mật", desc: "Dữ liệu an toàn, được mã hóa", icon: Shield },
                  { title: "Mở rộng", desc: "Dễ dàng mở rộng và tích hợp", icon: Share2 }
                ].map((item, idx) => (
                  <div key={idx} className="card" style={{ 
                    padding: '1.25rem 1rem', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '0.5rem', 
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.01)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center' }}>
                        <item.icon size={16} />
                      </div>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>
                        {item.title}
                      </h4>
                    </div>
                    <p style={{ color: '#64748b', fontSize: '0.75rem', margin: 0, lineHeight: '1.4' }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
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
                  alt="Hanora Dashboard Mockup" 
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} 
                />
              </div>
            </div>

          </div>
        </section>

        {/* ==========================================
           SECTION 02: TECHNOLOGIES USED
           ========================================== */}
        <section style={{ padding: '2rem 0', display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#0f172a', fontWeight: '800', margin: 0, position: 'relative', display: 'inline-block' }}>
            Công nghệ sử dụng
            <span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', position: 'absolute', top: '-0.25rem', right: '-1rem', fontWeight: 'bold' }}>+</span>
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', 
            gap: '1.25rem' 
          }}>
            {gridTechs.map((tech, idx) => (
              <div key={idx} className="card scale-hover" style={{ 
                padding: '1.5rem 1rem', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.015)'
              }}>
                <div style={{ 
                  height: '40px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '0.5rem'
                }}>
                  {tech.logo ? (
                    <img src={tech.logo} alt={tech.name} style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
                  ) : (
                    <div style={{ color: 'var(--color-primary)' }}>
                      <tech.icon size={36} />
                    </div>
                  )}
                </div>
                <h3 style={{ fontSize: '0.95rem', color: '#0f172a', fontWeight: '800', margin: '0.25rem 0 0.5rem 0' }}>
                  {tech.name}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.75rem', lineHeight: '1.4', margin: 0 }}>
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
           SECTION 03: SYSTEM ARCHITECTURE DIAGRAM
           ========================================== */}
        <section style={{ padding: '2rem 0', display: 'flex', flexDirection: 'column', gap: '2.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#0f172a', fontWeight: '800', margin: 0, position: 'relative', display: 'inline-block' }}>
            Kiến trúc hệ thống
            <span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', position: 'absolute', top: '-0.25rem', right: '-1rem', fontWeight: 'bold' }}>+</span>
          </h2>

          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '24px',
            padding: '3rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.015)'
          }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'stretch',
              gap: '1.5rem',
              position: 'relative'
            }}>
              {/* Client Block */}
              <div style={{ flex: 1, minWidth: '180px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.5rem 1.25rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0f172a', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem', margin: 0 }}>Client</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem', color: '#475569' }}>
                  <div style={{ backgroundColor: '#ffffff', padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>Web App (ReactJS)</div>
                  <div style={{ backgroundColor: '#ffffff', padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0', opacity: 0.7 }}>Mobile (PWA) (Tương lai)</div>
                </div>
              </div>

              {/* Arrow indicator */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1' }}>
                <ArrowRight size={24} style={{ color: 'var(--color-primary)' }} />
              </div>

              {/* API Gateway Block */}
              <div style={{ flex: 1, minWidth: '180px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.5rem 1.25rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0f172a', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem', margin: 0 }}>API Gateway</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#475569', justifyContent: 'center', height: '100%' }}>
                  <div style={{ backgroundColor: '#ffffff', padding: '0.75rem 0.5rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontWeight: 'bold' }}>RESTful API</div>
                </div>
              </div>

              {/* Arrow indicator */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1' }}>
                <ArrowRight size={24} style={{ color: 'var(--color-primary)' }} />
              </div>

              {/* Backend Services Block */}
              <div style={{ flex: 1.2, minWidth: '220px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.5rem 1.25rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0f172a', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem', margin: 0 }}>Backend Services (.NET 8)</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem', color: '#475569' }}>
                  <div style={{ backgroundColor: '#ffffff', padding: '0.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>Auth Service</div>
                  <div style={{ backgroundColor: '#ffffff', padding: '0.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>User Service</div>
                  <div style={{ backgroundColor: '#ffffff', padding: '0.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>Learning Service</div>
                  <div style={{ backgroundColor: '#ffffff', padding: '0.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>AI Service</div>
                  <div style={{ backgroundColor: '#ffffff', padding: '0.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>Translation Service</div>
                </div>
              </div>

              {/* Arrow indicator */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1' }}>
                <ArrowRight size={24} style={{ color: 'var(--color-primary)' }} />
              </div>

              {/* Data Layer Block */}
              <div style={{ flex: 1, minWidth: '180px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.5rem 1.25rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0f172a', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem', margin: 0 }}>Data Layer</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem', color: '#475569' }}>
                  <div style={{ backgroundColor: '#ffffff', padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>PostgreSQL (Database)</div>
                  <div style={{ backgroundColor: '#ffffff', padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>AWS S3 (Storage)</div>
                </div>
              </div>

              {/* Arrow indicator */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1' }}>
                <ArrowRight size={24} style={{ color: 'var(--color-primary)' }} />
              </div>

              {/* External Services Block */}
              <div style={{ flex: 1, minWidth: '180px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.5rem 1.25rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0f172a', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem', margin: 0 }}>External Services</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem', color: '#475569' }}>
                  <div style={{ backgroundColor: '#ffffff', padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>DeepSeek API (AI)</div>
                  <div style={{ backgroundColor: '#ffffff', padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>Azure Computer Vision (OCR)</div>
                </div>
              </div>
            </div>

            {/* Infrastructure cloud footer */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', marginTop: '0.5rem', fontSize: '0.85rem', color: '#64748b', fontWeight: 'bold' }}>
              <Cloud size={16} style={{ color: 'var(--color-primary)' }} />
              <span>Infrastructure: Azure Cloud / AWS</span>
            </div>
          </div>
        </section>

        {/* ==========================================
           SECTION 04: AI ARCHITECTURE & SECURITY
           ========================================== */}
        <section style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '3rem', 
          padding: '2rem 0',
          textAlign: 'left'
        }}>
          {/* AI Architecture */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '2.2rem', color: '#0f172a', fontWeight: '800', margin: 0, position: 'relative', display: 'inline-block' }}>
              Kiến trúc AI
              <span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', position: 'absolute', top: '-0.25rem', right: '-1rem', fontWeight: 'bold' }}>+</span>
            </h2>
            
            {/* Flowchart row */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              alignItems: 'center', 
              gap: '0.5rem', 
              backgroundColor: '#f8fafc', 
              padding: '1.25rem', 
              borderRadius: '16px',
              border: '1px solid #e2e8f0'
            }}>
              {[
                'Người dùng', 'Hanora Frontend', '.NET Backend', 'DeepSeek API', 'AI Response', 'Hanora'
              ].map((step, idx, arr) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ 
                    backgroundColor: '#ffffff', 
                    padding: '0.35rem 0.65rem', 
                    borderRadius: '8px', 
                    border: '1px solid #e2e8f0',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    color: '#0f172a'
                  }}>
                    {step}
                  </span>
                  {idx < arr.length - 1 && <span style={{ color: '#cbd5e1', fontSize: '0.75rem' }}>➔</span>}
                </div>
              ))}
            </div>

            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              Hanora tận dụng sức mạnh của AI để hiểu ngữ cảnh, phân tích nội dung và mang đến phản hồi chính xác, tự nhiên và hữu ích cho người học trong từng tình huống.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                'Hiểu ngữ cảnh chính xác',
                'Phản hồi nhanh chóng',
                'Nội dung chất lượng cao',
                'Hỗ trợ học tập cá nhân hóa'
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', color: '#475569', fontWeight: '500' }}>
                  <div style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center' }}>
                    <CheckCircle2 size={16} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Security & Performance */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '2.2rem', color: '#0f172a', fontWeight: '800', margin: 0, position: 'relative', display: 'inline-block' }}>
              Bảo mật & Hiệu năng
              <span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', position: 'absolute', top: '-0.25rem', right: '-1rem', fontWeight: 'bold' }}>+</span>
            </h2>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '1.25rem'
            }}>
              {[
                { title: "HTTPS / SSL", desc: "Kết nối an toàn với chứng chỉ SSL", icon: Lock },
                { title: "JWT Authentication", desc: "Xác thực người dùng an toàn", icon: Shield },
                { title: "Mã hóa dữ liệu", desc: "Bảo vệ dữ liệu người dùng", icon: Lock },
                { title: "Hiệu năng cao", desc: "Tối ưu truy vấn và xử lý", icon: TrendingUp },
                { title: "Sao lưu định kỳ", desc: "Backup tự động hàng ngày", icon: Database },
                { title: "Cloud Scalable", desc: "Hệ thống dễ dàng mở rộng", icon: Cloud },
                { title: "Giám sát hệ thống", desc: "Theo dõi hiệu năng 24/7", icon: Server },
                { title: "Kiểm thử tự động", desc: "Đảm bảo chất lượng và ổn định", icon: Award }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div style={{ 
                    width: '2rem', 
                    height: '2rem', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(22, 143, 239, 0.05)', 
                    color: 'var(--color-primary)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <item.icon size={14} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#0f172a', lineHeight: '1.2' }}>{item.title}</span>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
           SECTION 05: CTA BANNER WITH MASCOT
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
              style={{ width: '180px', height: 'auto', display: 'block', objectFit: 'contain' }} 
            />
          </div>

          {/* Center Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', zIndex: 1 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#ffffff', margin: 0, lineHeight: '1.3' }}>
              Công nghệ hiện đại – Trải nghiệm vượt trội
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              Hanora không ngừng đổi mới để mang đến nền tảng học tiếng Trung tốt nhất cho người học.
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
export default TechnologyPage;
