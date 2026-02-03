import React, { useEffect, useRef, useState } from "react";
import LuxuryBackground from "./LuxuryBackground";

// Hook for scroll animation
const useOnScreen = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isVisible] as const;
};

const FadeIn: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const AboutUsSection: React.FC = () => {
  return (
    <section
      id="about-us"
      className="bg-black text-white overflow-hidden relative -mt-32 z-10"
    >
      {/* Background Texture/Gradient for overall section */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-10"></div>

      {/* 1. Hero Section - First Impression */}
      <div className="relative min-h-[85vh] flex flex-col items-center justify-between overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          {/* Dimmed animation for better text readability but still visible */}
          <div className="opacity-50">
            <LuxuryBackground />
          </div>

          {/* Dark overlay to reduce brightness further */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Subtle gold gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        {/* Spacer for top balance if needed, or just let content center */}

        {/* Content */}
        <div className="flex-grow flex items-center justify-center w-full z-10">
          <div className="text-center px-6 max-w-4xl mt-52">
            <FadeIn>
              <span className="text-[#D4AF37] text-sm font-bold tracking-[0.3em] uppercase mb-6 block drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Welcome to D'Cika Patisserie
              </span>
              <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 drop-shadow-xl leading-tight">
                Tentang{" "}
                <span
                  style={{
                    background: "linear-gradient(to right, #D4AF37, #F3E5AB)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Kami
                </span>
              </h1>
              <p className="text-xl md:text-3xl text-gray-200 font-light italic tracking-wide max-w-2xl mx-auto leading-relaxed">
                “Dari dapur kecil hingga menemani momen spesial Anda”
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Mouse Scroll Indicator */}
        <div className="pb-4 mt-16 md:mt-0 flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity duration-300 z-10">
          <div className="w-[30px] h-[50px] rounded-[15px] border-2 border-[#D4AF37] flex justify-center p-1 relative shadow-[0_0_10px_rgba(212,175,55,0.3)]">
            <div className="w-[4px] h-[8px] bg-[#D4AF37] rounded-full animate-scroll-wheel"></div>
          </div>
        </div>

        <style>{`
          @keyframes scroll-wheel {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(20px); opacity: 0; }
          }
          .animate-scroll-wheel {
            animation: scroll-wheel 2s infinite;
          }
        `}</style>
      </div>

      {/* 2. Story Section - Cerita Brand */}
      <div
        id="story"
        className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32"
      >
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="order-2 md:order-1 space-y-8 text-lg leading-relaxed font-light relative">
            <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent hidden md:block"></div>

            <FadeIn>
              <h3 className="text-[#D4AF37] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                Our Story
              </h3>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
                Menciptakan Kebahagiaan <br />
                <span className="italic text-[#D4AF37]">di Setiap Gigitan</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-gray-300">
                Kami adalah bakery yang berkomitmen menghadirkan kue berkualitas
                tinggi dengan rasa yang konsisten dan tampilan yang menarik.
                Setiap produk dibuat secara higienis, menggunakan bahan
                berkualitas, serta melalui proses produksi yang terkontrol.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-gray-300">
                Kami melayani berbagai kebutuhan, mulai dari kue harian, ulang
                tahun, hingga custom cake untuk acara spesial. Dengan fokus pada
                kualitas, detail, dan kepuasan pelanggan, kami terus berinovasi
                untuk menghadirkan pengalaman terbaik di setiap gigitan.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="pt-6">
                <span className="font-signature text-4xl text-[#D4AF37] opacity-90 transform -rotate-6 inline-block">
                  Chef d'Cika
                </span>
              </div>
            </FadeIn>
          </div>

          <div className="order-1 md:order-2 relative flex justify-center items-center">
            <FadeIn delay={0.3}>
              <div className="relative w-full max-w-md mx-auto">
                <div className="relative group">
                  <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-t-[10rem] rounded-b-3xl transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>

                  <div className="relative rounded-t-[10rem] rounded-b-3xl overflow-hidden shadow-2xl border-b-4 border-[#D4AF37]">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img
                      src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=800"
                      alt="Our Chef"
                      className="w-full h-[350px] md:h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-20">
                      <p className="text-[#D4AF37] font-signature text-3xl text-center">
                        Made with Passion
                      </p>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -right-6 bg-[#0a0a0a] border border-[#D4AF37] w-24 h-24 rounded-full flex items-center justify-center shadow-xl z-30 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-center">
                      <span className="block text-[#D4AF37] font-bold text-xl">
                        10+
                      </span>
                      <span className="block text-[10px] text-gray-400 uppercase tracking-wider">
                        Years Exp
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* 3. Values Section - Nilai & Keunggulan */}
      <div className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                ),
                title: "Bahan Berkualitas",
                desc: "Menggunakan bahan pilihan tanpa pengawet",
              },
              {
                icon: (
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                ),
                title: "Fresh Setiap Hari",
                desc: "Dipanggang setiap pagi untuk rasa terbaik",
              },
              {
                icon: (
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                ),
                title: "Dibuat dengan Cinta",
                desc: "Passion kami ada di setiap detail kue",
              },
              {
                icon: (
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                ),
                title: "Custom & Personal",
                desc: "Wujudkan kue impian sesuai keinginanmu",
              },
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-[#1a1a1a] p-8 rounded-xl border border-[#333] hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-all duration-300 group text-center h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors duration-300 ring-1 ring-[#D4AF37]/30 group-hover:ring-[#D4AF37]">
                      <svg
                        className="w-8 h-8 fill-[#D4AF37] group-hover:fill-[#0a0a0a] transition-colors duration-300"
                        viewBox="0 0 24 24"
                      >
                        {item.icon}
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Process Section - Cara Kami Membuat Kue */}
      <div className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
            Proses Di Balik Layar
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Connecting Line yg ada di Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#333] -translate-y-1/2 z-0">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent w-full opacity-50"></div>
          </div>

          {/* Connecting Line yg ada di Mobile */}
          <div className="md:hidden absolute top-0 bottom-0 left-1/2 w-0.5 bg-[#333] -translate-x-1/2 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {[
              {
                step: "01",
                title: "Pemilihan Bahan",
                desc: "Hanya yang terbaik",
              },
              { step: "02", title: "Proses Baking", desc: "Teknik presisi" },
              { step: "03", title: "Quality Check", desc: "Standar tinggi" },
              { step: "04", title: "Pengemasan", desc: "Aman & cantik" },
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <div className="bg-[#111] p-8 rounded-2xl border border-[#333] shadow-2xl relative group hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#0a0a0a] text-[#D4AF37] rounded-full flex items-center justify-center font-bold text-lg border-2 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.4)] z-20">
                    {item.step}
                  </div>
                  <div className="mt-6 text-center">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Call To Action (CTA) */}
      <div className="relative py-32 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=2000')",
          }}
        >
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <FadeIn>
            <div className="mb-8">
              <span className="inline-block p-3 rounded-full bg-[#D4AF37]/20 backdrop-blur-sm border border-[#D4AF37]/50 mb-6">
                <svg
                  className="w-6 h-6 text-[#D4AF37]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif mb-6">
              Pesan Kue Impian Anda Hari Ini
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
              Siap untuk merasakan kelezatan yang tak terlupakan? Hubungi kami
              untuk pemesanan custom atau jelajahi menu kami sekarang.
            </p>
            <button className="gold-bg text-black px-16 py-4 text-sm font-bold tracking-[0.25em] uppercase transition-all hover:bg-white hover:scale-105 shadow-[0_20px_60px_rgba(212,175,55,0.3)]">
              HUBUNGI KAMI
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
