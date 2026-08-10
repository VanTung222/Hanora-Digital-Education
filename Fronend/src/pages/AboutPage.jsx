import { Link } from 'react-router-dom';
import { Eye, Shield, Compass, Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';

export function AboutPage() {
  return (
    <MainLayout>
      <div className="about-page" style={{ padding: '2rem 0', textAlign: 'left' }}>
        
        {/* Hero Section */}
        <section style={{ textAlign: 'center', padding: '4rem 1.5rem', marginBottom: '3rem', backgroundColor: 'var(--color-primary-light)', borderRadius: 'var(--radius-xl)' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '2px' }}>Về chúng tôi</span>
          <h1 style={{ fontSize: '3rem', marginTop: '0.5rem', marginBottom: '1rem', color: 'var(--deep-blue)' }}>Câu chuyện về Hanora</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Chúng tôi định hình lại phương pháp tiếp cận ngoại ngữ bằng cách đưa công nghệ trí tuệ nhân tạo và khoa học trí nhớ vào đời sống hàng ngày của người học.
          </p>
        </section>

        {/* Section: Hanora là gì? */}
        <section style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--deep-blue)', marginBottom: '1.5rem' }}>Hanora là gì?</h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                Hanora là một hệ sinh thái học tiếng Trung toàn diện, kết hợp chặt chẽ giữa học đọc tài liệu thực tế và thuật toán ôn tập thông minh. 
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                Thay vì ghi nhớ thụ động các bảng từ vựng rời rạc, Hanora cung cấp môi trường làm việc thông minh hỗ trợ người dùng học thông qua việc dịch văn bản, đọc tài liệu chuyên ngành, và nhờ AI hỗ trợ giải thích trực quan theo ngữ cảnh.
              </p>
            </div>
            <div style={{ 
              backgroundColor: 'var(--white)', 
              border: '1px solid var(--color-border)', 
              borderRadius: 'var(--radius-lg)', 
              padding: '2.5rem',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
                <BookOpen size={36} />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--deep-blue)', marginBottom: '0.75rem' }}>Nền tảng Giáo dục Số</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Hanora được đề cử và phát triển như một dự án thương mại công nghệ giáo dục, mang lại giải pháp hỗ trợ thiết thực cho sinh viên các khối ngành ngoại ngữ và người học tiếng Trung thương mại trên toàn quốc.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Tầm nhìn & Sứ mệnh */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', marginBottom: '5rem' }}>
          
          <div className="card-premium" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ width: '3rem', height: '3rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Eye size={24} />
            </div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--deep-blue)' }}>Tầm nhìn</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
              Xây dựng một nền tảng học tiếng Trung thông minh, cá nhân hóa và dễ tiếp cận nhất. Trở thành trợ lý số đồng hành đáng tin cậy của hàng triệu người học ngôn ngữ trên hành trình chinh phục tri thức và thăng tiến sự nghiệp.
            </p>
          </div>

          <div className="card-premium" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ width: '3rem', height: '3rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-secondary-light)', color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Compass size={24} />
            </div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--deep-blue)' }}>Sứ mệnh</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
              Giúp người học biến việc học tiếng Trung thành một thói quen có hệ thống và hiệu quả cao nhất. Chúng tôi cam kết ứng dụng những nghiên cứu khoa học trí nhớ tiên tiến nhất và AI để giúp người học ghi nhớ lâu bền hơn với chi phí thời gian tối thiểu.
            </p>
          </div>

        </section>

        {/* Section: Giá trị cốt lõi */}
        <section style={{ marginBottom: '5rem', borderTop: '1px solid var(--color-border)', paddingTop: '4rem' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--deep-blue)', marginBottom: '3rem', textAlign: 'center' }}>Giá trị cốt lõi</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            
            <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>01. Đổi mới công nghệ</span>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                Liên tục cập nhật và tích hợp các công nghệ AI hàng đầu (như DeepSeek, Azure CV) để tăng cường tối đa tính tương tác và chất lượng dịch thuật.
              </p>
            </div>

            <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>02. Giá trị thực học</span>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                Tập trung cải thiện kỹ năng đọc dịch và phát âm thực tế để phục vụ công việc và học thuật chuyên sâu thay vì học mẹo thi cử đối phó.
              </p>
            </div>

            <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>03. Tối ưu hóa khoa học</span>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                Mọi quy trình ôn tập, theo dõi tiến độ của học viên đều tuân thủ chặt chẽ các nghiên cứu khoa học thần kinh về chu kỳ quên của não bộ.
              </p>
            </div>

          </div>
        </section>

      </div>
    </MainLayout>
  );
}
export default AboutPage;
