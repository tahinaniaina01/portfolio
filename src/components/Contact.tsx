import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function Contact() {
  const boxVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const textVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section id="contact" className="w-full my-16">
      <motion.h1
        initial={{
          scale: 0,
        }}
        whileInView={{
          scale: 1,
          transition: {
            duration: 0.3,
            type: "spring",
          },
        }}
        className="text-center text-6xl my-7 font-heading"
      >
        CONTACT
      </motion.h1>
      <div className="container flex flex-col gap-y-5 lg:flex-row gap-x-5 overflow-hidden">
        <motion.div
          variants={boxVariants}
          initial={"hidden"}
          whileInView={"visible"}
          className="lg:w-1/2 w-full bg-background flex items-center justify-center border rounded-xl"
        >
          <div className="py-6 text-center">
            <motion.h3 variants={textVariants}>get in touch</motion.h3>
            <motion.h1 variants={textVariants} className="text-4xl">
              Let's work
              <br /> together
            </motion.h1>
          </div>
        </motion.div>
        <motion.div
          variants={boxVariants}
          initial={"hidden"}
          whileInView={"visible"}
          className="lg:w-1/2 w-full bg-card border p-5 rounded-xl"
        >
          <div className="flex flex-col md:flex-row gap-3">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.2, delay: 0.3 },
              }}
              className="grid w-full max-w-sm items-center gap-1.5"
            >
              <Label htmlFor="name" className="text-xl">
                Name
              </Label>
              <Input
                type="text"
                id="name"
                placeholder="your name"
                className="text-sm md:text-lg text-body"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.2, delay: 0.3 },
              }}
              className="grid w-full max-w-sm items-center gap-1.5"
            >
              <Label htmlFor="email" className="text-xl">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="ex: user@example.com"
                className="text-sm md:text-lg text-body"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.2, delay: 0.3 },
            }}
            className="mt-5"
          >
            <Label htmlFor="message" className="text-xl">
              Your message
            </Label>
            <Textarea
              name="message"
              id="message"
              className="text-lg text-body min-h-[150px] lg:min-h-[250px] max-h-[300px]"
              placeholder="Hey !"
            ></Textarea>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: {
                duration: 0.2,
                delay: 0.5,
                type: "spring",
                stiffness: 220,
                damping: 20,
              },
            }}
          >
            <Button className="my-5 font-bold text-xl py-5 w-full">
              Submit
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
