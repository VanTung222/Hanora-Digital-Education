import { ArrowRight } from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';

// Import local assets matching the user's reference design
import heroIllustration from '../assets/hero.png'; // 3D isometric icon
import showcaseVocab from '../assets/unnamed (1).jpg';
import showcaseFlashcard from '../assets/unnamed (2).jpg';
import showcaseTranslate from '../assets/unnamed (3).jpg';
import showcaseChat from '../assets/unnamed (4).jpg';
import showcasePronounce from '../assets/unnamed (5).jpg';
import showcaseSRS from '../assets/unnamed (6).jpg';
import showcaseDashboard from '../assets/unnamed (7).jpg';
import showcaseLeaderboard from '../assets/unnamed (8).jpg';
import showcaseStreak from '../assets/StreakImage.png';
import showcaseResponsive from '../assets/unnamed (10).jpg';

export function SolutionsPage() {
  const showcases = [
    {
      title: 'Quản lý từ vựng thông minh',
      desc: 'Tra từ điển trực quan, lưu vào bộ nhớ để ôn luyện mỗi ngày. Gợi ý từ vựng phù hợp với năng lực học tập của bạn.',
      image: showcaseVocab
    },
    {
      title: 'Hệ thống Flashcard cao cấp',
      desc: 'Học tập hiệu quả với 10+ chế độ Flashcard nâng cao: học phát âm, kiểm tra ngữ nghĩa, viết lại từ, ghép cặp...',
      image: showcaseFlashcard
    },
    {
      title: 'Dịch thuật & Học từ tài liệu',
      desc: 'Mở tài liệu đọc PDF, dịch câu từ, chọn đoạn văn và nhận giải nghĩa tức thì từ trợ lý AI thông minh.',
      image: showcaseTranslate
    },
    {
      title: 'Trợ lý AI hỗ trợ học tập',
      desc: 'Giải quyết mọi thắc mắc 24/7. Hướng dẫn phát âm, sửa lỗi ngữ pháp, gợi ý câu mẫu.',
      image: showcaseChat
    },
    {
      title: 'Luyện phát âm & Phản hồi',
      desc: 'Ghi âm giọng nói của bạn, nhận phản hồi ngay lập tức từ AI để chỉnh sửa phát âm Hán ngữ chuẩn xác.',
      image: showcasePronounce
    },
    {
      title: 'Thuật toán SRS hiệu quả',
      desc: 'Lên lịch nhắc nhở ôn tập tối ưu dựa trên đường cong quên của não bộ, giúp ghi nhớ lâu bền hơn gấp 5 lần.',
      image: showcaseSRS
    },
    {
      title: 'Quản lý tiến độ bằng dữ liệu',
      desc: 'Theo dõi quá trình học tập, biểu đồ tăng trưởng từ vựng, thời gian tự học thực tế.',
      image: showcaseDashboard
    },
    {
      title: 'Bảng xếp hạng cộng đồng',
      desc: 'Thách thức học tập cùng cộng đồng người học khác trên bảng xếp hạng thế giới trực tuyến.',
      image: showcaseLeaderboard
    },
    {
      title: 'Thiết lập & Quản lý Mục tiêu',
      desc: 'Thiết lập mục tiêu ngày, học đều đặn để duy trì chuỗi Streak và đạt thành tựu học tập.',
      image: showcaseStreak
    },
    {
      title: 'Học mọi lúc, mọi nơi',
      desc: 'Trải nghiệm học tập mượt mà và đồng bộ trên tất cả thiết bị máy tính, máy tính bảng và điện thoại.',
      image: showcaseResponsive
    }
  ];

  return (
    <MainLayout>
      <div className="solutions-page" style={{ paddingBottom: '4rem' }}>
        
        {/* ==========================================
           SECTION 01: HERO SECTION
           ========================================== */}
        <section style={{ padding: '5rem 0 4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', width: '100%', alignItems: 'center', textAlign: 'left' }}>
            
            {/* Left Column Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <h1 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--deep-blue)', lineHeight: '1.2', margin: 0 }}>
                Giải pháp học<br />
                tiếng Trung toàn<br />
                diện với Hanora
              </h1>
              
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.6', margin: 0, maxWidth: '480px' }}>
                Sự kết hợp hoàn hảo giữa học tập đọc hiểu, ghi nhớ từ vựng và sự trợ giúp của AI.
              </p>
            </div>

            {/* Right Column 3D Mockup Icon */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img 
                src={heroIllustration} 
                alt="Hanora Features Isometric" 
                className="float-animation"
                style={{ width: '220px', height: 'auto', display: 'block', objectFit: 'contain' }} 
              />
            </div>

          </div>
        </section>

        {/* ==========================================
           SECTION 02: ALTERNATING FEATURES LIST
           ========================================== */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem', padding: '2rem 0' }}>
          {showcases.map((show, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <section key={idx} style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                gap: '4rem', 
                alignItems: 'center',
                textAlign: 'left'
              }}>
                {/* Text column (Alternates position) */}
                <div style={{ order: isEven ? 0 : 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--deep-blue)', margin: 0 }}>
                    {show.title}
                  </h2>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.6', margin: 0 }}>
                    {show.desc}
                  </p>
                </div>

                {/* Screenshot Frame column (Alternates position) */}
                <div style={{ order: isEven ? 1 : 0 }}>
                  <div className="screenshot-frame" style={{ boxShadow: 'var(--shadow-lg)' }}>
                    <div className="screenshot-bar">
                      <div className="screenshot-dot" style={{ backgroundColor: '#ef4444' }}></div>
                      <div className="screenshot-dot" style={{ backgroundColor: '#eab308' }}></div>
                      <div className="screenshot-dot" style={{ backgroundColor: '#22c55e' }}></div>
                    </div>
                    <img 
                      src={show.image} 
                      alt={show.title} 
                      style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
                    />
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* ==========================================
           SECTION 03: CTA BANNER
           ========================================== */}
        <section style={{ 
          marginTop: '6rem',
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
            Sẵn sàng nâng tầm kỹ năng cùng Hanora?
          </h2>
          <div>
            <a 
              href="https://hanora.id.vn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary" 
              style={{ padding: '0.85rem 2rem', borderRadius: 'var(--radius-full)' }}
            >
              Bắt đầu học ngay
            </a>
          </div>
        </section>

      </div>
    </MainLayout>
  );
}
export default SolutionsPage;
