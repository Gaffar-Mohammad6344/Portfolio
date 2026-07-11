import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const BlogCard = ({ blog }) => {
  if (!blog) return null;

  // 3D Perspective Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[550px] w-full perspective-1000 group"
    >
      <Link to={`/blogs/${blog.slug}`} className="block h-full w-full">
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="relative h-full w-full rounded-[40px] bg-white/5 dark:bg-[#0D0D10]/80 border border-white/10 backdrop-blur-2xl overflow-hidden transition-all duration-500 group-hover:border-red-500/50 group-hover:shadow-[0_0_50px_rgba(239,68,68,0.15)]"
        >
          {/* --- CINEMATIC IMAGE --- */}
          <div className="absolute inset-0 z-0">
            <motion.img
              src={blog.cover}
              alt={blog.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
            />
            {/* Dark Scrim / Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#0D0D10] opacity-90 transition-opacity duration-500 group-hover:opacity-80" />
          </div>

          {/* --- CONTENT OVERLAY --- */}
          <div 
            style={{ transform: "translateZ(80px)" }}
            className="absolute inset-0 z-10 p-10 flex flex-col justify-end"
          >
            {/* Meta */}
            <div className="flex items-center gap-4 mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              <span className="px-4 py-1 rounded-full bg-red-600 text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-red-600/40">
                {blog.tags?.[0] || "Innovation"}
              </span>
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">
                {blog.readingTime}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.1] tracking-tighter mb-6 group-hover:text-red-500 transition-colors duration-300">
              {blog.title}
            </h2>

            {/* Description */}
            <p className="text-white/60 text-sm leading-relaxed line-clamp-2 mb-8 transform group-hover:text-white/90 transition-colors">
              {blog.description}
            </p>

            {/* Bottom Row */}
            <div className="flex items-center justify-between pt-8 border-t border-white/10">
              <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">
                {blog.date}
              </div>
              
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white transition-all duration-500 group-hover:bg-white group-hover:text-black">
                <FiArrowUpRight size={22} />
              </div>
            </div>
          </div>

          {/* Dynamic Light Shine */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.1)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;