"use client";

import { variantScale } from "@/src/utils/animationVariants";
import { motion } from "framer-motion";
import ContactForm from "../contacts/ContactForm";
import SocialsNetworks from "../contacts/SocialsNetworks";

function Contacts() {
  return (
    <section className="px-4 mt-12 md:px-8 lg:px-12">
      <motion.h1
        variants={variantScale()}
        initial={"hidden"}
        whileInView={"visible"}
        className="text-start md:text-center text-6xl my-7 font-heading"
      >
        Contancts
      </motion.h1>
      <div className="container mx-auto flex flex-col lg:flex-row gap-7">
        <SocialsNetworks />
        <ContactForm />
      </div>
    </section>
  );
}

export default Contacts;
