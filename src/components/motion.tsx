import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Reveal-on-scroll without a blank first paint.
 *
 * Framer inlines `initial` styles into the server HTML, so `initial={{opacity:0}}`
 * used to ship every section hidden — the page looked like a white screen on
 * refresh until hydration finished. Instead we render with no hidden style
 * (`initial={false}`) and, in a layout effect (before the browser paints),
 * only arm the animation for elements that start below the fold. Above-the-fold
 * content is therefore visible instantly, and off-screen content still animates.
 */
function useRevealTarget(disabled: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useIsoLayoutEffect(() => {
    if (disabled) return;
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top;
    // Only hide what the user cannot see yet — no flash, no blank hero.
    if (top > window.innerHeight * 0.9) setArmed(true);
  }, [disabled]);

  const target = disabled || !armed || inView ? "show" : "hidden";
  return { ref, target } as const;
}

export function FadeIn({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  const { ref, target } = useRevealTarget(!!reduce);
  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease, delay } },
  };
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial={false}
      animate={target}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  gap = 0.06,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  const reduce = useReducedMotion();
  const { ref, target } = useRevealTarget(!!reduce);
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : gap } },
  };
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial={false}
      animate={target}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 20,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease } },
  };
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}


export function HoverLift({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease }}
    >
      {children}
    </motion.div>
  );
}

export function PageTransition({
  children,
  skipInitial = false,
}: {
  children: ReactNode;
  /** Skip the enter animation on the very first (server-rendered) paint so the
   * hero heading is painted immediately instead of waiting for hydration. */
  skipInitial?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce || skipInitial ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? undefined : { opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease }}
    >
      {children}
    </motion.div>
  );
}



