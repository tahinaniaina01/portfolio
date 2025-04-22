"use client";

import { usePageTransitionStore } from "@/src/hooks/usePageTransition";
import { motion } from "framer-motion";

// const stairAnimation = {
//   initial: {
//     top: "0%",
//   },
//   animate: {
//     top: "100%",
//   },
//   exit: {
//     top: ["110%", "0%"],
//   },
// };

const totalSteps = 5;

const reverseIndex = (index: number) => {
  return totalSteps - index - 1;
};

function Stairs() {
  const { animate } = usePageTransitionStore();

  return (
    <div className="h-screen w-screen fixed top-0 left-0 right-0 bottom-0 pointer-events-none z-[99999]">
      <div className="w-full h-full flex flex-col absolute">
        {[...Array(totalSteps)].map((_, index) => {
          return (
            <motion.div
              key={index}
              animate={{
                left: !animate ? "-120%" : "0%",
                border: !animate ? "3px solid black" : "none",
              }}
              transition={{
                duration: 0.3,
                ease: "easeIn",
                delay: reverseIndex(index) * 0.05,
              }}
              className="h-full w-full bg-foreground relative z-[99999] tri-sup"
            />
          );
        })}
      </div>
      <div className="w-[100vw] h-[120vh] top-[-10vh] flex flex-col absolute">
        {[...Array(totalSteps + 1)].map((_, index) => {
          return (
            <motion.div
              key={index}
              animate={{
                left: animate ? "0%" : "120%",
                border: !animate ? "2px solid black" : "none",
              }}
              transition={{
                duration: 0.3,
                ease: "easeIn",
                delay: reverseIndex(index) * 0.05,
              }}
              className="h-full w-full bg-foreground relative z-[99999] tri-inf"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Stairs;
