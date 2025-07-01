"use client";

import heroDark from "@/src/assets/HeroDark.webp";
import heroLight from "@/src/assets/HeroLight.webp";
import {
  parentsVariants,
  variantImage,
  variantScale,
  variantTranslate,
} from "@/src/utils/animationVariants";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import { BiLogoInstagram } from "react-icons/bi";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Button } from "../../ui/button";
import { FlipWords } from "../../ui/flip-words";

function Hero() {
  const t = useTranslations("home.hero");
  const { resolvedTheme } = useTheme();
  const socialsNetworks = [
    <FaLinkedin key={"linkedin"} />,
    <IoLogoWhatsapp key={"wattsapp"} />,
    <BiLogoInstagram key={"instagram"} />,
    <FaFacebook key={"facebook"} />,
  ];
  const words = [t("designer"), t("developper")];

  return (
    <section className="w-full px-6 lg:px-12">
      <div className="container mx-auto lg:h-[546px] 2xl:h-[700px] h-[650px] flex flex-col-reverse md:items-center md:flex-row gap-5">
        <motion.div
          variants={parentsVariants()}
          initial={"hidden"}
          whileInView={"visible"}
          className="w-full md:w-1/2 flex flex-col gap-2 md:gap-3 items-center md:items-start"
        >
          <motion.p
            variants={variantTranslate({ x: -100 })}
            initial={"hidden"}
            whileInView={"visible"}
            className="text-base md:text-lg xl:text-xl flex items-center gap-3 2xl:leading-relaxed my-2"
          >
            {t("preamble")} <span className="bg-ring w-0 md:w-12 h-1"></span>
          </motion.p>
          <motion.h1
            variants={variantTranslate({ x: -100, delay: 0.1 })}
            initial={"hidden"}
            whileInView={"visible"}
            className="font-heading text-5xl lg:text-[72px] 2xl:text-[80px] font-extrabold text-center md:text-start"
          >
            RAKOTOSOA
          </motion.h1>
          <motion.h2
            variants={variantTranslate({ x: -100, delay: 0.2 })}
            initial={"hidden"}
            whileInView={"visible"}
            className="font-heading text-5xl lg:text-[72px] 2xl:text-[80px] font-extrabold text-center md:text-start 2xl:leading-relaxed"
          >
            <span className="text-ring">Tahinaniaina</span> Noël
          </motion.h2>
          <motion.h4
            variants={variantTranslate({ x: -100, delay: 0.3 })}
            initial={"hidden"}
            whileInView={"visible"}
            className="text-2xl lg:text-4xl font-medium my-3 md:my-5"
          >
            {t("iam")} <FlipWords words={words} />
          </motion.h4>
          <motion.div
            variants={parentsVariants()}
            initial={"hidden"}
            whileInView={"visible"}
            className="font-body flex flex-col md:flex-row gap-5 md:gap-3 my-3"
          >
            <motion.span
              variants={variantTranslate({ x: -100, delay: 0.4 })}
              initial={"hidden"}
              whileInView={"visible"}
            >
              <Button size={"lg"} className="w-full">
                {t("download")}
              </Button>
            </motion.span>
            <div className="flex gap-2 md:gap-3">
              {socialsNetworks.map((icon, i) => {
                return (
                  <motion.span
                    key={i}
                    variants={variantScale(0.5 + 0.05 * i)}
                    initial={"hidden"}
                    whileInView={"visible"}
                  >
                    <Button
                      className="font-body text-ring hover:text-background hover:bg-ring"
                      variant={"outline"}
                      size={"icon"}
                    >
                      {icon}
                    </Button>
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
        <div className="w-full md:w-1/2 relative flex items-center justify-center">
          <motion.div
            variants={variantImage()}
            initial={"hidden"}
            whileInView={"visible"}
            className="overflow-hidden"
          >
            <Image
              src={resolvedTheme === "light" ? heroLight : heroDark}
              className="h-[250px] md:h-[300px] lg:h-auto w-auto"
              alt="Hero dark"
            />
          </motion.div>
          {/* <div className="w-[200px] md:w-[350px] aspect-square bg-ring rounded-full"></div> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
