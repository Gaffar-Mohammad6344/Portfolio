// import React from "react";
// import { motion } from "framer-motion";
// import profileImage from "../assets/profile1.png";

// import {
//   FaGithub,
//   FaLinkedin,
//   FaInstagram,
//   FaEnvelope,
//   FaReact,
//   FaNodeJs,
//   FaFigma,
//   FaGitAlt,
//   FaHtml5,
//   FaCss3Alt,
// } from "react-icons/fa";

// import {
//   SiMongodb,
//   SiExpress,
//   SiJavascript,
//   SiTailwindcss,
// } from "react-icons/si";

// const techStack = [
//   { icon: <FaReact />, name: "React" },
//   { icon: <SiMongodb />, name: "MongoDB" },
//   { icon: <SiExpress />, name: "Express" },
//   { icon: <FaNodeJs />, name: "Node.js" },
//   { icon: <SiJavascript />, name: "JavaScript" },
//   { icon: <FaHtml5 />, name: "HTML5" },
//   { icon: <FaCss3Alt />, name: "CSS3" },
//   { icon: <SiTailwindcss />, name: "Tailwind CSS" },
//   { icon: <FaGitAlt />, name: "Git" },
//   { icon: <FaFigma />, name: "Figma" },
// ];

// const Hero = () => {
//   return (
//     <section
//       id="hero"
//       className="relative w-full bg-[#050816] text-white lg:h-screen lg:overflow-hidden flex flex-col"
//     >
//       {/* Background Glows */}
//       <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-red-600/10 blur-[120px] pointer-events-none" />
//       <div className="absolute right-0 bottom-0 h-[250px] w-[250px] rounded-full bg-red-500/10 blur-[120px] pointer-events-none" />

//       {/* Main Content Area */}
//       <div className="mx-auto max-w-7xl px-6 flex-1 flex items-center w-full pt-28 pb-10 lg:pt-16 lg:pb-0">
//         <div className="grid w-full items-center gap-8 lg:grid-cols-2 lg:gap-12">
          
//           {/* LEFT CONTENT */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center lg:text-left order-2 lg:order-1"
//           >
//             <h1 className="font-bold leading-[1.0] tracking-tight">
//               <span className="block text-4xl md:text-5xl lg:text-6xl">
//                 Gaffar<span className="text-red-500">.</span>
//               </span>
//               <span className="block text-4xl md:text-5xl lg:text-6xl text-slate-100">
//                 Mohammad
//               </span>
//             </h1>

//             <h2 className="mt-4 max-w-[600px] text-lg md:text-xl lg:text-2xl font-semibold leading-tight text-slate-100">
//               Engineering modern web experiences with <br></br>
//               <span className="text-red-500"> code, creativity,</span> and{" "}
//               <span className="text-red-500">purpose.</span>
//             </h2>

//             <p className="mt-4 max-w-[500px] text-sm md:text-base lg:text-lg leading-relaxed text-slate-400 mx-auto lg:mx-0">
//               Passionate about building fast, intuitive, and impactful digital
//               experiences. I specialize in full-stack development, modern
//               interfaces, scalable solutions bridging design and engineering.
//             </p>

//             {/* Buttons */}
//             <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
//               <a
//                 href="#projects"
//                 className="rounded-xl bg-red-600 px-6 py-3 text-sm font-bold transition-all duration-300 hover:bg-red-700 hover:scale-105 active:scale-95"
//               >
//                 View Projects
//               </a>
//               <a
//                 href="#contact"
//                 className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold backdrop-blur-md transition-all duration-300 hover:border-red-500"
//               >
//                 Contact Me
//               </a>
//             </div>
//           </motion.div>

//           {/* RIGHT CONTENT */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="relative flex justify-center order-1 lg:order-2"
//           >
//             <div className="relative flex flex-col items-center group cursor-pointer">
//               {/* Profile Image Container */}
//               <div className="relative">
//                 <div className="h-[220px] w-[220px] md:h-[280px] md:w-[280px] lg:h-[340px] lg:w-[340px] overflow-hidden rounded-full border-[4px] border-red-500 shadow-[0_0_40px_rgba(220,38,38,0.35)] transition-all duration-500 group-hover:border-red-400 group-hover:shadow-[0_0_60px_rgba(220,38,38,0.6)]">
//                   <img
//                     src={profileImage}
//                     alt="Gaffar Mohammad"
//                     className="h-full w-full object-cover object-top scale-105 transition-transform duration-500 group-hover:scale-125"
//                   />
//                 </div>
//                 {/* Pulse Ring - Changes color on hover */}
//                 <div className="absolute inset-0 rounded-full border border-red-500/30 animate-pulse transition-colors duration-500 group-hover:border-red-400/50" />
//               </div>

//               {/* Role & Socials */}
//               <div className="mt-4 text-center">
//                 <h3 className="text-xl md:text-2xl font-bold text-white">
//                   Software Engineer
//                 </h3>
//                 <p className="text-red-500 font-bold tracking-[0.2em] text-[10px] md:text-xs">
//                   LARSEN & TOUBRO MINDTREE
//                 </p>

//                 {/* Social Icons */}
//                 <div className="mt-4 flex justify-center gap-3">
//                   {[
//                     { icon: <FaGithub />, link: "https://github.com/Gaffar-Mohammad6344" },
//                     { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/gaffar-mohammad-160b16264/" },
//                     { icon: <FaInstagram />, link: "https://www.instagram.com/" },
//                     { icon: <FaEnvelope />, link: "mailto:gaffarmohammad6344@gmail.com" },
//                   ].map((social, index) => (
//                     <a
//                       key={index}
//                       href={social.link}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:text-red-500"
//                     >
//                       {React.cloneElement(social.icon, { size: 18 })}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* TECH MARQUEE - Fixed at bottom */}
//       <div className="w-full overflow-hidden py-4 bg-[#050816]/80 backdrop-blur-md border-t border-white/5 z-20">
//         <div className="flex w-max animate-marquee gap-10 px-4">
//           {[...techStack, ...techStack].map((tech, index) => (
//             <div
//               key={index}
//               className="flex items-center gap-2 whitespace-nowrap text-xs md:text-sm font-medium text-slate-400"
//             >
//               <span className="text-lg text-red-500">{tech.icon}</span>
//               {tech.name}
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-marquee {
//           animation: marquee 25s linear infinite;
//         }
//         @media (max-width: 1024px) {
//           #hero {
//             overflow-y: auto;
//             height: auto;
//             min-height: 100vh;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile1.png";
import useTheme from "../hooks/useTheme";

import {
  FaGithub, FaLinkedin, FaInstagram, FaEnvelope,
  FaReact, FaNodeJs, FaFigma, FaGitAlt, FaHtml5, FaCss3Alt,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss } from "react-icons/si";

const techStack = [
  { icon: <FaReact />, name: "React" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaFigma />, name: "Figma" },
];

const Hero = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="hero"
      className="relative w-full lg:h-screen lg:overflow-hidden flex flex-col"
      style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      {/* Background Glows */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(220,38,38,0.08)" }} />
      <div className="absolute right-0 bottom-0 h-[250px] w-[250px] rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(220,38,38,0.06)" }} />

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 flex-1 flex items-center w-full pt-28 pb-10 lg:pt-16 lg:pb-0">
        <div className="grid w-full items-center gap-8 lg:grid-cols-2 lg:gap-12">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="font-bold leading-[1.0] tracking-tight">
              <span className="block text-4xl md:text-5xl lg:text-6xl" style={{ color: "var(--text-primary)" }}>
                Gaffar<span className="text-red-500">.</span>
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl" style={{ color: "var(--text-primary)" }}>
                Mohammad
              </span>
            </h1>

            <h2 className="mt-4 max-w-[600px] text-lg md:text-xl lg:text-2xl font-semibold leading-tight" style={{ color: "var(--text-secondary)" }}>
              Engineering modern web experiences with <br />
              <span className="text-red-500"> code, creativity,</span> and{" "}
              <span className="text-red-500">purpose.</span>
            </h2>

            <p className="mt-4 max-w-[500px] text-sm md:text-base lg:text-lg leading-relaxed mx-auto lg:mx-0" style={{ color: "var(--text-muted)" }}>
              Passionate about building fast, intuitive, and impactful digital
              experiences. I specialize in full-stack development, modern
              interfaces, scalable solutions bridging design and engineering.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-red-700 hover:scale-105 active:scale-95"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-xl px-6 py-3 text-sm font-bold backdrop-blur-md transition-all duration-300 hover:border-red-500 border"
                style={{
                  borderColor: "var(--border-color)",
                  background: "var(--toggle-bg)",
                  color: "var(--text-primary)",
                }}
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative flex flex-col items-center group cursor-pointer">
              <div className="relative">
                <div className="h-[220px] w-[220px] md:h-[280px] md:w-[280px] lg:h-[340px] lg:w-[340px] overflow-hidden rounded-full border-[4px] border-red-500 shadow-[0_0_40px_rgba(220,38,38,0.35)] transition-all duration-500 group-hover:border-red-400 group-hover:shadow-[0_0_60px_rgba(220,38,38,0.6)]">
                  <img
                    src={profileImage}
                    alt="Gaffar Mohammad"
                    className="h-full w-full object-cover object-top scale-105 transition-transform duration-500 group-hover:scale-125"
                  />
                </div>
                <div className="absolute inset-0 rounded-full border border-red-500/30 animate-pulse" />
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-xl md:text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                  Software Engineer
                </h3>
                <p className="text-red-500 font-bold tracking-[0.2em] text-[10px] md:text-xs">
                  LARSEN & TOUBRO MINDTREE
                </p>

                <div className="mt-4 flex justify-center gap-3">
                  {[
                    { icon: <FaGithub />, link: "https://github.com/Gaffar-Mohammad6344" },
                    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/gaffar-mohammad-160b16264/" },
                    { icon: <FaInstagram />, link: "https://www.instagram.com/" },
                    { icon: <FaEnvelope />, link: "mailto:gaffarmohammad6344@gmail.com" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:text-red-500"
                      style={{
                        borderColor: "var(--border-color)",
                        background: "var(--social-bg)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {React.cloneElement(social.icon, { size: 18 })}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* TECH MARQUEE */}
      <div
        className="w-full overflow-hidden py-4 backdrop-blur-md border-t z-20"
        style={{
          background: "var(--marquee-bg)",
          borderColor: "var(--border-color)",
        }}
      >
        <div className="flex w-max animate-marquee gap-10 px-4">
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 whitespace-nowrap text-xs md:text-sm font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              <span className="text-lg text-red-500">{tech.icon}</span>
              {tech.name}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @media (max-width: 1024px) {
          #hero {
            overflow-y: auto;
            height: auto;
            min-height: 100vh;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
