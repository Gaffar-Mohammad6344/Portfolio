import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden"
      style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: "45px 45px",
        }}
      />
      
      {/* Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(220,38,38,0.03)" }} />
      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(220,38,38,0.03)" }} />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/5 px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500">
              Pipeline: In Production
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tighter" style={{ color: "var(--text-primary)" }}>
            Building The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">
              Next Generation
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed opacity-60" style={{ color: "var(--text-muted)" }}>
            Our engineering team is currently finalizing these deployments. 
            Source code and live environments will be accessible shortly.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Subtle hover glow (reduced for pending state) */}
              <div className="absolute -inset-0.5 rounded-[2.5rem] bg-gradient-to-b from-slate-500/10 to-transparent opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

              <div
                className="relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border backdrop-blur-3xl transition-all duration-500"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border-color)",
                }}
              >
                {/* Image Section */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out opacity-40 grayscale contrast-125"
                  />
                  
                  {/* Overlay for "Locked" feel */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px]">
                    <div className="p-4 rounded-full bg-white/5 border border-white/10 mb-3">
                        <FaLock className="text-white/40" size={20} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">
                        Awaiting Upload
                    </span>
                  </div>

                  <div className="absolute top-6 right-6">
                    <span
                      className="rounded-full px-4 py-1 text-[9px] font-bold uppercase tracking-widest border border-white/10 bg-black/50 text-white/50 backdrop-blur-md"
                    >
                      v1.0-alpha
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-10">
                  <h3 className="text-2xl font-black tracking-tighter opacity-50" style={{ color: "var(--text-primary)" }}>
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed font-medium opacity-40" style={{ color: "var(--text-muted)" }}>
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2 opacity-30">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md px-2.5 py-1 text-[9px] font-bold border"
                        style={{
                          background: "var(--tech-badge-bg)",
                          borderColor: "var(--border-color)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons Section (Disabled State) */}
                  <div className="mt-auto pt-10">
                    <div className="flex flex-col gap-3">
                      <div 
                        className="flex items-center justify-center gap-3 rounded-2xl border-2 border-dashed py-4 text-[10px] font-black uppercase tracking-widest transition-all cursor-not-allowed"
                        style={{
                          borderColor: "var(--border-color)",
                          color: "var(--text-muted)",
                        }}
                      >
                        <FaGithub size={14} className="opacity-50" />
                        Code Encrypted
                      </div>
                      
                      <div 
                        className="flex items-center justify-center gap-3 rounded-2xl bg-slate-100 dark:bg-white/5 py-4 text-[10px] font-black uppercase tracking-widest transition-all cursor-not-allowed"
                        style={{
                          color: "var(--text-muted)",
                        }}
                      >
                        <FaExternalLinkAlt size={12} className="opacity-50" />
                        Deploying Soon
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 h-32 w-full pointer-events-none"
        style={{ background: `linear-gradient(to top, var(--bg-primary), transparent)` }}
      />
    </section>
  );
};

export default Projects;