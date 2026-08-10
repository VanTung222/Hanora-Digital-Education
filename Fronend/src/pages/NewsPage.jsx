import { MainLayout } from '../components/layout/MainLayout';
import { Calendar, ChevronRight, MessageSquare } from 'lucide-react';

export function NewsPage() {
  const featured = {
    date: '10/08/2026',
    category: 'Giải thưởng',
    title: 'FShark 2026 — Hanora xuất sắc đoạt Giải Ba chung cuộc',
    desc: 'Vượt qua nhiều ý tưởng công nghệ tiềm năng, nền tảng hỗ trợ học tiếng Trung Hanora đã dành được Giải Ba tại vòng chung kết cuộc thi FShark tổ chức tại Đại học FPT Đà Nẵng. Sự kiện đánh dấu sự công nhận từ hội đồng chuyên môn cho những sáng tạo kỹ thuật của nhóm.',
    image: '[Hình ảnh FShark Award Ceremony]'
  };

  const newsList = [
    {
      date: '08/08/2026',
      category: 'Công nghệ',
      title: 'Hoàn thiện tích hợp DeepSeek AI Assistant',
      desc: 'Hệ thống trợ lý học tập đã hoàn tất tích hợp thành công mô hình ngôn ngữ lớn DeepSeek, giúp cải thiện độ chính xác phân tích câu tiếng Trung lên 30%.'
    },
    {
      date: '01/08/2026',
      category: 'Sản phẩm',
      title: 'Ra mắt tính năng Translation Workspace phiên bản Beta',
      desc: 'Mở đợt thử nghiệm giới hạn tính năng tương tác dịch thuật tài liệu PDF trực tiếp trên trình duyệt, nhận phản hồi tích cực từ 92% học viên thử nghiệm.'
    }
  ];

  return (
    <MainLayout>
      <div className="news-page" style={{ padding: '2rem 0', textAlign: 'left' }}>
        
        {/* Hero Section */}
        <section style={{ textAlign: 'center', padding: '4rem 1.5rem', marginBottom: '4rem', backgroundColor: 'var(--color-primary-light)', borderRadius: 'var(--radius-xl)' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '2px' }}>Tin tức & Hoạt động</span>
          <h1 style={{ fontSize: '3rem', marginTop: '0.5rem', marginBottom: '1rem', color: 'var(--deep-blue)' }}>Bảng tin Hanora</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Theo dõi những tin tức nổi bật, hành trình nghiên cứu công nghệ, và các hoạt động cộng đồng của dự án Hanora.
          </p>
        </section>

        {/* Featured News Section */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--deep-blue)', marginBottom: '2rem' }}>Tin tức nổi bật</h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '3rem', 
            alignItems: 'center' 
          }}>
            <div style={{ 
              backgroundColor: 'var(--color-primary-light)', 
              borderRadius: 'var(--radius-lg)', 
              height: '320px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ color: 'var(--color-text-muted)', fontSize: '1rem', fontWeight: 'bold' }}>
                {featured.image}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 'bold', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
                  {featured.category}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Calendar size={14} />
                  {featured.date}
                </span>
              </div>

              <h3 style={{ fontSize: '1.8rem', color: 'var(--deep-blue)', fontWeight: '800', lineHeight: '1.3' }}>
                {featured.title}
              </h3>

              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
                {featured.desc}
              </p>
            </div>
          </div>
        </section>

      </div>
    </MainLayout>
  );
}
export default NewsPage;
