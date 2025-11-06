import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FlagshipSection from "./components/FlagshipSection";
import AboutSection from "./components/AboutSection";
import ArticleSamplesSection from "./components/ArticleSamplesSection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";

// Home page component
const HomePage = () => (
  <div>
    <HeroSection />
    <div className="section-separator"></div>
    <FlagshipSection />
    <div className="section-separator"></div>
    <ArticleSamplesSection />
    <div className="section-separator"></div>
    <AboutSection />
    <div className="section-separator"></div>
    <TeamSection />
    <div className="section-separator"></div>
    <ServicesSection />
    <div className="section-separator"></div>
    <ContactSection />
  </div>
);

function App() {
  return (
    <HashRouter>
      <div className="dark-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogSection />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
