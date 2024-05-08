import img from "@/assets/logo.png";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { ModeToggle } from "./mode-tooggle";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";

export default function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const [langage, setLangage] = useState<"en" | "fr">("en");
  const ref = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [t, i18n] = useTranslation("global");

  const handleCLick = () => {
    const l = langage === "fr" ? "en" : "fr";
    i18n.changeLanguage(l);
    setLangage(l);
  };

  useEffect(() => {
    const hundleScroll = () => {
      scrollY > 5 ? setIsScroll(true) : setIsScroll(false);
    };

    window.addEventListener("scroll", hundleScroll);

    return () => {
      window.removeEventListener("scroll", hundleScroll);
    };
  }, []);

  function NavBar({ className }: { className?: string }) {
    return (
      <nav className={className}>
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-100}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer px-3 lg:px-3 relative text-xl hover:text-muted-foreground before:transition-all before:duration-500 before:content-[''] before:absolute before:left-0 before:top-[100%] before:w-0 hover:before:w-full before:h-1 before:bg-muted-foreground before:rounded-full"
        >
          {t("header.home")}
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-100}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer px-3 lg:px-3 relative text-xl hover:text-muted-foreground before:transition-all before:duration-500 before:content-[''] before:absolute before:left-0 before:top-[100%] before:w-0 hover:before:w-full before:h-1 before:bg-muted-foreground before:rounded-full"
        >
          {t("header.project")}
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-100}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer px-3 lg:px-3 relative text-xl hover:text-muted-foreground before:transition-all before:duration-500 before:content-[''] before:absolute before:left-0 before:top-[100%] before:w-0 hover:before:w-full before:h-1 before:bg-muted-foreground before:rounded-full"
        >
          {t("header.about")}
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-100}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer px-3 lg:px-3 relative text-xl hover:text-muted-foreground before:transition-all before:duration-500 before:content-[''] before:absolute before:left-0 before:top-[100%] before:w-0 hover:before:w-full before:h-1 before:bg-muted-foreground before:rounded-full"
        >
          {t("header.skills")}
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-100}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer px-3 lg:px-3 relative text-xl hover:text-muted-foreground before:transition-all before:duration-500 before:content-[''] before:absolute before:left-0 before:top-[100%] before:w-0 hover:before:w-full before:h-1 before:bg-muted-foreground before:rounded-full"
        >
          {t("header.contact")}
        </Link>
      </nav>
    );
  }

  return (
    <header
      ref={ref}
      className={`fixed top-0 left-0 w-full z-30 ${
        isScroll || isOpen
          ? "shadow-lg border-b-border border-b-2 bg-background"
          : "shadow-none border-none bg-transparent"
      }`}
    >
      <div className="container flex justify-between items-center py-3 relative z-30">
        <div className="">
          <img src={img} alt="" className="object-cover w-[60px] h-[60px]" />
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
