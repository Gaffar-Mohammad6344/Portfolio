/**
 * PREMIUM BLOG LOADER UTILITY
 * Featuring: Memoized caching, automatic reading time calculation, 
 * and browser-safe frontmatter parsing.
 */

// Cache variable to prevent re-parsing on every component re-render
let cachedBlogs = null;

const parseFrontmatter = (fileContent) => {
  const frontmatterRegex = /^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/;
  const match = frontmatterRegex.exec(fileContent);

  if (!match) return { data: {}, content: fileContent };

  const yamlBlock = match[1];
  const content = match[2].trim();
  const data = {};

  yamlBlock.split("\n").forEach((line) => {
    const firstColon = line.indexOf(":");
    if (firstColon === -1) return;

    const key = line.slice(0, firstColon).trim();
    let value = line.slice(firstColon + 1).trim();

    // Remove quotes
    value = value.replace(/^["']|["']$/g, "");

    // Handle YAML-style arrays: [Tag1, Tag2]
    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((item) => item.trim().replace(/^["']|["']$/g, ""));
    } 
    // Handle Boolean strings
    else if (value.toLowerCase() === "true") data[key] = true;
    else if (value.toLowerCase() === "false") data[key] = false;
    else {
      data[key] = value;
    }
  });

  return { data, content };
};

/**
 * Calculates reading time based on word count
 * standard: 200 words per minute
 */
const calculateReadingTime = (text) => {
  const wordsPerMinute = 200;
  const noOfWords = text.split(/\s+/).length;
  const minutes = Math.ceil(noOfWords / wordsPerMinute);
  return `${minutes} min read`;
};

// Vite-specific: Import all markdown files from the blogs directory
const modules = import.meta.glob("../blogs/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

export const getAllBlogs = () => {
  // Return cache if it exists (Performance Optimization)
  if (cachedBlogs) return cachedBlogs;

  try {
    const blogs = Object.entries(modules).map(([path, rawContent]) => {
      const { data, content: markdown } = parseFrontmatter(rawContent);

      // Generate slug from filename
      const slug = path.split("/").pop().replace(".md", "");

      // Premium Data Mapping
      return {
        slug,
        title: data.title || "Untitled Masterpiece",
        date: data.date || new Date().toLocaleDateString(),
        description: data.description || "An insightful journey into modern technology and design principles.",
        cover: data.cover || "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1000",
        // Use frontmatter readingTime, or calculate it automatically if missing
        readingTime: data.readingTime || calculateReadingTime(markdown),
        tags: Array.isArray(data.tags) ? data.tags : ["Tech"],
        content: markdown,
        featured: data.featured === true,
      };
    });

    // Sort by date (Newest First)
    cachedBlogs = blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    return cachedBlogs;
  } catch (error) {
    console.error("CRITICAL: Blog Loader failed to execute.", error);
    return [];
  }
};

/**
 * Optimized Slug Lookup
 */
export const getBlogBySlug = (slug) => {
  const allBlogs = getAllBlogs();
  const found = allBlogs.find((blog) => blog.slug === slug);
  
  if (!found) {
    console.warn(`WARN: Blog with slug "${slug}" not found.`);
  }
  
  return found;
};