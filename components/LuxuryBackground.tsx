import React from "react";

const LuxuryBackground: React.FC = () => {
  const particles = React.useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.2, // Increased opacity: 0.2 - 0.6
    }));
  }, []);

  const sparkles = React.useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 1. Ambient Moving Glows (The "Living" Atmosphere) - Reduced Opacity */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#D4AF37] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.08] animate-blob"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#B8860B] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.06] animate-blob animation-delay-2000"></div>
      <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-[#FFD700] rounded-full mix-blend-screen filter blur-[100px] opacity-[0.05] animate-blob animation-delay-4000"></div>

      {/* 2. Floating Gold Dust (Base Texture) */}
      {particles.map((p) => (
        <div
          key={`dust-${p.id}`}
          className="absolute bg-[#D4AF37] rounded-full blur-[0.5px]"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `float ${p.duration}s linear infinite`,
            animationDelay: `-${p.delay}s`,
          }}
        />
      ))}

      {/* 3. Twinkling Sparkles (Eye-catching accents) */}
      {sparkles.map((s) => (
        <div
          key={`sparkle-${s.id}`}
          className="absolute bg-white rounded-full shadow-[0_0_12px_3px_rgba(212,175,55,0.8)]"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animation: `twinkle ${s.duration}s ease-in-out infinite`,
            animationDelay: `-${s.delay}s`,
          }}
        />
      ))}

      <style>{`
         @keyframes blob {
           0% { transform: translate(0px, 0px) scale(1); }
           33% { transform: translate(30px, -50px) scale(1.1); }
           66% { transform: translate(-20px, 20px) scale(0.9); }
           100% { transform: translate(0px, 0px) scale(1); }
         }
         @keyframes float {
           0% { transform: translateY(0) translateX(0); opacity: 0; }
           10% { opacity: 1; }
           90% { opacity: 1; }
           100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
         }
         @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.4); box-shadow: 0 0 15px 4px rgba(255, 215, 0, 0.9); }
         }
         .animate-blob {
            animation: blob 20s infinite alternate;
         }
         .animation-delay-2000 {
            animation-delay: 2s;
         }
         .animation-delay-4000 {
            animation-delay: 4s;
         }
       `}</style>
    </div>
  );
};

export default LuxuryBackground;
