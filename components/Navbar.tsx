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
          ? "bg-black/80 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative flex justify-between items-center h-24">
          <a href="#home" className="flex items-center space-x-3">
            <div className="w-10 h-10 border-2 gold-border flex items-center justify-center">
              <svg
                xmlns=" `http://www.w3.org/2000/svg` "
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

          <nav className="hidden md:flex items-center space-x-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <a
              href="#home"
              className="text-sm font-bold tracking-widest text-gray-300 hover:text-white uppercase transition-colors"
            >
              Home
            </a>
            <a
              href="#menu"
              className="text-sm font-bold tracking-widest text-gray-300 hover:text-white uppercase transition-colors"
            >
              The Menu
            </a>
            <a
              href="#locations"
              className="text-sm font-bold tracking-widest text-gray-300 hover:text-white uppercase transition-colors"
            >
              Locations
            </a>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns=" `http://www.w3.org/2000/svg` "
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
              {isMenuOpen ? null : <line x1="3" y1="18" x2="21" y2="18"></line>}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black bg-opacity-90 backdrop-blur-sm md:hidden flex flex-col items-center pt-8 pb-12">
          <ul className="flex flex-col items-center space-y-8">
            <li>
              <a
                href="#home"
                className="text-lg font-bold tracking-widest text-white uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="text-lg font-bold tracking-widest text-white uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                The Menu
              </a>
            </li>
            <li>
              <a
                href="#locations"
                className="text-lg font-bold tracking-widest text-white uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Locations
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
