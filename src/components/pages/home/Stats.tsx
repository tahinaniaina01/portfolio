"use client";

import { useTranslations } from "next-intl";

function Stats() {
  const t = useTranslations("stats");
  const stats = [
    {
      stats: "+2",
      label: t("xp"),
    },
    {
      stats: "+30",
      label: t("projects"),
    },
    {
      stats: "+30",
      label: t("commit"),
    },
    {
      stats: "+30",
      label: t("tech"),
    },
  ];

  return (
    <section>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 py-5 gap-7">
        {stats.map((stat, index) => {
          return (
            <div key={index} className="flex items-center flex-col">
              <h1 className="text-5xl lg:text-[72px] font-bold">
                {stat.stats}
              </h1>
              <p className="text-base md:text-xl">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Stats;
