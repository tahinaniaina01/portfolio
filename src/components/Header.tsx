import img from "@/assets/logo.png";
import { motion } from "framer-motion";
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
    <motion.header
      ref={ref}
      className={`fixed top-0 left-0 w-full z-30 ${
        isScroll
          ? "shadow-lg border-b-border border-b-2 bg-background"
          : "shadow-none border-none bg-transparent"
      }`}
      initial={{
        y: -150,
      }}
      animate={{
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
    >
      <div className="container flex justify-between items-center py-3">
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
        className={`fixed bg-primary top-0 flex flex-col items-end gap-y-5 px-3 ${
          isOpen ? "right-0" : "-right-full"
        } pt-[100px] pb-5 transition z-40`}
      >
        <NavBar
          className={`flex flex-col text-end gap-y-2  dark:text-background`}
        />
        <div className="mr-5 flex items-center gap-x-3">
          <Switch onClick={() => handleCLick()} />
          <ModeToggle />
        </div>
        <Button className="bg-card">Work with me</Button>
      </div>
    </motion.header>
  );
}
