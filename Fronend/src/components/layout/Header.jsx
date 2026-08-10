import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();

  const navItems = [
    { label: 'Trang chủ', path: '/' },
    { label: 'Giới thiệu', path: '/about' },
    { label: 'Giải pháp', path: '/solutions' },
    { label: 'Công nghệ', path: '/technology' },
    { label: 'Thành tựu', path: '/achievements' },
    { label: 'Đội ngũ', path: '/team' },
    { label: 'Tin tức', path: '/news' },
    { label: 'Liên hệ', path: '/contact' },
  ];

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.6rem', fontWeight: '900', letterSpacing: '-0.5px' }}>HANORA</span>
        </Link>
        
        <nav style={{ display: 'flex', alignItems: 'center' }}>
          <ul className="nav-list" style={{ margin: 0, padding: 0, display: 'flex', listStyle: 'none', gap: '1.25rem' }}>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: location.pathname === item.path ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    padding: '0.25rem 0',
                    borderBottom: location.pathname === item.path ? '2px solid var(--color-primary)' : '2px solid transparent',
                    transition: 'color var(--transition-fast)'
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a 
            href="https://hanora-platform.example.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
            style={{ 
              padding: '0.6rem 1.25rem', 
              fontSize: '0.9rem',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 4px 10px rgba(22, 143, 239, 0.2)'
            }}
          >
            Khám phá Hanora
          </a>
        </div>
      </div>
    </header>
  );
}
export default Header;
