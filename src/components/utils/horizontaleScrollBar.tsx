"use client";

import { motion, useScroll } from "framer-motion";

function HorizontaleScrollBar({ isScroll }: { isScroll?: boolean }) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <span
        className={`absolute ${
          !isScroll && "hidden"
        } -bottom-[5px] lg:-bottom-[6px] left-0 h-[5px] lg:h-[6px] right-0 bg-accent`}
      ></span>
      <motion.span
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        className={`absolute ${
          !isScroll && "hidden"
        } -bottom-[5px] lg:-bottom-[6px] left-0 h-[5px] lg:h-[6px] right-0 bg-primary`}
      ></motion.span>
      {/* <motion.span
        className={`absolute -bottom-[1px] z-99999 h-[5px] w-[5px] rounded-full shadow-full bg-primary cursor-pointer`}
      ></motion.span> */}
    </>
  );
}

export default HorizontaleScrollBar;
