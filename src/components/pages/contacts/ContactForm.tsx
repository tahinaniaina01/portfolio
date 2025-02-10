"use client";

import { useTranslations } from "next-intl";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";

function ContactForm() {
  const t = useTranslations("contacts");

  return (
    <form className="space-y-3 md:space-y-5">
      <div className="flex flex-col xl:flex-row gap-2 md:gap-3 w-full">
        <div className="space-y-1 w-full">
          <Label htmlFor="name" className="xl:text-2xl font-medium">
            {t("name")}
          </Label>
          <Input className="w-full" id="name" type="text" />
        </div>
        <div className="space-y-1 w-full">
          <Label htmlFor="firstname" className="xl:text-2xl font-medium">
            {t("firstname")}
          </Label>
          <Input className="w-full" id="firstname" type="text" />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-2 md:gap-3 w-full">
        <div className="space-y-1 w-full">
          <Label htmlFor="email" className="xl:text-2xl font-medium">
            {t("email")}
          </Label>
          <Input className="w-full" id="email" type="text" />
        </div>
        <div className="space-y-1 w-full">
          <Label htmlFor="tel" className="xl:text-2xl font-medium">
            {t("tel")}
          </Label>
          <Input className="w-full" id="tel" type="tel" />
        </div>
      </div>
      <div className="space-y-1">
        <Label htmlFor="message" className="xl:text-2xl font-medium">
          {t("message")}
        </Label>
        <Textarea className="min-h-[150px] max-h-[200px]" id="message" />
      </div>
      <div>
        <Button className="w-full mb-5" type="submit">
          {t("submit")}
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
