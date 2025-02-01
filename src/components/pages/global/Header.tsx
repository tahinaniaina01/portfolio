"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ModeToggle } from "./mode-tooggle";

export default function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const [langage, setLangage] = useState<"en" | "fr">("en");
  const ref = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("header");

  const handleCLick = () => {
    const l = langage === "fr" ? "en" : "fr";
    // i18n.changeLanguage(l);
    setLangage(l);
  };

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
        <Link
          href="/fr/"
          // smooth={true}
          // duration={500}
          // offset={-100}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer px-3 lg:px-3 relative text-xl hover:text-muted-foreground before:transition-all before:duration-500 before:content-[''] before:absolute before:left-0 before:top-[100%] before:w-0 hover:before:w-full before:h-1 before:bg-muted-foreground before:rounded-full"
        >
          {t("home")}
        </Link>
        <Link
          href="/fr/projects"
          // smooth={true}
          // duration={500}
          // offset={-100}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer px-3 lg:px-3 relative text-xl hover:text-muted-foreground before:transition-all before:duration-500 before:content-[''] before:absolute before:left-0 before:top-[100%] before:w-0 hover:before:w-full before:h-1 before:bg-muted-foreground before:rounded-full"
        >
          {t("project")}
        </Link>
        <Link
          href="/fr/about"
          // smooth={true}
          // duration={500}
          // offset={-100}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer px-3 lg:px-3 relative text-xl hover:text-muted-foreground before:transition-all before:duration-500 before:content-[''] before:absolute before:left-0 before:top-[100%] before:w-0 hover:before:w-full before:h-1 before:bg-muted-foreground before:rounded-full"
        >
          {t("about")}
        </Link>
        <Link
          href="/fr/skills"
          // smooth={true}
          // duration={500}
          // offset={-100}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer px-3 lg:px-3 relative text-xl hover:text-muted-foreground before:transition-all before:duration-500 before:content-[''] before:absolute before:left-0 before:top-[100%] before:w-0 hover:before:w-full before:h-1 before:bg-muted-foreground before:rounded-full"
        >
          {t("skills")}
        </Link>
        <Link
          href="/fr/contact"
          // smooth={true}
          // duration={500}
          // offset={-100}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer px-3 lg:px-3 relative text-xl hover:text-muted-foreground before:transition-all before:duration-500 before:content-[''] before:absolute before:left-0 before:top-[100%] before:w-0 hover:before:w-full before:h-1 before:bg-muted-foreground before:rounded-full"
        >
          {t("contact")}
        </Link>
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
          <Switch onClick={() => handleCLick()} />
          <ModeToggle />
          <Button>Work with me</Button>
        </div>
        <div
          className={`menu ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen((curr) => !curr)}
        ></div>
      </div>
      <div
        className={`fixed bg-primary left-0 w-full flex flex-col items-center gap-y-5 px-3 ${
          isOpen ? "top-0" : "-top-full"
        } pt-[100px] pb-5 transition`}
      >
        <NavBar
          className={`flex flex-col text-center gap-y-2  dark:text-background`}
        />
        <div className="flex items-center gap-x-3">
          <Switch onClick={() => handleCLick()} />
          <ModeToggle />
        </div>
        <Button className="bg-card">Work with me</Button>
      </div>
    </header>
  );
}
