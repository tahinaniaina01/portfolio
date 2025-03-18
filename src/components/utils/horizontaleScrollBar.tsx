"use client";

import { motion, useScroll } from "framer-motion";

function HorizontaleScrollBar() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.span
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        className={`absolute -bottom-[3px] left-0 h-[3px] right-0 bg-primary`}
      ></motion.span>
      {/* <motion.span
        className={`absolute -bottom-[1px] z-[99999] h-[5px] w-[5px] rounded-full shadow-full bg-primary cursor-pointer`}
      ></motion.span> */}
    </>
  );
}

export default HorizontaleScrollBar;
