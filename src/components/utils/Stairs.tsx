"use client";

import { usePageTransitionStore } from "@/src/hooks/usePageTransition";
import { motion } from "framer-motion";

function Stairs() {
  const { animate } = usePageTransitionStore();

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{
        x: animate === 0 ? "100%" : animate === 1 ? "0%" : "-100%",
        transition: { duration: 0.3 },
      }}
      className={`h-screen w-screen fixed top-0 left-0 right-0 bottom-0 pointer-events-none bg-muted z-[99999]`}
    />
  );
}

export default Stairs;
