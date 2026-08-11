import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subbed, setSubbed] = useState(false);

  const handleSub = (e) => {
    e.preventDefault();
    if (email) {
      setSubbed(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid var(--color-border)', padding: '4rem 1.5rem 2rem', textAlign: 'left' }}>
      <div className="footer-inner" style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Footer Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2.5rem' }}>
          
          {/* Logo & Description */}
          <div style={{ gridColumn: 'span 2' }}>
            <Link to="/" className="logo" style={{ fontSize: '1.8rem', fontWeight: '900', textDecoration: 'none', marginBottom: '1rem', display: 'block', color: 'var(--color-primary)' }}>
              Hanora
            </Link>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', maxWidth: '280px' }}>
              Nền tảng hỗ trợ học tiếng Trung thông minh với AI. Giúp người học biến việc học tiếng Trung thành một thói quen có hệ thống và hiệu quả.
            </p>
          </div>

          {/* Về chúng tôi */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: 'var(--color-text-primary)', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Về chúng tôi</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>Trang chủ</Link></li>
              <li><Link to="/about" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>Về Hanora</Link></li>
              <li><Link to="/solutions" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>Tính năng</Link></li>
              <li><Link to="/solutions" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>Hướng dẫn</Link></li>
            </ul>
          </div>

          {/* Sản phẩm */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: 'var(--color-text-primary)', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Sản phẩm</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/solutions" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>Từ vựng</Link></li>
              <li><Link to="/solutions" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>Dịch thuật</Link></li>
              <li><Link to="/solutions" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>Flashcard</Link></li>
              <li><Link to="/solutions" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>Luyện phát âm</Link></li>
            </ul>
          </div>

          {/* Hỗ trợ */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: 'var(--color-text-primary)', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Hỗ trợ</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/solutions" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>Tài liệu học</Link></li>
              <li><Link to="/solutions" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>Điều khoản</Link></li>
              <li><Link to="/solutions" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>Hướng dẫn sử dụng</Link></li>
            </ul>
          </div>

          {/* Bản tin (Subscribe) */}
          <div style={{ minWidth: '220px' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: 'var(--color-text-primary)', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Bản tin</h4>
            {subbed ? (
              <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', margin: 0 }}>Đăng ký thành công!</p>
            ) : (
              <form onSubmit={handleSub} style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
                <input 
                  type="email" 
                  placeholder="Địa chỉ Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    padding: '0.6rem 0.85rem',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.85rem',
                    outline: 'none',
                    backgroundColor: 'var(--color-bg)',
                    color: 'var(--color-text-primary)'
                  }}
                />
                <button type="submit" className="btn btn-primary" style={{ padding: '0.6rem', fontSize: '0.85rem', borderRadius: 'var(--radius-sm)' }}>
                  Đăng ký
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)', width: '100%' }}></div>

        {/* Footer Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
            &copy; 2026 Hanora. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
export default Footer;
