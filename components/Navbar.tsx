import React, { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "HOME" },
  { href: "#menu", label: "THE MENU" },
  { href: "#locations", label: "LOCATIONS" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-10 ${isScrolled ? "bg-black/95 backdrop-blur-md py-6 shadow-2xl" : "bg-transparent"}`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Logo Section - Left */}
        <div className="flex items-center space-x-4 group cursor-pointer">
          <div className="w-10 h-10 border gold-border flex items-center justify-center transition-all bg-black/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
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
          <span className="text-2xl font-bold tracking-[0.3em] gold-text uppercase">
            D'CIKA
          </span>
        </div>

        {/* Links navigation */}
        <div className="hidden lg:flex items-center space-x-12 text-[11px] font-bold tracking-[0.35em] text-white/90 uppercase">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-yellow-400 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA - Right */}
        <div className="hidden md:block">
          <button className="border border-white/30 px-8 py-2.5 text-[10px] font-bold tracking-[0.25em] text-white uppercase hover:bg-white hover:text-black transition-all">
            ORDER ONLINE
          </button>
        </div>

        {/* this is for Mobile Toggle */}
        <div className="lg:hidden text-white">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      <div
        className={`absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 shadow-2xl flex flex-col items-center justify-start py-10 space-y-6 text-sm font-bold tracking-[0.25em] text-white/90 uppercase transition-all duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-5 invisible"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-yellow-400 transition-all duration-300 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
