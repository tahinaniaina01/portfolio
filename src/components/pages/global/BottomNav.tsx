"use client";

import { usePathname } from "@/src/i18n/routing";
import { Home, User } from "lucide-react";
import { useTranslations } from "next-intl";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdDesignServices, MdOutlineContacts } from "react-icons/md";
import Link from "../../utils/link";

function BottomNav() {
  const t = useTranslations("header");
  const pathname = usePathname();

  const links = [
    {
      index: 0,
      icon: <Home className="w-8 h-8" />,
      label: t("home"),
      link: "/",
      dis: "translate-x-0",
    },
    {
      index: 1,
      icon: <MdDesignServices className="w-8 h-8" />,
      label: t("services"),
      link: "/services",
      dis: "translate-x-[71px]",
    },
    {
      index: 2,
      icon: <User className="w-8 h-8" />,
      label: t("resume"),
      link: "/resume",
      dis: "translate-x-[144px]",
    },
    {
      index: 3,
      icon: <AiOutlineFundProjectionScreen className="w-8 h-8" />,
      label: t("works"),
      link: "/works",
      dis: "translate-x-[216px]",
    },
    {
      index: 4,
      icon: <MdOutlineContacts className="w-8 h-8" />,
      label: t("contact"),
      link: "/contact",
      dis: "translate-x-[288px]",
    },
  ];

  const { index } = links.find((link) => link.link === pathname) || {
    index: 0,
  };

  return (
    <nav className="fixed flex lg:hidden bottom-0 left-0 right-0 w-full py-2 bg-accent rounded-t-3xl">
      <div className="max-h-[4.4rem] w-auto mx-auto px-6">
        <ul className="flex items-center gap-4 relative">
          <span
            className={`bg-ring duration-500 ${links[index].dis} border-4 border-background h-16 w-16 absolute -left-1 -top-9 rounded-full`}
          >
            <span className="absolute bg-background h-4 w-4 top-6 -left-5 before:content-[''] before:bg-accent before:absolute before:top-0 before:right-0 before:rounded-full before:h-8 before:w-8 "></span>
            <span className="absolute bg-background h-4 w-4 top-6 -right-5 before:content-[''] before:bg-accent before:absolute before:top-0 before:left-0 before:rounded-full before:h-8 before:w-8 "></span>
          </span>
          {links.map((link, i) => (
            <li key={i}>
              <Link href={link.link}>
                <div className="flex items-center justify-center w-14 h-14">
                  <span
                    className={`absolute ${i === index && "-translate-y-8"}`}
                  >
                    {link.icon}
                  </span>
                  {i === index && (
                    <span className="absolute translate-y-3">{link.label}</span>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default BottomNav;
