"use client";

import Contacts from "@/src/components/pages/contacts/Contacts";
import Hero from "@/src/components/pages/contacts/Hero";
import { usePageTransitionStore } from "@/src/hooks/usePageTransition";
import { useEffect } from "react";

function Contact() {
  const { setAnimate } = usePageTransitionStore();

  useEffect(() => {
    setAnimate(false);
  }, [setAnimate]);

  return (
    <div className="w-full mt-[72px] xl:mt-[88px]">
      <div className="w-full mt-[72px] xl:mt-[88px]">
        <Hero />
        <Contacts />
      </div>
    </div>
  );
}

export default Contact;
