"use client";

import { usePageTransitionStore } from "@/src/hooks/usePageTransition";
import { useEffect } from "react";

function About() {
  const { setAnimate } = usePageTransitionStore();

  useEffect(() => {
    setAnimate(false);
  }, [setAnimate]);
  return (
    <>
      <div className="w-full h-[300vh] mt-[72px] xl:mt-[88px]">Resume</div>;
    </>
  );
}

export default About;
