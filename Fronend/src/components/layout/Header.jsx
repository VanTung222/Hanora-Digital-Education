import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImg from "../../assets/logo.png";

export function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Trang chủ", path: "/" },
    { label: "Giới thiệu", path: "/about" },
    { label: "Tính năng", path: "/solutions" },
    { label: "Liên hệ", path: "/contact" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className="header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "rgba(255, 255, 255, 0.88)",
        borderBottom: "1px solid var(--color-border)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 20px rgba(15, 23, 42, 0.05)",
      }}
    >
      <style>{`
        /* Responsive rules for header */
        .desktop-nav {
          display: flex;
          align-items: center;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--deep-blue);
          cursor: pointer;
          padding: 0.5rem;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
        }
        .mobile-menu-btn:active {
          transform: scale(0.92);
        }
        .header-desktop-actions {
          display: flex;
        }
        .mobile-nav-panel {
          display: none;
          flex-direction: column;
          background-color: #ffffff;
          border-bottom: 1px solid var(--color-border);
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          padding: 1.5rem;
          gap: 1.25rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
          animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: top;
        }
        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          list-style: none;
          gap: 1rem;
          margin: 0;
          padding: 0;
        }
        .mobile-nav-link {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-text-secondary);
          text-decoration: none;
          padding: 0.5rem 0;
          display: block;
          border-bottom: 1px solid rgba(0, 0, 0, 0.02);
          transition: color 0.2s;
        }
        .mobile-nav-link:hover, .mobile-nav-link.active {
          color: var(--color-primary);
        }

        @keyframes slideDown {
          from {
            transform: scaleY(0);
            opacity: 0;
          }
          to {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @media (max-width: 767px) {
          .desktop-nav {
            display: none !important;
          }
          .header-desktop-actions {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
          .mobile-nav-panel.open {
            display: flex !important;
          }
        }
      `}</style>

      <div
        className="header-inner"
        style={{
          maxWidth: "1520px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.75rem 1.5rem",
        }}
      >
        <Link
          to="/"
          className="logo"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
          onClick={handleLinkClick}
        >
          <img
            src={logoImg}
            alt="Hanora Logo"
            style={{ height: "46px", objectFit: "contain" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul
            className="nav-list"
            style={{
              display: "flex",
              listStyle: "none",
              gap: "1.25rem",
              margin: 0,
              padding: 0,
            }}
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    color:
                      location.pathname === item.path
                        ? "var(--color-primary)"
                        : "var(--color-text-secondary)",
                    textDecoration: "none",
                    padding: "0.25rem 0",
                    transition: "color var(--transition-fast)",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div
          className="header-desktop-actions"
          style={{ gap: "0.75rem", alignItems: "center" }}
        >
          <a
            href="https://hanora.id.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary scale-hover"
            style={{
              padding: "0.5rem 1.25rem",
              fontSize: "0.9rem",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(22, 143, 239, 0.2)",
              fontWeight: "bold",
            }}
          >
            Khám phá Hanora →
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Panel */}
        <div className={`mobile-nav-panel ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="mobile-nav-list">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`mobile-nav-link ${location.pathname === item.path ? "active" : ""}`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="https://hanora.id.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              padding: "0.75rem",
              fontSize: "0.95rem",
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: "0 4px 10px rgba(22, 143, 239, 0.2)",
              fontWeight: "bold",
              width: "100%",
              display: "block",
            }}
            onClick={handleLinkClick}
          >
            Khám phá Hanora →
          </a>
        </div>
      </div>
    </header>
  );
}
export default Header;
