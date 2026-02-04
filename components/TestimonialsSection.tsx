import React, { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    text: "Gila sih ini Tiramisu-nya enak banget! Lembut, kopinya kerasa, manisnya pas ga bikin eneg. Fix bakal langganan!",
    name: "Sarah Wijaya",
    role: "Verified Customer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    rating: 5,
  },
  {
    id: 2,
    text: "Baru pertama kali coba Opera Cake-nya, langsung jatuh cinta. Layer-nya rapi banget, rasanya premium.",
    name: "Budi Santoso",
    role: "Food Blogger",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    rating: 5,
  },
  {
    id: 3,
    text: "Pesen buat ulang tahun istri, dia suka banget. Packagingnya juga mewah, cocok buat gift.",
    name: "Aditya Pratama",
    role: "Verified Customer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    rating: 5,
  },
  {
    id: 4,
    text: "Croissant-nya flaky dan buttery banget. Salah satu yang terbaik di kota ini sih menurutku.",
    name: "Jessica Tan",
    role: "Coffee Lover",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    rating: 5,
  },
  {
    id: 5,
    text: "Pelayanannya ramah, tempatnya nyaman. Tapi yang paling juara emang kue-kuenya. The best!",
    name: "Rina Kusuma",
    role: "Verified Customer",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 0.5;
    let animationId: number;

    const step = () => {
      if (!isPaused) {
        scrollAmount += speed;

        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft = scrollAmount;
        }
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const displayTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-24 bg-black border-t border-white/5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center relative z-10">
        <h4 className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-4">
          Testimonials
        </h4>
        <h2 className="text-3xl md:text-5xl font-serif text-white">
          What They Say
        </h2>
      </div>

      <div
        className="relative w-full overflow-visible"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-8 px-6 no-scrollbar"
          style={{
            scrollBehavior: "auto",
            WebkitOverflowScrolling: "touch",
            maskImage:
              "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)",
          }}
        >
          {displayTestimonials.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-none w-[85vw] md:w-[400px] snap-center"
            >
              <div className="bg-[#1A1A1A] p-6 rounded-2xl rounded-bl-none border border-white/5 relative mb-6">
                <div className="absolute -bottom-3 left-0 w-6 h-6 bg-[#1A1A1A] border-r border-b border-white/5 transform skew-x-[20deg] hidden"></div>

                <div className="absolute top-4 right-4 text-[#D4AF37]/20">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                  </svg>
                </div>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              <div className="flex items-center space-x-4 pl-2">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-[#D4AF37]/50"
                  />
                  {/* Verified Badge */}
                  <div className="absolute -bottom-1 -right-1 bg-[#D4AF37] rounded-full p-0.5">
                    <svg
                      className="w-3 h-3 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>

                <div>
                  <h5 className="text-white font-bold text-sm">{item.name}</h5>
                  <div className="flex items-center space-x-2 mt-0.5">
                    <div className="flex text-[#D4AF37]">
                      {[...Array(item.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-3 h-3 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
