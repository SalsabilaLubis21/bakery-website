import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-black backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center h-24">
          {/* Logo Section */}
          <div className="flex justify-start">
            <a href="#home" className="flex items-center space-x-3">
              <div className="w-10 h-10 border-2 gold-border flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-cake gold-text"
                >
                  <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path>
                  <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"></path>
                  <path d="M2 21h20"></path>
                  <path d="M7 8v3"></path>
                  <path d="M12 8v3"></path>
                  <path d="M17 8v3"></path>
                  <path d="M7 4h.01"></path>
                  <path d="M12 4h.01"></path>
                  <path d="M17 4h.01"></path>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-[0.2em] text-white uppercase">
                D'Cika
              </span>
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex justify-center items-center space-x-10">
            <a
              href="#home"
              className="text-sm font-bold tracking-widest text-gray-300 hover:text-white uppercase transition-colors whitespace-nowrap"
            >
              Home
            </a>
            <a
              href="#menu"
              className="text-sm font-bold tracking-widest text-gray-300 hover:text-white uppercase transition-colors whitespace-nowrap"
            >
              The Menu
            </a>
            <a
              href="#locations"
              className="text-sm font-bold tracking-widest text-gray-300 hover:text-white uppercase transition-colors whitespace-nowrap"
            >
              Locations
            </a>
          </nav>

          {/* Mobile Menu Button - Right Aligned */}
          <div className="flex justify-end md:hidden">
            <button
              className="text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMenuOpen ? (
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                ) : (
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                )}
                {isMenuOpen ? (
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                ) : (
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                )}
                {isMenuOpen ? null : (
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                )}
              </svg>
            </button>
          </div>
          
          {/* Empty div for desktop layout balance if needed, but grid-cols-3 handles it implicitly by leaving 3rd col empty if not specified? 
              Wait, in grid-cols-3, we need 3 children. 
              Child 1: Logo
              Child 2: Nav
              Child 3: Empty/Placeholder (hidden on mobile, visible on desktop to balance grid) 
          */}
          <div className="hidden md:block"></div>
        </div>
      </div>

      {/* Mobile Menu Drawer & Backdrop */}
      <div className="md:hidden">
        {/* Backdrop (Dimmed Background) */}
        <div 
          className={`fixed inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity duration-500 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
          style={{ top: '6rem' }} 
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Drawer Panel (50% Height) */}
        <div 
          className={`absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-[#D4AF37]/30 shadow-[0_15px_40px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-[50vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="h-[50vh] flex flex-col justify-center items-center w-full">
            <ul className="flex flex-col items-center space-y-8">
              <li className={`transform transition-all duration-500 delay-100 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
                <a
                  href="#home"
                  className="text-2xl font-bold tracking-widest text-white uppercase hover:text-[#D4AF37] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li className={`transform transition-all duration-500 delay-200 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
                <a
                  href="#menu"
                  className="text-2xl font-bold tracking-widest text-white uppercase hover:text-[#D4AF37] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  The Menu
                </a>
              </li>
              <li className={`transform transition-all duration-500 delay-300 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
                <a
                  href="#locations"
                  className="text-2xl font-bold tracking-widest text-white uppercase hover:text-[#D4AF37] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Locations
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
