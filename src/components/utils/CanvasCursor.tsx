"use client";

import { useIsMobile } from "@/src/hooks/use-mobile";
import useCanvasCursor from "@/src/hooks/useCanvasCursor";

const CanvasCursor = () => {
  useCanvasCursor();
  const isMobile = useIsMobile();

  return (
    <canvas
      className={`pointer-events-none fixed ${
        isMobile && "hidden"
      } inset-0 -z-50`}
      id="canvas"
    />
  );
};
export default CanvasCursor;
