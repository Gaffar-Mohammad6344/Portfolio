import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

// --- IMAGE IMPORTS (Maintain your existing imports) ---
import bb1 from "../assets/freelance/bb1.png";
import bb2 from "../assets/freelance/bb2.png";
import bb3 from "../assets/freelance/bb3.png";
import bb4 from "../assets/freelance/bb4.png";
import bb5 from "../assets/freelance/bb5.png";
import bb6 from "../assets/freelance/bb6.png";
import bb7 from "../assets/freelance/bb7.png";
import bb8 from "../assets/freelance/bb8.png";
import bb9 from "../assets/freelance/bb9.png";
import r1 from "../assets/freelance/r1 (1).png";
import r2 from "../assets/freelance/r2.png";
import r3 from "../assets/freelance/r3.png";
import r4 from "../assets/freelance/r4.png";
import r5 from "../assets/freelance/r5.png";
import r6 from "../assets/freelance/r6.png";
import linkedinPost from "../assets/freelance/Linkedin_post (14).png";
import paniPuri from "../assets/freelance/pani puri.png";

export const freelancingWorks = {
  bengaluruCafe: [
    { title: "Benne Bengaluru", image: bb1 },
    { title: "Benne Bengaluru", image: bb2 },
    { title: "Benne Bengaluru", image: bb3 },
    { title: "Benne Bengaluru", image: bb4 },
    { title: "Benne Bengaluru", image: bb5 },
    { title: "Benne Bengaluru", image: bb6 },
    { title: "Benne Bengaluru", image: bb7 },
    { title: "Benne Bengaluru", image: bb8 },
    { title: "Benne Bengaluru", image: bb9 },
  ],
  reviddDesigns: [
    { title: "Revidd", image: r1 },
    { title: "Revidd", image: r2 },
    { title: "Revidd", image: r3 },
    { title: "Revidd", image: r4 },
    { title: "Revidd", image: r5 },
    { title: "Revidd", image: r6 },
  ],
  otherDesigns: [
    { title: "LinkedIn Creative", image: linkedinPost },
    { title: "Pani Puri Branding", image: paniPuri },
  ]
};

const FreelancingWorks = () => {
  const allWorks = useMemo(() => {
    const combined = [
      ...freelancingWorks.bengaluruCafe.map((w) => ({ ...w, category: "BRANDING" })),
      ...freelancingWorks.reviddDesigns.map((w) => ({ ...w, category: "SOCIAL" })),
      ...freelancingWorks.otherDesigns.map((w) => ({ ...w, category: "CREATIVE" })),
    ];
    return combined.sort(() => Math.random() - 0.5);
  }, []);

  return (
    <section
      id="freelancing"
      className="relative py-20 lg:py-24 overflow-hidden border-y"
      style={{
        background: "var(--bg-secondary)",
        borderColor: "var(--border-color)",
        color: "var(--text-primary)",
      }}
    >
      {/* Background Grid Accent */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10">
        {/* --- HEADER --- */}
        <div className="px-6 lg:px-16 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[1px] bg-red-600" />
              <p className="text-red-500 text-[10px] font-black uppercase tracking-[0.5em]">
                Archive
              </p>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
              Visual<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-slate-600 to-slate-400">
                Identity
              </span>
            </h2>
          </motion.div>

          <div className="max-w-[280px] space-y-4">
            <p className="text-[11px] uppercase tracking-widest leading-relaxed opacity-60 border-l-2 border-red-600 pl-5">
              A curated stream of high-fidelity visual branding, social interfaces, and digital creative direction.
            </p>
          </div>
        </div>

        {/* --- CINEMATIC CAROUSEL --- */}
        <div className="cursor-grab active:cursor-grabbing py-4">
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={40}
            slidesPerView={"auto"}
            loop={true}
            speed={8000}
            freeMode={true}
            centeredSlides={true}
            autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
            className="cinematic-swiper !overflow-visible"
          >
            {allWorks.map((item, index) => (
              <SwiperSlide key={index} className="!w-auto">
                <div className={`relative transition-all duration-1000 ${index % 2 === 0 ? "mt-12" : "mb-12"}`}>
                  <div className="work-card-container relative h-[300px] w-[220px] md:h-[450px] md:w-[320px] overflow-hidden rounded-2xl border transition-all duration-700 bg-[#0A0A0B]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="work-image h-full w-full object-cover transition-all duration-1000 grayscale opacity-40"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="inline-block px-3 py-1 mb-3 text-[9px] font-black tracking-[0.2em] bg-red-600 text-white rounded-sm uppercase">
                          {item.category}
                        </span>
                        <h4 className="text-xl font-black text-white tracking-tighter leading-tight uppercase italic">
                          {item.title}
                        </h4>
                      </div>
                    </div>

                    {/* Technical Frame Decoration */}
                    <div className="absolute top-5 right-6 opacity-30">
                      <span className="text-[9px] font-mono text-white tracking-widest uppercase">
                        Ref_{String(index + 1).padStart(3, '0')}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* --- PREMIUM TECHNICAL FOOTER --- */}
        <div className="px-6 lg:px-16 mt-16 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-10">
          <div className="flex items-center gap-6">
            <div className="flex gap-1.5">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`h-1 w-1 rounded-full ${i < 3 ? "bg-red-600" : "bg-white/10"}`} />
              ))}
            </div>
            <span className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40">
              Auto-Scroll Calibration: Optimal
            </span>
          </div>

          <div className="flex items-center gap-8 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
            {/* NEW PREMIUM LIVE INDICATOR */}
            <div className="flex items-center gap-4">
               <div className="flex items-end gap-[3px] h-3">
                  <motion.div 
                    animate={{ height: [4, 12, 6, 10, 4] }} 
                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                    className="w-[2px] bg-red-600" 
                  />
                  <motion.div 
                    animate={{ height: [10, 4, 12, 6, 8] }} 
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-[2px] bg-red-600" 
                  />
                  <motion.div 
                    animate={{ height: [6, 10, 4, 12, 10] }} 
                    transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                    className="w-[2px] bg-red-600" 
                  />
               </div>
               <div className="flex flex-col">
                  <span className="text-[8px] font-black text-red-600 tracking-[0.2em] leading-none uppercase">
                    Feed Active
                  </span>
                  <span className="text-[7px] font-bold text-white/30 tracking-widest uppercase mt-1">
                    Transmitting...
                  </span>
               </div>
            </div>

            <div className="h-6 w-[1px] bg-white/10" />

            <div className="text-[9px] font-mono text-white/60 tracking-tighter">
              {new Date().getHours()}:{new Date().getMinutes()}:
              <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1 }}>
                {new Date().getSeconds()}
              </motion.span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cinematic-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }

        .work-image {
          transition: all 1.2s cubic-bezier(0.2, 0, 0, 1);
        }

        /* Focus state for active slide */
        .swiper-slide-active .work-image,
        .swiper-slide-next .work-image,
        .swiper-slide-active + .swiper-slide .work-image {
          filter: grayscale(0%) brightness(1.1);
          transform: scale(1.1);
          opacity: 1;
        }

        .swiper-slide-active .work-card-container {
          border-color: rgba(220, 38, 38, 0.4) !important;
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.7), 0 18px 36px -18px rgba(220, 38, 38, 0.3);
        }

        .work-card-container:hover .work-image {
          filter: grayscale(0%) brightness(1.2) !important;
          transform: scale(1.15) !important;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default FreelancingWorks;