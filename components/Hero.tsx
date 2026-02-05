import React from "react";
import LuxuryBackground from "./LuxuryBackground";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative z-20 h-auto md:h-[150vh] py-28 md:py-0 w-full flex items-center justify-center overflow-hidden pb-32"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 85%, transparent 100%)",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-no-repeat scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=2000')",
            backgroundPosition: "center 85%",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/90 to-transparent z-10"></div>

          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60"></div>
        </div>

        <div className="absolute inset-0 z-10 opacity-60">
          <LuxuryBackground />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-30 text-center max-w-6xl px-4 flex flex-col items-center">
        <p className="gold-text text-xs md:text-[13px] font-bold tracking-[0.5em] md:tracking-[0.7em] uppercase mb-10 opacity-90">
          EXPERIENCE PURE INDULGENCE
        </p>

        <div className="relative flex flex-col items-center mb-14">
          <h1 className="text-5xl sm:text-7xl md:text-[150px] lg:text-[200px] font-bold text-white tracking-tighter leading-none uppercase select-none transition-all duration-500">
            D'CIKA
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-[100px] lg:text-[120px] font-serif italic gold-text absolute -bottom-3 sm:-bottom-4 md:-bottom-10 leading-none drop-shadow-2xl transition-all duration-500">
            Patisserie
          </h2>
        </div>

        <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto font-medium leading-relaxed mb-14 mt-6">
          Where luxury meets flavor. Discover our artisanal selection of
          masterfully crafted cakes and pastries.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-5 sm:space-y-0 sm:space-x-8 w-full px-4 sm:px-0">
          <a href="#menu" className="w-full sm:w-auto gold-bg text-black px-16 py-4 text-[12px] font-bold tracking-[0.25em] uppercase transition-all hover:bg-white hover:scale-105 shadow-[0_20px_60px_rgba(212,175,55,0.3)] text-center block">
            EXPLORE MENU
          </a>
          <a href="#about-us" className="w-full sm:w-auto border border-white/30 bg-white/5 backdrop-blur-md text-white px-16 py-4 text-[12px] font-bold tracking-[0.25em] uppercase transition-all hover:bg-white hover:text-black flex items-center justify-center">
            OUR STORY
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
