import React, { useRef } from "react";
import { MENU_ITEMS } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const MenuSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotsContainerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = React.useState<any[]>([]);

  React.useEffect(() => {
    setParticles(
      Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        left: Math.random() * 100,
        duration: Math.random() * 10 + 5,
        delay: Math.random() * 5,
        isGold: Math.random() > 0.3,
      })),
    );
  }, []);

  useGSAP(
    () => {
      const items = MENU_ITEMS;
      const totalItems = items.length;

      //  timeline when scrolling each menu
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${(totalItems + 1) * 150}%`,
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      ).to(titleRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.in",
        delay: 0.5,
      });

      cardRefs.current.forEach((card) => {
        gsap.set(card, {
          opacity: 0,
          scale: 1.2,
          filter: "blur(10px)",
          pointerEvents: "none",
        });
      });

      gsap.set(dotsContainerRef.current, { opacity: 0, y: 20 });

      dotRefs.current.forEach((dot) => {
        gsap.set(dot, {
          opacity: 0.3,
          scale: 1,
          backgroundColor: "#666",
          boxShadow: "none",
        });
      });

      items.forEach((_, i) => {
        const currCard = cardRefs.current[i];
        const currDot = dotRefs.current[i];

        if (i === 0) {
          tl.to(
            dotsContainerRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
            },
            `slide-${i}-start`,
          );
        }

        tl.to(
          currCard,
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power2.out",
            pointerEvents: "auto",
          },
          `slide-${i}`,
        );

        // this is the animation for Active Dot when scrolling each menu
        tl.to(
          currDot,
          {
            opacity: 1,
            scale: 1.5,
            backgroundColor: "#D4AF37",
            boxShadow: "0 0 10px #D4AF37, 0 0 20px rgba(212, 175, 55, 0.5)",
            duration: 0.5,
            ease: "power2.out",
          },
          `slide-${i}`,
        );

        // Animate Out Current Card (if not last item)
        if (i < items.length - 1) {
          tl.to(
            currCard,
            {
              opacity: 0,
              scale: 0.8,
              filter: "blur(10px)",
              duration: 1,
              ease: "power2.in",
              pointerEvents: "none",
            },
            `slide-${i}-out`,
          );

          // Animate Inactive Dot
          tl.to(
            currDot,
            {
              opacity: 0.3,
              scale: 1,
              backgroundColor: "#666",
              boxShadow: "none",
              duration: 0.5,
              ease: "power2.in",
            },
            `slide-${i}-out`,
          );
        }
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="menu"
      className="relative bg-black text-white overflow-hidden -mt-1"
    >
      <div className="absolute inset-0 bg-radial-gradient from-[#1a1a1a] via-[#050505] to-[#000] z-0 pointer-events-none"></div>

      <div className="particles-container">
        {particles.map((p) => (
          <div
            key={p.id}
            className={`particle ${p.isGold ? "gold" : ""}`}
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="h-screen w-full flex items-center justify-center overflow-hidden relative">
        <div
          ref={titleRef}
          className="absolute inset-0 flex flex-col items-center justify-center z-50 text-center pointer-events-none mix-blend-screen"
        >
          <h4 className="text-[#D4AF37] text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4">
            Taste the Luxury
          </h4>
          <h2 className="text-5xl md:text-7xl font-serif text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
            Our Collection
          </h2>
          <div className="w-20 h-0.5 bg-[#D4AF37] mx-auto mt-6 rounded-full opacity-80"></div>
        </div>

        <div className="relative w-full max-w-4xl h-full flex flex-col items-center justify-center">
          {MENU_ITEMS.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-6 opacity-0"
            >
              <div className="relative z-20 flex flex-col items-center justify-center transform transition-transform duration-700 w-full flex-shrink-0">
                {/*menu name */}
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#D4AF37] mb-2 tracking-wide drop-shadow-lg shimmer-gold leading-tight">
                  {item.name}
                </h2>

                {/* Top Divider */}
                <div className="w-24 md:w-40 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-2 opacity-70"></div>

                {/* Description */}
                <p className="font-serif italic text-white/90 text-sm md:text-lg max-w-md mx-auto leading-snug drop-shadow-md flex items-center justify-center px-2">
                  {item.description}
                </p>

                {/* Price */}
                <p className="mt-2 text-[#D4AF37] text-lg md:text-2xl font-serif tracking-widest">
                  {item.price}
                </p>
              </div>

              {/* Image cake */}
              <div className="relative z-10 mt-4 flex-shrink-1 min-h-0 aspect-square h-[25vh] md:h-[40vh] max-h-[350px]">
                {/* glow effect on menu image */}
                <div className="absolute inset-0 bg-[#D4AF37] rounded-full filter blur-[40px] md:blur-[80px] opacity-20 animate-pulse"></div>

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-[#D4AF37]/20"
                  style={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  }}
                />

                <div className="absolute -top-4 -right-4 w-2 h-2 bg-[#D4AF37] rounded-full blur-[1px] animate-ping"></div>
                <div className="absolute bottom-8 -left-8 w-1.5 h-1.5 bg-white rounded-full blur-[0.5px] animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={dotsContainerRef}
          className="absolute bottom-8 md:bottom-12 left-0 w-full flex justify-center gap-4 z-30 pointer-events-none opacity-0"
        >
          {MENU_ITEMS.map((_, idx) => (
            <div
              key={idx}
              ref={(el) => {
                dotRefs.current[idx] = el;
              }}
              className="w-2 h-2 rounded-full bg-[#666] opacity-30"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
