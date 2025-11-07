import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    // With HashRouter, we need to navigate to home first if not there
    if (!isHomePage) {
      // Navigate to home page first
      window.location.hash = '#/';
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 80;
          const offsetTop = element.offsetTop - headerHeight;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }, 200);
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const offsetTop = element.offsetTop - headerHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer
      className="dark-container"
      style={{
        borderTop: "1px solid var(--border-subtle)",
        padding: "80px 0 40px 0",
      }}
    >
      <div className="dark-full-container">
        <div className="dark-content-container">
          {/* Main Footer Content */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "40px",
              marginBottom: "60px",
            }}
          >
            {/* Company Info */}
            <div>
              <div
                className="footer-brand"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "20px",
                  flexWrap: "wrap",
                }}
              >
                <img
                  alt="Polymathic Futures Logo"
                  className="footer-logo"
                  src="https://customer-assets.emergentagent.com/job_polymathic-futures/artifacts/ngsx7547_LOGO%20simple%20big.jpg"
                  style={{
                    height: "40px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    background:
                      "linear-gradient(135deg, rgb(0, 180, 216), rgb(0, 255, 209), rgb(167, 139, 250))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    margin: "0",
                  }}
                >
                  Polymathic Futures
                </h3>
              </div>

              <p
                className="body-medium"
                style={{
                  color: "var(--text-secondary)",
                  marginBottom: "24px",
                  lineHeight: "1.6",
                }}
              >
                Scientific Foresight for Cross-Industry Breakthroughs. We create
                magazines from the future so you can own your story in
                tomorrow's world.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="heading-3" style={{ marginBottom: "20px" }}>
                Quick Links
              </h4>

              <nav
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <a
                  href="#"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "16px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.color = "var(--brand-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = "var(--text-secondary)")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    if (!isHomePage) {
                      window.location.hash = '#/';
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }, 200);
                    } else {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                >
                  About
                </a>

                <a
                  href="#articles"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "16px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.color = "var(--brand-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = "var(--text-secondary)")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('articles');
                  }}
                >
                  Portfolio
                </a>

                <a
                  href="#services"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "16px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.color = "var(--brand-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = "var(--text-secondary)")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                >
                  Services
                </a>

                <a
                  href="#team"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "16px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.color = "var(--brand-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = "var(--text-secondary)")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('team');
                  }}
                >
                  Team
                </a>

                <Link
                  to="/blog"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "16px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.color = "var(--brand-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = "var(--text-secondary)")
                  }
                  onClick={() => {
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }, 100);
                  }}
                >
                  Blog
                </Link>

                <a
                  href="#contact"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "16px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.color = "var(--brand-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = "var(--text-secondary)")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                >
                  Contact
                </a>
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="heading-3" style={{ marginBottom: "20px" }}>
                Contact Info
              </h4>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <Mail size={16} color="var(--brand-primary)" />
                  <span
                    className="body-small"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    contact@polymathicfutures.com
                  </span>
                </div>

                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <MapPin size={16} color="var(--brand-primary)" />
                  <span
                    className="body-small"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Global • Remote–First
                  </span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <Linkedin size={16} color="var(--brand-primary)" />
                  <a
                    href="https://www.linkedin.com/company/polymathic-futures/"
                    className="body-small"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    linkedin.com/company/polymathic-futures/
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            style={{
              borderTop: "1px solid var(--border-subtle)",
              paddingTop: "32px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <p className="body-small" style={{ color: "var(--text-muted)" }}>
              © {currentYear} Polymathic Futures. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
