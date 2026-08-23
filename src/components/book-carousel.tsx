import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { BookMockup } from './book-mockup';

interface BookCarouselProps {
  covers: string[];
  autoPlayInterval?: number;
}

export function BookCarousel({ covers, autoPlayInterval = 3500 }: BookCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    const count = windowWidth < 768 ? 1 : 2;
    for (let i = -count; i <= count; i++) {
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
        <AnimatePresence initial={false} mode="popLayout">
          {getVisibleIndices().map(({ index, position }) => {
            const isCenter = position === 0;
            const isSide = Math.abs(position) === 1;
            const isFarSide = Math.abs(position) === 2;

            const xOffset = windowWidth < 768 ? 200 : windowWidth < 1024 ? 240 : 340;

            return (
              <motion.div
                key={`${covers[index]}-${index}`}
                initial={{ opacity: 0, scale: 0.5, x: position * xOffset, rotateY: position * 45, translateZ: -200 }}
                animate={{
                  x: position * xOffset,
                  scale: isCenter ? 1.1 : 0.85,
                  zIndex: 10 - Math.abs(position),
                  opacity: 1,
                  rotateY: position * -25, // Angled toward center
                  translateZ: isCenter ? 100 : -100, // Forward/backward depth
                  filter: isCenter ? 'blur(0px)' : 'blur(1px)',
                }}
                exit={{ opacity: 0, scale: 0.5, x: position * xOffset * 1.5 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                  mass: 1.2
                }}
                className="absolute cursor-pointer"
                style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
                onClick={() => {
                  if (!isCenter) {
                    setActiveIndex(index);
                    handleInteraction();
                  }
                }}
              >
                <div className={`
                  w-[200px] md:w-[280px] lg:w-[360px] transition-all duration-500
                  ${isCenter ? '' : 'brightness-75'}
                `}>
                  <BookMockup 
                    coverUrl={covers[index]} 
                    className="w-full"
                  />
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
        
        <div className="flex gap-2 max-w-[200px] md:max-w-md overflow-x-auto scrollbar-none py-1">
          {covers.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIndex(i);
                handleInteraction();
              }}
              className={`h-1.5 shrink-0 rounded-full transition-all duration-300 ${
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
