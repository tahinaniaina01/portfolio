"use client";

import { buttonVariants } from "@/src/components/ui/button";
import { usePathname } from "@/src/i18n/routing";
import { cn } from "@/src/lib/utils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import ChangeLangage from "../../utils/ChangeLangage";
import HorizontaleScrollBar from "../../utils/horizontaleScrollBar";
import Link from "../../utils/link";
import { ModeToggle } from "../../utils/mode-tooggle";

export default function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const ref = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("header");
  const pathname = usePathname();

  const links = [
    {
      label: t("home"),
      href: "/",
    },
    {
      label: t("services"),
      href: "/services",
    },
    {
      label: t("resume"),
      href: "/resume",
    },
    {
      label: t("works"),
      href: "/works",
    },
    {
      label: t("contact"),
      href: "/contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScroll(currentScrollY > 5);

      if (currentScrollY < lastScrollY) {
        setIsVisible(true); // Scroll vers le haut
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scroll vers le bas
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  function NavBar({ className }: { className?: string }) {
    return (
      <nav className={className}>
        {links.map((link, index) => {
          const { label, href } = link;
          return (
            <Link
              key={index}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`cursor-pointer px-3 lg:px-3 py-1 relative text-xl ${
                pathname === href
                  ? "text-ring before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:h-1 before:w-5 before:bg-ring before:rounded-full"
                  : "hover:text-ring/70"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    );
  }

  return (
    <motion.header
      ref={ref}
      className={`fixed px-6 xl:px-12 py-1 xl:py-3 top-0 left-0 flex justify-center w-full max-w-[100vw] z-[1000] transition-transform duration-300 ${
        isScroll || isOpen
          ? "shadow-lg border-b-accent border-b-[3px] bg-background"
          : "shadow-none border-none bg-transparent"
      } ${!isVisible ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="w-full h-full overflow-hidden">
        <HorizontaleScrollBar />
        <div className="container mx-auto flex justify-between items-center py-3 relative z-[1000]">
          <div className="">
            <Link
              href={"/"}
              onClick={() => setIsOpen(false)}
              className="font-heading font-bold text-xl"
            >
              Tahina.
            </Link>
          </div>
          <NavBar className="hidden lg:flex" />
          <div className="flex items-center gap-x-3">
            <ModeToggle />
            <ChangeLangage />
            <Link
              href={"/contact"}
              className={cn(
                buttonVariants({ variant: "default" }),
                "hidden lg:flex"
              )}
            >
              Work with me
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
