

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";
import { FiSearch, FiFeather, FiTrendingUp, FiHash } from "react-icons/fi";
import BlogCard from "../components/Blogcard";
import { getAllBlogs } from "../utils/blogLoader";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Mouse tracking for the spotlight effect (similar to Contact page)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  useEffect(() => {
    try {
      const data = getAllBlogs();
      setBlogs(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error loading blogs:", error);
      setBlogs([]);
    }
    window.scrollTo(0, 0);
  }, []);

  const filteredBlogs = useMemo(() => {
    if (!search.trim()) return blogs;
    return blogs.filter((blog) => {
      const keyword = search.toLowerCase();
      return (
        blog.title?.toLowerCase().includes(keyword) ||
        blog.description?.toLowerCase().includes(keyword) ||
        (blog.tags || []).some((tag) => tag.toLowerCase().includes(keyword))
      );
    });
  }, [blogs, search]);

  return (
    <section 
      className="relative min-h-screen pt-36 pb-24 overflow-hidden transition-colors duration-300"
      style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      {/* --- PREMIUM BACKGROUND ELEMENTS --- */}
      {/* 1. Subtle Grid Pattern - Adjusted opacity for themes */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60 L0 60 L0 0' fill='none' stroke='%23ff0000' stroke-width='0.5'/%3E%3C/svg%3E")` }} 
      />
      
      {/* 2. Floating Orbs (Theme-aware glows) */}
      <div className="absolute left-[-10%] top-[-5%] h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute right-[-5%] top-[20%] h-[400px] w-[400px] rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-red-500 mb-6 shadow-[0_0_20px_rgba(239,68,68,0.1)]"
          >
            <FiFeather className="text-xs" />
            <span>Digital Library</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter"
            style={{ color: "var(--text-primary)" }}
          >
            Insights & <span className="text-red-500 italic">Innovations.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Exploring the intersection of <span className="text-red-500/80">AI</span>, 
            <span style={{ color: "var(--text-primary)" }}> Software Architecture</span>, and 
            <span className="text-red-500/80"> Modern Web Technologies</span>.
          </motion.p>
        </div>

        {/* --- SEARCH INTERFACE --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onMouseMove={handleMouseMove}
          className="group mx-auto max-w-3xl mb-16 relative"
        >
          {/* Spotlight background for search bar */}
          <div 
            className={`relative p-px rounded-2xl transition-all duration-500 ${isFocused ? 'bg-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.2)]' : ''}`}
            style={{ background: isFocused ? '' : 'var(--border-color)' }}
          >
            <div 
               className="relative flex items-center rounded-[15px] overflow-hidden transition-colors"
               style={{ background: "var(--bg-card)" }}
            >
              {/* Mouse spotlight effect */}
              <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                  background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(239,68,68,0.1), transparent 80%)`,
                }}
              />

              <div className="pl-6 z-10 transition-colors duration-300" style={{ color: isFocused ? 'var(--red-500)' : 'var(--text-muted)' }}>
                <FiSearch size={24} className={isFocused ? "text-red-500" : ""} />
              </div>
              
              <input
                type="text"
                placeholder="Search by topic, technology, or title..."
                value={search}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent py-6 px-6 text-lg outline-none font-medium z-10"
                style={{ 
                  color: "var(--text-primary)",
                  '--placeholder-color': 'var(--text-muted)' 
                }}
              />
              
              <div className="pr-6 hidden md:flex items-center gap-2 z-10">
                <span 
                  className="px-2 py-1 rounded-md border text-[10px] font-bold"
                  style={{ background: "var(--bg-secondary)", borderColor: "var(--border-color)", color: "var(--text-muted)" }}
                >
                  ESC
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
            <div className="flex items-center gap-2">
              <FiTrendingUp className="text-red-500" />
              <span>{filteredBlogs.length} Articles Found</span>
            </div>
            <div className="h-1 w-1 rounded-full hidden md:block" style={{ background: "var(--border-color)" }} />
            <div className="flex items-center gap-2 group cursor-pointer hover:text-red-500 transition-colors">
              <FiHash className="text-red-500" />
              <span>Explore Categories</span>
            </div>
          </div>
        </motion.div>

        {/* --- BLOGS GRID --- */}
        <div className="relative z-20 mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.slug || index}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <BlogCard blog={blog} />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-32 flex flex-col items-center justify-center text-center border border-dashed rounded-3xl backdrop-blur-sm"
                style={{ borderColor: "var(--border-color)", background: "var(--bg-card)" }}
              >
                <div className="h-20 w-20 rounded-full flex items-center justify-center mb-6 border" style={{ background: "var(--bg-secondary)", borderColor: "var(--border-color)" }}>
                  <FiSearch size={32} className="text-red-500" />
                </div>
                <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                  No results for "{search}"
                </h2>
                <p style={{ color: "var(--text-muted)" }}>Try searching for different keywords or tags.</p>
                <button 
                  onClick={() => setSearch("")}
                  className="mt-8 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-500/20"
                >
                  Clear Search
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Blogs;