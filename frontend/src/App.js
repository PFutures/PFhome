import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FlagshipSection from "./components/FlagshipSection";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="dark-container">
      <Header />
      <HeroSection />
      <FlagshipSection />
      <PortfolioSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
