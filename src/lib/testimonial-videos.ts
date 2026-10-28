import type { PlayerVideo } from "@/components/portfolio-video-player";

// Kept outside the portfolio registry: testimonials have no watch pages or share links.
export const TESTIMONIAL_VIDEOS = [
  {
    title: "Testimonial 1",
    src: "https://github.com/AsadDev42/PIXEL2TECH/releases/download/testimonials-2026-10-28/testimonial-1.mp4",
    poster: "/testimonials/testimonial-1.jpg",
    orientation: "vertical",
  },
  {
    title: "Testimonial 2",
    src: "https://github.com/AsadDev42/PIXEL2TECH/releases/download/testimonials-2026-10-28/testimonial-2.mp4",
    poster: "/testimonials/testimonial-2.jpg",
    orientation: "vertical",
  },
  {
    title: "Testimonial 3",
    src: "https://github.com/AsadDev42/PIXEL2TECH/releases/download/testimonials-2026-10-28/testimonial-3.mp4",
    poster: "/testimonials/testimonial-3.jpg",
    orientation: "vertical",
  },
  {
    title: "Testimonial 4",
    src: "https://github.com/AsadDev42/PIXEL2TECH/releases/download/testimonials-2026-10-28/testimonial-4.mp4",
    poster: "/testimonials/testimonial-4.jpg",
    orientation: "vertical",
  },
  {
    title: "Testimonial 5",
    src: "https://github.com/AsadDev42/PIXEL2TECH/releases/download/testimonials-2026-10-28/testimonial-5.mp4",
    poster: "/testimonials/testimonial-5.jpg",
    orientation: "vertical",
  },
  {
    title: "Testimonial 6",
    src: "https://github.com/AsadDev42/PIXEL2TECH/releases/download/testimonials-2026-10-28/testimonial-6.mp4",
    poster: "/testimonials/testimonial-6.jpg",
    orientation: "vertical",
  },
  {
    title: "Testimonial 7",
    src: "https://github.com/AsadDev42/PIXEL2TECH/releases/download/testimonials-2026-10-28/testimonial-7.mp4",
    poster: "/testimonials/testimonial-7.jpg",
    orientation: "vertical",
  },
  {
    title: "Testimonial 8",
    src: "https://github.com/AsadDev42/PIXEL2TECH/releases/download/testimonials-2026-10-28/testimonial-8.mp4",
    poster: "/testimonials/testimonial-8.jpg",
    orientation: "vertical",
  },
  {
    title: "Testimonial 9",
    src: "https://github.com/AsadDev42/PIXEL2TECH/releases/download/testimonials-2026-10-28/testimonial-9.mp4",
    poster: "/testimonials/testimonial-9.jpg",
    orientation: "vertical",
  },
] satisfies (PlayerVideo & { poster: string })[];
