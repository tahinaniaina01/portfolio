"use client";

import { variantScale } from "@/src/utils/animationVariants";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string | StaticImageData;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const t = useTranslations("home.projects");

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  // const randomRotateY = () => {
  //   return Math.floor(Math.random() * 21) - 10;
  // };

  const rotations = useMemo(() => {
    return testimonials.map(() => Math.floor(Math.random() * 21) - 10);
  }, [testimonials]);
  return (
    <section className="px-4 md:px-8 lg:px-12">
      <motion.h1
        variants={variantScale()}
        initial={"hidden"}
        whileInView={"visible"}
        className="text-start md:text-center text-6xl my-7 xl:mt-16 xl:mb-12 font-heading"
      >
        {t("title")}
      </motion.h1>
      <div
        suppressHydrationWarning={true}
        className="container mx-auto antialiased font-sans pb-20"
      >
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-20">
          <div>
            <div className="relative h-full min-h-[200px] md:min-h-[360px] w-full">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: rotations[index],
                    }}
                    whileInView={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : rotations[index],
                      zIndex: isActive(index)
                        ? 999
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: rotations[index],
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom border-border border-2 rounded-3xl"
                  >
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-center"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex justify-between flex-col py-4 2xl:py-9 gap-5 lg:gap-12 2xl:gap-24">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h3 className="font-bold font-heading text-2xl lg:text-4xl my-3">
                {testimonials[active].name}
              </h3>
              <p className="text-sm xl:text-lg text-muted-foreground">
                {testimonials[active].designation}
              </p>
              <motion.p className="text-lg xl:text-xl text-gray-500 mt-8 dark:text-neutral-300">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    whileInView={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
            <div className="flex gap-3 md:gap-5 xl:gap-7 xl:pt-12 md:pt-0">
              <motion.button
                initial={{
                  rotate: "90deg",
                  scale: 0.5,
                  translateX: 50,
                }}
                whileInView={{
                  rotate: "0deg",
                  scale: 1,
                  translateX: 0,
                  transition: {
                    duration: 0.5,
                    type: "spring",
                  },
                }}
                onClick={handlePrev}
                className="h-10 w-10 lg:h-14 lg:w-14 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
              >
                <IconArrowLeft className="h-7 w-7 lg:h-10 lg:w-10 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
              </motion.button>
              <motion.button
                initial={{
                  rotate: "-90deg",
                  scale: 0.5,
                  translateX: -50,
                }}
                whileInView={{
                  rotate: "0deg",
                  scale: 1,
                  translateX: 0,
                  transition: {
                    duration: 0.5,
                    type: "spring",
                  },
                }}
                onClick={handleNext}
                className="h-10 w-10 lg:h-14 lg:w-14 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
              >
                <IconArrowRight className="h-7 w-7 lg:h-10 lg:w-10 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
