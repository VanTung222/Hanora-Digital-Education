import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: 'var(--color-bg-card)', borderTop: '1px solid var(--color-border)', padding: '4rem 1.5rem 2rem' }}>
      <div className="footer-inner" style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Footer Top */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', textAlign: 'left' }}>
          
          {/* Logo & Description */}
          <div style={{ gridColumn: 'span 2' }}>
            <Link to="/" className="logo" style={{ fontSize: '1.8rem', fontWeight: '900', textDecoration: 'none', marginBottom: '1rem', display: 'block' }}>
              HANORA
            </Link>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '320px' }}>
              Nền tảng hỗ trợ học tiếng Trung thông minh với AI. Giúp người học biến việc học tiếng Trung thành một thói quen có hệ thống và hiệu quả.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--color-text-primary)', marginBottom: '1.25rem' }}>Dự án</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/about" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textDecoration: 'none' }}>Giới thiệu</Link></li>
              <li><Link to="/solutions" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textDecoration: 'none' }}>Giải pháp</Link></li>
              <li><Link to="/technology" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textDecoration: 'none' }}>Công nghệ</Link></li>
              <li><Link to="/achievements" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textDecoration: 'none' }}>Thành tựu</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--color-text-primary)', marginBottom: '1.25rem' }}>Cộng đồng</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/team" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textDecoration: 'none' }}>Đội ngũ</Link></li>
              <li><Link to="/news" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textDecoration: 'none' }}>Tin tức</Link></li>
              <li><Link to="/news" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textDecoration: 'none' }}>Hoạt động</Link></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--color-text-primary)', marginBottom: '1.25rem' }}>Liên hệ</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="mailto:contact@hanora.edu.vn" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textDecoration: 'none' }}>Email</a></li>
              <li><a href="https://github.com/hanora-project" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textDecoration: 'none' }}>GitHub</a></li>
              <li><a href="https://facebook.com/hanora.edu" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textDecoration: 'none' }}>Facebook</a></li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)', width: '100%' }}></div>

        {/* Footer Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
            &copy; 2026 Hanora. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/privacy" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>Chính sách bảo mật</Link>
            <Link to="/terms" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>Điều khoản sử dụng</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
export default Footer;
