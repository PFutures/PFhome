import React, { useState, useEffect } from "react";

const BlogSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blog articles from backend
    const fetchArticles = async () => {
      try {
        const backendUrl =
          import.meta.env.REACT_APP_BACKEND_URL ||
          process.env.REACT_APP_BACKEND_URL;
        const response = await fetch(`${backendUrl}/api/articles`);
        if (response.ok) {
          const data = await response.json();
          setArticles(data);
        }
      } catch (error) {
        console.log("Using mock articles data");
        // Mock articles for now
        setArticles([
          {
            id: "1",
            title: "The Futures of Deathcare",
            excerpt:
              "Exploring how we might reimagine death, memory, and legacy in the coming decades — from digital afterlives to new rituals of physical deathcare and remembrance.",
            date: "2025-01-08",
            readTime: "8 min read",
            category: "Urban Futures",
            image:
              "https://customer-assets.emergentagent.com/job_polymathic-futures/artifacts/ds0qdo26_c57a247f-8edd-48ed-904c-e504ac284ed8.png",
          },
          {
            id: "2",
            title: "The Futures of Entrepreneurship",
            excerpt:
              "How the nature of starting, building, and scaling ventures will transform as technology, society, and human values evolve (or not).",
            date: "2025-01-05",
            readTime: "10 min read",
            category: "Healthcare Innovation",
            image:
              "https://customer-assets.emergentagent.com/job_polymathic-futures/artifacts/rdjahfk1_1710260430391.jpg",
          },
          {
            id: "3",
            title: "The Futures of History",
            excerpt:
              "We used to think of history as a sequence of events. But what if it is an ecosystem — one that metabolizes its own past? And who will be the historians — humans, machines, or hybrid intelligences that experience time differently?",
            date: "2025-01-02",
            readTime: "12 min read",
            category: "Space Economics",
            image:
              "https://customer-assets.emergentagent.com/job_polymathic-futures/artifacts/6eeog62i_454712213_10234137831286286_8818064517673223800_n.jpg",
          },
        ]);
      }
      setLoading(false);
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <section
        id="blog"
        className="dark-container"
        style={{ padding: "60px 0 80px 0" }}
      >
        <div className="dark-full-container">
          <div className="dark-content-container">
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "var(--text-secondary)" }}>
                Loading articles...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="blog"
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
              Multidimensional Futures
            </h2>
            <p
              className="body-large"
              style={{
                maxWidth: "600px",
                margin: "0 auto",
                color: "var(--text-secondary)",
              }}
            >
              Explore the intersection of science, strategy, and imagination
              through our collection of forward-thinking articles.
            </p>
          </div>

          {/* Articles Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "40px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {articles.map((article, index) => (
              <article
                key={article.id}
                style={{
                  background: "rgba(0, 255, 209, 0.03)",
                  border: "1px solid rgba(0, 255, 209, 0.15)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0, 255, 209, 0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Article Image */}
                <div
                  style={{
                    height: "240px",
                    backgroundImage: `url(${article.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "20px",
                      left: "20px",
                      background: "rgba(0, 255, 209, 0.9)",
                      color: "black",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: "500",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {article.category}
                  </div>
                </div>

                {/* Article Content */}
                <div style={{ padding: "30px" }}>
                  {/* Meta Information */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "16px",
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span>
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span>{article.readTime}</span>
                  </div>

                  {/* Article Title */}
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "600",
                      color: "var(--text-primary)",
                      marginBottom: "16px",
                      lineHeight: "1.3",
                    }}
                  >
                    {article.title}
                  </h3>

                  {/* Article Excerpt */}
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      lineHeight: "1.6",
                      marginBottom: "24px",
                    }}
                  >
                    {article.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div
                    style={{
                      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                      paddingTop: "20px",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--brand-primary)",
                        fontWeight: "500",
                        cursor: "pointer",
                        transition: "color 0.3s ease",
                      }}
                    >
                      Coming soon
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div
            style={{
              textAlign: "center",
              marginTop: "60px",
              padding: "40px",
              background: "rgba(255, 255, 255, 0.02)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                color: "var(--brand-primary)",
                marginBottom: "16px",
              }}
            >
              More Articles Coming Soon
            </h3>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "16px",
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              We're continuously exploring the frontiers of science and
              strategy. New insights and analyses will be published regularly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
