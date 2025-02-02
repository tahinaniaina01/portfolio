"use client";

import { Button } from "@/src/components/ui/button";
import { Link, usePathname } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import ChangeLangage from "../../utils/ChangeLangage";
import { ModeToggle } from "../../utils/mode-tooggle";

export default function Header() {
  const [isScroll, setIsScroll] = useState(false);
  // const [langage, setLangage] = useState<"en" | "fr">("en");
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

  console.log(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
                  ? "text-ring before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:h-1 before:w-5 before:bg-ring"
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
    <header
      ref={ref}
      className={`fixed px-6 xl:px-12 py-1 xl:py-3 top-0 left-0 flex justify-center w-full z-30 ${
        isScroll || isOpen
          ? "shadow-lg border-b-border border-b-2 bg-background"
          : "shadow-none border-none bg-transparent"
      }`}
    >
      <div className="container flex justify-between items-center py-3 relative z-30">
        <div className="">
          <h1 className="font-bold text-xl">Tahina</h1>
        </div>
        <NavBar className="hidden md:flex" />
        <div className="hidden md:flex items-center gap-x-3">
          <ModeToggle />
          <ChangeLangage />
          <Button>Work with me</Button>
        </div>
        <div
          className={`menu ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen((curr) => !curr)}
        ></div>
      </div>
      <div
        className={`fixed bg-primary left-0 w-full flex flex-col items-center gap-y-5 px-3 ${
          isOpen ? "top-0" : "-top-[120%]"
        } pt-[100px] pb-5 transition`}
      >
        <NavBar
          className={`flex flex-col text-center gap-y-2  dark:text-background`}
        />
        <div className="flex items-center gap-x-3">
          <ChangeLangage />
          <ModeToggle />
        </div>
        <Button className="bg-card">Work with me</Button>
      </div>
    </header>
  );
}
