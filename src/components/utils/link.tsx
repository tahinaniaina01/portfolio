"use client";

import { usePageTransitionStore } from "@/src/hooks/usePageTransition";
import { useRouter } from "@/src/i18n/routing";
import { ReactNode } from "react";
import { UrlObject } from "url";

const Link = ({
  children,
  href,
  className,
  onClick,
}: {
  children: ReactNode;
  href: string | UrlObject;
  className?: string;
  onClick?: () => void;
}) => {
  const { setAnimate } = usePageTransitionStore();
  const router = useRouter();

  const handleClick = async () => {
    if (onClick) {
      onClick();
    }
    setAnimate(true);
    await new Promise((resolve) => setTimeout(resolve, 550));
    router.push(String(href));
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default Link;
