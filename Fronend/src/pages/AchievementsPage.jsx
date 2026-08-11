import { MainLayout } from '../components/layout/MainLayout';
import { Award, Trophy, Compass, Star, Calendar, Flag } from 'lucide-react';

export function AchievementsPage() {
  const milestoneTimeline = [
    {
      quarter: 'Tháng 2 / 2026',
      title: 'Khởi động ý tưởng & Nghiên cứu',
      desc: 'Phát hiện những khó khăn của người học ngoại ngữ trong việc duy trì thói quen học từ vựng. Nhóm quyết định phát triển giải pháp hỗ trợ học tiếng Trung dựa trên phương pháp khoa học SRS.'
    },
    {
      quarter: 'Tháng 4 / 2026',
      title: 'Phát triển Alpha & Tích hợp AI',
      desc: 'Lập trình cấu trúc nền tảng React và Core Backend API. Tích hợp mô hình dịch thuật thông minh và công cụ bóc tách chữ Hán qua OCR.'
    },
    {
      quarter: 'Tháng 6 / 2026',
      title: 'Hoàn thiện Hệ thống & Beta Test',
      desc: 'Hoàn tất các tính năng theo dõi tiến độ, streaks, XP, và lập lịch ôn tập SRS. Mở đợt thử nghiệm nội bộ với 50 học viên FPT University.'
    },
    {
      quarter: 'Tháng 8 / 2026',
      title: '🏆 Đạt giải 3 Cuộc thi FShark',
      desc: 'Tham gia vòng chung kết cuộc thi FShark 2026 tổ chức bởi Trường Đại học FPT Đà Nẵng. Dự án xuất sắc đoạt Giải Ba toàn quốc nhờ tính ứng dụng thực tiễn cao.'
    }
  ];

  return (
    <MainLayout>
      <div className="container" style={{ padding: '2rem 0', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Hero Section */}
        <section style={{ textAlign: 'center', padding: '4rem 1.5rem', marginBottom: '4rem', backgroundColor: 'var(--color-primary-light)', borderRadius: 'var(--radius-xl)' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '2px' }}>Thành tựu & Cột mốc</span>
          <h1 style={{ fontSize: '3rem', marginTop: '0.5rem', marginBottom: '1rem', color: 'var(--deep-blue)' }}>Building. Learning. Achieving.</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Nhìn lại hành trình không ngừng nỗ lực, sáng tạo công nghệ và những quả ngọt đã gặt hái được của đội ngũ Hanora.
          </p>
        </section>

        {/* Highlight Award: FShark Giải 3 */}
        <section style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                alignSelf: 'flex-start',
                padding: '0.5rem 1.25rem', 
                borderRadius: 'var(--radius-full)', 
                backgroundColor: 'var(--color-success-light)', 
                color: 'var(--color-success)',
                fontSize: '0.85rem',
                fontWeight: 'bold'
              }}>
                <Trophy size={16} />
                <span>Thành tích FShark 2026</span>
              </div>
              
              <h2 style={{ fontSize: '2.5rem', color: 'var(--deep-blue)', fontWeight: '900', lineHeight: 1.2 }}>
                Giải Ba cuộc thi FShark Đại học FPT Đà Nẵng
              </h2>
              
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                Cuộc thi **FShark** là bệ phóng khởi nghiệp công nghệ uy tín dành cho sinh viên tại phân hiệu Đà Nẵng. Vượt qua nhiều vòng kiểm duyệt khắt khe từ các chuyên gia đầu ngành, Hanora đã giành **Giải Ba** chung cuộc.
              </p>
            </div>

            {/* Award badge mockup container */}
            <div style={{ 
              backgroundColor: 'var(--white)', 
              border: '1px solid var(--color-border)', 
              borderRadius: 'var(--radius-lg)', 
              padding: '3rem',
              textAlign: 'center',
              boxShadow: 'var(--shadow-premium)'
            }}>
              <div style={{ 
                width: '6rem', 
                height: '6rem', 
                borderRadius: '50%', 
                backgroundColor: 'var(--color-success-light)', 
                color: 'var(--color-success)', 
                display: 'inline-flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '3rem',
                marginBottom: '1.5rem'
              }}>
                🏆
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--deep-blue)', marginBottom: '0.5rem', fontWeight: '800' }}>GIẢI BA CHUNG CUỘC</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                FShark Technology Competition 2026
              </p>
            </div>

          </div>
        </section>

      </div>
    </MainLayout>
  );
}
export default AchievementsPage;
