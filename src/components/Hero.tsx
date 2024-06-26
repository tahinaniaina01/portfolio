import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import img from "../assets/tahina.png";

export default function Hero() {
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
  const textVariants = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };
  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="mb-16">
      <div className="container flex items-center 2xl:h-[900px] lg:h-[768px] h-[600px] flex-col-reverse justify-center md:flex-row">
        <motion.div
          variants={parentVarients}
          initial={"hidden"}
          whileInView={"visible"}
          className="w-full md:w-3/5 flex flex-col items-center md:items-start"
        >
          <motion.p
            variants={textVariants}
            className="text-center md:text-start pl-5 text-sm lg:text-lg"
          >
            {t("hero.preamble")}
          </motion.p>
          <motion.h1
            variants={textVariants}
            className="text-center font-heading md:text-start xl:text-8xl lg:text-6xl md:text-4xl text-2xl xl:pb-7 md:pb-5 pb-3"
          >
            RAKOTOSOA
            <br />
            <span className="text-muted-foreground font-heading">
              Tahinaniaina
            </span>{" "}
            Noël
          </motion.h1>
          <motion.h5
            variants={textVariants}
            className="text-center md:text-start xl:text-2xl lg:text-xl text-lg"
          >
            {t("hero.body")}
          </motion.h5>
          <div className="items-center gap-3 mt-7 grid lg:grid-cols-4 grid-cols-2">
            <motion.a
              variants={buttonVariants}
              href="https://github.com/tahinaniaina01"
              className="flex items-center gap-x-2 bg-primary text-primary-foreground px-3 py-1 rounded-full"
            >
              <FaGithub /> Github
            </motion.a>
            <motion.a
              variants={buttonVariants}
              href="https://www.facebook.com/tahinaniaina.rak"
              className="flex items-center gap-x-2 bg-primary text-primary-foreground px-3 py-1 rounded-full"
            >
              <FaFacebook /> Facebook
            </motion.a>
            <motion.a
              variants={buttonVariants}
              href="https://www.linkedin.com/in/tahina-niaina-79a78029b"
              className="flex items-center gap-x-2 bg-primary text-primary-foreground px-3 py-1 rounded-full"
            >
              <FaLinkedin /> Linkedin
            </motion.a>
            <motion.a
              variants={buttonVariants}
              href="https://wa.me/qr/NT4VJU36FK4MD1"
              className="flex items-center gap-x-2 bg-primary text-primary-foreground px-3 py-1 rounded-full"
            >
              <FaWhatsapp /> WhatsApp
            </motion.a>
          </div>
        </motion.div>
        <div className="w-full md:w-2/5 relative flex items-center justify-center -z-40">
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
            className="w-3/5 overflow-hidden rounded-t-full my-7 bg-primary mt-[100px] md:mt-0"
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
              src={img}
              alt=""
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
