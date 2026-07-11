import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import { FiArrowLeft, FiArrowRight, FiPlus, FiHash } from "react-icons/fi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { interests } from "../data/interests";

const InterestCard = ({ interest, index }) => {
  const Icon = interest.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1] 
      }}
      // Reduced height from 460px to 350px
      className="group relative h-[350px] w-full overflow-hidden rounded-[2rem] border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-[#0A0A0B] transition-all duration-500 hover:border-red-500/40 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(239,68,68,0.1)]"
    >
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.03),transparent_70%)]" />
      </div>

      <div className="relative z-10 flex flex-col h-full p-7">
        {/* Editorial Header - Scaled Down */}
        <div className="flex justify-between items-start mb-6">
          <div className="relative">
            <div className="h-12 w-12 rounded-xl bg-slate-50 dark:bg-white/[0.03] flex items-center justify-center text-2xl text-slate-400 group-hover:text-red-500 group-hover:bg-red-500/10 transition-all duration-500">
              <Icon />
            </div>
            <div className="absolute inset-0 blur-xl bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          <div className="flex flex-col items-end opacity-40 group-hover:opacity-100 transition-opacity">
            <span className="text-[8px] font-black tracking-[0.3em] text-slate-500">INDEX</span>
            <span className="text-[10px] font-mono font-bold">0{index + 1}</span>
          </div>
        </div>

        {/* Content Body - Compact Typography */}
        <div className="mt-auto">
          <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:translate-y-0">
             <FiHash className="text-red-500 text-[10px]" />
             <span className="text-[8px] font-black uppercase tracking-widest text-red-500">Curated</span>
          </div>
          <h3 className="text-xl font-black tracking-tighter mb-2 leading-none" style={{ color: "var(--text-primary)" }}>
            {interest.title}
          </h3>
          <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 font-medium line-clamp-2">
            {interest.description}
          </p>
        </div>

        {/* Technical Footer - Tightened */}
        <div className="mt-6 pt-5 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[7px] font-black uppercase tracking-[0.2em] opacity-30">Status</span>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Active_Discovery</span>
          </div>
          <motion.div 
            whileTap={{ scale: 0.9 }}
            className="h-8 w-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-sm group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-500"
          >
            <FiPlus />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
};

const Interests = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section id="interests" className="relative py-20 lg:py-28 overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      
      {/* Background Grid - Scaled down */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(to right, var(--text-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--text-primary) 1px, transparent 1px)`, 
             backgroundSize: '60px 60px' 
           }} 
      />
      
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        
        {/* Header Section - More Compact */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-8 bg-red-600" />
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-red-600">
                Life Beyond Code
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-4" style={{ color: "var(--text-primary)" }}>
              The <span className="text-red-600 italic">Core</span><br />
              Interests.
            </h2>
          </div>

          {/* Compact Navigation */}
          <div className="flex items-center gap-4 hidden md:flex">
            <button className="prev-interest-btn h-12 w-12 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 hover:border-red-500 hover:text-red-500 transition-all active:scale-90">
              <FiArrowLeft size={18} />
            </button>
            <button className="next-interest-btn h-12 w-12 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 hover:border-red-500 hover:text-red-500 transition-all active:scale-90">
              <FiArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, FreeMode]}
            navigation={{ prevEl: ".prev-interest-btn", nextEl: ".next-interest-btn" }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            spaceBetween={24}
            freeMode={true}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3.5 },
              1440: { slidesPerView: 4.5 },
            }}
            className="!overflow-visible"
          >
            {interests.map((interest, index) => (
              <SwiperSlide key={index}>
                <InterestCard interest={interest} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Watermark - Scaled Down */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.02] z-0">
        <h2 className="text-[12vw] font-black leading-none uppercase italic tracking-tighter" style={{ color: "var(--text-primary)" }}>
          Passions
        </h2>
      </div>
    </section>
  );
};

export default Interests;