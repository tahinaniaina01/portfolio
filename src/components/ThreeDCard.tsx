import img from "@/assets/logo.png";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

type ThreeDCardProps = {
  title: string;
  description?: string;
  image?: string;
  github?: string;
  link?: string;
};

export function ThreeDCard({
  title,
  description,
  link,
  image,
  github,
}: ThreeDCardProps) {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="bg-card relative group/card w-full dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold font-heading w-full"
        >
          {title}
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-sm max-w-sm mt-2">
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={image || img}
            height="1000"
            width="1000"
            className="lg:h-60 h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div
          className={`flex ${
            github ? "justify-between" : "justify-end"
          } items-center mt-20`}
        >
          <a href={github} className={github ? "block" : "hidden"}>
            <CardItem
              translateZ={20}
              href={link}
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal cursor-pointer"
            >
              Github →
            </CardItem>
          </a>
          <a href={link === "#" || !link ? "#" : link} className="">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-lg font-bold"
            >
              View site
            </CardItem>
          </a>
        </div>
      </CardBody>
    </CardContainer>
  );
}
