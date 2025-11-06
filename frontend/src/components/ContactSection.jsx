import React, { useState } from "react";
import { consultationTypes } from "./mock";
import {
  Send,
  Calendar,
  Users,
  Mail,
  MapPin,
  ArrowRight,
  Linkedin,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiry_type: "consultation",
    consultation_type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitError("");

    // Simulate form submission (mock - no backend call)
    setTimeout(() => {
      // Validate consultation type if inquiry type is consultation
      if (
        formData.inquiry_type === "consultation" &&
        !formData.consultation_type
      ) {
        setSubmitError(
          "Consultation type is required for consultation inquiries"
        );
        setIsSubmitting(false);
        return;
      }

      // Success response
      setSubmitMessage("Thank you! We'll be in touch within 24 hours.");
      setFormData({
        name: "",
        email: "",
        company: "",
        inquiry_type: "consultation",
        consultation_type: "",
        message: "",
      });
      setIsSubmitting(false);

      // Log the submission (in a real app, you might want to send this to a service)
      console.log("Form submission:", formData);
    }, 500);
  };

  return (
    <section
      id="contact"
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
              Let's Prototype Your Futures
            </h2>

            <p
              className="body-large"
              style={{
                maxWidth: "700px",
                margin: "0 auto",
                color: "var(--text-secondary)",
              }}
            >
              Ready to own your story in tomorrow's world? Schedule a
              consultation or explore partnership opportunities with our team.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 500px), 1fr))",
              gap: "60px",
              alignItems: "start",
            }}
          >
            {/* Contact Info & CTA */}
            <div>
              {/* Direct Contact */}
              <div
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "0px",
                  padding: "40px",
                  marginBottom: "32px",
                }}
              >
                <h3 className="heading-2" style={{ marginBottom: "24px" }}>
                  Direct Contact
                </h3>

                {/* Updated contact information */}
                <div style={{ marginBottom: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "16px",
                    }}
                  >
                    <Mail size={20} color="var(--brand-primary)" />
                    <span
                      className="body-medium"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      contact@polymathicfutures.com
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "16px",
                    }}
                  >
                    <MapPin size={20} color="var(--brand-primary)" />
                    <span
                      className="body-medium"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Global • Remote-First
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <Linkedin size={20} color="var(--brand-primary)" />
                    <a
                      href="https://www.linkedin.com/company/polymathic-futures/"
                      className="body-medium"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      linkedin.com/company/polymathic-futures/
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "0px",
                  padding: "40px",
                }}
              >
                <h3
                  className="heading-3"
                  style={{
                    marginBottom: "20px",
                    color: "var(--brand-primary)",
                  }}
                >
                  Response Time
                </h3>

                <p
                  className="body-medium"
                  style={{
                    color: "var(--text-secondary)",
                    marginBottom: "16px",
                  }}
                >
                  We typically respond within 24 hours for consultation
                  inquiries and within 48 hours for partnership discussions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
