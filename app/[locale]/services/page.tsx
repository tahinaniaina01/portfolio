"use client";

import Hero from "@/src/components/pages/services/Hero";
import ServicesLists from "@/src/components/pages/services/ServicesLists";
import { usePageTransitionStore } from "@/src/hooks/usePageTransition";
import { useEffect } from "react";

function Services() {
  const { setAnimate } = usePageTransitionStore();

  useEffect(() => {
    setAnimate(2);
  }, [setAnimate]);

  return (
    <>
      <div className="w-full mt-[72px] xl:mt-[88px]">
        <Hero />
        <ServicesLists />
      </div>
    </>
  );
}

export default Services;
