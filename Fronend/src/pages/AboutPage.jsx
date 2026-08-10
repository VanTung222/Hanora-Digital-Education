import { 
  Sparkles, ArrowRight, EyeOff, Brain, FileText, CheckCircle2 
} from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';

// Import local assets matching the user's reference design
import heroImg from '../assets/unnamed.jpg'; // Panda Mascot next to tablet
import allInOneImg from '../assets/unnamed (9).jpg'; // Screenshot editor workspace with PDF sidebar

export function AboutPage() {
  return (
    <MainLayout>
      <div className="about-page" style={{ padding: '2rem 0', textAlign: 'center' }}>
        
        {/* ==========================================
           SECTION 01: HERO SECTION
           ========================================== */}
        <section style={{ padding: '4rem 0 3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', width: '100%', alignItems: 'center', textAlign: 'left' }}>
            
            {/* Left Column Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                padding: '0.4rem 0.85rem',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                color: 'var(--color-primary)',
                backgroundColor: 'var(--color-primary-light)',
                borderRadius: 'var(--radius-full)',
                width: 'fit-content'
              }}>
                <span style={{ fontSize: '0.7rem', fontWeight: '900' }}>&lt;</span>
                <span>AI-Powered Chinese Learning Platform</span>
              </div>

              <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: 'var(--deep-blue)', lineHeight: '1.2', margin: 0 }}>
                Hanora – Nền tảng học<br />
                tiếng Trung <span style={{ color: 'var(--color-primary)' }}>thông minh</span>
              </h1>
              
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.6', margin: 0, maxWidth: '480px' }}>
                Tích hợp sức mạnh AI để cá nhân hóa lộ trình học, tối ưu hóa việc ghi nhớ từ vựng và hỗ trợ người học chinh phục tiếng Trung từ các tài liệu thực tế.
              </p>
              
              <div style={{ marginTop: '0.5rem' }}>
                <a href="https://hanora.id.vn" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.8rem 1.5rem', borderRadius: 'var(--radius-full)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', width: 'fit-content' }}>
                  <span>Khám phá ngay</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Right Column Showcase Image */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ 
                border: '1px solid var(--color-border)', 
                borderRadius: 'var(--radius-lg)', 
                overflow: 'hidden', 
                boxShadow: 'var(--shadow-md)',
                width: '100%',
                maxWidth: '500px'
              }}>
                <img src={heroImg} alt="Hanora Platform" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
              </div>
            </div>

          </div>
        </section>

        {/* ==========================================
           SECTION 02: CHALLENGES & SOLUTIONS
           ========================================== */}
        <section style={{ padding: '4rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--deep-blue)', fontWeight: 'bold', marginBottom: '0.75rem' }}>
              Thách thức & Giải pháp
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.5' }}>
              Giải quyết những rào cản cốt lõi trong quá trình chinh phục tiếng Trung của người học hiện đại.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            
            {/* Card 1 */}
            <div className="card" style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left', backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(239, 68, 68, 0.08)', color: 'rgb(239, 68, 68)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <EyeOff size={18} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--deep-blue)', fontWeight: 'bold', margin: 0 }}>Học tập phân mảnh</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
                Người học thường phải sử dụng nhiều công cụ riêng lẻ cho từ điển, flashcard, và dịch thuật, gây gián đoạn luồng suy nghĩ.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card" style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left', backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(249, 115, 22, 0.08)', color: 'rgb(249, 115, 22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Brain size={18} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--deep-blue)', fontWeight: 'bold', margin: 0 }}>Ghi nhớ kém hiệu quả</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
                Phương pháp học vẹt truyền thống khiến từ vựng nhanh quên, thiếu ngữ cảnh áp dụng thực tế.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card" style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left', backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(236, 72, 153, 0.08)', color: 'rgb(236, 72, 153)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FileText size={18} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--deep-blue)', fontWeight: 'bold', margin: 0 }}>Tài liệu không thực tế</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
                Giáo trình cứng nhắc, khó tiếp cận và học trực tiếp từ các tài liệu, bài báo chuyên ngành tiếng Trung.
              </p>
            </div>

          </div>
        </section>

        {/* ==========================================
           SECTION 03: ALL-IN-ONE ECOSYSTEM
           ========================================== */}
        <section style={{ padding: '4rem 0' }}>
          <div style={{ 
            backgroundColor: 'var(--color-bg-card)', 
            border: '1px solid var(--color-border)', 
            borderRadius: 'var(--radius-xl)', 
            padding: '3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            textAlign: 'left',
            boxShadow: 'var(--shadow-sm)'
          }}>
            {/* Left side */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{
                padding: '0.35rem 0.75rem',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                color: 'var(--color-primary)',
                backgroundColor: 'var(--color-primary-light)',
                borderRadius: 'var(--radius-full)',
                width: 'fit-content'
              }}>
                Giải pháp Hanora
              </div>
              
              <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', color: 'var(--deep-blue)', margin: 0 }}>
                Hệ sinh thái All-in-One
              </h2>
              
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
                Hanora kết hợp không gian làm việc tài liệu, quản lý từ vựng thông minh, hệ thống ôn tập Flashcard (Spaced Repetition) và Trợ lý AI DeepSeek vào một nền tảng duy nhất, liền mạch.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Không gian làm việc tích hợp dịch thuật AI',
                  'Trích xuất và quản lý từ vựng tự động',
                  'Ôn tập cá nhân hóa với thuật toán thông minh'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--deep-blue)', fontWeight: '500' }}>
                    <div style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center' }}>
                      <CheckCircle2 size={18} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side screenshot */}
            <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img src={allInOneImg} alt="Workspace" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
            </div>
          </div>
        </section>

        {/* ==========================================
           SECTION 04: QUOTE BANNER
           ========================================== */}
        <section style={{ 
          margin: '3rem 0',
          padding: '5rem 2rem',
          backgroundColor: '#1d4ed8', 
          backgroundImage: 'linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%)',
          borderRadius: 'var(--radius-xl)',
          color: 'var(--white)',
          textAlign: 'center',
          position: 'relative',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div style={{ fontSize: '5rem', lineHeight: '1', fontFamily: 'serif', color: 'rgba(255, 255, 255, 0.2)', marginBottom: '0.5rem' }}>“</div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', maxWidth: '800px', margin: '0 auto', lineHeight: '1.4', color: 'var(--white)' }}>
            Biến việc học tiếng Trung thành một hành trình chủ động, cá nhân hóa và hiệu quả.
          </h2>
        </section>

      </div>
    </MainLayout>
  );
}
export default AboutPage;
