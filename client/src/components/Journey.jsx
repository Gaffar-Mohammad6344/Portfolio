// import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// import { useRef } from "react";
// import {
//   FaGraduationCap,
//   FaPalette,
//   FaLaptopCode,
//   FaBriefcase,
//   FaCode,
// } from "react-icons/fa";

// const journeyData = [
//   {
//     title: "Student at GMRIT",
//     duration: "2021 — 2025",
//     description: "Honors in Software Engineering. Pioneered full-stack projects and led the technical design wing.",
//     icon: <FaGraduationCap />,
//     color: "from-red-500 to-orange-500",
//   },
//   {
//     title: "UI/UX Intern at Revidd",
//     duration: "Q3 2025",
//     description: "Architected high-conversion design systems and user-flow optimizations for a streaming platform.",
//     icon: <FaPalette />,
//     color: "from-pink-500 to-red-500",
//   },
//   {
//     title: "Independent Consultant",
//     duration: "2025 — 2026",
//     description: "Digital transformation for Bengaluru Cafe. Unified their brand identity across web and social verticals.",
//     icon: <FaLaptopCode />,
//     color: "from-red-600 to-rose-500",
//   },
//   {
//     title: "Associate Engineer",
//     duration: "Q1 2026",
//     description: "Integrated into L&T Mindtree's core development team, focusing on high-availability enterprise cloud apps.",
//     icon: <FaBriefcase />,
//     color: "from-orange-600 to-red-600",
//   },
//   {
//     title: "Software Engineer",
//     duration: "Present",
//     description: "Scaling modern web ecosystems. Bridging the gap between complex engineering and intuitive design.",
//     icon: <FaCode />,
//     color: "from-red-500 to-red-800",
//     current: true,
//   },
// ];

// const Journey = () => {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start 0.8", "end 0.2"],
//   });

//   const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
//   const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

//   return (
//     <section
//       id="journey"
//       ref={sectionRef}
//       className="relative bg-[#020617] py-24 text-white overflow-hidden"
//     >
//       {/* Premium Background: Subtle Grid & Moving Glows */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
//       <div className="absolute top-0 left-1/4 h-[400px] w-[400px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />

//       <div className="mx-auto max-w-5xl px-6 relative">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-24"
//         >
//           <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/5 px-4 py-1 mb-6">
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
//             </span>
//             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-500">
//               The Professional Path
//             </span>
//           </div>
//           <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
//             Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-600"> Milestones</span>
//           </h2>
//         </motion.div>

//         {/* Timeline Container */}
//         <div className="relative">
//           {/* Main Animated Track */}
//           <div className="absolute left-[12px] lg:left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-white/5 overflow-hidden">
//             <motion.div
//               style={{ scaleY: pathLength, originY: 0 }}
//               className="h-full w-full bg-gradient-to-b from-transparent via-red-500 to-transparent"
//             />
//           </div>

//           {journeyData.map((item, index) => (
//             <div
//               key={index}
//               className={`relative flex items-center mb-20 lg:mb-28 ${
//                 index % 2 === 0 ? "lg:flex-row-reverse" : "flex-row"
//               }`}
//             >
//               {/* Timeline Dot (Orbit) */}
//               <div className="absolute left-[12px] lg:left-1/2 -translate-x-1/2 z-20">
//                 <div className="relative flex items-center justify-center">
//                   <motion.div 
//                     initial={{ scale: 0 }}
//                     whileInView={{ scale: 1 }}
//                     className={`h-4 w-4 rounded-full border-2 border-[#020617] z-10 ${item.current ? 'bg-red-500 shadow-[0_0_20px_rgba(239,68,68,1)]' : 'bg-slate-700'}`}
//                   />
//                   <div className="absolute h-8 w-8 rounded-full border border-white/5 animate-[spin_4s_linear_infinite]" />
//                 </div>
//               </div>

//               {/* Card Side */}
//               <div className="hidden lg:block lg:w-1/2" />

//               <motion.div
//                 initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
//                 className="w-full lg:w-[45%] pl-10 lg:pl-0"
//               >
//                 <div className="group relative">
//                   {/* Subtle Card Glow */}
//                   <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 blur-sm transition duration-500 group-hover:opacity-20`} />
                  
//                   <div className="relative rounded-2xl border border-white/10 bg-[#0a0a0f]/80 p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-[#0f0f16]">
//                     {/* Header: Icon & Duration */}
//                     <div className="flex items-center justify-between mb-4">
//                       <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white text-xl shadow-lg shadow-red-900/20 group-hover:scale-110 transition-transform duration-500`}>
//                         {item.icon}
//                       </div>
//                       <div className="text-right">
//                         <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Duration</p>
//                         <p className="text-xs font-semibold text-red-400">{item.duration}</p>
//                       </div>
//                     </div>

//                     {/* Content */}
//                     <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform tracking-tight">
//                       {item.title}
//                     </h3>
//                     <p className="text-sm leading-relaxed text-slate-400">
//                       {item.description}
//                     </p>

//                     {/* Interactive "Current" Badge */}
//                     {item.current && (
//                       <div className="mt-4 flex items-center gap-2">
//                         <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
//                         <span className="text-[9px] font-bold text-red-500 uppercase tracking-tighter">Active Role</span>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Decorative Bottom Text */}
//       <div className="absolute bottom-4 left-0 w-full text-center opacity-[0.02] pointer-events-none">
//         <h2 className="text-[15vw] font-black leading-none uppercase select-none">
//           experience
//         </h2>
//       </div>
//     </section>
//   );
// };

// export default Journey;


import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaGraduationCap, FaPalette, FaLaptopCode, FaBriefcase, FaCode,
} from "react-icons/fa";

const journeyData = [
  {
    title: "Student at GMRIT",
    duration: "2021 — 2025",
    description: "Honors in Software Engineering. Pioneered full-stack projects and led the technical design wing.",
    icon: <FaGraduationCap />,
    color: "from-red-500 to-orange-500",
  },
  {
    title: "UI/UX Intern at Revidd",
    duration: "Q3 2025",
    description: "Architected high-conversion design systems and user-flow optimizations for a streaming platform.",
    icon: <FaPalette />,
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Freelancer",
    duration: "2025 — 2026",
    description: "Digital transformation for Bengaluru Cafe. Unified their brand identity across web and social verticals.",
    icon: <FaLaptopCode />,
    color: "from-red-600 to-rose-500",
  },
  {
    title: "Graduate Engineer Trainee at LTM",
    duration: "Q1 2026",
    description: "Integrated into L&T Mindtree's core development team, focusing on high-availability enterprise cloud apps.",
    icon: <FaBriefcase />,
    color: "from-orange-600 to-red-600",
  },
  {
    title: "Software Engineer at LTM",
    duration: "Present",
    description: "Scaling modern web ecosystems. Bridging the gap between complex engineering and intuitive design.",
    icon: <FaCode />,
    color: "from-red-500 to-red-800",
    current: true,
  },
];

const Journey = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--bg-secondary)", color: "var(--text-primary)" }}
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        style={{
          backgroundImage: `linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-1/4 h-[400px] w-[400px] blur-[120px] rounded-full pointer-events-none animate-pulse" style={{ background: "rgba(220,38,38,0.06)" }} />

      <div className="mx-auto max-w-5xl px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/5 px-4 py-1 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-500">
              The Professional Path
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter" style={{ color: "var(--text-primary)" }}>
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-600">
              Milestones
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-[12px] lg:left-1/2 top-0 h-full w-[2px] -translate-x-1/2 overflow-hidden"
            style={{ background: "var(--border-color)" }}
          >
            <motion.div
              style={{ scaleY: pathLength, originY: 0 }}
              className="h-full w-full bg-gradient-to-b from-transparent via-red-500 to-transparent"
            />
          </div>

          {journeyData.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-20 lg:mb-28 ${
                index % 2 === 0 ? "lg:flex-row-reverse" : "flex-row"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-[12px] lg:left-1/2 -translate-x-1/2 z-20">
                <div className="relative flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    className={`h-4 w-4 rounded-full border-2 z-10 ${
                      item.current
                        ? "bg-red-500 border-red-300 shadow-[0_0_20px_rgba(239,68,68,1)]"
                        : "bg-slate-400 border-slate-300"
                    }`}
                    style={{ borderColor: item.current ? undefined : "var(--border-color)" }}
                  />
                  <div className="absolute h-8 w-8 rounded-full border border-red-500/20 animate-[spin_4s_linear_infinite]" />
                </div>
              </div>

              <div className="hidden lg:block lg:w-1/2" />

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-[45%] pl-10 lg:pl-0"
              >
                <div className="group relative">
                  <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 blur-sm transition duration-500 group-hover:opacity-20`} />
                  <div
                    className="relative rounded-2xl border p-6 backdrop-blur-xl transition-all duration-500"
                    style={{
                      background: "var(--bg-card)",
                      borderColor: "var(--border-color)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white text-xl shadow-lg shadow-red-900/20 group-hover:scale-110 transition-transform duration-500`}>
                        {item.icon}
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>Duration</p>
                        <p className="text-xs font-semibold text-red-400">{item.duration}</p>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:translate-x-1 transition-transform tracking-tight" style={{ color: "var(--text-primary)" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {item.description}
                    </p>

                    {item.current && (
                      <div className="mt-4 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[9px] font-bold text-red-500 uppercase tracking-tighter">Active Role</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Watermark */}
      <div className="absolute bottom-4 left-0 w-full text-center pointer-events-none select-none" style={{ opacity: 0.02, color: "var(--text-primary)" }}>
        <h2 className="text-[15vw] font-black leading-none uppercase">experience</h2>
      </div>
    </section>
  );
};

export default Journey;
