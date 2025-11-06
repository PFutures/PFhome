import React, { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Default password - should be changed in production
  // You can set this via environment variable or change it directly
  const ADMIN_PASSWORD = process.env.REACT_APP_EDITOR_PASSWORD || "admin123";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate a small delay for better UX
    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        // Store auth in localStorage
        localStorage.setItem("editor_authenticated", "true");
        localStorage.setItem("editor_auth_time", Date.now().toString());
        onLogin(true);
      } else {
        setError("Incorrect password. Please try again.");
        setPassword("");
      }
      setIsLoading(false);
    }, 300);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "var(--bg-secondary)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "12px",
          padding: "40px",
          maxWidth: "400px",
          width: "100%",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: "var(--brand-primary)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
            }}
          >
            <Lock size={32} color="#000000" />
          </div>
          <h1
            style={{
              color: "var(--text-primary)",
              marginBottom: "8px",
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            Content Editor Login
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
            Enter password to access the editor
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                color: "var(--text-primary)",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                placeholder="Enter password"
                autoFocus
                style={{
                  width: "100%",
                  padding: "12px 48px 12px 16px",
                  background: "var(--bg-primary)",
                  border: error
                    ? "1px solid #ff4444"
                    : "1px solid var(--border-medium)",
                  borderRadius: "8px",
                  color: "var(--text-primary)",
                  fontSize: "16px",
                  fontFamily: "inherit",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--brand-primary)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = error
                    ? "#ff4444"
                    : "var(--border-medium)";
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  color: "var(--text-secondary)",
                  cursor: "pointer",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {error && (
              <p
                style={{
                  color: "#ff4444",
                  fontSize: "14px",
                  marginTop: "8px",
                  margin: 0,
                }}
              >
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading || !password}
            style={{
              width: "100%",
              padding: "14px",
              background:
                isLoading || !password
                  ? "var(--border-subtle)"
                  : "var(--brand-primary)",
              color:
                isLoading || !password ? "var(--text-secondary)" : "#000000",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: isLoading || !password ? "not-allowed" : "pointer",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {isLoading ? "Checking..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
