import { Link } from 'react-router-dom';
import { 
  Database, Github, Sparkles, Server, Cpu, Eye, Cloud, GitBranch, ArrowRight 
} from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';

// Import local assets matching the user's reference design
import techHeroImg from '../assets/unnamed.jpg';
import architectureImg from '../assets/unnamed (9).jpg';
import responsiveImg from '../assets/unnamed (10).jpg';

// Import technology SVGs
import awsS3Logo from '../assets/aws-s3.svg';
import azureLogo from '../assets/azure.svg';
import deepseekLogo from '../assets/deepseek.svg';
import postgresqlLogo from '../assets/postgresql.svg';
import dotnetLogo from '../assets/dotnet.svg';
import tailwindcssLogo from '../assets/tailwindcss.svg';
import kubernetesLogo from '../assets/kubernetes.svg';
import reactLogo from '../assets/react.svg';

export function TechnologyPage() {
  const gridTechs = [
    {
      name: 'ReactJS',
      desc: 'Giao diện người dùng hiện đại, phát triển component, tương tác trải nghiệm người dùng tối ưu và tăng hiệu suất.',
      logo: reactLogo
    },
    {
      name: '.NET / C#',
      desc: 'API hiệu năng cao, bảo mật, mở rộng, đảm bảo xử lý hàng triệu request phục vụ đồng thời.',
      logo: dotnetLogo
    },
    {
      name: 'PostgreSQL',
      desc: 'Quản lý dữ liệu quan hệ mạnh mẽ, đảm bảo tính toàn vẹn cơ sở dữ liệu và bảo mật người dùng.',
      logo: postgresqlLogo
    },
    {
      name: 'Entity Framework Core',
      desc: 'Truy vấn dữ liệu mạnh mẽ, tối ưu hóa truy vấn tự động, dễ phát triển backend.',
      logo: null,
      icon: Database
    },
    {
      name: 'AWS S3',
      desc: 'Lưu trữ tệp tin dữ liệu, khả năng mở rộng không giới hạn cho các tệp hình ảnh, video và tài liệu.',
      logo: awsS3Logo
    },
    {
      name: 'Azure Computer Vision',
      desc: 'Phân tích tài liệu PDF/Hình ảnh bằng OCR, tự động và số hóa tài liệu tiếng Trung chính xác.',
      logo: azureLogo
    }
  ];

  return (
    <MainLayout>
      <div className="container" style={{ paddingBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* ==========================================
           SECTION 01: HERO SECTION
           ========================================== */}
        <section style={{ padding: '5rem 0 3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--deep-blue)', marginBottom: '1rem', lineHeight: '1.2' }}>
              Công nghệ phía sau Hanora
            </h1>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Nền tảng luôn luôn vững chắc, kết hợp cùng sức mạnh AI, mang lại trải nghiệm học tập đỉnh cao.
            </p>
          </div>

          {/* Hero Collage / Widescreen Banner */}
          <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gridTemplateRows: '1fr 1fr', 
              gap: '1rem', 
              backgroundColor: 'var(--color-primary-light)', 
              padding: '1.5rem', 
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '140px' }}>
                <img src={techHeroImg} alt="Technology Showcase 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '140px' }}>
                <img src={responsiveImg} alt="Technology Showcase 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '140px' }}>
                <img src={architectureImg} alt="Technology Showcase 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '140px' }}>
                <img src={techHeroImg} alt="Technology Showcase 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
           SECTION 02: 6-GRID TECHNOLOGY
           ========================================== */}
        <section style={{ padding: '4rem 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {gridTechs.map((tech, idx) => (
              <div key={idx} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  {tech.logo ? (
                    <img src={tech.logo} alt={tech.name} style={{ height: '32px', width: '32px', objectFit: 'contain' }} />
                  ) : (
                    <div style={{ color: 'var(--color-primary)' }}>
                      <tech.icon size={32} />
                    </div>
                  )}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--deep-blue)', fontWeight: 'bold', margin: 0 }}>
                  {tech.name}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Row 4: DeepSeek API (Full Width Card) */}
          <div className="card" style={{ padding: '2rem', marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <img src={deepseekLogo} alt="DeepSeek" style={{ height: '32px', width: '32px', objectFit: 'contain' }} />
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--deep-blue)', fontWeight: 'bold', margin: 0 }}>
              DeepSeek API
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
              Đóng vai trò cốt lõi đẩy sâu tiến trình học tiếng Trung và dịch thuật thông minh, cung cấp phản hồi ngữ cảnh theo thời gian thực.
            </p>
          </div>

          {/* Row 5: Git + GitHub (Full Width Card) */}
          <div className="card" style={{ padding: '2rem', marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
            <div style={{ color: 'var(--color-primary)' }}>
              <Github size={32} />
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--deep-blue)', fontWeight: 'bold', margin: 0 }}>
              Git + GitHub
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
              Quy trình làm việc chuyên nghiệp, kiểm soát phiên bản chặt chẽ và đảm bảo chất lượng mã nguồn liên tục.
            </p>
          </div>
        </section>

        {/* ==========================================
           SECTION 03: SYSTEM ARCHITECTURE CAROUSEL
           ========================================== */}
        <section style={{ padding: '4rem 0', borderTop: '1px solid var(--color-border)' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--deep-blue)', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Kiến trúc hệ thống
            </h2>
          </div>

          {/* Horizontal architecture carousel containing screen.png */}
          <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto', paddingBottom: '1.5rem', scrollbarWidth: 'thin' }}>
            {[1, 2].map((idx) => (
              <div key={idx} style={{ 
                flex: '0 0 450px', 
                backgroundColor: 'var(--color-bg-card)', 
                border: '1px solid var(--color-border)', 
                borderRadius: 'var(--radius-lg)', 
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <img src={architectureImg} alt={`Architecture flow ${idx}`} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
              </div>
            ))}
          </div>

          {/* 2 Columns: Security & Development Process */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginTop: '4rem', textAlign: 'left' }}>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 'bold', color: 'var(--deep-blue)', marginBottom: '1rem' }}>
                Bảo mật & Mở rộng
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                Kiến trúc bảo mật nhiều lớp với xác thực JWT, kết nối mã hóa HTTPS toàn diện. Cùng màng gateway thông minh microservices, sẵn sàng mở rộng quy mô linh hoạt theo nhu cầu sử dụng của người dùng.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 'bold', color: 'var(--deep-blue)', marginBottom: '1rem' }}>
                Quy trình phát triển
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                Áp dụng phương pháp Agile, kết hợp hệ thống CI/CD tự động hóa, đảm bảo tính cập nhật tính năng nhanh chóng, ổn định và không gián đoạn đến trải nghiệm người dùng.
              </p>
            </div>
          </div>
        </section>

        {/* ==========================================
           SECTION 04: CTA BANNER
           ========================================== */}
        <section style={{ 
          marginTop: '4rem',
          padding: '4rem 2rem',
          backgroundColor: 'var(--color-primary-light)',
          borderRadius: 'var(--radius-xl)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--deep-blue)', margin: 0 }}>
            Khám phá tiềm năng cùng Hanora
          </h2>
          <div>
            <Link 
              to="/" 
              className="btn btn-primary" 
              style={{ padding: '0.85rem 2rem', borderRadius: 'var(--radius-full)' }}
            >
              Về lại trang chủ
            </Link>
          </div>
        </section>

      </div>
    </MainLayout>
  );
}
export default TechnologyPage;
