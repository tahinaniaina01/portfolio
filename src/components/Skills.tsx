import { motion } from "framer-motion";
import {
  BiLogoCPlusPlus,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { FaJava, FaLinux, FaPhp, FaPython } from "react-icons/fa";
import { MdTerminal } from "react-icons/md";
import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandVscode,
} from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";

export default function Skills() {
  const boxVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const textLeftVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        type: "spring",
      },
    },
  };
  const textRightVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        type: "spring",
      },
    },
  };

  return (
    <section id="skills" className="w-full my-16">
      <motion.h1
        initial={{
          scale: 0,
        }}
        whileInView={{
          scale: 1,
          transition: {
            duration: 0.5,
            type: "spring",
          },
        }}
        className="text-center text-6xl my-7 font-heading"
      >
        SKILLS
      </motion.h1>
      <div className="container grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        <motion.div
          variants={boxVariants}
          initial={"hidden"}
          whileInView={"visible"}
          className="flex flex-col items-center border m-3 rounded-xl bg-card py-3"
        >
          <h1 className="text-2xl font-heading mb-1">Frontend</h1>
          <div className="font-body flex flex-col items-start">
            <motion.div
              variants={textLeftVariants}
              className="flex items-center gap-x-2 text-lg text-muted-foreground"
            >
              <BiLogoReact />
              REACTJS
            </motion.div>
            <motion.div
              variants={textLeftVariants}
              className="flex items-center gap-x-2 text-lg text-muted-foreground"
            >
              <BiLogoTailwindCss /> Tailwindcss
            </motion.div>
            <motion.div
              variants={textLeftVariants}
              className="flex items-center gap-x-2 text-lg"
            >
              <BiLogoJavascript /> JAVASCRIPT
            </motion.div>
            <motion.div
              variants={textLeftVariants}
              className="flex items-center gap-x-2 text-lg text-muted-foreground"
            >
              <TbBrandTypescript /> TYPESCRIPT
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          variants={boxVariants}
          initial={"hidden"}
          whileInView={"visible"}
          className="flex flex-col items-center border m-3 rounded-xl bg-card py-3"
        >
          <h1 className="text-2xl font-heading mb-1">Backend</h1>
          <div className="font-body flex flex-col items-start">
            <motion.div
              variants={textLeftVariants}
              className="flex items-center gap-x-2 text-lg"
            >
              <FaPhp /> PHP
            </motion.div>
            <motion.div
              variants={textLeftVariants}
              className="flex items-center gap-x-2 text-lg"
            >
              <TbBrandNextjs /> NEXT JS
            </motion.div>
            <motion.div
              variants={textLeftVariants}
              className="flex items-center gap-x-2 text-lg"
            >
              <BiLogoPostgresql /> POSTGRESQL
            </motion.div>
            <motion.div
              variants={textLeftVariants}
              className="flex items-center gap-x-2 text-lg"
            >
              <BiLogoNodejs /> NodeJS
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          variants={boxVariants}
          initial={"hidden"}
          whileInView={"visible"}
          className="flex flex-col items-center border m-3 rounded-xl bg-card py-3"
        >
          <h1 className="text-2xl font-heading mb-1">Programing langage</h1>
          <div className="font-body flex flex-col items-start">
            <motion.div
              variants={textRightVariants}
              className="flex items-center gap-x-2 text-lg"
            >
              <BiLogoCPlusPlus /> C/C++
            </motion.div>
            <motion.div
              variants={textRightVariants}
              className="flex items-center gap-x-2 text-lg"
            >
              <FaPython /> PYTHON
            </motion.div>
            <motion.div
              variants={textRightVariants}
              className="flex items-center gap-x-2 text-lg"
            >
              <FaJava /> JAVA
            </motion.div>
            <motion.div
              variants={textRightVariants}
              className="flex items-center gap-x-2 text-lg"
            >
              <MdTerminal /> BASH
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          variants={boxVariants}
          initial={"hidden"}
          whileInView={"visible"}
          className="flex flex-col items-center border m-3 rounded-xl bg-card py-3"
        >
          <h1 className="text-2xl font-heading mb-1">Other</h1>
          <div className="font-body flex flex-col items-start">
            <motion.div
              variants={textRightVariants}
              className="flex items-center gap-x-2 text-lg"
            >
              <TbBrandVscode /> VSCODE
            </motion.div>
            <motion.div
              variants={textRightVariants}
              className="flex items-center gap-x-2 text-lg"
            >
              <VscGithub /> git / github
            </motion.div>
            <motion.div
              variants={textRightVariants}
              className="flex items-center gap-x-2 text-lg"
            >
              <p className="text-[7px]">canva</p> Canva
            </motion.div>
            <motion.div
              variants={textRightVariants}
              className="flex items-center gap-x-2 text-lg"
            >
              <FaLinux /> GNU/Linux
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
