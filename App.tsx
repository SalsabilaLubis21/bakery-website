import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUsSection from "./components/AboutUsSection";
import MenuSection from "./components/MenuSection";
import TestimonialsSection from "./components/TestimonialsSection";
import LocationsSection from "./components/LocationsSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <main>
        <Hero />
        <AboutUsSection />

        <div className="relative z-10">
          <MenuSection />
          <TestimonialsSection />

          <LocationsSection />
          <FAQSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
