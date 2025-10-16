import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    <FlagshipSection />
    <ArticleSamplesSection />
    <AboutSection />
    <TeamSection />
    <ServicesSection />
    <ContactSection />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="dark-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogSection />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
