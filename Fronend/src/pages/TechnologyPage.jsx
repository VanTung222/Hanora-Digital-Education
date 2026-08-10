import { MainLayout } from '../components/layout/MainLayout';
import { Cpu, Server, Database, Brain, Eye, Cloud, GitBranch } from 'lucide-react';

export function TechnologyPage() {
  const stack = [
    {
      name: 'ReactJS',
      category: 'Frontend Platform',
      icon: Cpu,
      desc: 'Nền tảng xây dựng giao diện người dùng mượt mà, áp dụng kỹ thuật render ảo hóa giúp hiển thị tài liệu PDF hàng ngàn dòng mà không giật lag.'
    },
    {
      name: '.NET 8 / C#',
      category: 'RESTful API Backend',
      icon: Server,
      desc: 'Hệ thống Gateway API mạnh mẽ, có tính năng phân luồng không chặn (non-blocking) và bảo mật dữ liệu người dùng tuyệt đối.'
    },
    {
      name: 'PostgreSQL',
      category: 'Relational Database',
      icon: Database,
      desc: 'Hệ quản trị cơ sở dữ liệu quan hệ mạnh mẽ, lưu trữ từ vựng, tài liệu, và tiến trình học tập một cách nhất quán, tối ưu hóa truy vấn.'
    },
    {
      name: 'DeepSeek API',
      category: 'AI Assistant Core',
      icon: Brain,
      desc: 'Mô hình ngôn ngữ lớn (LLM) hỗ trợ dịch thuật chính xác, bóc tách cấu trúc ngữ pháp phức tạp và tương tác đối thoại giải đáp thắc mắc.'
    },
    {
      name: 'Azure Computer Vision',
      category: 'OCR / Image Processing',
      icon: Eye,
      desc: 'Nhận diện ký tự quang học (OCR) thông minh để bóc tách chữ Hán từ hình ảnh hoặc tài liệu quét PDF không có dạng text.'
    },
    {
      name: 'AWS S3',
      category: 'Cloud File Storage',
      icon: Cloud,
      desc: 'Lưu trữ tài liệu học tập, sách, file âm thanh phát âm và hình ảnh của người dùng trên nền tảng đám mây an toàn, khả năng mở rộng cao.'
    },
    {
      name: 'Git / GitHub',
      category: 'Version Control & CI/CD',
      icon: GitBranch,
      desc: 'Hệ thống quản lý phiên bản mã nguồn chuyên nghiệp, tự động hóa quy trình deploy ứng dụng lên môi trường production.'
    }
  ];

  return (
    <MainLayout>
      <div className="technology-page" style={{ padding: '2rem 0', textAlign: 'left' }}>
        
        {/* Hero Section */}
        <section style={{ textAlign: 'center', padding: '4rem 1.5rem', marginBottom: '4rem', backgroundColor: 'var(--color-primary-light)', borderRadius: 'var(--radius-xl)' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '2px' }}>Công nghệ</span>
          <h1 style={{ fontSize: '3rem', marginTop: '0.5rem', marginBottom: '1rem', color: 'var(--deep-blue)' }}>Technology Behind Hanora</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Tìm hiểu bộ công nghệ hiện đại và kiến trúc hệ thống bền vững giúp Hanora vận hành ổn định và bảo mật.
          </p>
        </section>

        {/* Detailed Stack Grid */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--deep-blue)', marginBottom: '2.5rem', textAlign: 'center' }}>Công nghệ tích hợp</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {stack.map((item, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ 
                    width: '3rem', 
                    height: '3rem', 
                    borderRadius: 'var(--radius-md)', 
                    backgroundColor: 'var(--color-primary-light)', 
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--deep-blue)', margin: 0, fontWeight: 'bold' }}>{item.name}</h3>
                    <p style={{ color: 'var(--color-primary)', fontSize: '0.8rem', fontWeight: 'bold', margin: 0, textTransform: 'uppercase' }}>{item.category}</p>
                  </div>
                </div>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Platform Architecture Diagram */}
        <section style={{ marginBottom: '5rem', borderTop: '1px solid var(--color-border)', paddingTop: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2rem', color: 'var(--deep-blue)', marginBottom: '1.25rem' }}>Kiến trúc Hệ thống (System Architecture)</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '1rem' }}>
                Mô hình kiến trúc 3 lớp (3-tier architecture) tiêu chuẩn giúp tách biệt rõ ràng trách nhiệm hiển thị (Frontend), xử lý nghiệp vụ (Backend) và lưu trữ dữ liệu (Database).
              </p>
            </div>
            
            <div style={{ 
              backgroundColor: 'var(--deep-blue)', 
              color: '#94A3B8', 
              fontFamily: 'monospace', 
              padding: '2.5rem', 
              borderRadius: 'var(--radius-lg)', 
              boxShadow: 'var(--shadow-premium)',
              fontSize: '0.85rem',
              lineHeight: '1.6',
              overflowX: 'auto'
            }}>
              <div style={{ color: 'var(--primary-blue)', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>
                HANORA PLATFORM ARCHITECTURE DIAGRAM
              </div>
              <pre style={{ margin: 0 }}>{`              +-----------------------+
              |    ReactJS Client     |
              +-----------+-----------+
                          | (HTTPS / JSON API)
                          v
              +-----------------------+
              |    .NET 8 Gateway     |
              +-----------+-----------+
                          |
             +------------+------------+
             |            |            |
             v            v            v
      +------------+ +--------+ +-------------+
      | PostgreSQL | |DeepSeek| |Azure Vision |
      +------------+ +--------+ +------+------+
                                       |
                                       v
                                   +---+----+
                                   | AWS S3 |
                                   +--------+`}</pre>
            </div>
          </div>
        </section>

      </div>
    </MainLayout>
  );
}
export default TechnologyPage;
