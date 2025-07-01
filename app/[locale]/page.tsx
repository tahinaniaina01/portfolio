"use client";

import AboutMe from "@/src/components/pages/home/AboutMe";
import Contacts from "@/src/components/pages/home/Contacts";
import Hero from "@/src/components/pages/home/Hero";
import { Projects } from "@/src/components/pages/home/Projects";
import Skills from "@/src/components/pages/home/Skills";
import Stats from "@/src/components/pages/home/Stats";
import { usePageTransitionStore } from "@/src/hooks/usePageTransition";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  const { setAnimate } = usePageTransitionStore();

  useEffect(() => {
    setAnimate(2);

    return () => {
      setAnimate(0);
    };
  }, [setAnimate]);

  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 0.23, duration: 1, ease: "easeInOut" },
        }}
        className="h-screen w-screen fixed bg-background top-0 pointer-events-none z-1000"
      />
      <div className="w-full mt-[72px] xl:mt-[88px]">
        <Hero />
        <Stats />
        <AboutMe />
        <Skills />
        <Projects />
        <Contacts />
      </div>
    </>
  );
}
