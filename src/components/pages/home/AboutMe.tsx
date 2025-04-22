"use client";

import { Button } from "@/src/components/ui/button";
import {
  parentsVariants,
  variantBlur,
  variantScale,
} from "@/src/utils/animationVariants";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

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
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full p-5 hidden lg:flex flex-col items-center justify-between bg-ring">
          <motion.div
            initial={{
              rotateY: 90,
            }}
            whileInView={{
              rotateY: 0,
              transition: {
                duration: 0.2,
                ease: "easeOut",
              },
            }}
            className="overflow-hidden clip-path-img flex justify-center mx-10 my-5 max-w-[350px] bg-ring"
          >
            {/* <motion.img
              initial={{
                y: 200,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.2,
                  delay: 0.2,
                },
              }}
              src={image}
              alt=""
              className="object-cover"
            /> */}
          </motion.div>
        </div>
        <div className="md:pl-7">
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
