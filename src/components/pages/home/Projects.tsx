"use client";

import image from "@/src/assets/hotel.png";
import { ClientOnlyAnimatedTestimonials } from "../../utils/animated-testimonials-client";
// import { AnimatedTestimonials } from "@/src/components/ui/animated-testimonials";

export function Projects() {
  const testimonials = [
    {
      quote:
        "L'attention au détail et les fonctionnalités innovantes ont complètement transformé notre flux de travail. C'est exactement ce que nous avons cherché.",
      name: "Sarah Chen",
      designation: "Responsable produit chez TechFlow",
      src: image,
    },
    {
      quote:
        "La mise en œuvre a été sans heurt et les résultats ont dépassé nos attentes. La flexibilité de la plateforme est remarquable.",
      name: "Michael Rodriguez",
      designation: "Directeur technique chez InnovateSphere",
      src: image,
    },
    {
      quote:
        "Cette solution a considérablement amélioré la productivité de notre équipe. L'interface intuitive rend les tâches complexes simples.",
      name: "Emily Watson",
      designation: "Directrice des opérations chez CloudScale",
      src: image,
    },
  ];
  return <ClientOnlyAnimatedTestimonials testimonials={testimonials} />;
}
