import { 
  ArrowRight, Shield, User, Sparkles, BookOpen, TrendingUp, PlusCircle, 
  Layers, RotateCw, Image, Volume2, Zap, FileText, Camera, HelpCircle, Bookmark 
} from "lucide-react";
import { useEffect } from "react";
import { MainLayout } from "../components/layout/MainLayout";

// Import local assets matching the user's reference design
import heroIllustration from "../assets/b932b4fd-e75b-4077-af7a-42a92f49ded6.png";
import showcaseVocab from "../assets/unnamed (1).jpg";
import showcaseFlashcard from "../assets/unnamed (2).jpg";
import showcaseTranslate from "../assets/unnamed (3).jpg";
import showcasePronounce from "../assets/LandingPage3.png";
import showcaseSRS from "../assets/unnamed (6).jpg";
import showcaseDashboard from "../assets/d6667edd-6bce-4de6-b6b4-5a9c0812edd9.png";
import pandaMascot from "../assets/StreakImage.png";

export function SolutionsPage() {
  useEffect(() => {
    const app = document.querySelector(".app-container");
    if (!app) return undefined;

    const timelineSections = document.querySelectorAll(
      ".solutions-flow, .solutions-showcase, .solutions-cta",
    );

    app.classList.add("solutions-app-active");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px"
      },
    );

    timelineSections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const revealProgress = Math.min(scrollY / 900, 1);
      app.style.setProperty("--reveal-progress", revealProgress.toFixed(3));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const topShowcases = [
    {
      num: "01",
      title: "Quản lý từ vựng thông minh",
      desc: "Tạo và sắp xếp danh sách từ vựng theo chủ đề, theo cấp độ. Gợi ý ôn tập hợp lý giúp bạn ghi nhớ lâu hơn và sử dụng tự nhiên hơn.",
      image: showcaseVocab,
      features: [
        { label: "Thêm từ mới dễ dàng", icon: PlusCircle },
        { label: "Phân loại theo chủ đề", icon: Layers },
        { label: "Ôn tập theo chu kỳ", icon: RotateCw },
        { label: "Theo dõi tiến độ học", icon: TrendingUp }
      ]
    },
    {
      num: "02",
      title: "Hệ thống Flashcard cao cấp",
      desc: "Học tập hiệu quả với thẻ nhớ ảo (Flashcard) thông minh: lật thẻ, nghe phát âm, kiểm tra nghĩa và ví dụ thực tế.",
      image: showcaseFlashcard,
      features: [
        { label: "Hình ảnh sinh động", icon: Image },
        { label: "Phát âm chuẩn", icon: Volume2 },
        { label: "Ví dụ thực tế", icon: BookOpen },
        { label: "Chế độ học linh hoạt", icon: Zap }
      ]
    },
    {
      num: "03",
      title: "Dịch thuật & Học từ tài liệu",
      desc: "Dịch văn bản, tài liệu, hình ảnh nhanh chóng, chính xác. Học từ mới ngay trong tài liệu bạn quan tâm với công cụ hỗ trợ thông minh.",
      image: showcaseTranslate,
      features: [
        { label: "Dịch văn bản, tài liệu", icon: FileText },
        { label: "Dịch hình ảnh (OCR)", icon: Camera },
        { label: "Giải thích chi tiết", icon: HelpCircle },
        { label: "Lưu & quản lý dễ dàng", icon: Bookmark }
      ]
    }
  ];

  const gridShowcases = [
    {
      num: "04",
      title: "Luyện phát âm & Phản hồi",
      desc: "AI chấm điểm phát âm chi tiết, chỉ ra lỗi sai và hướng dẫn cách sửa để bạn nói chuẩn hơn.",
      image: showcasePronounce
    },
    {
      num: "05",
      title: "Thuật toán SRS hiệu quả",
      desc: "Hệ thống ôn tập thông minh dựa trên thuật toán SRS giúp ghi nhớ lâu hơn, tiết kiệm thời gian.",
      image: showcaseSRS
    },
    {
      num: "06",
      title: "Quản lý tiến độ bằng dữ liệu",
      desc: "Biểu đồ trực quan giúp bạn theo dõi tiến độ học, các điểm điểm mạnh - yếu để cải thiện hiệu quả.",
      image: showcaseDashboard
    }
  ];

  return (
    <MainLayout>
      <style>{`
        .solutions-page-shell {
          position: relative;
        }

        /* Base styles for scroll animation elements */
        .solutions-page-shell .solutions-flow,
        .solutions-page-shell .solutions-showcase,
        .solutions-page-shell .solutions-cta {
          opacity: 0;
          transition: opacity 1200ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .solutions-page-shell .solutions-flow.is-visible,
        .solutions-page-shell .solutions-showcase.is-visible,
        .solutions-page-shell .solutions-cta.is-visible {
          opacity: 1;
        }

        /* Slide from Left columns (Waterfall incoming from left side) */
        .solutions-page-shell .slide-from-left {
          opacity: 0;
          transform: translateX(-100px) translateY(30px);
          transition: opacity 1200ms cubic-bezier(0.16, 1, 0.3, 1), transform 1200ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .solutions-page-shell .is-visible .slide-from-left {
          opacity: 1;
          transform: translateX(0) translateY(0);
          transition-delay: 100ms;
        }

        /* Slide from Right columns (Waterfall incoming from right side) */
        .solutions-page-shell .slide-from-right {
          opacity: 0;
          transform: translateX(100px) translateY(30px);
          transition: opacity 1200ms cubic-bezier(0.16, 1, 0.3, 1), transform 1200ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .solutions-page-shell .is-visible .slide-from-right {
          opacity: 1;
          transform: translateX(0) translateY(0);
          transition-delay: 250ms;
        }

        .solutions-page-shell .solutions-cta {
          transform: translateY(40px);
          transition: opacity 1200ms cubic-bezier(0.16, 1, 0.3, 1), transform 1200ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .solutions-page-shell .solutions-cta.is-visible {
          transform: translateY(0);
        }

        .solutions-page-shell .solutions-hero {
          position: relative;
          overflow: hidden;
        }

        .solutions-page-shell .solutions-hero::before {
          content: "";
          position: absolute;
          width: 380px;
          height: 380px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(22, 143, 239, 0.16), transparent 78%);
          left: -120px;
          top: -120px;
          filter: blur(8px);
          animation: pulseOrb 4s ease-in-out infinite;
        }

        .solutions-page-shell .solutions-hero::after {
          content: "";
          position: absolute;
          width: 340px;
          height: 340px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(22, 143, 239, 0.20), transparent 80%);
          right: -95px;
          bottom: -90px;
          filter: blur(10px);
          animation: pulseOrb 4s ease-in-out 300ms infinite;
        }

        .solutions-page-shell .feature-text {
          position: relative;
        }

        .solutions-page-shell .feature-text::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -10px;
          width: 96px;
          height: 3px;
          border-radius: 99px;
          background: linear-gradient(90deg, var(--color-primary), transparent);
          transform-origin: left;
          transform: scaleX(0.2);
          transition: transform 600ms ease;
        }

        .solutions-page-shell .solutions-showcase.is-visible .feature-text::after {
          transform: scaleX(1);
        }

        @keyframes pulseOrb {
          50% { transform: scale(1.05); opacity: 0.9; }
        }
      `}</style>

      <div
        className="container solutions-page-shell"
        style={{
          paddingBottom: "4rem",
          display: "flex",
          flexDirection: "column",
          gap: "4rem",
        }}
      >
        {/* ==========================================
           SECTION 01: HERO SECTION
           ========================================== */}
        <section
          className="solutions-flow solutions-hero"
          style={{
            padding: "4rem 0 3rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "3rem",
              width: "100%",
              alignItems: "center",
              textAlign: "left",
            }}
          >
            {/* Left Column Content */}
            <div
              className="slide-from-left"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: "800",
                    color: "var(--color-primary)",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                  }}
                >
                  Tính năng nổi bật <span style={{ fontSize: "0.9rem" }}>+</span>
                </span>
                <h1
                  style={{
                    fontSize: "2.6rem",
                    fontWeight: "800",
                    color: "#0f172a",
                    lineHeight: "1.25",
                    margin: 0,
                    letterSpacing: "-0.5px",
                  }}
                >
                  Một nền tảng – Nhiều giải pháp
                  <br />
                  cho hành trình học tiếng Trung
                </h1>
              </div>

              <p
                style={{
                  color: "#475569",
                  fontSize: "1.05rem",
                  lineHeight: "1.65",
                  margin: 0,
                  maxWidth: "520px",
                }}
              >
                Hanora cung cấp đầy đủ công cụ và tài nguyên giúp bạn
                <br />
                học tiếng Trung hiệu quả, toàn diện và thú vị hơn mỗi ngày.
              </p>

              {/* CTAs */}
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginTop: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="https://hanora.id.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#1d4ed8",
                    color: "#ffffff",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    fontSize: "0.95rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    boxShadow: "0 4px 10px rgba(29, 78, 216, 0.2)",
                    transition: "background-color 0.2s",
                  }}
                >
                  Bắt đầu học miễn phí <ArrowRight size={16} />
                </a>
                <button
                  onClick={() => {
                    const element = document.getElementById("features-list");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#334155",
                    border: "1px solid #cbd5e1",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                  }}
                >
                  Tìm hiểu thêm
                </button>
              </div>

              {/* Badges Row */}
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  marginTop: "1.5rem",
                  flexWrap: "wrap",
                }}
              >
                {/* Badge 1 */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "50%",
                      backgroundColor: "rgba(22, 143, 239, 0.08)",
                      color: "var(--color-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(22, 143, 239, 0.2)",
                      flexShrink: 0,
                    }}
                  >
                    <BookOpen size={18} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: "bold",
                        color: "#0f172a",
                        lineHeight: "1.2",
                      }}
                    >
                      Dễ học
                    </span>
                    <span style={{ fontSize: "0.75rem", color: "#64748b" }}>
                      Giao diện thân thiện
                    </span>
                  </div>
                </div>

                {/* Badge 2 */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "50%",
                      backgroundColor: "rgba(22, 143, 239, 0.08)",
                      color: "var(--color-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(22, 143, 239, 0.2)",
                      flexShrink: 0,
                    }}
                  >
                    <Sparkles size={18} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: "bold",
                        color: "#0f172a",
                        lineHeight: "1.2",
                      }}
                    >
                      AI thông minh
                    </span>
                    <span style={{ fontSize: "0.75rem", color: "#64748b" }}>
                      Cá nhân hóa lộ trình
                    </span>
                  </div>
                </div>

                {/* Badge 3 */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "50%",
                      backgroundColor: "rgba(22, 143, 239, 0.08)",
                      color: "var(--color-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(22, 143, 239, 0.2)",
                      flexShrink: 0,
                    }}
                  >
                    <TrendingUp size={18} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: "bold",
                        color: "#0f172a",
                        lineHeight: "1.2",
                      }}
                    >
                      Hiệu quả cao
                    </span>
                    <span style={{ fontSize: "0.75rem", color: "#64748b" }}>
                      Đo lường tiến bộ rõ ràng
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Showcase Image */}
            <div
              className="slide-from-right"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div
                className="glow-breath"
                style={{
                  width: "100%",
                  maxWidth: "760px",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={heroIllustration}
                  alt="Hanora Features Mockup"
                  style={{
                    width: "100%",
                    maxWidth: "760px",
                    height: "auto",
                    display: "block",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
           SECTION 02: ALTERNATING FEATURES LIST (01-03)
           ========================================== */}
        <div
          id="features-list"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6rem",
            padding: "2rem 0",
          }}
        >
          {topShowcases.map((show, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <section
                key={idx}
                className="solutions-showcase solutions-flow"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "4rem",
                  alignItems: "center",
                  textAlign: "left",
                }}
              >
                {/* Text column (Alternates position) */}
                <div
                  className={`feature-text ${isEven ? "slide-from-right" : "slide-from-left"}`}
                  style={{
                    order: isEven ? 1 : 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                >
                  <span style={{ 
                    padding: '0.25rem 0.75rem', 
                    backgroundColor: 'rgba(22, 143, 239, 0.08)', 
                    color: 'var(--color-primary)', 
                    borderRadius: '99px', 
                    fontSize: '0.8rem', 
                    fontWeight: 'bold', 
                    width: 'fit-content'
                  }}>
                    {show.num}
                  </span>
                  
                  <h2
                    style={{
                      fontSize: "2rem",
                      fontWeight: "800",
                      color: "var(--deep-blue)",
                      margin: 0,
                    }}
                  >
                    {show.title}
                  </h2>
                  <p
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "1.05rem",
                      lineHeight: "1.65",
                      margin: 0,
                    }}
                  >
                    {show.desc}
                  </p>

                  {/* 2x2 Feature Grid */}
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(2, 1fr)', 
                    gap: '1rem', 
                    marginTop: '1.25rem', 
                    textAlign: 'left' 
                  }}>
                    {show.features.map((feat, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        <div style={{ 
                          width: '2rem',
                          height: '2rem',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(22, 143, 239, 0.05)',
                          color: 'var(--color-primary)', 
                          display: 'flex', 
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <feat.icon size={14} />
                        </div>
                        <span style={{ fontSize: '0.9rem', color: '#475569', fontWeight: '500' }}>
                          {feat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Screenshot Frame column (Alternates position) */}
                <div 
                  className={isEven ? "slide-from-left" : "slide-from-right"}
                  style={{ order: isEven ? 0 : 1 }}
                >
                  <div
                    className="screenshot-frame"
                    style={{ boxShadow: "var(--shadow-lg)" }}
                  >
                    <div className="screenshot-bar">
                      <div
                        className="screenshot-dot"
                        style={{ backgroundColor: "#ef4444" }}
                      ></div>
                      <div
                        className="screenshot-dot"
                        style={{ backgroundColor: "#eab308" }}
                      ></div>
                      <div
                        className="screenshot-dot"
                        style={{ backgroundColor: "#22c55e" }}
                      ></div>
                    </div>
                    <img
                      src={show.image}
                      alt={show.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* ==========================================
           SECTION 02B: 3-COLUMN FEATURES GRID (04-06)
           ========================================== */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem', 
          padding: '4rem 0 2rem' 
        }}>
          {gridShowcases.map((show, idx) => (
            <div key={idx} className="solutions-showcase is-visible card scale-hover" style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '20px',
              padding: '2rem 1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              boxShadow: '0 4px 25px rgba(0,0,0,0.015)',
              textAlign: 'left'
            }}>
              <span style={{ 
                padding: '0.25rem 0.75rem', 
                backgroundColor: 'rgba(22, 143, 239, 0.08)', 
                color: 'var(--color-primary)', 
                borderRadius: '99px', 
                fontSize: '0.8rem', 
                fontWeight: 'bold', 
                width: 'fit-content'
              }}>
                {show.num}
              </span>
              
              <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>
                {show.title}
              </h3>
              
              <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: '1.65', margin: 0, minHeight: '60px' }}>
                {show.desc}
              </p>
              
              {/* Image Container with Screenshot look */}
              <div style={{ 
                border: '1px solid #f1f5f9', 
                borderRadius: '12px', 
                overflow: 'hidden', 
                boxShadow: '0 4px 15px rgba(0,0,0,0.01)',
                marginTop: 'auto'
              }}>
                <img 
                  src={show.image} 
                  alt={show.title} 
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
                />
              </div>
            </div>
          ))}
        </div>

        {/* ==========================================
           SECTION 03: CTA BANNER WITH MASCOT
           ========================================== */}
        <section
          className="solutions-cta solutions-flow"
          style={{
            marginTop: '4rem',
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
          {/* Left content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', zIndex: 1 }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', margin: 0, lineHeight: '1.3' }}>
              Sẵn sàng nâng tầm<br />
              kỹ năng cùng Hanora?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: '1.6', margin: 0, maxWidth: '400px' }}>
              Hàng ngàn học viên đang tiến bộ mỗi ngày. Bạn sẽ là người tiếp theo!
            </p>
            <div style={{ marginTop: '0.5rem' }}>
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
                Bắt đầu học ngay <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Mascot */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
            <img 
              src={pandaMascot} 
              alt="Hanora Mascot" 
              className="float-animation"
              style={{ width: '220px', height: 'auto', display: 'block', objectFit: 'contain' }} 
            />
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
export default SolutionsPage;
