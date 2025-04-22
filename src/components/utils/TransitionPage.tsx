"use client";

import { usePageTransitionStore } from "@/src/hooks/usePageTransition";
import { Button } from "../ui/button";
import Stairs from "./Stairs";

function TransitionPage() {
  const { animate, setAnimate } = usePageTransitionStore();

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col gap-[100px] items-center p-[100px]">
        {/* <motion.div
          className="bg-ring absolute left-[calc(50vw-100vw)] top-[calc(50vh-100vw)] w-[200vw] h-[200vw] rounded-full z-[10000000]"
          animate={{
            scale: animate ? 0 : 1,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
        ></motion.div> */}
        <Stairs />
        <Button
          className="relative z-[10000100]"
          variant="secondary"
          onClick={() => setAnimate(!animate)}
        >
          scale
        </Button>
      </div>
    </div>
  );
}

export default TransitionPage;
