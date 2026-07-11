import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative w-full py-24 px-6 border-t overflow-hidden"
      style={{ 
        background: "var(--bg-primary)", 
        borderColor: "var(--border-color)" 
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* --- BRANDING --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-[0.15em] uppercase">
            <span className="text-red-600">Gaffar</span>
            <span className="mx-4 opacity-20 font-light text-slate-400">×</span>
            <span className="text-red-600">Astra</span>
          </h2>
        </motion.div>

        {/* --- TEAM STORY --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-12"
        >
          <p className="text-xs md:text-sm font-medium leading-relaxed tracking-wide opacity-60 uppercase" style={{ color: "var(--text-primary)" }}>
            Four developers, forged in the intensity of shared training, 
            now united as <span className="text-red-600 font-bold">Team Astra</span>. 
            We are a collective of minds dedicated to pushing the boundaries 
            of digital architecture and achieving the impossible, together.
          </p>
        </motion.div>

        {/* --- DIVIDER LINE --- */}
        <div className="w-12 h-[1px] bg-red-600/30 mb-12" />

        {/* --- COPYRIGHT --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">
            © {currentYear} All Rights Reserved
          </p>
          <p className="text-[11px] font-bold uppercase tracking-widest">
            Designed & Developed by <span className="text-red-600">Gaffar</span> & Team <span className="text-red-600">Astra</span>
          </p>
        </motion.div>

        {/* --- SYSTEM TAG --- */}
        
      </div>

    
     
    </footer>
  );
};

export default Footer;