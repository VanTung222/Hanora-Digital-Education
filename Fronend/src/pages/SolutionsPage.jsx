import { MainLayout } from '../components/layout/MainLayout';
import { 
  BookOpen, Layers, Cpu, FileText, Activity, Star, Mic, ArrowRight 
} from 'lucide-react';

export function SolutionsPage() {
  const solutions = [
    {
      id: '01',
      title: 'Vocabulary Workspace (Quản lý Từ vựng)',
      desc: 'Hệ thống quản lý từ vựng cá nhân trực quan. Giúp người học lưu trữ từ vựng mới dễ dàng khi đang đọc tài liệu, phân nhóm từ theo cấp độ HSK từ 1 đến 6.',
      icon: BookOpen,
      highlights: [
        'Tự động tra nghĩa và cung cấp Pinyin chuẩn xác',
        'Phân loại từ vựng thông minh theo nhãn HSK',
        'Lọc và tìm kiếm nhanh chóng trong kho từ vựng cá nhân',
        'Theo dõi trạng thái học tập của từng từ (Mới học, Đang học, Đã thuộc)'
      ]
    },
    {
      id: '02',
      title: 'Smart Flashcard (Thẻ Ghi Nhớ Thông Minh)',
      desc: 'Học từ vựng trực quan thông qua flashcard 2 mặt (Mặt trước chứa chữ Hán, mặt sau chứa Pinyin, loại từ, nghĩa tiếng Việt và câu ví dụ cụ thể).',
      icon: Layers,
      highlights: [
        'Hỗ trợ lật thẻ mượt mà giúp ghi nhớ chủ động',
        'Tích hợp phát âm audio chuẩn bản xứ cho từng thẻ',
        'Tự đánh giá mức độ ghi nhớ của bản thân (Dễ, Trung bình, Khó)',
        'Hệ thống tự ghi nhận để cập nhật chu kỳ ôn tập tiếp theo'
      ]
    },
    {
      id: '03',
      title: 'AI Assistant (Trợ Lý Học Tập Trí Tuệ Nhân Tạo)',
      desc: 'Sử dụng công nghệ mô hình ngôn ngữ lớn (LLM) để đồng hành cùng người học, giải đáp mọi cấu trúc ngữ pháp khó nhằn và tạo hội thoại mẫu.',
      icon: Cpu,
      highlights: [
        'Phân tích ngữ pháp chuyên sâu từng cấu trúc câu phức tạp',
        'Cung cấp ví dụ thực tế giúp hiểu rõ ngữ cảnh của từ',
        'Tự động tạo câu hỏi trắc nghiệm/bài tập dựa trên kho từ của bạn',
        'Giải đáp thắc mắc dịch thuật 24/7 tức thì dưới 1 giây'
      ]
    },
    {
      id: '04',
      title: 'Translation Workspace (Không Gian Đọc & Dịch Thuật)',
      desc: 'Khu vực làm việc chuyên nghiệp cho phép người dùng tải lên các file tài liệu dạng PDF hoặc văn bản thô. Tương tác trực tiếp bằng cách click vào chữ Hán.',
      icon: FileText,
      highlights: [
        'Tải lên và xử lý file PDF nhanh chóng, giữ nguyên định dạng gốc',
        'Click-to-lookup: Nhấp chuột vào bất kỳ chữ Hán nào để tra cứu từ điển ngay lập tức',
        'Đánh dấu highlight các từ vựng khó để lưu nhanh vào kho lưu trữ',
        'Hỗ trợ chế độ đọc chuyên dụng: Chế độ nền tối (Dark), nền sáng (Light), nền ấm (Warm)'
      ]
    },
    {
      id: '05',
      title: 'SRS Engine (Thuật Toán Lặp Lại Ngắt Quãng)',
      desc: 'Lập lịch ôn tập tự động dựa trên nghiên cứu khoa học thần kinh về đường cong quên lãng của Ebbinghaus.',
      icon: Activity,
      highlights: [
        'Tính toán thời điểm vàng để ôn tập lại từ vựng cũ trước khi quên',
        'Tự động giãn cách chu kỳ ôn tập đối với các từ dễ thuộc',
        'Tập trung nhắc nhở ôn tập nhiều lần đối với các từ vựng khó ghi nhớ',
        'Giảm thiểu tối đa 50% thời gian ôn từ vựng mà vẫn đạt hiệu quả gấp đôi'
      ]
    },
    {
      id: '06',
      title: 'Learning Progress (Theo Dõi Tiến Trình Học Tập)',
      desc: 'Hệ thống hóa mọi nỗ lực học tập của bạn bằng các biểu đồ thống kê trực quan sinh động.',
      icon: Activity,
      highlights: [
        'Đo lường thời gian học tập chính xác từng phút theo ngày',
        'Tích lũy điểm kinh nghiệm (XP) để nâng cấp cấp độ tài khoản',
        'Theo dõi và duy trì chuỗi ngày học liên tục (Streaks) để tạo động lực',
        'Bảng xếp hạng (Leaderboard) hàng tuần giúp thúc đẩy tinh thần học hỏi'
      ]
    },
    {
      id: '07',
      title: 'AI Pronunciation (Luyện Phát Âm Tiếng Trung)',
      desc: 'Nhận diện giọng nói và chấm điểm phát âm tiếng Trung bằng AI. Giúp phát hiện sai lệch về thanh điệu và phát âm.',
      icon: Mic,
      highlights: [
        'Chấm điểm chi tiết độ chính xác (Accuracy) và độ trôi chảy (Fluency)',
        'Chỉ rõ các âm tiết hoặc thanh điệu bị phát âm sai để sửa lại',
        'Học phát âm thông qua các câu giao tiếp thực tế và hội thoại mẫu',
        'Luyện tập không giới hạn số lần, cải thiện phản xạ tự tin hơn'
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="solutions-page" style={{ padding: '2rem 0', textAlign: 'left' }}>
        
        {/* Hero Section */}
        <section style={{ textAlign: 'center', padding: '4rem 1.5rem', marginBottom: '4rem', backgroundColor: 'var(--color-primary-light)', borderRadius: 'var(--radius-xl)' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '2px' }}>Giải pháp & Sản phẩm</span>
          <h1 style={{ fontSize: '3rem', marginTop: '0.5rem', marginBottom: '1rem', color: 'var(--deep-blue)' }}>Một nền tảng — Nhiều cách học</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Hanora cung cấp bộ công cụ toàn diện giúp bóc tách và giải quyết triệt để mọi khó khăn trên hành trình chinh phục tiếng Trung của bạn.
          </p>
        </section>

        {/* Detailed Solutions List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {solutions.map((sol, index) => (
            <section key={sol.id} style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: '3rem', 
              alignItems: 'center',
              borderBottom: index !== solutions.length - 1 ? '1px solid var(--color-border)' : 'none',
              paddingBottom: index !== solutions.length - 1 ? '4rem' : '0'
            }}>
              
              {/* Left Column: Details */}
              <div style={{ order: index % 2 === 0 ? 0 : 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--color-primary)', opacity: 0.5 }}>
                    {sol.id}
                  </span>
                  <div style={{ color: 'var(--color-primary)' }}>
                    <sol.icon size={28} />
                  </div>
                </div>
                
                <h2 style={{ fontSize: '1.75rem', color: 'var(--deep-blue)', marginBottom: '1rem', fontWeight: '800' }}>
                  {sol.title}
                </h2>
                
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', fontSize: '1rem', marginBottom: '1.5rem' }}>
                  {sol.desc}
                </p>

                <h4 style={{ fontWeight: 'bold', color: 'var(--deep-blue)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                  Đặc điểm nổi bật:
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {sol.highlights.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                      <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Screenshot Mockup */}
              <div>
                <div style={{ 
                  backgroundColor: 'var(--color-primary-light)', 
                  borderRadius: 'var(--radius-lg)', 
                  height: '300px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: 'bold', textAlign: 'center', padding: '2rem' }}>
                    [Screenshot Giao Diện {sol.title}]<br />
                    <span style={{ fontSize: '0.75rem', fontWeight: 'normal', opacity: 0.8 }}>Minh họa chức năng hoạt động thực tế trên Platform</span>
                  </div>
                </div>
              </div>

            </section>
          ))}
        </div>

      </div>
    </MainLayout>
  );
}
export default SolutionsPage;
