"use client";

import { variantScale } from "@/src/utils/animationVariants";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import CountUp from "react-countup";

function Stats() {
  const t = useTranslations("home.stats");
  const stats = [
    {
      stats: 2,
      label: t("xp"),
    },
    {
      stats: 30,
      label: t("projects"),
    },
    {
      stats: 200,
      label: t("commit"),
    },
    {
      stats: 10,
      label: t("tech"),
    },
  ];

  return (
    <section className="px-4 md:px-8 lg:px-12">
      <motion.div className="container mx-auto grid grid-cols-2 md:grid-cols-4 py-5 gap-7">
        {stats.map((stat, index) => {
          return (
            <div key={index} className="flex items-center flex-col">
              <motion.p
                variants={variantScale(0, 0.1)}
                initial={"hidden"}
                whileInView={"visible"}
                className="font-heading text-5xl lg:text-[72px] font-bold"
              >
                +
                <CountUp end={stat.stats} duration={4} delay={1} />
              </motion.p>
              <motion.p
                variants={variantScale(0.1, 0.5)}
                initial={"hidden"}
                whileInView={"visible"}
                className="text-base md:text-xl text-center"
              >
                {stat.label}
              </motion.p>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Stats;
