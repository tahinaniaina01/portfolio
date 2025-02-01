"use client";

import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const totalSteps = 6;

const reverseIndex = (index: number) => {
  return totalSteps - index - 1;
};

function Stairs() {
  return (
    <>
      {[...Array(totalSteps)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.05,
            }}
            className="h-full w-full bg-foreground relative"
          />
        );
      })}
    </>
  );
}

export default Stairs;
