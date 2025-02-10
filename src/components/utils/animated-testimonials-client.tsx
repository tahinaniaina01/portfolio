import dynamic from "next/dynamic";

export const ClientOnlyAnimatedTestimonials = dynamic(
  () =>
    import("@/src/components/ui/animated-testimonials").then(
      (mod) => mod.AnimatedTestimonials
    ),
  { ssr: false }
);
