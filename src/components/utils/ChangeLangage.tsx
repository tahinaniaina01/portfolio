"use client";

import { usePageTransitionStore } from "@/src/hooks/usePageTransition";
import { usePathname } from "@/src/i18n/routing";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function ChangeLangage() {
  const [isPending, startTransition] = useTransition();
  const { setAnimate } = usePageTransitionStore();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();
  // console.log(localActive);

  return (
    <Select
      onValueChange={(selected) => {
        setAnimate(1);
        startTransition(() => {
          router.replace(`/${selected}/${pathname}`);
        });
      }}
      defaultValue={localActive}
      disabled={isPending}
    >
      <SelectTrigger className="rounded-full cursor-pointer">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="fr">Français</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default ChangeLangage;
