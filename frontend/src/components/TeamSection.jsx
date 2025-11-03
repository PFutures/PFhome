import React, { useState, useEffect } from "react";
import { Linkedin, Mail, User } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get(`${API}/team`);
      setTeamMembers(response.data);
    } catch (error) {
      console.error("Error fetching team members:", error);
      setError("Failed to load team members");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section
        id="team"
        className="dark-container"
        style={{ padding: "60px 0 80px 0" }}
      >
        <div className="dark-full-container">
          <div
            className="dark-content-container"
            style={{ textAlign: "center" }}
          >
            <p
              className="body-large"
              style={{ color: "var(--text-secondary)" }}
            >
              Loading our team...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="team"
        className="dark-container"
        style={{ padding: "60px 0 80px 0" }}
      >
        <div className="dark-full-container">
          <div
            className="dark-content-container"
            style={{ textAlign: "center" }}
          >
            <p className="body-large" style={{ color: "#ff4444" }}>
              {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="team"
      className="dark-container"
      style={{ padding: "120px 0" }}
    >
      <div className="dark-full-container">
        <div className="dark-content-container">
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              className="display-large artistic-heading"
              style={{ marginBottom: "24px" }}
            >
              Meet the Polymaths
            </h2>
          </div>
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "40px",
                marginBottom: "40px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "48px",
                    fontWeight: "700",
                    lineHeight: "1",
                    marginBottom: "8px",
                    color: "var(--brand-primary)",
                  }}
                >
                  200+
                </div>
                <p
                  style={{
                    margin: "0",
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Global Network
                </p>
              </div>
              <div
                style={{
                  width: "1px",
                  height: "60px",
                  background:
                    "linear-gradient(180deg, transparent 0%, var(--brand-primary) 50%, transparent 100%)",
                  opacity: "0.5",
                }}
              ></div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "20px 30px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    fontWeight: "400",
                  }}
                >
                  Scientists
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    fontWeight: "400",
                  }}
                >
                  Startups
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    fontWeight: "400",
                  }}
                >
                  Visionaries
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    fontWeight: "400",
                  }}
                >
                  Experts
                </div>
              </div>
            </div>
          </div>

          <p
            className="body-large"
            style={{
              marginBottom: "40px",
              maxWidth: "800px",
              margin: "0 auto ",
              color: "var(--text-secondary)",
              textAlign: "center",
            }}
          >
            <span
              style={{
                color: "var(--brand-primary)",
              }}
            >
              Polymathic Futures&nbsp;
            </span>
            is a collaborative network of{" "}
            <span
              style={{
                color: "var(--brand-primary)",
              }}
            >
              200+ Scholars, scientists, strategists, polymaths and storytellers
            </span>{" "}
            shaping future-focused solutions across industries and continents.
            We bring together rigorous data and deep human insight to translate
            <span
              style={{
                color: "var(--brand-primary)",
              }}
            >
              &nbsp;science into strategy
            </span>
            , and{" "}
            <span
              style={{
                color: "var(--brand-primary)",
              }}
            >
              imagination into impact.
            </span>
          </p>
          {/* Team Grid 
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "40px",
              marginBottom: "60px",
            }}
          >
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="dark-hover"
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "0px",
                  overflow: "hidden",
                  transition: "all 0.4s ease-in-out",
                }}
              >

                <div
                  style={{
                    height: "400px",
                    position: "relative",
                    overflow: "hidden",
                    background: "var(--bg-primary)",
                  }}
                >
                  {member.photo_url ? (
                    <img
                      src={member.photo_url}
                      alt={member.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "var(--bg-primary)",
                      }}
                    >
                      <User size={80} color="var(--brand-primary)" />
                    </div>
                  )}

                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      right: "0",
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,0.9))",
                      padding: "40px 24px 24px 24px",
                    }}
                  >
                    <p
                      className="body-small"
                      style={{
                        color: "var(--brand-primary)",
                        fontWeight: "500",
                        marginBottom: "4px",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>

                <div style={{ padding: "32px" }}>
                  <h3 className="heading-2" style={{ marginBottom: "8px" }}>
                    {member.name}
                  </h3>

                  <p
                    className="body-medium"
                    style={{
                      color: "var(--text-secondary)",
                      marginBottom: "24px",
                      lineHeight: "1.6",
                    }}
                  >
                    {member.bio}
                  </p>

                  <div style={{ marginBottom: "24px" }}>
                    <h4
                      className="body-large"
                      style={{
                        marginBottom: "16px",
                        color: "var(--text-primary)",
                        fontWeight: "600",
                      }}
                    >
                      Expertise:
                    </h4>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                      }}
                    >
                      {member.expertise.map((skill, index) => (
                        <span
                          key={index}
                          style={{
                            background: "rgba(255, 255, 255, 0.1)",
                            color: "var(--text-primary)",
                            padding: "6px 12px",
                            borderRadius: "0px",
                            fontSize: "14px",
                            fontWeight: "400",
                            border: "1px solid var(--border-subtle)",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                 
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      paddingTop: "16px",
                      borderTop: "1px solid var(--border-subtle)",
                    }}
                  >
                    <a
                      href={member.linkedin || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "var(--brand-primary)",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "14px",
                        padding: "8px",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.color = "var(--text-primary)")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.color = "var(--brand-primary)")
                      }
                    >
                      <Linkedin size={16} />
                      Connect
                    </a>

                    <button
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "var(--brand-primary)",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "14px",
                        padding: "8px",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.color = "var(--text-primary)")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.color = "var(--brand-primary)")
                      }
                    >
                      <Mail size={16} />
                      Email
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        */}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
