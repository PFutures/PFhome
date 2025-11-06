import React from "react";
import { Eye, ArrowRight } from "lucide-react";
import { mockMagazines } from "./mock";

const ArticleSamplesSection = () => {
  const articles = mockMagazines;

  const handleArticleClick = (article) => {
    if (article.pdf_url) {
      // If it's a relative path (starts with /), prepend PUBLIC_URL
      // If it's already an absolute URL (http/https), use as-is
      const pdfUrl = article.pdf_url.startsWith('http') 
        ? article.pdf_url 
        : `${process.env.PUBLIC_URL}${article.pdf_url}`;
      window.open(pdfUrl, "_blank");
    }
  };

  return (
    <section
      id="articles"
      className="dark-container"
      style={{ padding: "60px 0 80px 0" }}
    >
      <div className="dark-full-container">
        <div className="dark-content-container">
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              className="display-large artistic-heading"
              style={{ marginBottom: "24px" }}
            >
              Sci-Fi Articles Samples
            </h2>

            <p
              className="body-large"
              style={{
                maxWidth: "700px",
                margin: "0 auto",
                color: "var(--text-secondary)",
              }}
            >
              See how we've helped companies make their breakthroughs tangible
              through literal publications from tomorrow.
            </p>
          </div>

          {/* Articles Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "40px",
              marginBottom: "60px",
            }}
          >
            {articles.map((article) => (
              <div
                key={article.id}
                className="dark-hover"
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "0px",
                  overflow: "hidden",
                  cursor: article.pdf_url ? "pointer" : "default",
                  transition: "all 0.4s ease-in-out",
                }}
                onClick={() => handleArticleClick(article)}
              >
                {/* Article Cover */}
                <div
                  style={{
                    height: "300px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={article.cover_image || article.coverImage}
                    alt={`${article.title} cover`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      background: "var(--brand-primary)",
                      color: "#000000",
                      padding: "8px 16px",
                      borderRadius: "0px",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    {article.year}
                  </div>

                  {article.pdf_url && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        right: "0",
                        background:
                          "linear-gradient(transparent, rgba(0,0,0,0.8))",
                        padding: "40px 24px 24px 24px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          color: "white",
                        }}
                      >
                        <Eye size={20} />
                        <span className="body-small">Click to Read</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Article Info */}
                <div style={{ padding: "24px" }}>
                  <h3 className="heading-3" style={{ marginBottom: "16px" }}>
                    {article.title}
                  </h3>

                  <p
                    className="body-small"
                    style={{
                      color: "var(--text-secondary)",
                      marginBottom: "20px",
                      lineHeight: "1.5",
                    }}
                  >
                    {article.description}
                  </p>

                  {/* Industries Tags */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "20px",
                    }}
                  >
                    {article.industries.map((industry, index) => (
                      <span
                        key={index}
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          color: "var(--text-primary)",
                          padding: "4px 12px",
                          borderRadius: "0px",
                          fontSize: "12px",
                          fontWeight: "400",
                          border: "1px solid var(--border-subtle)",
                        }}
                      >
                        {industry}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "var(--brand-primary)",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    <span>{article.pdf_url ? "Read" : "Read Preview"}</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleSamplesSection;
