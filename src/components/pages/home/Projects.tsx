"use client";

import image from "@/src/assets/hotel.png";
import { ClientOnlyAnimatedTestimonials } from "../../utils/animated-testimonials-client";
// import { AnimatedTestimonials } from "@/src/components/ui/animated-testimonials";

export function Projects() {
  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempora ab eveniet numquam et vel a necessitatibus esse itaque ullam?",
      name: "Hotel website 1",
      designation: "Reactjs + Tailwindcss + Typescript",
      src: image,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempora ab eveniet numquam et vel a necessitatibus esse itaque ullam?",
      name: "Hotel website 2",
      designation: "Reactjs + Tailwindcss + Typescript",
      src: image,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempora ab eveniet numquam et vel a necessitatibus esse itaque ullam?",
      name: "Hotel website 3",
      designation: "Reactjs + Tailwindcss + Typescript",
      src: image,
    },
  ];
  return <ClientOnlyAnimatedTestimonials testimonials={testimonials} />;
}
