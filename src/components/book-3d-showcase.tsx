import React, { Suspense, useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment, Float, PerspectiveCamera, Text, useHelper } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Loader2, BookOpen } from 'lucide-react';

interface BookModelProps {
  coverUrl: string;
  rotation: [number, number, number];
}

function BookModel({ coverUrl, rotation }: BookModelProps) {
  const meshRef = useRef<THREE.Group>(null);
  
  // Use a fallback to prevent loader from hanging if image is broken
  const texture = useLoader(THREE.TextureLoader, coverUrl);
  
  const { viewport } = useThree();
  
  // Set texture properties for best appearance
  useMemo(() => {
    if (texture) {
      texture.anisotropy = 16;
      texture.minFilter = THREE.LinearFilter;
      texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.needsUpdate = true;
    }
  }, [texture]);

  // Dimensions - slightly adjust for better viewport fit
  const width = 3.2;
  const height = 4.8;
  const thickness = 0.5;

  return (
    <group ref={meshRef} rotation={rotation} scale={viewport.width < 5 ? 0.7 : 1}>
      {/* Front Cover */}
      <mesh position={[0, 0, thickness / 2]}>
        <boxGeometry args={[width, height, 0.02]} />
        <meshStandardMaterial map={texture} roughness={0.8} metalness={0.1} />
      </mesh>

      {/* Back Cover */}
      <mesh position={[0, 0, -thickness / 2]} rotation={[0, Math.PI, 0]}>
        <boxGeometry args={[width, height, 0.02]} />
        <meshStandardMaterial map={texture} roughness={0.8} metalness={0.1} />
      </mesh>

      {/* Spine */}
      <mesh position={[-width / 2, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[thickness, height, 0.02]} />
        <meshStandardMaterial color="#121212" roughness={0.8} />
      </mesh>

      {/* Pages (Top) */}
      <mesh position={[0, height / 2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[width - 0.05, thickness - 0.02, 0.01]} />
        <meshStandardMaterial color="#eeeeee" roughness={0.5} />
      </mesh>

      {/* Pages (Bottom) */}
      <mesh position={[0, -height / 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[width - 0.05, thickness - 0.02, 0.01]} />
        <meshStandardMaterial color="#eeeeee" roughness={0.5} />
      </mesh>

      {/* Pages (Right Edge) */}
      <mesh position={[width / 2, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[thickness - 0.02, height - 0.05, 0.01]} />
        <meshStandardMaterial color="#f0f0f0" roughness={0.5} />
        {/* Subtle page lines */}
        <mesh position={[0, 0, 0.005]}>
          <planeGeometry args={[thickness - 0.02, height - 0.05]} />
          <meshBasicMaterial color="#cccccc" transparent opacity={0.2} />
        </mesh>
      </mesh>
      
      {/* Inner Paper Block */}
      <mesh position={[0.025, 0, 0]}>
        <boxGeometry args={[width - 0.05, height - 0.05, thickness - 0.04]} />
        <meshStandardMaterial color="#ffffff" roughness={1} />
      </mesh>
    </group>
  );
}

interface InteractiveBookShowcaseProps {
  covers: string[];
}

export function InteractiveBookShowcase({ covers }: InteractiveBookShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextBook = () => setActiveIndex((prev) => (prev + 1) % covers.length);
  const prevBook = () => setActiveIndex((prev) => (prev - 1 + covers.length) % covers.length);

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Side: Thumbnail Selector (approx 30%) */}
        <div className="w-full lg:w-[30%] order-2 lg:order-1">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-2 gap-3 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
            {covers.map((url, i) => (
              <button
                key={url}
                onClick={() => setActiveIndex(i)}
                className={`
                  relative flex-shrink-0 w-full aspect-[2/3] rounded-xl overflow-hidden transition-all duration-300 transform
                  ${activeIndex === i 
                    ? 'ring-2 ring-primary scale-[0.98] shadow-lg border-2 border-primary/50' 
                    : 'opacity-50 hover:opacity-100 grayscale-[50%] hover:grayscale-0 border border-border/50'}
                `}
              >
                <img src={url} alt={`Book thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                {activeIndex === i && (
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <div className="bg-primary text-white p-1 rounded-full scale-75">
                      <BookOpen className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
          
          <div className="mt-8 hidden lg:block">
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-left"
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-2">Editorial Design</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Book Cover Showcase</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Click any cover on the left to view it in the interactive 3D mockup. Drag the book on the right to rotate it.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Side: 3D Viewer Container (approx 70%) */}
        <div className="w-full lg:w-[70%] order-1 lg:order-2">
          <div className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-neutral-100 dark:bg-neutral-900/50 rounded-[2rem] overflow-hidden cursor-grab active:cursor-grabbing border border-border/50 dark:border-white/5 shadow-2xl flex items-center justify-center">
            <div className="absolute inset-0 w-full h-full">
            
              {/* Navigation Arrows */}
              <div className="absolute inset-y-0 left-4 z-10 flex items-center">
                <button 
                  onClick={prevBook}
                  className="p-3 rounded-full bg-background/80 dark:bg-black/40 backdrop-blur-md border border-border/50 dark:border-white/10 text-foreground hover:bg-background transition-all shadow-lg"
                  aria-label="Previous book"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              </div>

              <div className="absolute inset-y-0 right-4 z-10 flex items-center">
                <button 
                  onClick={nextBook}
                  className="p-3 rounded-full bg-background/80 dark:bg-black/40 backdrop-blur-md border border-border/50 dark:border-white/10 text-foreground hover:bg-background transition-all shadow-lg"
                  aria-label="Next book"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Info Overlay */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none text-center">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold bg-background/50 dark:bg-black/30 backdrop-blur-sm px-4 py-1.5 rounded-full inline-block">
                  Click & Drag to Rotate
                </p>
              </div>

              <Canvas 
                shadows 
                gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
                camera={{ position: [0, 0, 8], fov: 45 }}
              >
                <Suspense fallback={null}>
                  <Environment preset="city" />
                  <ambientLight intensity={0.8} />
                  <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />
                  <directionalLight position={[-5, 5, 5]} intensity={1} />
                  
                  <Float 
                    speed={2} 
                    rotationIntensity={0.2} 
                    floatIntensity={0.5}
                  >
                    <BookModel 
                      key={covers[activeIndex]} 
                      coverUrl={covers[activeIndex]} 
                      rotation={[0.1, 0.3, 0]} 
                    />
                  </Float>

                  <ContactShadows 
                    position={[0, -3, 0]} 
                    opacity={0.6} 
                    scale={15} 
                    blur={2} 
                    far={4.5} 
                  />
                </Suspense>

                <OrbitControls 
                  enableZoom={false} 
                  enablePan={false} 
                  minPolarAngle={Math.PI / 4} 
                  maxPolarAngle={Math.PI / 1.2}
                  makeDefault
                  rotateSpeed={0.5}
                />
              </Canvas>
            </div>
            
            {/* Loading Indicator */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-data-[loading=true]:opacity-100 transition-opacity">
              <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
            </div>
          </div>
          
          <div className="mt-6 lg:hidden text-center">
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-1">Editorial Design</div>
              <h3 className="text-lg font-bold text-foreground">Book Cover Design</h3>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
