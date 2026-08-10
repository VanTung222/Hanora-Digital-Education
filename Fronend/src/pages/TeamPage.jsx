import { useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { Users, Github, Linkedin, Mail, CheckCircle, X } from 'lucide-react';

export function TeamPage() {
  const [selectedMember, setSelectedMember] = useState(null);

  const team = [
    {
      name: 'Nguyễn Văn A',
      role: 'Frontend Developer',
      image: '👤',
      skills: 'ReactJS, JavaScript, Tailwind CSS, Vite, HTML5/CSS3',
      contributions: 'Xây dựng cấu trúc phần mềm client, thiết lập hệ thống định tuyến (Routing), thiết kế giao diện Corporate và Platform tương tác.',
      github: 'https://github.com/a-frontend',
      linkedin: 'https://linkedin.com/in/a-frontend'
    },
    {
      name: 'Trần Thị B',
      role: 'Backend Developer',
      image: '👤',
      skills: '.NET 8, C#, EF Core, PostgreSQL, Web API, Docker',
      contributions: 'Thiết kế cơ sở dữ liệu quan hệ, xây dựng hệ thống API dịch thuật và quản lý tiến trình học tập của học viên, tối ưu hóa câu lệnh SQL.',
      github: 'https://github.com/b-backend',
      linkedin: 'https://linkedin.com/in/b-backend'
    },
    {
      name: 'Phạm Hồng C',
      role: 'UI/UX Designer',
      image: '👤',
      skills: 'Figma, Adobe XD, Design System, Prototyping',
      contributions: 'Nghiên cứu hành vi người học, vẽ wireframes, thiết kế giao diện web & mobile chi tiết và xây dựng bộ tài liệu hướng dẫn thương hiệu.',
      github: 'https://github.com/c-designer',
      linkedin: 'https://linkedin.com/in/c-designer'
    },
    {
      name: 'Lê Hoàng D',
      role: 'AI / Integration Specialist',
      image: '👤',
      skills: 'DeepSeek LLM, Prompt Engineering, Azure Cognitive Services',
      contributions: 'Tích hợp mô hình dịch thuật AI và xử lý OCR bằng Azure Vision, tối ưu hóa các prompt giải đáp ngữ pháp cấu trúc câu.',
      github: 'https://github.com/d-ai',
      linkedin: 'https://linkedin.com/in/d-ai'
    },
    {
      name: 'Vũ Minh E',
      role: 'Product Owner',
      image: '👤',
      skills: 'Agile/Scrum, Product Management, Market Research',
      contributions: 'Lập kế hoạch lộ trình phát triển sản phẩm, định vị thị trường mục tiêu và điều phối các thành viên hoàn thành đúng timeline.',
      github: 'https://github.com/e-po',
      linkedin: 'https://linkedin.com/in/e-po'
    },
    {
      name: 'Hoàng Anh F',
      role: 'QA / DevOps Engineer',
      image: '👤',
      skills: 'Unit Testing, CI/CD, AWS Deployment, Security Audits',
      contributions: 'Thiết lập quy trình CI/CD tự động, deploy hạ tầng máy chủ trên đám mây AWS, kiểm thử hệ thống API và bảo mật mã nguồn.',
      github: 'https://github.com/f-qa',
      linkedin: 'https://linkedin.com/in/f-qa'
    }
  ];

  return (
    <MainLayout>
      <div className="team-page" style={{ padding: '2rem 0', textAlign: 'left', position: 'relative' }}>
        
        {/* Hero Section */}
        <section style={{ textAlign: 'center', padding: '4rem 1.5rem', marginBottom: '4rem', backgroundColor: 'var(--color-primary-light)', borderRadius: 'var(--radius-xl)' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '2px' }}>Đội ngũ phát triển</span>
          <h1 style={{ fontSize: '3rem', marginTop: '0.5rem', marginBottom: '1rem', color: 'var(--deep-blue)' }}>People Behind Hanora</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Lực lượng nòng cốt kết hợp chuyên môn cao, chung định hướng xây dựng giải pháp đào tạo tiếng Trung số đột phá.
          </p>
        </section>

        {/* Team Grid */}
        <section style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(285px, 1fr))', gap: '2rem' }}>
            {team.map((member, idx) => (
              <div 
                key={idx} 
                className="card" 
                style={{ 
                  padding: '2.5rem 2rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  textAlign: 'center',
                  gap: '1.25rem',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedMember(member)}
              >
                <div style={{ 
                  width: '5rem', 
                  height: '5rem', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--color-primary-light)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '2rem',
                  border: '1px solid var(--color-border)'
                }}>
                  {member.image}
                </div>
                
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--deep-blue)', fontWeight: 'bold', margin: '0 0 0.25rem' }}>{member.name}</h3>
                  <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 'bold', margin: 0 }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </MainLayout>
  );
}
export default TeamPage;
