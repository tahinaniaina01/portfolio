import ecommerce from "@/assets/ecommerce.png";
import hotel from "@/assets/hotel.png";
import portfolio from "@/assets/portfolio.png";
import { motion } from "framer-motion";
import { ThreeDCard } from "./ThreeDCard";

export default function Project() {
  const projects = [
    {
      title: "Portfolio",
      description:
        "Portfolio created by reactjs and tailwindcss and typescript",
      image: portfolio,
      link: "#",
<<<<<<< HEAD
      github: undefined,
=======
      github: "https://github.com/tahinaniaina01/portfolio/",
>>>>>>> 3026c8bb2c7a2d0eb3be5bdf2a1b126c6832e074
    },
    {
      title: "e-commerce site",
      description: "e-commerce site created by reactjs and tailwindcss",
      image: ecommerce,
      link: "https://tahinaniaina01.github.io/ecommerce-shop",
      github: "https://github.com/tahinaniaina01/ecommerce-shop",
    },
    {
      title: "hotel site",
      description:
        "hotel site created by reactjs and tailwindcss and typescript",
      image: hotel,
      link: "https://tahinaniaina01.github.io/hotel-page",
      github: "https://tahinaniaina01.github.io/hotel-page",
    },
  ];

  return (
    <section className="w-full flex items-center flex-col my-16" id="projects">
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
        className="xl:text-6xl font-heading"
      >
        PROJECTS
      </motion.h1>
      <div className="container grid grid-cols-1 lg:grid-cols-2 my-7 xl:px-[150px]">
        <motion.div
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
          className="flex items-center justify-center px-5 lg:px-9 m-5 rounded-xl bg-background flex-col w-full max-w-[480px] mx-auto min-h-[200px] border"
        >
          <h1 className="font-heading my-5 text-2xl lg-text-6xl">my project</h1>
<<<<<<< HEAD
          <p className="text-center text-sm lb:text-lg">
            My portfolio highlights my skills and achievements professional,
            while my e-commerce site offers user-friendly platform to buy my
            products or services online line. At the same time, my hotel project
            simplifies the process of online booking, providing my customers
            with a seamless experience to book their stay in my establishment
=======
          <p className="text-center">
            Mon portfolio met en avant mes compétences et réalisations
            professionnelles, tandis que mon site e-commerce offre une
            plateforme conviviale pour acheter mes produits ou services en
            ligne. Parallèlement, mon projet hôtelier simplifie le processus de
            réservation en ligne, offrant à mes clients une expérience fluide
            pour réserver leur séjour dans mon établissement
>>>>>>> 3026c8bb2c7a2d0eb3be5bdf2a1b126c6832e074
          </p>
        </motion.div>
        {projects.map((project, index) => {
          const { title, description, link, image, github } = project;
          return (
            <ThreeDCard
              key={index}
              title={title}
              description={description}
              image={image}
              link={link}
              github={github}
            />
          );
        })}
      </div>
    </section>
  );
}
<<<<<<< HEAD
/*
  My portfolio highlights my skills and achievements
  professional, while my e-commerce site offers
  user-friendly platform to buy my products or services online
  line. At the same time, my hotel project simplifies the process of
  online booking, providing my customers with a seamless experience
  to book their stay in my establishment
*/

/*
  Mon portfolio met en avant mes compétences et réalisations
  professionnelles, tandis que mon site e-commerce offre une
  plateforme conviviale pour acheter mes produits ou services en
  ligne. Parallèlement, mon projet hôtelier simplifie le processus de
  réservation en ligne, offrant à mes clients une expérience fluide
  pour réserver leur séjour dans mon établissement
*/
=======
>>>>>>> 3026c8bb2c7a2d0eb3be5bdf2a1b126c6832e074
