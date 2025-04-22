"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <motion.main
        key={pathname}
        exit={{ display: "none" }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}

export default PageTransition;
