import image from "@/assets/tahina.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="w-full my-16">
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
        About me
      </motion.h1>
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full p-5 hidden lg:flex flex-col items-center">
          <h1 className="text-2xl lg:text-4xl text-center">
            I am a Developper Web
          </h1>
          <div className="overflow-hidden bg-primary clip-path-img flex justify-center mx-10 my-5 max-w-[350px]">
            <img src={image} alt="" className="object-cover" />
          </div>
        </div>
        <div>
          <p className="text-sm lg:text-lg">
            Hello and welcome to my "About Me" section. I am Tahinaniaina,
            passionate about IT and especially the field of web development,
            with solid experience in web development, graphic design, project
            management, etc. During my career, I have had the opportunity to
            work on a variety of projects that have enabled the development of a
            range of skills from design to implementation, including testing and
            optimization. I have a real passion for computers and technology,
            and I'm always looking for new opportunities to learn and improve.
          </p>
          <div className="pt-5">
            <h1 className="font-heading text-2xl lg:text-4xl my-3">
              Personal Information
            </h1>
            <div className="grid grid-cols-2">
              <div className="flex flex-col items-start">
                <div className="my-3">
                  <h2 className="text-xl font-bold">Name</h2>
                  <p className="text-sm lg:text-lg">Tahina</p>
                </div>
                <div className="my-3">
                  <h2 className="text-xl font-bold">Phone</h2>
                  <p className="text-sm lg:text-lg">+261 34 50 713 37</p>
                </div>
                <div className="my-3">
                  <h2 className="text-xl font-bold">Email</h2>
                  <p className="text-sm lg:text-lg">tahinaniaina01@gmail.com</p>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <div className="my-3">
                  <h2 className="text-xl font-bold">Location</h2>
                  <p className="text-sm lg:text-lg">
                    Madagascar / Antananarivo
                  </p>
                </div>
                <div className="my-3">
                  <h2 className="text-xl font-bold">Education</h2>
                  <p className="text-sm lg:text-lg">
                    Mention Informatique et Téchnologie Antananarivo
                  </p>
                </div>
                <div className="my-3">
                  <h2 className="text-xl font-bold">Age</h2>
                  <p className="text-sm lg:text-lg">19</p>
                </div>
              </div>
            </div>
            <Button className="bg-primary rounded-full px-7 py-5 my-5 text-xl">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
  Bonjour et bienvenue dans ma section "À propos de moi". Je suis Tahinaniaina, 
  un passionné de de l’informatique et surtout le domaine de la développement web, 
  avec une solide expérience dans le développement web, le design graphique, la gestion de projet, etc.
  Au cours de ma carrière, j'ai eu l'opportunité de travailler sur une variété de projets qui m'ont 
  permis de développer une gamme de compétences allant de la conception à la mise en œuvre, en passant par
  le test et l'optimisation. J'ai une véritable passion pour les informatiques et téchnologie, 
  et je suis toujours à la recherche de nouvelles opportunités pour apprendre et m'améliorer.
*/
/*
  Hello and welcome to my "About Me" section. I am Tahinaniaina,
  passionate about IT and especially the field of web development,
  with solid experience in web development, graphic design, project
  management, etc. During my career, I have had the opportunity to
  work on a variety of projects that have enabled the development of a
  range of skills from design to implementation, including testing and
  optimization. I have a real passion for computers and technology,
  and I'm always looking for new opportunities to learn and improve.
*/
