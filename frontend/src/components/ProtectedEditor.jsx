import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import ContentEditor from "./ContentEditor";

const ProtectedEditor = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = () => {
      const authenticated = localStorage.getItem("editor_authenticated");
      const authTime = localStorage.getItem("editor_auth_time");
      
      if (authenticated === "true" && authTime) {
        // Check if session is still valid (24 hours)
        const timeDiff = Date.now() - parseInt(authTime, 10);
        const hoursDiff = timeDiff / (1000 * 60 * 60);
        
        if (hoursDiff < 24) {
          setIsAuthenticated(true);
        } else {
          // Session expired
          localStorage.removeItem("editor_authenticated");
          localStorage.removeItem("editor_auth_time");
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
      setIsChecking(false);
    };

    checkAuth();
  }, []);

  const handleLogin = (success) => {
    if (success) {
      setIsAuthenticated(true);
    }
  };

  if (isChecking) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "var(--bg-primary)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ color: "var(--text-secondary)" }}>Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return <ContentEditor />;
};

export default ProtectedEditor;

