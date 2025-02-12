import { useTranslations } from "next-intl";
import { BiLogoInstagram } from "react-icons/bi";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Button } from "../../ui/button";
import { FlipWords } from "../../ui/flip-words";

function Hero() {
  const t = useTranslations("hero");
  const socialsNetworks = [
    <FaLinkedin key={"linkedin"} />,
    <IoLogoWhatsapp key={"wattsapp"} />,
    <BiLogoInstagram key={"instagram"} />,
    <FaFacebook key={"facebook"} />,
  ];
  const words = [t("designer"), t("developper")];

  return (
    <section className="w-full px-6 lg:px-12">
      <div className="container mx-auto lg:h-[678px] 2xl:h-[700px] h-[600px] flex flex-col-reverse md:items-center md:flex-row gap-12">
        <div className="w-full md:w-1/2 flex flex-col gap-2 md:gap-3 items-center md:items-start">
          <p className="text-base md:text-lg xl:text-xl flex items-center gap-3 2xl:leading-relaxed my-2">
            {t("preamble")} <span className="bg-ring w-0 md:w-12 h-1"></span>
          </p>
          <h1 className="font-heading text-5xl lg:text-[72px] 2xl:text-[80px] font-extrabold text-center md:text-start">
            RAKOTOSOA
          </h1>
          <h2 className="font-heading text-5xl lg:text-[72px] 2xl:text-[80px] font-extrabold text-center md:text-start 2xl:leading-relaxed">
            <span className="text-ring">Tahinaniaina</span> Noël
          </h2>
          <h4 className="text-2xl lg:text-4xl font-medium my-3 md:my-5">
            {t("iam")} <FlipWords words={words} />
          </h4>
          <div className="font-body flex flex-col md:flex-row gap-5 md:gap-3 my-3">
            <Button size={"lg"} className="w-full">
              {t("download")}
            </Button>
            <div className="flex gap-2 md:gap-3">
              {socialsNetworks.map((icon, i) => {
                return (
                  <Button
                    key={i}
                    className="font-body text-ring hover:text-background hover:bg-ring"
                    variant={"outline"}
                    size={"icon"}
                  >
                    {icon}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-[200px] md:w-[350px] aspect-square bg-ring rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
