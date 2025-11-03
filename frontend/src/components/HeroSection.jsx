import React from "react";
import Spline from "@splinetool/react-spline";
import { ArrowRight, Calendar, Users } from "lucide-react";

const HeroSection = () => {
  const handleScheduleConsultation = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePartnership = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="dark-container"
      style={{ paddingTop: "80px", minHeight: "90vh" }}
    >
      <div className="dark-full-container">
        <div
          style={{
            minHeight: "calc(90vh - 80px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Full-width Hero Title */}
          <div
            style={{
              width: "100%",
              textAlign: "left",
              marginBottom: "0",
              paddingLeft: "0px",
            }}
          >
            <h1
              className="display-huge artistic-display"
              style={{
                marginBottom: "16px",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: "1.2",
                letterSpacing: "-0.01em",
                maxWidth: "100%",
              }}
            >
              Scientific Foresight for Cross-Industry Breakthroughs
            </h1>

            {/* Tagline under main heading */}
            <p
              className="body-small"
              style={{
                color: "var(--brand-primary)",
                fontWeight: "500",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginTop: "16px",
              }}
            >
              WHERE DISCIPLINES CONVERGE • INNOVATION IS BORN
            </p>
          </div>

          {/* Two-column content below title */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "60px",
            }}
          >
            {/* Left side - Content */}
            <div style={{ flex: 1, paddingRight: "40px" }}>
              <div style={{ marginBottom: "40px" }}>
                {/* Hero Hook - Large Impact Statement */}
                <div
                  style={{
                    marginBottom: "40px",
                    maxWidth: "700px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "clamp(28px, 4vw, 36px)",
                      fontWeight: "300",
                      lineHeight: "1.3",
                      color: "var(--text-primary)",
                      marginBottom: "20px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Imagine your company in{" "}
                    <span
                      style={{
                        background:
                          "linear-gradient(135deg, var(--brand-primary), #00b4d8)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: "600",
                      }}
                    >
                      2035, 2040, or even 2060
                    </span>{" "}
                    — advancing innovation that truly matters.
                  </p>
                </div>

                <p
                  style={{
                    fontSize: "clamp(16px, 2vw, 20px)",
                    lineHeight: "1.5",
                    color: "var(--text-primary)",
                    marginBottom: "40px",
                    fontWeight: "400",
                    maxWidth: "800px",
                    textAlign: "left",
                  }}
                >
                  We enable leaders in strategy, marketing, and communications
                  to explore the future through{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, var(--brand-primary), #00b4d8)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: "600",
                    }}
                  >
                    Sci-Fi Prototyping
                  </span>{" "}
                  — powered by{" "}
                  <span
                    style={{
                      color: "var(--text-primary)",
                      fontWeight: "400",
                      fontStyle: "italic",
                    }}
                  >
                    research-driven foresight
                  </span>{" "}
                  and{" "}
                  <span
                    style={{
                      color: "var(--text-primary)",
                      fontWeight: "400",
                      fontStyle: "italic",
                    }}
                  >
                    multidimensional thinking
                  </span>
                  .
                </p>
              </div>

              {/* CTA Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "24px",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <button
                  className="btn-primary dark-button-animate"
                  onClick={handleScheduleConsultation}
                >
                  <Calendar size={20} />
                  Schedule Consultation
                  <ArrowRight size={16} />
                </button>

                <button
                  className="btn-secondary dark-button-animate"
                  onClick={handlePartnership}
                >
                  <Users size={20} />
                  Partnership Inquiry
                </button>
              </div>
            </div>

            {/* Right side - Original 3D Spline Animation */}
            <div
              style={{
                flex: 1,
                height: "700px",
                width: "100%",
                overflow: "visible",
                position: "relative",
              }}
            >
              <Spline
                scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
                style={{
                  width: "100%",
                  height: "100%",
                  background: "transparent",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
