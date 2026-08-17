import { Link, useLocation } from "react-router-dom";
import logoImg from "../../assets/logo.png";

export function Header() {
  const location = useLocation();

  const navItems = [
    { label: "Trang chủ", path: "/" },
    { label: "Giới thiệu", path: "/about" },
    { label: "Tính năng", path: "/solutions" },
    { label: "Liên hệ", path: "/contact" },
  ];

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
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 20px rgba(15, 23, 42, 0.05)",
      }}
    >
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
        >
          <img
            src={logoImg}
            alt="Hanora Logo"
            style={{ height: "46px", objectFit: "contain" }}
          />
        </Link>

        <nav>
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

        <div
          className="header-actions"
          style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}
        >
          <a
            href="https://hanora.id.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              padding: "0.5rem 1.25rem",
              fontSize: "0.9rem",
              borderRadius: "var(--radius-full)",
              boxShadow: "0 4px 10px rgba(22, 143, 239, 0.2)",
            }}
          >
            Khám phá Hanora →
          </a>
        </div>
      </div>
    </header>
  );
}
export default Header;
