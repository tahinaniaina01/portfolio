"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <main key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.5, duration: 0.3, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-background top-0 pointer-events-none z-[1000]"
        />
        {children}
      </main>
    </AnimatePresence>
  );
}

export default PageTransition;
