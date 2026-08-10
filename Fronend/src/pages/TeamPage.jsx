import { useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { Github, Linkedin, Mail, CheckCircle2, X } from 'lucide-react';

// Import whitelisted avatar images
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';
import avatar4 from '../assets/avatar4.png';
import avatar5 from '../assets/avatar5.png';
import avatar6 from '../assets/avatar6.png';

export function TeamPage() {
  const [selectedMember, setSelectedMember] = useState(null);

  const team = [
    {
      name: 'Nguyễn Văn A',
      role: 'Frontend Developer',
      image: avatar1,
      skills: ['ReactJS', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML5/CSS3'],
      contributions: 'Xây dựng cấu trúc phần mềm client, thiết lập hệ thống định tuyến (Routing), thiết kế giao diện Corporate và Platform tương tác.',
      github: 'https://github.com/a-frontend',
      linkedin: 'https://linkedin.com/in/a-frontend'
    },
    {
      name: 'Trần Thị B',
      role: 'Backend Developer',
      image: avatar2,
      skills: ['.NET 8', 'C#', 'EF Core', 'PostgreSQL', 'Web API', 'Docker'],
      contributions: 'Thiết kế cơ sở dữ liệu quan hệ, xây dựng hệ thống API dịch thuật và quản lý tiến trình học tập của học viên, tối ưu hóa câu lệnh SQL.',
      github: 'https://github.com/b-backend',
      linkedin: 'https://linkedin.com/in/b-backend'
    },
    {
      name: 'Phạm Hồng C',
      role: 'UI/UX Designer',
      image: avatar3,
      skills: ['Figma', 'Adobe XD', 'Design System', 'Prototyping'],
      contributions: 'Nghiên cứu hành vi người học, vẽ wireframes, thiết kế giao diện web & mobile chi tiết và xây dựng bộ tài liệu hướng dẫn thương hiệu.',
      github: 'https://github.com/c-designer',
      linkedin: 'https://linkedin.com/in/c-designer'
    },
    {
      name: 'Lê Hoàng D',
      role: 'AI / Integration Specialist',
      image: avatar4,
      skills: ['DeepSeek LLM', 'Prompt Engineering', 'Azure Cognitive Services'],
      contributions: 'Tích hợp mô hình dịch thuật AI và xử lý OCR bằng Azure Vision, tối ưu hóa các prompt giải đáp ngữ pháp cấu trúc câu.',
      github: 'https://github.com/d-ai',
      linkedin: 'https://linkedin.com/in/d-ai'
    },
    {
      name: 'Vũ Minh E',
      role: 'Product Owner',
      image: avatar5,
      skills: ['Agile/Scrum', 'Product Management', 'Market Research'],
      contributions: 'Lập kế hoạch lộ trình phát triển sản phẩm, định vị thị trường mục tiêu và điều phối các thành viên hoàn thành đúng timeline.',
      github: 'https://github.com/e-po',
      linkedin: 'https://linkedin.com/in/e-po'
    },
    {
      name: 'Hoàng Anh F',
      role: 'QA / DevOps Engineer',
      image: avatar6,
      skills: ['Unit Testing', 'CI/CD', 'AWS Deployment', 'Security Audits'],
      contributions: 'Thiết lập quy trình CI/CD tự động, deploy hạ tầng máy chủ trên đám mây AWS, kiểm thử hệ thống API và bảo mật mã nguồn.',
      github: 'https://github.com/f-qa',
      linkedin: 'https://linkedin.com/in/f-qa'
    }
  ];

  return (
    <MainLayout>
      <div className="team-page" style={{ paddingBottom: '4rem', textAlign: 'center', position: 'relative' }}>
        
        {/* ==========================================
           SECTION 01: HERO SECTION
           ========================================== */}
        <section style={{ padding: '5rem 0 3rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '2px' }}>Đội ngũ phát triển</span>
          <h1 style={{ fontSize: '3rem', marginTop: '0.5rem', marginBottom: '1.25rem', color: 'var(--deep-blue)', fontWeight: '900' }}>
            People Behind Hanora
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Lực lượng nòng cốt kết hợp chuyên môn cao, chung định hướng xây dựng giải pháp đào tạo tiếng Trung số đột phá.
          </p>
        </section>

        {/* ==========================================
           SECTION 02: TEAM GRID (3 Columns on Desktop, 3 on Top, 3 on Bottom)
           ========================================== */}
        <section style={{ padding: '2rem 0 4rem' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2.5rem',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            {team.map((member, idx) => (
              <div 
                key={idx} 
                className="card hover-scale" 
                style={{ 
                  padding: '3rem 2rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  textAlign: 'center',
                  gap: '1.5rem',
                  cursor: 'pointer',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: 'var(--color-bg-card)',
                  boxShadow: 'var(--shadow-sm)'
                }}
                onClick={() => setSelectedMember(member)}
              >
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                  <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                
                <div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--deep-blue)', fontWeight: 'bold', margin: '0 0 0.35rem' }}>
                    {member.name}
                  </h3>
                  <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 'bold', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
           SECTION 03: DETAILED MEMBER MODAL
           ========================================== */}
        {selectedMember && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1.5rem'
          }} onClick={() => setSelectedMember(null)}>
            
            <div style={{
              backgroundColor: 'var(--color-bg-card)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem',
              maxWidth: '500px',
              width: '100%',
              boxShadow: 'var(--shadow-premium)',
              position: 'relative',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }} onClick={(e) => e.stopPropagation()}>
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedMember(null)}
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-text-muted)',
                  cursor: 'pointer',
                  padding: '0.25rem'
                }}
              >
                <X size={20} />
              </button>

              {/* Header Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                  <img src={selectedMember.image} alt={selectedMember.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--deep-blue)', fontWeight: 'bold', margin: '0 0 0.25rem' }}>
                    {selectedMember.name}
                  </h3>
                  <p style={{ color: 'var(--color-primary)', fontSize: '0.9rem', fontWeight: 'bold', margin: 0 }}>
                    {selectedMember.role}
                  </p>
                </div>
              </div>

              {/* Skills badges */}
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--deep-blue)', marginBottom: '0.5rem' }}>
                  Kỹ năng chuyên môn
                </h4>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {selectedMember.skills.map((skill, i) => (
                    <span key={i} style={{ 
                      fontSize: '0.75rem', 
                      fontWeight: 'bold', 
                      color: 'var(--color-primary)', 
                      backgroundColor: 'var(--color-primary-light)', 
                      padding: '0.25rem 0.6rem',
                      borderRadius: 'var(--radius-sm)'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contributions */}
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--deep-blue)', marginBottom: '0.5rem' }}>
                  Đóng góp dự án
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0 }}>
                  {selectedMember.contributions}
                </p>
              </div>

              {/* Social Links */}
              <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid var(--color-border)', paddingTop: '1.25rem', marginTop: '0.5rem' }}>
                <a href={selectedMember.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }} className="hover-primary">
                  <Github size={20} />
                </a>
                <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }} className="hover-primary">
                  <Linkedin size={20} />
                </a>
              </div>

            </div>

          </div>
        )}

      </div>
    </MainLayout>
  );
}
export default TeamPage;
