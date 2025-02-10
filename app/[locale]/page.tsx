import Contacts from "@/src/components/pages/global/Contacts";
import AboutMe from "@/src/components/pages/home/AboutMe";
import Hero from "@/src/components/pages/home/Hero";
import { Projects } from "@/src/components/pages/home/Projects";
import Skills from "@/src/components/pages/home/Skills";
import Stats from "@/src/components/pages/home/Stats";

export default function Home() {
  return (
    <main className="w-full mt-[72px] xl:mt-[88px]">
      <Hero />
      <Stats />
      <AboutMe />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  );
}
