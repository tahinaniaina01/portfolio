"use client";

import { useTranslations } from "next-intl";
import {
  FaAngular,
  FaGithubAlt,
  FaLinux,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiAdobephotoshop,
  SiCanva,
  SiLunacy,
  SiNestjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiVim,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

const skills = [
  {
    value: "design",
    tooltips: [
      {
        icon: <IoLogoFigma className="w-[80%] md:w-[60%] h-[80%] md:h-[60%]" />,
        label: "Figma",
      },
      {
        icon: <SiLunacy className="w-[80%] md:w-[60%] h-[80%] md:h-[60%]" />,
        label: "Lunacy",
      },
      {
        icon: <SiCanva className="w-[80%] md:w-[60%] h-[80%] md:h-[60%]" />,
        label: "Canva",
      },
      {
        icon: (
          <SiAdobephotoshop className="w-[80%] md:w-[60%] h-[80%] md:h-[60%]" />
        ),
        label: "Adobe photoshop",
      },
    ],
  },
  {
    value: "front",
    tooltips: [
      {
        icon: <FaReact className="w-[80%] md:w-[60%] h-[80%] md:h-[60%]" />,
        label: "Reactjs",
      },
      {
        icon: (
          <SiTailwindcss className="w-[80%] md:w-[60%] h-[80%] md:h-[60%]" />
        ),
        label: "Tailwindcss",
      },
      {
        icon: (
          <SiTypescript className="w-[80%] md:w-[60%] h-[80%] md:h-[60%]" />
        ),
        label: "Typescript",
      },
      {
        icon: <FaAngular className="w-[80%] md:w-[60%] h-[80%] md:h-[60%]" />,
        label: "Angular",
      },
    ],
  },
  {
    value: "back",
    tooltips: [
      {
        icon: (
          <RiNextjsLine className="w-[80%] md:w-[60%] h-[80%] md:h-[60%]" />
        ),
        label: "Nextjs",
      },
      {
        icon: <SiNestjs className="w-[80%] md:w-[60%] h-[80%] md:h-[60%]" />,
        label: "Tailwindcss",
      },
      {
        icon: <FaNodeJs className="w-[80%] md:w-[60%] h-[80%] md:h-[60%]" />,
        label: "Nodejs",
      },
      {
        icon: (
          <SiPostgresql className="w-[80%] md:w-[60%] h-[80%] md:h-[60%]" />
        ),
        label: "Postgresql",
      },
    ],
  },
  {
    value: "other",
    tooltips: [
      {
        icon: <VscVscode className="w-[80%] md:w-[60%] h-[80%] md:h-[60%]" />,
        label: "Visual Studio Code",
      },
      {
        icon: <FaLinux className="w-[80%] md:w-[60%] h-[80%] md:h-[60%]" />,
        label: "GNU/Linux",
      },
      {
        icon: <FaGithubAlt className="w-[80%] md:w-[60%] h-[80%] md:h-[60%]" />,
        label: "Git/github",
      },
      {
        icon: <SiVim className="w-[80%] md:w-[60%] h-[80%] md:h-[60%]" />,
        label: "Vim",
      },
    ],
  },
];

function Skills() {
  const t = useTranslations("skills");

  return (
    <section className="px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <Tabs
          className="w-full flex items-center flex-col md:flex-row gap-7 md:gap-15 xl:gap-32"
          defaultValue="front"
        >
          <TabsList className="flex flex-col items-start gap-3 md:gap-5 w-full md:w-1/2 bg-transparent text-start h-auto">
            <h1 className="h1 text-start text-foreground">Skills</h1>
            <p className="mb-3 text-foreground">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
              nostrum ea perspiciatis eum sint excepturi consectetur, placeat
              debitis deleniti cum neque illum eos nesciunt cumque.
            </p>
            {skills.map((skill, index) => {
              const { value } = skill;
              return (
                <TabsTrigger
                  key={index}
                  className="w-full text-start h-10 xl:h-12 px-8 data-[state=active]:text-primary-foreground border-border border text-ring md:text-xl font-semibold"
                  value={value}
                >
                  {t(value)}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {skills.map((skill, index) => {
            const { value, tooltips } = skill;
            return (
              <TabsContent
                key={index}
                className="w-full md:w-1/2 min-h-[400px]"
                value={value}
              >
                <div className="grid grid-cols-2 gap-5 md:gap-7">
                  {tooltips.map((tooltip) => {
                    const { label, icon } = tooltip;
                    return (
                      <TooltipProvider key={label}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="w-full flex items-center justify-center h-full bg-primary text-primary-foreground rounded-2xl aspect-square">
                              {icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{label}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    );
                  })}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}

export default Skills;
