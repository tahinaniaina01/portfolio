"use client";

import { Button } from "@/src/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Utilisation de useEffect pour s'assurer que le composant est monté
  useEffect(() => {
    setMounted(true);
  }, []);

  // Ne pas rendre les icônes avant que le composant soit monté
  if (!mounted) return null;

  return (
    <Button
      variant={"outline"}
      size={"icon"}
      className="relative flex items-center justify-center"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      <Moon
        className={`transition duration-500 ${
          resolvedTheme === "light" ? "scale-0" : "scale-100"
        }`}
      />
      <Sun
        className={`transition duration-500 absolute ${
          resolvedTheme === "light" ? "scale-100" : "scale-0"
        }`}
      />
    </Button>
  );
}
