// import React, { useEffect } from "react";
// import { motion, useScroll, useSpring } from "framer-motion";
// import { Link, useParams } from "react-router-dom";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import rehypeHighlight from "rehype-highlight";
// import rehypeRaw from "rehype-raw"; // Standard for handling <br/> and HTML
// import { FiArrowLeft, FiCalendar, FiClock, FiShare2, FiChevronUp, FiBookmark } from "react-icons/fi";
// import { getBlogBySlug } from "../utils/blogLoader";

// const BlogDetails = () => {
//   const { slug } = useParams();
//   const blog = getBlogBySlug(slug);

//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   if (!blog) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
//         <h1 className="text-9xl font-black opacity-10">404</h1>
//         <Link to="/blogs" className="px-8 py-4 bg-red-600 text-white rounded-full font-bold transition-transform hover:scale-105">
//           Back to Library
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <section className="relative min-h-screen pb-40 selection:bg-red-500/30">
//       {/* --- ELITE PROGRESS BAR --- */}
//       <motion.div
//         className="fixed top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-red-600 to-red-400 z-[110] origin-left"
//         style={{ scaleX }}
//       />

//       {/* --- BACKGROUND DEPTH --- */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         <div className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] bg-red-500/5 blur-[150px] rounded-full" />
//         <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full" />
//       </div>

//       <div className="relative z-10">
//         {/* --- MINIMALIST NAV --- */}
//         <nav className="fixed top-0 left-0 w-full z-50 px-6 py-10 pointer-events-none">
//           <div className="max-w-7xl mx-auto flex justify-between items-center">
//             <Link
//               to="/blogs"
//               className="pointer-events-auto flex items-center gap-3 px-6 py-3 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/70 backdrop-blur-xl text-xs font-black uppercase tracking-[0.2em] transition-all hover:border-red-500 hover:text-red-500"
//               style={{ color: "var(--text-primary)" }}
//             >
//               <FiArrowLeft /> Library
//             </Link>
            
//             <button 
//               className="pointer-events-auto p-4 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/70 backdrop-blur-xl hover:text-red-500 transition-all"
//               onClick={() => navigator.share({ title: blog.title, url: window.location.href })}
//             >
//               <FiShare2 size={18} />
//             </button>
//           </div>
//         </nav>

//         {/* --- HEADER: EDITORIAL STYLE --- */}
//         <header className="pt-56 pb-24 px-6 max-w-5xl mx-auto">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-10">
//             <div className="h-px w-12 bg-red-600" />
//             <span className="text-xs font-black uppercase tracking-[0.4em] text-red-500">
//               {blog.tags?.[0] || "Insight"}
//             </span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1, duration: 0.8 }}
//             className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-12"
//             style={{ color: "var(--text-primary)" }}
//           >
//             {blog.title}
//           </motion.h1>

//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-10 text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">
//             <div className="flex items-center gap-3"><FiCalendar className="text-red-500 text-lg" /> {blog.date}</div>
//             <div className="flex items-center gap-3"><FiClock className="text-red-500 text-lg" /> {blog.readingTime}</div>
//             <div className="flex items-center gap-3"><FiBookmark className="text-red-500 text-lg" /> Verified Entry</div>
//           </motion.div>
//         </header>

//         {/* --- HERO IMAGE --- */}
//         <div className="max-w-7xl mx-auto px-6 mb-32">
//           <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative h-[500px] md:h-[750px] rounded-[3rem] overflow-hidden shadow-2xl">
//             <img src={blog.cover} alt={blog.title} className="w-full h-full object-cover scale-105" />
//           </motion.div>
//         </div>

//         {/* --- ARTICLE BODY --- */}
//         <div className="max-w-4xl mx-auto px-6">
//           <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-2xl md:text-4xl leading-[1.4] font-medium text-slate-500 dark:text-slate-300 mb-24 italic border-l-[12px] border-red-600 pl-10 md:pl-16">
//             {blog.description}
//           </motion.p>

//           <article className="
//             prose prose-slate dark:prose-invert 
//             prose-xl md:prose-2xl 
//             max-w-none 

//             /* Global Spacing */
//             prose-p:leading-[1.9] 
//             prose-p:mb-12 
//             prose-p:text-slate-600 dark:prose-p:text-slate-300
            
//             /* Typography Scale */
//             prose-headings:font-black 
//             prose-headings:tracking-tighter
//             prose-h2:text-5xl prose-h2:mt-32 prose-h2:mb-12 prose-h2:text-red-600/90
//             prose-h3:text-3xl prose-h3:mt-20 prose-h3:mb-8

//             /* Media & Tables */
//             prose-img:rounded-[2.5rem] prose-img:my-20
//             prose-table:my-20 prose-table:border-hidden
//             prose-th:bg-red-600 prose-th:text-white prose-th:p-6 prose-th:rounded-t-2xl
//             prose-td:p-6 prose-td:border-b prose-td:border-black/5 dark:prose-td:border-white/5

//             /* Code, Strong & Blockquote */
//             prose-blockquote:border-l-[6px] prose-blockquote:border-red-600 prose-blockquote:bg-red-600/5 prose-blockquote:rounded-r-3xl prose-blockquote:py-8 prose-blockquote:px-12 prose-blockquote:not-italic
//             prose-pre:rounded-[2rem] prose-pre:p-10 prose-pre:bg-[#0B0F1A] prose-pre:border prose-pre:border-white/5
//             prose-strong:text-red-500 prose-strong:font-bold
//           ">
//             <ReactMarkdown 
//               remarkPlugins={[remarkGfm]} 
//               rehypePlugins={[rehypeHighlight, rehypeRaw]} // REHYPE-RAW handles the <br/> tags properly
//             >
//               {blog.content}
//             </ReactMarkdown>
//           </article>

//           {/* --- PREMIUM FOOTER --- */}
//           <footer className="mt-40 pt-16 border-t-2 border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
//             <Link to="/blogs" className="group flex items-center gap-6 text-xl font-black tracking-tighter" style={{ color: "var(--text-primary)" }}>
//               <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
//                 <FiArrowLeft size={24} />
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-1">Explore More</span>
//                 <span>Return to Library</span>
//               </div>
//             </Link>

//             <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 px-10 py-5 rounded-full bg-red-600 text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-red-700 transition-all shadow-lg shadow-red-600/30">
//               Top <FiChevronUp size={20} />
//             </button>
//           </footer>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogDetails;





// import React, { useEffect } from "react";
// import { motion, useScroll, useSpring } from "framer-motion";
// import { Link, useParams } from "react-router-dom";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import rehypeHighlight from "rehype-highlight";
// import rehypeRaw from "rehype-raw";
// import { FiArrowLeft, FiCalendar, FiClock, FiShare2, FiChevronUp, FiBookmark } from "react-icons/fi";
// import { getBlogBySlug } from "../utils/blogLoader";

// const BlogDetails = () => {
//   const { slug } = useParams();
//   const blog = getBlogBySlug(slug);

//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   if (!blog) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center space-y-6" style={{ background: "var(--bg-primary)" }}>
//         <h1 className="text-9xl font-black opacity-10" style={{ color: "var(--text-primary)" }}>404</h1>
//         <Link to="/blogs" className="px-8 py-3 bg-red-600 text-white rounded-xl font-bold transition-transform hover:scale-105">
//           Back to Library
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <section className="relative min-h-screen pb-24 transition-colors duration-300" style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      
//       {/* --- PROGRESS BAR --- */}
//       <motion.div
//         className="fixed top-0 left-0 right-0 h-[4px] bg-red-600 z-[100] origin-left"
//         style={{ scaleX }}
//       />

//       {/* --- BACKGROUND BLOOM --- */}
//       <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
//         <div className="absolute top-[-10%] left-[10%] w-[400px] h-[400px] bg-red-500/10 blur-[120px] rounded-full" />
//         <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full" />
//       </div>

//       <div className="relative z-10">
//  {/* --- SHARE BUTTON ONLY (Top Right) --- */}
// <nav className="fixed top-0 left-0 w-full z-[70] pointer-events-none">
//   <div className="px-6 md:px-10 flex justify-end items-center h-24 md:h-32">
    
//     <button 
//       className="pointer-events-auto p-3 rounded-xl border backdrop-blur-md hover:text-red-500 transition-all shadow-2xl active:scale-95"
//       style={{ 
//         background: "var(--bg-card)", 
//         borderColor: "var(--border-color)", 
//         color: "var(--text-primary)" 
//       }}
//       onClick={() => {
//         if (navigator.share) {
//           navigator.share({ title: blog.title, url: window.location.href });
//         } else {
//           // Fallback if browser doesn't support share API
//           navigator.clipboard.writeText(window.location.href);
//           alert("Link copied to clipboard!");
//         }
//       }}
//     >
//       <FiShare2 size={20} />
//     </button>

//   </div>
// </nav>

//         {/* --- HEADER: ADJUSTED FONT SIZES --- */}
//         <header className="pt-40 pb-16 px-6 max-w-4xl mx-auto">
//           <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 mb-6">
//             <span className="px-3 py-1 rounded-md bg-red-500/10 text-red-500 text-[10px] font-black uppercase tracking-[0.2em] border border-red-500/20">
//               {blog.tags?.[0] || "Insight"}
//             </span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-8"
//             style={{ color: "var(--text-primary)" }}
//           >
//             {blog.title}
//           </motion.h1>

//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} 
//             className="flex flex-wrap gap-6 text-[10px] font-bold uppercase tracking-widest"
//             style={{ color: "var(--text-muted)" }}
//           >
//             <div className="flex items-center gap-2"><FiCalendar className="text-red-500" /> {blog.date}</div>
//             <div className="flex items-center gap-2"><FiClock className="text-red-500" /> {blog.readingTime}</div>
//             <div className="flex items-center gap-2"><FiBookmark className="text-red-500" /> Verified</div>
//           </motion.div>
//         </header>

//         {/* --- HERO IMAGE: DECREASED SIZE --- */}
//         <div className="max-w-5xl mx-auto px-6 mb-20">
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.98 }} 
//             animate={{ opacity: 1, scale: 1 }} 
//             className="relative aspect-video max-h-[500px] rounded-3xl overflow-hidden shadow-2xl border"
//             style={{ borderColor: "var(--border-color)" }}
//           >
//             <img src={blog.cover} alt={blog.title} className="w-full h-full object-cover" />
//           </motion.div>
//         </div>

//         {/* --- ARTICLE BODY: CLEANED UP MARKDOWN CSS --- */}
//         <div className="max-w-3xl mx-auto px-6">
//           <motion.p 
//             initial={{ opacity: 0 }} 
//             whileInView={{ opacity: 1 }} 
//             className="text-xl md:text-2xl leading-relaxed font-medium mb-16 italic border-l-4 border-red-600 pl-6 md:pl-8"
//             style={{ color: "var(--text-muted)" }}
//           >
//             {blog.description}
//           </motion.p>

//           <article className="
//             prose prose-slate dark:prose-invert 
//             max-w-none 
            
//             /* Body Text */
//             prose-p:text-base md:prose-p:text-lg 
//             prose-p:leading-[1.8] 
//             prose-p:mb-8
//             prose-p:text-[var(--text-muted)]

//             /* Headings - Scaled down */
//             prose-headings:text-[var(--text-primary)]
//             prose-headings:font-bold
//             prose-headings:tracking-tight
//             prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:border-b prose-h2:pb-2 
//             prose-h2:border-red-500/20
//             prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4

//             /* Lists & Styling (Fix for the 3rd image content) */
//             prose-li:text-[var(--text-muted)]
//             prose-li:my-2
//             prose-strong:text-red-500 prose-strong:font-bold
            
//             /* Code Blocks */
//             prose-pre:bg-[var(--bg-card)]
//             prose-pre:border prose-pre:border-[var(--border-color)]
//             prose-pre:rounded-2xl
            
//             /* Blockquotes */
//             prose-blockquote:border-red-500 prose-blockquote:bg-red-500/5 
//             prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl
//           ">
//             <ReactMarkdown 
//               remarkPlugins={[remarkGfm]} 
//               rehypePlugins={[rehypeHighlight, rehypeRaw]}
//             >
//               {blog.content}
//             </ReactMarkdown>
//           </article>

//           {/* --- FOOTER --- */}
//           <footer className="mt-24 pt-12 border-t flex flex-col md:flex-row items-center justify-between gap-8" style={{ borderColor: "var(--border-color)" }}>
//             <Link to="/blogs" className="group flex items-center gap-4 transition-all hover:translate-x-[-4px]">
//               <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:bg-red-600 group-hover:text-white" 
//                 style={{ background: "var(--bg-secondary)", color: "var(--text-primary)", border: "1px solid var(--border-color)" }}>
//                 <FiArrowLeft size={20} />
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-[10px] uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Go Back</span>
//                 <span className="font-bold">Library</span>
//               </div>
//             </Link>

//             <button 
//               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
//               className="flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
//             >
//               Back to Top <FiChevronUp size={18} />
//             </button>
//           </footer>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogDetails;




import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import { FiArrowLeft, FiCalendar, FiClock, FiShare2, FiChevronUp, FiBookmark } from "react-icons/fi";
import { getBlogBySlug } from "../utils/blogLoader";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) return null;

  // --- CUSTOM MARKDOWN STYLING (The fix for your plain text) ---
  const MarkdownComponents = {
    h1: ({ children }) => <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 mt-12 text-[var(--text-primary)]">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6 mt-16 pb-3 border-b border-red-500/10 text-[var(--text-primary)]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold mb-4 mt-10 text-red-500 flex items-center gap-3">
        <span className="w-2 h-2 bg-red-500 rounded-full" /> {children}
      </h3>
    ),
    p: ({ children }) => <p className="text-lg leading-[1.8] mb-8 text-[var(--text-muted)] font-medium">{children}</p>,
    strong: ({ children }) => (
      <strong className="text-red-500 font-black tracking-tight bg-red-500/5 px-1.5 py-0.5 rounded-md">
        {children}
      </strong>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-12 p-8 md:p-10 bg-red-500/[0.03] border-l-4 border-red-500 rounded-r-3xl shadow-sm italic">
        <div className="text-xl md:text-2xl text-[var(--text-primary)] font-semibold leading-relaxed">
          {children}
        </div>
      </blockquote>
    ),
    ul: ({ children }) => <ul className="space-y-4 mb-10 list-none">{children}</ul>,
    li: ({ children }) => (
      <li className="flex items-start gap-3 text-lg text-[var(--text-muted)]">
        <span className="text-red-500 font-bold mt-0.5">→</span>
        <span>{children}</span>
      </li>
    ),
    code: ({ children }) => (
      <code className="bg-red-500/10 text-red-500 px-1.5 py-0.5 rounded-md font-mono text-sm">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="p-6 rounded-2xl bg-[#0B0F1A] border border-white/5 overflow-x-auto my-10 shadow-2xl">
        {children}
      </pre>
    )
  };

  return (
    <section className="relative min-h-screen pb-24 transition-colors duration-300 selection:bg-red-500/30" style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-[4px] bg-red-600 z-[110] origin-left" style={{ scaleX }} />

      <div className="relative z-10">
        {/* Navbar Overlay */}
        <nav className="fixed top-0 left-0 w-full z-[70] pointer-events-none">
          <div className="px-6 md:px-10 flex justify-end items-center h-24 md:h-32">
            <button 
              className="pointer-events-auto p-3 rounded-xl border backdrop-blur-md hover:text-red-500 transition-all shadow-xl active:scale-95"
              style={{ background: "var(--bg-card)", borderColor: "var(--border-color)", color: "var(--text-primary)" }}
              onClick={() => navigator.share({ title: blog.title, url: window.location.href })}
            >
              <FiShare2 size={20} />
            </button>
          </div>
        </nav>

        {/* --- ARTICLE HEADER --- */}
        <header className="pt-40 pb-16 px-6 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <span className="px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-[10px] font-black uppercase tracking-[0.3em] border border-red-500/20">
              {blog.tags?.[0] || "Architecture"}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-10"
          >
            {blog.title}
          </motion.h1>

          <div className="flex justify-center flex-wrap gap-8 text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
            <div className="flex items-center gap-2"><FiCalendar className="text-red-500" /> {blog.date}</div>
            <div className="flex items-center gap-2"><FiClock className="text-red-500" /> {blog.readingTime}</div>
            <div className="flex items-center gap-2"><FiBookmark className="text-red-500" /> Insight</div>
          </div>
        </header>

        {/* --- HERO IMAGE --- */}
        <div className="max-w-5xl mx-auto px-6 mb-24">
          <div className="relative aspect-video max-h-[550px] rounded-[3rem] overflow-hidden shadow-2xl border" style={{ borderColor: "var(--border-color)" }}>
            <img src={blog.cover} alt="cover" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* --- ARTICLE CONTENT --- */}
        <div className="max-w-3xl mx-auto px-6">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]} 
            rehypePlugins={[rehypeHighlight, rehypeRaw]}
            components={MarkdownComponents} // This applies the styles
          >
            {blog.content}
          </ReactMarkdown>

          {/* --- FOOTER --- */}
          <footer className="mt-32 pt-12 border-t flex flex-col md:flex-row items-center justify-between gap-8" style={{ borderColor: "var(--border-color)" }}>
            <Link to="/blogs" className="group flex items-center gap-4 transition-all">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:bg-red-600 group-hover:text-white" 
                style={{ background: "var(--bg-secondary)", color: "var(--text-primary)", border: "1px solid var(--border-color)" }}>
                <FiArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Go Back</span>
                <span className="font-bold">Library</span>
              </div>
            </Link>

            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg shadow-red-600/20">
              Top <FiChevronUp size={18} />
            </button>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;