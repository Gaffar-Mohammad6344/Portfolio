import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50">
      <div className="flex items-center justify-between px-8 py-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-black/20 backdrop-blur-md shadow-lg">
        <h1 className="text-2xl font-bold tracking-tighter">
          GAFFAR<span className="text-red-500">.</span>
        </h1>
        
        <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-widest text-slate-600 dark:text-slate-300">
          <a href="#home" className="hover:text-red-500 transition">Home</a>
          <a href="#projects" className="hover:text-red-500 transition">Projects</a>
          <a href="#contact" className="hover:text-red-500 transition">Contact</a>
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
};