"use client";

import img from "@/src/assets/about.webp";
import { Button } from "@/src/components/ui/button";
import {
  parentsVariants,
  variantBlur,
  variantScale,
} from "@/src/utils/animationVariants";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutMe() {
  const t = useTranslations("home.about");

  return (
    <section id="about" className="w-full my-16 px-4 md:px-8 lg:px-12">
      <motion.h1
        variants={variantScale()}
        initial={"hidden"}
        whileInView={"visible"}
        className="text-start md:text-center text-6xl my-7 font-heading"
      >
        {t("title")}
      </motion.h1>
      <div className="container mx-auto grid gap-5 grid-cols-1 lg:grid-cols-2">
        <div className="w-full min-h-[300px] flex-col items-center overflow-hidden rounded-xl lg:rounded-none justify-between bg-ring relative">
          {/* <div className="grid grid-cols-2 absolute top-0 left-0 right-0 bottom-0 gap-0"> */}
          <motion.div
            initial={{ width: "50%" }}
            whileInView={{ width: "0%", transition: { duration: 0.5 } }}
            className="w-1/2 h-1/2 bg-background absolute top-0 left-0"
          />
          <motion.div
            initial={{ width: "50%" }}
            whileInView={{ width: "0%", transition: { duration: 0.5 } }}
            className="w-1/2 h-1/2 bg-background absolute bottom-1/2 left-1/2"
          />
          <motion.div
            initial={{ width: "50%" }}
            whileInView={{ width: "0%", transition: { duration: 0.5 } }}
            className="w-1/2 h-1/2 bg-background absolute top-1/2 right-1/2"
          />
          <motion.div
            initial={{ width: "50%" }}
            whileInView={{ width: "0%", transition: { duration: 0.5 } }}
            className="w-1/2 h-1/2 bg-background absolute bottom-0 right-0"
          />
          {/* </div> */}
          <Image
            src={img}
            alt="tahina"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:pl-7">
          <motion.p
            variants={variantBlur(0.1)}
            initial={"hidden"}
            whileInView={"visible"}
            className="text-sm lg:text-lg text-start"
          >
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
          <motion.div
            variants={parentsVariants()}
            initial={"hidden"}
            whileInView={"visible"}
            className="pt-5"
          >
            <motion.h1
              variants={variantScale()}
              initial={"hidden"}
              whileInView={"visible"}
              className="font-heading text-2xl lg:text-4xl my-3"
            >
              {t("infoTitle")}
            </motion.h1>
            <div className="grid grid-cols-2">
              <motion.div
                variants={variantScale(0.1, 0.4)}
                initial={"hidden"}
                whileInView={"visible"}
                className="my-3"
              >
                <h2 className="text-xl font-bold">{t("infoName.name")}</h2>
                <p className="text-sm lg:text-lg">Tahina</p>
              </motion.div>
              <motion.div
                variants={variantScale(0.1, 0.4)}
                initial={"hidden"}
                whileInView={"visible"}
                className="my-3 flex flex-col items-end"
              >
                <h2 className="text-xl font-bold">{t("infoName.location")}</h2>
                <p className="text-sm lg:text-lg text-end">
                  Madagascar / Antananarivo
                </p>
              </motion.div>
              <motion.div
                variants={variantScale(0.2, 0.4)}
                initial={"hidden"}
                whileInView={"visible"}
                className="my-3"
              >
                <h2 className="text-xl font-bold">{t("infoName.phone")}</h2>
                <p className="text-sm lg:text-lg">+261 34 50 713 37</p>
              </motion.div>
              <motion.div
                variants={variantScale(0.2, 0.4)}
                initial={"hidden"}
                whileInView={"visible"}
                className="my-3 flex flex-col items-end"
              >
                <h2 className="text-xl font-bold">{t("infoName.education")}</h2>
                <p className="text-xs lg:text-sm text-end">
                  Mention Informatique et Téchnologie Antananarivo
                </p>
              </motion.div>
              <motion.div
                variants={variantScale(0.3, 0.4)}
                initial={"hidden"}
                whileInView={"visible"}
                className="my-3"
              >
                <h2 className="text-xl font-bold">{t("infoName.email")}</h2>
                <p className="text-sm lg:text-lg">tahinaniaina01@gmail.com</p>
              </motion.div>
              <motion.div
                variants={variantScale(0.3, 0.4)}
                initial={"hidden"}
                whileInView={"visible"}
                className="my-3 flex flex-col items-end"
              >
                <h2 className="text-xl font-bold">{t("infoName.age")}</h2>
                <p className="text-sm lg:text-lg">20</p>
              </motion.div>
            </div>
            <motion.div
              variants={variantScale(0, 0.5)}
              initial={"hidden"}
              whileInView={"visible"}
            >
              <Button className="bg-primary rounded-full px-7 py-5 my-5 text-xl">
                {t("button")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
