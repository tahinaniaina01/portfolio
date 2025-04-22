"use client";

import { cn } from "@/src/lib/utils";
import {
  variantBlur,
  variantScale,
  variantTranslate,
} from "@/src/utils/animationVariants";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { buttonVariants } from "../../ui/button";

function SocialsNetworks() {
  const t = useTranslations("home.contacts.socialsNetworks");
  const contacts = [
    {
      icon: (
        <IoMail className="!w-[30px] md:!w-[40px] !h-[30px] md:!h-[40px]" />
      ),
      value: "tahinaniaina02@gmail.com",
    },
    {
      icon: <Phone className="!w-[30px] md:!w-[40px] !h-[30px] md:!h-[40px]" />,
      value: "+261 33 97 762 71",
    },
    {
      icon: (
        <FaWhatsapp className="!w-[30px] md:!w-[40px] !h-[30px] md:!h-[40px]" />
      ),
      value: "+261 34 50 713 37",
    },
    {
      icon: (
        <FaFacebook className="!w-[30px] md:!w-[40px] !h-[30px] md:!h-[40px]" />
      ),
      value: "tahina rkts",
    },
  ];

  return (
    <div className="w-full flex flex-col items-start md:items-center gap-7 lg:w-1/2 py-2 md:py-4">
      <div className="space-y-3">
        <motion.h1
          variants={variantScale()}
          initial={"hidden"}
          whileInView={"visible"}
          className="h1 text-start text-foreground"
        >
          {t("title")}
        </motion.h1>
        <motion.p className="mb-3 text-foreground">
          {t("description")
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                variants={variantBlur(0.01 * index)}
                initial={"hidden"}
                whileInView={"visible"}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
        </motion.p>
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-3 md:gap-5 xl:gap-7">
        {contacts.map((contact, index) => {
          const { icon, value } = contact;

          return (
            <div key={index} className="flex items-center gap-3 text-xl">
              <motion.button
                variants={variantScale(0.1 * (index + 1), 0.5)}
                initial={"hidden"}
                whileInView={"visible"}
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" }),
                  "text-background bg-ring hover:bg-ring/90 hover:text-background w-auto h-auto p-2"
                )}
              >
                {icon}
              </motion.button>
              <motion.p
                variants={variantTranslate({
                  x: 100,
                  delay: 0.1 * (index + 1),
                })}
                initial={"hidden"}
                whileInView={"visible"}
                className="text-sm md:text-2xl"
              >
                {value}
              </motion.p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SocialsNetworks;
