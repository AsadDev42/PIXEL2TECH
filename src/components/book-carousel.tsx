import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BookCarouselProps {
  covers: string[];
  autoPlayInterval?: number;
}

export function BookCarousel({ covers, autoPlayInterval = 3500 }: BookCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % covers.length);
  }, [covers.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + covers.length) % covers.length);
  }, [covers.length]);

  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(nextSlide, autoPlayInterval);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, nextSlide, autoPlayInterval]);

  const handleInteraction = () => {
    setIsAutoPlaying(false);
    if (timerRef.current) clearInterval(timerRef.current);
    
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getVisibleIndices = () => {
    const indices = [];
    for (let i = -2; i <= 2; i++) {
      let index = (activeIndex + i) % covers.length;
      if (index < 0) index += covers.length;
      indices.push({ index, position: i });
    }
    return indices;
  };

  return (
    <div 
      className="relative w-full py-20 px-4 overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="relative mx-auto flex items-center justify-center h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-7xl">
        <AnimatePresence initial={false}>
          {getVisibleIndices().map(({ index, position }) => {
            const isCenter = position === 0;
            const isSide = Math.abs(position) === 1;
            const isFarSide = Math.abs(position) === 2;

            return (
              <motion.div
                key={`${covers[index]}-${index}`}
                initial={false}
                animate={{
                  x: position * (window.innerWidth < 768 ? 120 : window.innerWidth < 1024 ? 200 : 280),
                  scale: isCenter ? 1 : isSide ? 0.8 : 0.6,
                  zIndex: 10 - Math.abs(position),
                  opacity: isFarSide ? 0.3 : 1,
                  filter: isCenter ? 'blur(0px)' : 'blur(2px)',
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 1,
                }}
                className="absolute cursor-pointer"
                onClick={() => {
                  setActiveIndex(index);
                  handleInteraction();
                }}
              >
                <div className={`
                  relative aspect-[2/3] w-[180px] md:w-[260px] lg:w-[320px] 
                  rounded-lg overflow-hidden shadow-2xl transition-all duration-500
                  ${isCenter ? 'ring-1 ring-white/20' : ''}
                `}>
                  <img 
                    src={covers[index]} 
                    alt={`Book cover ${index + 1}`} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {!isCenter && (
                    <div className="absolute inset-0 bg-black/20 transition-opacity duration-500" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
            handleInteraction();
          }}
          className="p-3 rounded-full bg-background/80 dark:bg-black/40 backdrop-blur-md border border-border/50 dark:border-white/10 text-foreground hover:bg-background transition-all shadow-lg"
          aria-label="Previous book"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex gap-2">
          {covers.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIndex(i);
                handleInteraction();
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-8 bg-primary' : 'w-1.5 bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
            handleInteraction();
          }}
          className="p-3 rounded-full bg-background/80 dark:bg-black/40 backdrop-blur-md border border-border/50 dark:border-white/10 text-foreground hover:bg-background transition-all shadow-lg"
          aria-label="Next book"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
