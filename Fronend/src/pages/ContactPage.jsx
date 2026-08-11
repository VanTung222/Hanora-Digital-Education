import { useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { 
  Phone, Mail, MessageSquare, MapPin, ArrowRight, Send, CheckCircle2, 
  ChevronDown, ChevronUp, HelpCircle, Shield
} from 'lucide-react';

// Import local assets matching the user's reference design
import heroIllustration from '../assets/034e8958-037f-4339-bf34-0f25604d9f64.png'; // Mascot next to tablet & blue mug
import pandaMascot from '../assets/StreakImage.png';

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
      title: 'Hotline',
      val: '1900 63 64 85',
      desc: 'Thứ 2 - Thứ 6: 8:00 - 18:00\nThứ 7: 8:00 - 12:00',
      icon: Phone,
      color: 'rgba(22, 143, 239, 0.05)'
    },
    {
      title: 'Email',
      val: 'hello@hanora.vn',
      desc: 'Phản hồi trong vòng 24h',
      icon: Mail,
      color: 'rgba(22, 143, 239, 0.05)'
    },
    {
      title: 'Live chat',
      val: 'Chat ngay với chúng tôi',
      desc: 'Hỗ trợ trực tuyến\n8:00 - 21:00 hàng ngày',
      icon: MessageSquare,
      color: 'rgba(22, 143, 239, 0.05)'
    },
    {
      title: 'Địa chỉ',
      val: 'Lô 34, Đường 2 Tháng 9,\nHải Châu, Đà Nẵng, Việt Nam',
      desc: 'Xem trên bản đồ →',
      icon: MapPin,
      color: 'rgba(22, 143, 239, 0.05)',
      isLink: true,
      link: '#office-map'
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', width: '100%', alignItems: 'center', textAlign: 'left' }}>
            
            {/* Left Column Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
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
                  Liên hệ Hanora <span style={{ fontSize: '0.9rem' }}>+</span>
                </span>
                <h1 style={{ 
                  fontSize: '2.6rem', 
                  fontWeight: '800', 
                  color: '#0f172a', 
                  lineHeight: '1.25', 
                  margin: 0,
                  letterSpacing: '-0.5px'
                }}>
                  Chúng tôi luôn sẵn sàng<br />
                  lắng nghe và hỗ trợ bạn!
                </h1>
              </div>
              
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.65', margin: 0, maxWidth: '520px' }}>
                Dù bạn có câu hỏi, cần tư vấn giải pháp hay muốn hợp tác, đội ngũ Hanora luôn sẵn sàng đồng hành cùng bạn trên hành trình nâng tầm giáo dục.
              </p>

              {/* Checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Phản hồi nhanh chóng trong vòng 24h',
                  'Tư vấn giải pháp phù hợp với nhu cầu của bạn',
                  'Hỗ trợ tận tâm - Đồng hành lâu dài'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <div style={{
                      width: '1.25rem',
                      height: '1.25rem',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(22, 143, 239, 0.1)',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <CheckCircle2 size={12} />
                    </div>
                    <span style={{ fontSize: '0.9rem', color: '#475569', fontWeight: '500' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column Showcase Image */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <div className="glow-breath" style={{ 
                width: '100%',
                maxWidth: '680px',
                borderRadius: '24px',
                overflow: 'hidden',
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
                  <span style={{ fontSize: '1.05rem', fontWeight: '800', color: '#0f172a', whiteSpace: 'pre-line', lineHeight: '1.3' }}>
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
                <a key={idx} href={card.link} className="card scale-hover" style={{ 
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '3rem',
          textAlign: 'left'
        }}>
          {/* Message Form */}
          <div className="card" style={{ padding: '2.5rem', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '24px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0f172a', margin: '0 0 0.5rem 0' }}>
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
                    <label style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#475569' }}>Chủ đề *</label>
                    <select 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      style={{ padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '0.85rem', outline: 'none', backgroundColor: '#ffffff' }}
                    >
                      <option>Chọn chủ đề</option>
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

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'center', color: '#94a3b8', fontSize: '0.7rem', marginTop: '0.5rem' }}>
                  <Shield size={12} />
                  <span>Thông tin của bạn được bảo mật và chỉ sử dụng để liên hệ hỗ trợ.</span>
                </div>
              </form>
            )}
          </div>

          {/* Interactive Map Block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>
              Văn phòng Hanora
            </h3>

            {/* Google Maps Iframe wrapper */}
            <div style={{ 
              borderRadius: '24px', 
              overflow: 'hidden', 
              border: '1px solid #e2e8f0', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.015)',
              height: '300px',
              backgroundColor: '#f1f5f9'
            }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.469956488339!2d108.21980867595562!3d16.03588934015632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219ee5c7bc5b5%3A0xea5f4a7c0678229b!2zMzQgxJDhuq_uZyBUaMO5eSBUcsOibSwgSG_DoCBLaMawxqFuZyBOYW0sIEPhuqltIEzhu4csIMSQw6AgTuG6tW5nIDUwMDAwMCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1712860470123!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address Footer bar */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              backgroundColor: '#ffffff', 
              border: '1px solid #e2e8f0', 
              padding: '1rem 1.5rem', 
              borderRadius: '16px',
              gap: '1rem'
            }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <MapPin size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.8rem', color: '#475569', fontWeight: 'bold' }}>
                  Lô 34, Đường 2 Tháng 9, Quận Hải Châu, Đà Nẵng, Việt Nam
                </span>
              </div>
              <a 
                href="https://maps.app.goo.gl/t1y11K9V6K9V" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  backgroundColor: '#f1f5f9', 
                  color: '#475569', 
                  fontSize: '0.75rem', 
                  fontWeight: 'bold', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '8px', 
                  textDecoration: 'none',
                  whiteSpace: 'nowrap'
                }}
                className="scale-hover"
              >
                Chỉ đường
              </a>
            </div>
          </div>
        </section>

        {/* ==========================================
           SECTION 04: FAQS ACCORDION
           ========================================== */}
        <section style={{ padding: '2rem 0', display: 'flex', flexDirection: 'column', gap: '2.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#0f172a', fontWeight: '800', margin: 0, position: 'relative', display: 'inline-block' }}>
            Câu hỏi thường gặp
            <span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', position: 'absolute', top: '-0.25rem', right: '-1rem', fontWeight: 'bold' }}>+</span>
          </h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
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
                          <span style={{ fontSize: '0.9rem', fontWeight: '800', color: '#0f172a' }}>
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
