import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { ContactShadows, Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { ChevronLeft, ChevronRight, RotateCcw, RotateCw } from "lucide-react";
import type { BookCover } from "@/assets/book-cover-assets";

/**
 * Interactive 3D book viewer. Heavy (three.js + drei), so the portfolio page
 * loads this module on demand, only when a visitor opens the 3D view.
 */

const BASE_ROTATION_Y = 0.3;
const TURN_STEP = Math.PI / 4;

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);
  return matches;
}

function BookModel({ coverUrl, turn }: { coverUrl: string; turn: number }) {
  const group = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, coverUrl);
  const { viewport } = useThree();

  useEffect(() => {
    texture.anisotropy = 16;
    texture.minFilter = THREE.LinearFilter;
    texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.needsUpdate = true;
  }, [texture]);

  // Ease toward the angle chosen with the turn buttons.
  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;
    const target = BASE_ROTATION_Y + turn;
    g.rotation.y += (target - g.rotation.y) * Math.min(1, delta * 6);
  });

  const width = 3.2;
  const height = 4.8;
  const thickness = 0.5;
  // Fit the book inside the viewer with room for the overlay buttons.
  const fit = Math.min(1, (viewport.height * 0.75) / height, (viewport.width * 0.75) / width);

  return (
    <group ref={group} rotation={[0.1, BASE_ROTATION_Y, 0]} scale={fit}>
      {/* Front cover */}
      <mesh position={[0, 0, thickness / 2]}>
        <boxGeometry args={[width, height, 0.02]} />
        <meshStandardMaterial map={texture} roughness={0.8} metalness={0.1} />
      </mesh>

      {/* Back cover */}
      <mesh position={[0, 0, -thickness / 2]} rotation={[0, Math.PI, 0]}>
        <boxGeometry args={[width, height, 0.02]} />
        <meshStandardMaterial map={texture} roughness={0.8} metalness={0.1} />
      </mesh>

      {/* Spine */}
      <mesh position={[-width / 2, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[thickness, height, 0.02]} />
        <meshStandardMaterial color="#121212" roughness={0.8} />
      </mesh>

      {/* Page edges: top, bottom, fore-edge */}
      <mesh position={[0, height / 2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[width - 0.05, thickness - 0.02, 0.01]} />
        <meshStandardMaterial color="#eeeeee" roughness={0.5} />
      </mesh>
      <mesh position={[0, -height / 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[width - 0.05, thickness - 0.02, 0.01]} />
        <meshStandardMaterial color="#eeeeee" roughness={0.5} />
      </mesh>
      <mesh position={[width / 2, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[thickness - 0.02, height - 0.05, 0.01]} />
        <meshStandardMaterial color="#f0f0f0" roughness={0.5} />
      </mesh>

      {/* Paper block */}
      <mesh position={[0.025, 0, 0]}>
        <boxGeometry args={[width - 0.05, height - 0.05, thickness - 0.04]} />
        <meshStandardMaterial color="#ffffff" roughness={1} />
      </mesh>
    </group>
  );
}

const overlayButton =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/85 text-foreground shadow-lg backdrop-blur transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function InteractiveBookShowcase({
  covers,
  initialIndex = 0,
  onActiveChange,
}: {
  covers: BookCover[];
  initialIndex?: number;
  onActiveChange?: (index: number) => void;
}) {
  const count = covers.length;
  const [active, setActive] = useState(initialIndex);
  const [turn, setTurn] = useState(0);
  // Drag-to-rotate only with a mouse or trackpad. On touch screens the canvas
  // must not swallow the swipe, or the page would stop scrolling.
  const finePointer = useMediaQuery("(pointer: fine)");
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    onActiveChange?.(active);
  }, [active, onActiveChange]);

  if (count === 0) return null;
  const cover = covers[active]!;
  const select = (i: number) => {
    setActive(((i % count) + count) % count);
    setTurn(0);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,7fr)] lg:gap-10">
      {/* Viewer: first on phones, right-hand column on desktop */}
      <div className="lg:order-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-muted sm:aspect-[16/10] lg:aspect-auto lg:h-[640px]">
          <div
            className={`absolute inset-0 ${finePointer ? "cursor-grab active:cursor-grabbing" : ""}`}
          >
            <Canvas
              dpr={[1, 2]}
              gl={{ antialias: true, alpha: true }}
              camera={{ position: [0, 0, 7], fov: 45 }}
              style={{ touchAction: finePointer ? "none" : "pan-y" }}
              aria-label={`3D model of the book cover for ${cover.title}`}
              role="img"
            >
              <ambientLight intensity={0.9} />
              <hemisphereLight args={["#ffffff", "#8a8a8a", 0.6]} />
              <pointLight position={[10, 10, 10]} intensity={1.5} />
              <directionalLight position={[-5, 5, 5]} intensity={1} />
              <Suspense fallback={null}>
                <Float
                  speed={reduceMotion ? 0 : 2}
                  rotationIntensity={reduceMotion ? 0 : 0.2}
                  floatIntensity={reduceMotion ? 0 : 0.5}
                >
                  <BookModel key={cover.src} coverUrl={cover.src} turn={turn} />
                </Float>
                <ContactShadows position={[0, -3, 0]} opacity={0.6} scale={15} blur={2} far={4.5} />
              </Suspense>
              {finePointer && (
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  minPolarAngle={Math.PI / 4}
                  maxPolarAngle={Math.PI / 1.2}
                  makeDefault
                  rotateSpeed={0.5}
                />
              )}
            </Canvas>
          </div>

          <div className="absolute inset-y-0 left-3 flex items-center">
            <button
              type="button"
              onClick={() => select(active - 1)}
              aria-label="Previous book"
              className={overlayButton}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-3 flex items-center">
            <button
              type="button"
              onClick={() => select(active + 1)}
              aria-label="Next book"
              className={overlayButton}
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setTurn((t) => t - TURN_STEP)}
              aria-label="Turn the book left"
              className={overlayButton}
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
            </button>
            <p className="rounded-full bg-background/85 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              {finePointer ? "Drag or use the buttons to turn" : "Use the buttons to turn"}
            </p>
            <button
              type="button"
              onClick={() => setTurn((t) => t + TURN_STEP)}
              aria-label="Turn the book right"
              className={overlayButton}
            >
              <RotateCw className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
        <p aria-live="polite" className="mt-3 text-center text-sm font-medium text-foreground">
          {cover.title}{" "}
          <span className="font-normal text-muted-foreground">
            ({active + 1} of {count})
          </span>
        </p>
      </div>

      {/* Cover picker: a swipeable strip on phones, a two-column grid on desktop */}
      <div className="min-w-0 lg:order-1">
        <p className="text-sm text-muted-foreground">Select a cover to see it on the 3D book.</p>
        <ul className="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto p-1 lg:grid lg:max-h-[600px] lg:grid-cols-2 lg:overflow-y-auto">
          {covers.map((c, i) => (
            <li key={c.src} className="w-20 shrink-0 snap-start sm:w-24 lg:w-auto">
              <button
                type="button"
                onClick={() => select(i)}
                aria-label={`Show ${c.title}`}
                aria-pressed={i === active}
                className={`block aspect-[2/3] w-full overflow-hidden rounded-xl border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  i === active
                    ? "border-primary ring-2 ring-primary"
                    : "border-border opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={c.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
