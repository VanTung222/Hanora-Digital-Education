import { useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { 
  Mail, MessageSquare, ArrowRight, Send, CheckCircle2, 
  ChevronDown, ChevronUp, HelpCircle
} from 'lucide-react';

// Import local assets matching the user's reference design
import heroIllustration from '../assets/89a77990-468b-4e9e-affa-4dce029fac40-removebg-preview.png';
import facebookQr from '../assets/qr fb (2).png';
import webQr from '../assets/qr web.png';
import pandaMascot from '../assets/StreakImage-removebg-preview.png';
import projectImage from '../assets/29e2f86e-a1dd-49c5-b0f3-a703257f9de9.png';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Chọn chủ đề',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Vui lòng nhập đầy đủ thông tin bắt buộc.');
      return;
    }
    setSubmitted(true);
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const contactCards = [
    {
      title: 'Email',
      val: 'hello@hanora.vn',
      desc: 'Phản hồi trong vòng 24h',
      icon: Mail,
      color: 'rgba(22, 143, 239, 0.05)',
      isLink: true,
      link: 'mailto:hello@hanora.vn'
    },
    {
      title: 'Live chat',
      val: 'Chat ngay với chúng tôi',
      desc: 'Hỗ trợ trực tuyến\n8:00 - 21:00 hàng ngày',
      icon: MessageSquare,
      color: 'rgba(22, 143, 239, 0.05)',
      isLink: true,
      link: 'https://www.facebook.com/profile.php?id=61590345896877'
    },
    {
      title: 'Mã FB',
      isQr: true,
      qrImg: facebookQr,
      linkText: 'Facebook Hanora',
      link: 'https://www.facebook.com/profile.php?id=61590345896877'
    },
    {
      title: 'Mã Web',
      isQr: true,
      qrImg: webQr,
      linkText: 'hanora.id.vn',
      link: 'https://hanora.id.vn'
    }
  ];

  const faqs = [
    {
      q: 'Hanora có cung cấp bản dùng thử không?',
      a: 'Có! Hanora cung cấp tài khoản dùng thử miễn phí với đầy đủ các tính năng cơ bản như học từ vựng, luyện nghe và làm quen với trợ lý AI hỗ trợ trong vòng 7 ngày đầu tiên.'
    },
    {
      q: 'Thời gian triển khai hệ thống là bao lâu?',
      a: 'Nền tảng của chúng tôi chạy trực tiếp trên web và ứng dụng đám mây nên bạn có thể bắt đầu sử dụng ngay lập tức sau khi đăng ký tài khoản thành công mà không mất thời gian chờ đợi cài đặt.'
    },
    {
      q: 'Dữ liệu của tôi có được bảo mật không?',
      a: 'Chắc chắn! Hanora áp dụng các tiêu chuẩn an toàn thông tin ISO/IEC 27001 cùng cơ chế mã hóa SSL và xác thực token JWT bảo vệ thông tin cá nhân và dữ liệu học tập của bạn tuyệt đối.'
    },
    {
      q: 'Hanora có hỗ trợ tích hợp với phần mềm khác không?',
      a: 'Hệ thống hỗ trợ cổng API RESTful mở, dễ dàng kết nối và tích hợp dữ liệu với các hệ thống quản lý học tập (LMS) phổ biến của các trường học và tổ chức đối tác.'
    },
    {
      q: 'Chi phí sử dụng dịch vụ của Hanora như thế nào?',
      a: 'Chúng tôi cung cấp các gói dịch vụ linh hoạt từ cá nhân đến trường học. Vui lòng liên hệ trực tiếp qua form hoặc hotline để nhận báo giá chi tiết phù hợp nhất.'
    },
    {
      q: 'Làm thế nào để được tư vấn giải pháp phù hợp?',
      a: 'Bạn chỉ cần điền thông tin vào form liên hệ hoặc click nút "Nhận tư vấn miễn phí" ở chân trang, đội ngũ tư vấn viên của Hanora sẽ chủ động liên hệ lại hỗ trợ bạn trong vòng 24h.'
    }
  ];

  return (
    <MainLayout>
      <div className="container" style={{ paddingBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* ==========================================
           SECTION 01: HERO SECTION
           ========================================== */}
        <section style={{ padding: '4rem 0 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <style>{`
            @media (min-width: 992px) {
              .contact-hero-grid {
                grid-template-columns: 4fr 6fr !important;
              }
            }
          `}</style>
          <div className="contact-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', width: '100%', alignItems: 'center', textAlign: 'left' }}>
            
            {/* Left Column Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <span style={{ 
                  fontSize: '0.85rem', 
                  fontWeight: '800', 
                  color: 'var(--color-primary)', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1.5px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2px'
                }}>
                  KẾT NỐI CÙNG HANORA <span style={{ fontSize: '0.9rem' }}>+</span>
                </span>
                <h1 style={{ 
                  fontSize: '3rem', 
                  fontWeight: '900', 
                  color: '#0f172a', 
                  lineHeight: '1.2', 
                  margin: 0,
                  fontFamily: 'Inter, system-ui, sans-serif',
                  letterSpacing: '-1px'
                }}>
                  Bạn muốn tìm hiểu thêm về <span style={{ color: 'var(--color-primary)' }}>Hanora</span>?
                </h1>
              </div>
              
              <p style={{ 
                color: '#475569', 
                fontSize: '1.1rem', 
                lineHeight: '1.6', 
                margin: 0, 
                maxWidth: '520px',
                fontFamily: 'Inter, system-ui, sans-serif'
              }}>
                Hãy liên hệ với chúng tôi nếu bạn có câu hỏi, phản hồi hoặc muốn đồng hành cùng Hanora trên hành trình xây dựng trải nghiệm học tiếng Trung tốt hơn.
              </p>
            </div>

            {/* Right Column Showcase Image */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <div style={{ 
                width: '100%',
                maxWidth: '680px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <img 
                  src={heroIllustration} 
                  alt="Hanora Contact Mockup" 
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} 
                />
              </div>
            </div>

          </div>
        </section>

        {/* ==========================================
           SECTION 02: CONTACT INFO GRID
           ========================================== */}
        <section style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '1.25rem' 
        }}>
          {contactCards.map((card, idx) => {
            if (card.isQr) {
              return (
                <div key={idx} className="card scale-hover" style={{ 
                  padding: '1.5rem', 
                  display: 'flex', 
                  gap: '1rem',
                  alignItems: 'center',
                  textAlign: 'left',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '20px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.005)'
                }}>
                  <div style={{ 
                    padding: '0.4rem', 
                    backgroundColor: '#ffffff', 
                    border: '1px solid #cbd5e1', 
                    borderRadius: '12px',
                    display: 'inline-flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '70px',
                    height: '70px',
                    flexShrink: 0
                  }}>
                    <img src={card.qrImg} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 'bold' }}>
                      {card.title}
                    </span>
                    <a href={card.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--color-primary)', textDecoration: 'none', lineHeight: '1.3' }}>
                      {card.linkText}
                    </a>
                  </div>
                </div>
              );
            }

            const Inner = () => (
              <>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  backgroundColor: card.color,
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <card.icon size={18} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 'bold' }}>
                    {card.title}
                  </span>
                  <span style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--deep-blue)', whiteSpace: 'pre-line', lineHeight: '1.3' }}>
                    {card.val}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', whiteSpace: 'pre-line', marginTop: '4px', lineHeight: '1.4' }}>
                    {card.desc}
                  </span>
                </div>
              </>
            );

            if (card.isLink) {
              return (
                <a key={idx} href={card.link} target={card.link.startsWith('http') ? "_blank" : undefined} rel={card.link.startsWith('http') ? "noopener noreferrer" : undefined} className="card scale-hover" style={{ 
                  padding: '1.5rem', 
                  display: 'flex', 
                  gap: '1rem',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '20px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.005)',
                  textDecoration: 'none'
                }}>
                  <Inner />
                </a>
              );
            }

            return (
              <div key={idx} className="card scale-hover" style={{ 
                padding: '1.5rem', 
                display: 'flex', 
                gap: '1rem',
                alignItems: 'flex-start',
                textAlign: 'left',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '20px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.005)'
              }}>
                <Inner />
              </div>
            );
          })}
        </section>

        {/* ==========================================
           SECTION 03: MESSAGE FORM & MAP
           ========================================== */}
        <section id="office-map" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '3rem',
          textAlign: 'left'
        }}>
          {/* Message Form */}
          <div className="card" style={{ padding: '2.5rem', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '24px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--deep-blue)', margin: '0 0 0.5rem 0' }}>
              Gửi tin nhắn cho chúng tôi
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '1.75rem' }}>
              Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại với bạn sớm nhất.
            </p>

            {submitted ? (
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                backgroundColor: 'rgba(34, 197, 94, 0.05)',
                border: '1px solid #22c55e',
                borderRadius: '16px',
                padding: '2.5rem 2rem',
                color: '#15803d',
                textAlign: 'center'
              }}>
                <CheckCircle2 size={48} />
                <div>
                  <h4 style={{ fontWeight: '800', margin: '0 0 0.25rem' }}>Gửi thành công!</h4>
                  <p style={{ fontSize: '0.85rem', margin: 0, opacity: 0.85 }}>
                    Cảm ơn bạn đã liên hệ. Đội ngũ Hanora sẽ phản hồi bạn sớm nhất có thể.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#475569' }}>Họ và tên *</label>
                    <input 
                      type="text" 
                      placeholder="Nhập họ và tên" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      style={{ padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '0.85rem', outline: 'none' }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#475569' }}>Email *</label>
                    <input 
                      type="email" 
                      placeholder="Nhập email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      style={{ padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '0.85rem', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#475569' }}>Số điện thoại *</label>
                    <input 
                      type="text" 
                      placeholder="Nhập số điện thoại" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      style={{ padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '0.85rem', outline: 'none' }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#475569' }}>Chủ đề quan tâm *</label>
                    <select 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      style={{ padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '0.85rem', outline: 'none', backgroundColor: '#ffffff', color: formData.subject === 'Chọn chủ đề' ? '#94a3b8' : '#0f172a' }}
                    >
                      <option disabled>Chọn chủ đề</option>
                      <option>Tư vấn giải pháp EdTech</option>
                      <option>Đóng góp ý kiến</option>
                      <option>Hợp tác phát triển</option>
                      <option>Yêu cầu hỗ trợ kỹ thuật</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#475569' }}>Nội dung tin nhắn *</label>
                  <textarea 
                    placeholder="Nhập nội dung tin nhắn của bạn..." 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    style={{ padding: '0.75rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '0.85rem', outline: 'none', fontFamily: 'inherit', resize: 'none' }}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary scale-hover" 
                  style={{ 
                    padding: '0.75rem', 
                    borderRadius: '10px', 
                    fontWeight: 'bold', 
                    fontSize: '0.9rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '0.5rem',
                    marginTop: '0.5rem'
                  }}
                >
                  <Send size={16} /> Gửi tin nhắn
                </button>
              </form>
            )}
          </div>

          {/* Interactive Map Block replaced by HANORA Image */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Hanora Image wrapper */}
            <div style={{ 
              borderRadius: '24px', 
              overflow: 'hidden', 
              border: '1px solid #e2e8f0', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.015)',
              backgroundColor: '#ffffff'
            }}>
              <img 
                src={projectImage} 
                alt="Hanora Team Project" 
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
              />
            </div>
          </div>
        </section>

        {/* ==========================================
           SECTION 04: FAQS ACCORDION
           ========================================== */}
        <section style={{ padding: '2rem 0', display: 'flex', flexDirection: 'column', gap: '2.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--deep-blue)', fontWeight: '800', margin: 0, position: 'relative', display: 'inline-block' }}>
            Câu hỏi thường gặp
            <span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', position: 'absolute', top: '-0.25rem', right: '-1rem', fontWeight: 'bold' }}>+</span>
          </h2>

           <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1rem',
            textAlign: 'left'
          }}>
            {/* Split faqs into two columns */}
            {[0, 1].map((colIdx) => (
              <div key={colIdx} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {faqs.filter((_, i) => i % 2 === colIdx).map((faq, idx) => {
                  const globalIdx = colIdx === 0 ? idx * 2 : idx * 2 + 1;
                  const isOpen = openFaq === globalIdx;
                  return (
                    <div 
                      key={idx} 
                      style={{ 
                        border: '1px solid #e2e8f0', 
                        borderRadius: '16px', 
                        backgroundColor: '#ffffff',
                        overflow: 'hidden',
                        transition: 'box-shadow 0.2s'
                      }}
                      className={isOpen ? "shadow-md" : "scale-hover"}
                    >
                      <button 
                        onClick={() => toggleFaq(globalIdx)}
                        style={{ 
                          width: '100%', 
                          padding: '1.25rem 1.5rem', 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'center', 
                          background: 'none', 
                          border: 'none', 
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                          <div style={{ 
                            width: '1.75rem', 
                            height: '1.75rem', 
                            borderRadius: '50%', 
                            backgroundColor: 'rgba(22, 143, 239, 0.05)', 
                            color: 'var(--color-primary)', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            flexShrink: 0
                          }}>
                            <HelpCircle size={12} />
                          </div>
                          <span style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--deep-blue)' }}>
                            {faq.q}
                          </span>
                        </div>
                        <div style={{ color: '#94a3b8' }}>
                          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                      </button>
                      
                      {/* Collapse/Expand Panel */}
                      <div style={{ 
                        maxHeight: isOpen ? '200px' : '0px', 
                        overflow: 'hidden', 
                        transition: 'max-height 0.3s ease-out'
                      }}>
                        <p style={{ 
                          padding: '0 1.5rem 1.5rem 3.75rem', 
                          margin: 0, 
                          color: '#64748b', 
                          fontSize: '0.8rem', 
                          lineHeight: '1.6' 
                        }}>
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
           SECTION 05: CTA BANNER
           ========================================== */}
        <section
          style={{
            marginTop: '2rem',
            padding: '3rem 4rem',
            backgroundColor: '#1d4ed8',
            backgroundImage: 'linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%)',
            borderRadius: '24px',
            color: '#ffffff',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
            textAlign: 'left',
            boxShadow: '0 10px 30px rgba(29, 78, 216, 0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Center Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', zIndex: 1 }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', margin: 0, lineHeight: '1.3' }}>
              Sẵn sàng nâng tầm trải nghiệm học tập?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              Để lại thông tin, Hanora sẽ tư vấn giải pháp phù hợp nhất cho bạn.
            </p>
          </div>

          {/* Mascot (Center aligned) */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
            <img 
              src={pandaMascot} 
              alt="Hanora Mascot" 
              className="float-animation"
              style={{ width: '130px', height: 'auto', display: 'block', objectFit: 'contain' }} 
            />
          </div>

          {/* Right Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', zIndex: 1 }} className="cta-btn-wrapper">
            <style>{`
              @media (max-width: 768px) {
                .cta-btn-wrapper {
                  justify-content: center !important;
                }
              }
            `}</style>
            <a
              href="https://hanora.id.vn"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#ffffff',
                color: '#1d4ed8',
                padding: '0.85rem 2rem',
                borderRadius: '99px',
                fontWeight: 'bold',
                fontSize: '0.95rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s'
              }}
              className="scale-hover"
            >
              Nhận tư vấn miễn phí <ArrowRight size={16} />
            </a>
          </div>
        </section>

      </div>
    </MainLayout>
  );
}
export default ContactPage;
