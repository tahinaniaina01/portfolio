"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center bg-muted mt-10 mb-[78px] lg:mb-0">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-muted-foreground text-sm text-center sm:text-left">
          copyright © 2024 portfolio — develeopped by{" "}
          <motion.a
            initial={{
              scale: 1.5,
            }}
            whileInView={{
              scale: 1,
              transition: {
                duration: 0.5,
                type: "spring",
              },
            }}
            href="#"
            className="text-ring"
            rel="noopener noreferrer"
            target="_blank"
          >
            tahinaniaina
          </motion.a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="text-muted-foreground hover:text-ring"
          >
            <FaFacebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="ml-3 text-muted-foreground hover:text-ring"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="ml-3 text-muted-foreground hover:text-ring"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="ml-3 text-muted-foreground hover:text-ring"
          >
            <FaWhatsapp className="w-5 h-5" />
          </a>
        </span>
      </div>
    </footer>
  );
}
