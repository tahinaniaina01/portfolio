import image from "@/assets/tahina.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const [t] = useTranslation("global");
  const parentVarients = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const variantScale = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
      },
    },
  };

  return (
    <section id="about" className="w-full my-16">
      <motion.h1
        variants={variantScale}
        initial={"hidden"}
        whileInView={"visible"}
        className="text-center text-6xl my-7 font-heading"
      >
        {t("about.title")}
      </motion.h1>
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full p-5 hidden lg:flex flex-col items-center justify-between">
          <motion.h1
            variants={variantScale}
            initial={"hidden"}
            whileInView={"visible"}
            className="text-2xl lg:text-4xl text-center h-1/5"
          >
            {t("about.preamble")}
          </motion.h1>
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
            className="overflow-hidden bg-primary clip-path-img flex justify-center mx-10 my-5 max-w-[350px]"
          >
            <motion.img
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
            />
          </motion.div>
        </div>
        <div className="xl:mr-12">
          <motion.p
            variants={variantScale}
            initial={"hidden"}
            whileInView={"visible"}
            className="text-sm lg:text-lg lg:text-start text-center"
          >
            {t("about.description")}
          </motion.p>
          <motion.div
            variants={parentVarients}
            initial={"hidden"}
            whileInView={"visible"}
            className="pt-5"
          >
            <motion.h1
              variants={variantScale}
              initial={"hidden"}
              whileInView={"visible"}
              className="font-heading text-2xl lg:text-4xl my-3"
            >
              {t("about.infoTitle")}
            </motion.h1>
            <div className="grid grid-cols-2">
              <motion.div variants={variantScale} className="my-3">
                <h2 className="text-xl font-bold">
                  {t("about.infoName.name")}
                </h2>
                <p className="text-sm lg:text-lg">Tahina</p>
              </motion.div>
              <motion.div
                variants={variantScale}
                className="my-3 flex flex-col items-end"
              >
                <h2 className="text-xl font-bold">
                  {t("about.infoName.location")}
                </h2>
                <p className="text-sm lg:text-lg text-end">
                  Madagascar / Antananarivo
                </p>
              </motion.div>
              <motion.div variants={variantScale} className="my-3">
                <h2 className="text-xl font-bold">
                  {t("about.infoName.phone")}
                </h2>
                <p className="text-sm lg:text-lg">+261 34 50 713 37</p>
              </motion.div>
              <motion.div
                variants={variantScale}
                className="my-3 flex flex-col items-end"
              >
                <h2 className="text-xl font-bold">
                  {t("about.infoName.education")}
                </h2>
                <p className="text-xs lg:text-sm text-end">
                  Mention Informatique et Téchnologie Antananarivo
                </p>
              </motion.div>
              <motion.div variants={variantScale} className="my-3">
                <h2 className="text-xl font-bold">
                  {t("about.infoName.email")}
                </h2>
                <p className="text-sm lg:text-lg">tahinaniaina01@gmail.com</p>
              </motion.div>
              <motion.div
                variants={variantScale}
                className="my-3 flex flex-col items-end"
              >
                <h2 className="text-xl font-bold">{t("about.infoName.age")}</h2>
                <p className="text-sm lg:text-lg">19</p>
              </motion.div>
            </div>
            <Button className="bg-primary rounded-full px-7 py-5 my-5 text-xl">
              {t("about.button")}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
