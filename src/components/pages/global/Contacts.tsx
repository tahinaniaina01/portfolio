import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Button } from "../../ui/button";
import ContactForm from "../contacts/ContactForm";

function Contacts() {
  const t = useTranslations("contacts");
  const contacts = [
    {
      icon: <IoMail className="!w-[40px] !h-[40px]" />,
      value: "tahinaniaina02@gmail.com",
    },
    {
      icon: <Phone className="!w-[40px] !h-[40px]" />,
      value: "+261 33 97 762 71",
    },
    {
      icon: <FaWhatsapp className="!w-[40px] !h-[40px]" />,
      value: "+261 34 50 713 37",
    },
    {
      icon: <FaFacebook className="!w-[40px] !h-[40px]" />,
      value: "tahina rkts",
    },
  ];

  return (
    <section className="px-4 mt-12 md:px-8 lg:px-12">
      <div className="container mx-auto flex flex-col md:flex-row gap-7">
        <div className="w-full flex flex-col items-start md:items-center gap-7 md:w-1/2">
          <div>
            <h1 className="h1">Contacts</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
              cupiditate laborum rem odit cum provident.
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-start gap-3">
            {contacts.map((contact, index) => {
              const { icon, value } = contact;

              return (
                <div key={index} className="flex items-center gap-3 text-xl">
                  <Button
                    className="text-background bg-ring hover:bg-ring/90 hover:text-background w-auto h-auto p-2"
                    variant={"outline"}
                    size={"icon"}
                  >
                    {icon}
                  </Button>
                  <p className="md:text-2xl">{value}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-5">
          <div className="bg-muted rounded-xl md:rounded-2xl px-3 md:px-5 xl:px-7 py-2 md:py-4 xl:mb-6 space-y-5">
            <div className="space-y-3">
              <h1 className="h1">{t("title")}</h1>
              <p>{t("description")}</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
