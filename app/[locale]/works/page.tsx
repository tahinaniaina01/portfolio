"use client";

import { usePageTransitionStore } from "@/src/hooks/usePageTransition";
import { useEffect } from "react";

function Works() {
  const { setAnimate } = usePageTransitionStore();

  useEffect(() => {
    setAnimate(false);
  }, [setAnimate]);

  return (
    <>
      <div className="w-full h-[300vh] mt-[72px] xl:mt-[88px]">Works</div>;
    </>
  );
}

export default Works;
