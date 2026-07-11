import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import FreelancingWorks from "./components/FreelancingWorks";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Pages
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";

/**
 * ScrollToTop Helper
 * Ensures the page scrolls to the top whenever the URL path changes.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/**
 * Portfolio Component
 * Renders all sections for the main landing page with proper IDs.
 */
function Portfolio() {
  return (
    <main className="overflow-x-hidden">
      <section id="hero">
        <Hero />
      </section>
      <section id="journey">
        <Journey />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="freelancing">
        <FreelancingWorks />
      </section>
      <section id="interests">
        <Interests />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* 1. Scroll Restoration Logic */}
      <ScrollToTop />

      {/* 2. Global Theme Wrapper */}
      <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-[#050816] dark:text-white">
        
        {/* 3. Global Navbar (Stays visible on all routes) */}
        <Navbar />

        {/* 4. Route Definitions */}
        <Routes>
          {/* Main Portfolio Landing Page */}
          <Route path="/" element={<Portfolio />} />

          {/* Blogs Listing Page */}
          <Route path="/blogs" element={<Blogs />} />

          {/* Dynamic Individual Blog Page */}
          <Route path="/blogs/:slug" element={<BlogDetails />} />

          {/* 404 Page / Catch-all */}
          <Route 
            path="*" 
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
              </div>
            } 
          />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;