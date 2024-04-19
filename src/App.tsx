import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import ParticlesBackground from "./components/ParticlesBackground";
import Project from "./components/Project";
import Skills from "./components/Skills";
import { ThemeProvider } from "./components/theme-provider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <ParticlesBackground /> */}
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}
