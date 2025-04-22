"use client";

import { variantBlur, variantScale } from "@/src/utils/animationVariants";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";

function ContactForm() {
  const t = useTranslations("home.contacts.form");

  return (
    <div className="w-full lg:w-1/2 lg:pl-5">
      <div className="bg-muted rounded-xl md:rounded-2xl px-3 md:px-5 xl:px-7 py-2 md:py-4 xl:mb-6 space-y-5">
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
        <form className="space-y-3 md:space-y-5">
          <div className="flex flex-col xl:flex-row gap-2 md:gap-3 w-full">
            <motion.div
              variants={variantScale(0.1, 0.5)}
              initial={"hidden"}
              whileInView={"visible"}
              className="space-y-1 w-full"
            >
              <Label htmlFor="name" className="xl:text-2xl font-medium">
                {t("name")}
              </Label>
              <Input className="w-full" id="name" type="text" />
            </motion.div>
            <motion.div
              variants={variantScale(0.1, 0.5)}
              initial={"hidden"}
              whileInView={"visible"}
              className="space-y-1 w-full"
            >
              <Label htmlFor="firstname" className="xl:text-2xl font-medium">
                {t("firstname")}
              </Label>
              <Input className="w-full" id="firstname" type="text" />
            </motion.div>
          </div>
          <div className="flex flex-col xl:flex-row gap-2 md:gap-3 w-full">
            <motion.div
              variants={variantScale(0.2, 0.5)}
              initial={"hidden"}
              whileInView={"visible"}
              className="space-y-1 w-full"
            >
              <Label htmlFor="email" className="xl:text-2xl font-medium">
                {t("email")}
              </Label>
              <Input className="w-full" id="email" type="text" />
            </motion.div>
            <motion.div
              variants={variantScale(0.2, 0.5)}
              initial={"hidden"}
              whileInView={"visible"}
              className="space-y-1 w-full"
            >
              <Label htmlFor="tel" className="xl:text-2xl font-medium">
                {t("tel")}
              </Label>
              <Input className="w-full" id="tel" type="tel" />
            </motion.div>
          </div>
          <motion.div
            variants={variantScale(0.2, 0.5)}
            initial={"hidden"}
            whileInView={"visible"}
            className="space-y-1"
          >
            <Label htmlFor="message" className="xl:text-2xl font-medium">
              {t("message")}
            </Label>
            <Textarea className="min-h-[150px] max-h-[200px]" id="message" />
          </motion.div>
          <motion.div
            variants={variantScale(0.2, 0.5)}
            initial={"hidden"}
            whileInView={"visible"}
            className="space-y-1"
          >
            <Button className="w-full mb-5" type="submit">
              {t("submit")}
            </Button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
