import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import useTheme from "../hooks/useTheme";

const navItems = [
  { name: "Home", href: "/#hero" },
  { name: "Journey", href: "/#journey" },
  { name: "Projects", href: "/#projects" },
  { name: "Freelancing", href: "/#freelancing" },
  { name: "Interests", href: "/#interests" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { darkMode, toggleTheme } = useTheme();

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Common styles for desktop nav items to avoid repetition
  const navLinkClasses = "relative px-3 py-2 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] transition-colors z-10";

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] flex justify-center p-4 md:p-6 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`
            pointer-events-auto relative flex items-center justify-between
            px-4 md:px-6 py-2 md:py-3 rounded-2xl transition-all duration-500 ease-in-out
            border shadow-2xl backdrop-blur-xl
            ${isScrolled ? "w-full max-w-4xl py-2" : "w-full max-w-7xl"}
          `}
          style={{
            background: "var(--nav-bg)",
            borderColor: "var(--nav-border)",
          }}
        >
          {/* Logo */}
          <div className="flex-shrink-0 z-10 mr-4">
            <Link to="/">
              <h1 className="text-xl font-black tracking-tighter uppercase" style={{ color: "var(--text-primary)" }}>
                Gaffar<span className="text-red-500">.</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-x-1 relative whitespace-nowrap">
            {navItems.map((item, index) => {
              // Check if it's a route link or a hash/section link
              const isInternalRoute = item.href === "/blogs";
              
              const linkContent = (
                <>
                  {item.name}
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="nav-hover"
                      className="absolute inset-0 rounded-xl -z-10"
                      style={{ background: "var(--toggle-bg)" }}
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </>
              );

              return isInternalRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={navLinkClasses}
                  style={{ color: "var(--text-secondary)" }}
                >
                  {linkContent}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={navLinkClasses}
                  style={{ color: "var(--text-secondary)" }}
                >
                  {linkContent}
                </a>
              );
            })}
          </div>

          {/* Control Group */}
          <div className="flex items-center gap-2 z-10 ml-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="h-9 w-9 md:h-10 md:w-10 flex items-center justify-center rounded-xl border transition-all hover:scale-105 active:scale-90"
              style={{
                background: "var(--toggle-bg)",
                borderColor: "var(--border-color)",
                color: "var(--text-primary)",
              }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div key="sun" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
                    <FiSun size={18} />
                  </motion.div>
                ) : (
                  <motion.div key="moon" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
                    <FiMoon size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden h-9 w-9 flex items-center justify-center rounded-xl bg-red-600 text-white shadow-lg shadow-red-600/40"
            >
              <HiMenuAlt3 size={22} />
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] backdrop-blur-2xl flex flex-col items-center justify-center p-8 lg:hidden"
            style={{ background: "var(--bg-secondary)" }}
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 h-12 w-12 flex items-center justify-center rounded-full border"
              style={{
                background: "var(--toggle-bg)",
                borderColor: "var(--border-color)",
                color: "var(--text-primary)",
              }}
            >
              <HiX size={28} />
            </button>

            <div className="flex flex-col items-center gap-6">
              {navItems.map((item, index) => {
                const isInternalRoute = item.href === "/blogs";
                const mobileClasses = "text-3xl font-black uppercase tracking-tighter hover:text-red-500 transition-colors";
                
                return isInternalRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={mobileClasses}
                      style={{ color: "var(--text-primary)", display: "block" }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                ) : (
                  <motion.a
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={mobileClasses}
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.name}
                  </motion.a>
                );
              })}

              {/* Theme toggle in mobile menu */}
              <button
                onClick={toggleTheme}
                className="mt-4 flex items-center gap-2 px-5 py-2.5 rounded-xl border font-bold text-sm transition-all"
                style={{
                  background: "var(--toggle-bg)",
                  borderColor: "var(--border-color)",
                  color: "var(--text-primary)",
                }}
              >
                {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;