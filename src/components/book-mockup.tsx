import { motion } from "framer-motion";

interface BookMockupProps {
  coverUrl: string;
  className?: string;
  delay?: number;
}

export function BookMockup({ coverUrl, className = "", delay = 0 }: BookMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`relative group ${className}`}
      style={{ perspective: "1500px" }}
    >
      {/* Shadow */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-4 bg-black/30 blur-xl rounded-full transition-transform group-hover:scale-110" />
      
      {/* Book Container */}
      <div 
        className="relative w-full aspect-[2/3] transition-transform duration-500 ease-out transform-gpu group-hover:rotate-y-[-20deg] group-hover:rotate-x-[5deg]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Spine */}
        <div 
          className="absolute inset-y-0 left-0 w-[8%] bg-neutral-800 origin-left border-r border-white/10"
          style={{ transform: "rotateY(-90deg)", transformStyle: "preserve-3d" }}
        />
        
        {/* Front Cover */}
        <div 
          className="relative w-full h-full rounded-r-sm overflow-hidden shadow-2xl border-l border-white/20"
          style={{ transform: "translateZ(0px)" }}
        >
          {/* Cover Image */}
          <img 
            src={coverUrl} 
            alt="Book Cover" 
            className="w-full h-full object-cover"
          />
          
          {/* Material Texture Overlay */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent mix-blend-overlay opacity-30" />
          <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-20 mix-blend-multiply" />
          
          {/* Lighting Highlight */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/10 via-transparent to-black/10" />
        </div>

        {/* Page Edges (Side) */}
        <div 
          className="absolute inset-y-0 right-0 w-[7%] bg-white/90 origin-right"
          style={{ 
            transform: "rotateY(90deg) translateZ(-1px)",
            backgroundImage: "linear-gradient(to right, #eee 1px, transparent 1px)",
            backgroundSize: "2px 100%"
          }}
        />

        {/* Page Edges (Top) */}
        <div 
          className="absolute inset-x-0 top-0 h-[7%] bg-white/90 origin-top"
          style={{ 
            transform: "rotateX(90deg) translateZ(-1px)",
            backgroundImage: "linear-gradient(to bottom, #eee 1px, transparent 1px)",
            backgroundSize: "100% 2px"
          }}
        />
      </div>
    </motion.div>
  );
}

export function BookComposition({ covers, className = "" }: { covers: string[], className?: string }) {
  // Use first 3 covers for composition
  const displayCovers = covers.slice(0, 3);
  
  return (
    <div className={`relative flex items-center justify-center h-full w-full py-12 px-8 ${className}`}>
      {displayCovers.map((url, i) => (
        <BookMockup
          key={url}
          coverUrl={url}
          delay={i * 0.15}
          className={`
            w-[45%] md:w-[40%] absolute transition-all duration-700
            ${i === 0 ? "z-10 -translate-x-1/4 scale-100" : ""}
            ${i === 1 ? "z-20 translate-x-0 scale-105 shadow-2xl" : ""}
            ${i === 2 ? "z-10 translate-x-1/4 scale-100" : ""}
          `}
        />
      ))}
    </div>
  );
}
