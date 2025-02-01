import { Moon, Sun } from "lucide-react";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant={"outline"}
      size={"icon"}
      className="relative flex items-center justify-center"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Moon
        className={`transition duration-500 ${
          theme === "light" ? "scale-0" : "scale-100"
        }`}
      />
      <Sun
        className={`transition duration-500 absolute ${
          theme === "light" ? "scale-100" : "scale-0"
        }`}
      />
    </Button>
  );
}
