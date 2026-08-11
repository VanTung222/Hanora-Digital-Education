import { useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { MapPin, Mail, Github, Facebook, Send, CheckCircle2 } from 'lucide-react';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Vui lòng nhập đầy đủ thông tin bắt buộc.');
      return;
    }
    
    // Simulate contact form submission
    setSubmitted(true);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <MainLayout>
      <div className="container" style={{ padding: '2rem 0', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Hero Section */}
        <section style={{ textAlign: 'center', padding: '4rem 1.5rem', marginBottom: '4rem', backgroundColor: 'var(--color-primary-light)', borderRadius: 'var(--radius-xl)' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '2px' }}>Liên hệ</span>
          <h1 style={{ fontSize: '3rem', marginTop: '0.5rem', marginBottom: '1rem', color: 'var(--deep-blue)' }}>Let's Connect</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Bạn có câu hỏi, ý kiến đóng góp hay đề xuất hợp tác phát triển? Hãy liên hệ với đội ngũ Hanora ngay.
          </p>
        </section>

        {/* Contact Content Grid */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', marginBottom: '5rem' }}>
          
          {/* Left Column: Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--deep-blue)', marginBottom: '1rem', fontWeight: '800' }}>
                Thông tin dự án Hanora
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Chúng tôi luôn mong muốn lắng nghe những phản hồi từ học viên và các nhà nghiên cứu để cải tiến ứng dụng ngày một tốt hơn.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--color-primary)', marginTop: '0.25rem' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 'bold', color: 'var(--deep-blue)', fontSize: '0.95rem', margin: '0 0 0.25rem' }}>Địa chỉ</h4>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>
                    Trường Đại học FPT Đà Nẵng,<br />
                    Khu đô thị FPT City, Ngũ Hành Sơn,<br />
                    Đà Nẵng, Việt Nam
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--color-primary)', marginTop: '0.25rem' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 'bold', color: 'var(--deep-blue)', fontSize: '0.95rem', margin: '0 0 0.25rem' }}>Email liên hệ</h4>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                    contact@hanora.edu.vn
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Form */}
          <div>
            <div className="card" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--deep-blue)', marginBottom: '1.5rem', fontWeight: '800' }}>
                Gửi tin nhắn liên hệ
              </h3>

              {submitted ? (
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  backgroundColor: 'var(--color-success-light)',
                  border: '1px solid var(--color-success)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem',
                  color: 'var(--color-success)',
                  textAlign: 'center'
                }}>
                  <CheckCircle2 size={48} />
                  <div>
                    <h4 style={{ fontWeight: 'bold', margin: '0 0 0.25rem' }}>Gửi thành công!</h4>
                    <p style={{ fontSize: '0.85rem', margin: 0, opacity: 0.85 }}>
                      Cảm ơn bạn đã liên hệ. Đội ngũ Hanora sẽ phản hồi bạn sớm nhất có thể.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-text-secondary)' }}>
                      Họ và tên <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="Nguyễn Văn A" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-bg)',
                        color: 'var(--color-text-primary)',
                        outline: 'none',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-text-secondary)' }}>
                      Địa chỉ Email <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input 
                      type="email" 
                      placeholder="name@example.com" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-bg)',
                        color: 'var(--color-text-primary)',
                        outline: 'none',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-text-secondary)' }}>
                      Nội dung tin nhắn <span style={{ color: 'red' }}>*</span>
                    </label>
                    <textarea 
                      placeholder="Nhập tin nhắn của bạn tại đây..." 
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-bg)',
                        color: 'var(--color-text-primary)',
                        outline: 'none',
                        fontSize: '0.95rem',
                        resize: 'vertical',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{ width: '100%', padding: '0.85rem', marginTop: '1rem' }}
                  >
                    <Send size={18} />
                    Gửi liên hệ
                  </button>

                </form>
              )}
            </div>
          </div>

        </section>

      </div>
    </MainLayout>
  );
}
export default ContactPage;
