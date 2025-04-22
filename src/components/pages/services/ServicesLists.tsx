"use client";

import {
  variantBlur,
  variantScale,
  variantTranslate,
} from "@/src/utils/animationVariants";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ServicesLists = () => {
  const services = [
    {
      title: "Web developper",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, suscipit? Perspiciatis qui unde quasi quas accusantium tempore?",
    },
    {
      title: "UI/UX Designer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, suscipit? Perspiciatis qui unde quasi quas accusantium tempore?",
    },
    {
      title: "Web scraping",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, suscipit? Perspiciatis qui unde quasi quas accusantium tempore?",
    },
    {
      title: "Logo Designer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, suscipit? Perspiciatis qui unde quasi quas accusantium tempore?",
    },
    {
      title: "Mobile development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, suscipit? Perspiciatis qui unde quasi quas accusantium tempore?",
    },
  ];
  return (
    <section className="my-16 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        {services.map((service, index) => {
          const { title, description } = service;
          return (
            <div className="grid grid-cols-1 lg:grid-cols-2" key={index}>
              <div className="bg-primary min-h-40"></div>
              <div
                className={`w-full group py-3 ${
                  index % 2
                    ? "md:order-first md:pr-5 xl:pr-7"
                    : "md:pl-5 xl:pl-7"
                } md:py-5 xl:py-7 flex flex-col gap-3 lg:gap-5 xl:gap-7`}
              >
                <div className="w-full flex items-center justify-between pr-5">
                  <motion.span
                    variants={variantScale(0, 0.5)}
                    initial={"hidden"}
                    whileInView={"visible"}
                    className="font-heading text-5xl lg:text-8xl font-extrabold group-hover:text-ring cursor-pointer"
                  >
                    0{index + 1}
                  </motion.span>
                  <motion.span
                    variants={variantTranslate({ x: -75, y: 75 })}
                    initial={"hidden"}
                    whileInView={"visible"}
                    className="bg-foreground text-background p-1 md:p-3 rounded-full group-hover:bg-ring transition-all cursor-pointer"
                  >
                    <ArrowUpRight className="md:w-12 md:h-12" />
                  </motion.span>
                </div>
                <motion.h1
                  variants={variantScale(0.1, 0.5)}
                  initial={"hidden"}
                  whileInView={"visible"}
                  className="text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl font-semibold group-hover:text-ring cursor-pointer"
                >
                  {title}
                </motion.h1>
                <motion.p className="text-sm md:text-lg xl:text-2xl">
                  {description.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      variants={variantBlur(0.01 * index)}
                      initial={"hidden"}
                      whileInView={"visible"}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesLists;
