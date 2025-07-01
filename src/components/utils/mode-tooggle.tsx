"use client";

import { Button } from "@/src/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // const [position, setPosition] = useState({ x: 0, y: 0 });

  // Utilisation de useEffect pour s'assurer que le composant est monté
  useEffect(() => {
    setMounted(true);
  }, []);

  // Ne pas rendre les icônes avant que le composant soit monté
  if (!mounted) return null;

  const handleChangeTheme = (/*e: MouseEvent<HTMLButtonElement>*/) => {
    // const rect = e.currentTarget.getBoundingClientRect();
    // const x = rect.left + rect.width / 2;
    // const y = rect.top + rect.height / 2;
    // setPosition({ x, y });
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Button
        variant={"outline"}
        size={"icon"}
        className="relative flex items-center justify-center aspect-square cursor-pointer"
        onClick={handleChangeTheme}
      >
        <Moon
          className={`transition duration-500 z-1002 ${
            resolvedTheme === "light" ? "scale-0" : "scale-100"
          }`}
        />
        <Sun
          className={`transition duration-500 absolute z-1002 ${
            resolvedTheme === "light" ? "scale-100" : "scale-0"
          }`}
        />
      </Button>
      {/* <motion.div
        animate={{
          scale: resolvedTheme !== "light" ? 0 : 1,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        className={`fixed w-[300vh] h-[300vh] md:w-[300vw] md:h-[300vw] top-[calc(${Math.round(
          position.y
        )}px-150vw)] left-[calc(${Math.round(
          position.x
        )}px-150vw)] rounded-full bg-[#f8ffe5] z-[-999]!`}
      ></motion.div> */}
    </>
  );
}
