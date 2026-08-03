import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Scroll reveals are intentionally disabled site-wide.
 *
 * Reveal-on-scroll made sections pop in late (or not at all until the user
 * scrolled past them) and caused blank/white areas on refresh. These wrappers
 * now render plain, always-visible containers so every section is painted with
 * the server HTML. Hover motion and page transitions are unaffected.
 */
export function FadeIn({
  children,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return <div className={className}>{children}</div>;
}

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return <div className={className}>{children}</div>;
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

export function PageTransition({ children }: { children: ReactNode; skipInitial?: boolean }) {
  return <>{children}</>;
}
