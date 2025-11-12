import React from "react";
import AdvancedStatistics from "../components/AdvancedStatistics";
import { useTranslation } from "react-i18next";
import Work from "../assets/working_with_computer.svg";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="max-w-[1440px] mx-auto">
      <section className="flex flex-col-reverse flex-row items-center justify-between py-20 px-10">
        <div className=" pl-[165px]  text-left pb-[5px]">
          <h1 className="text-[80px] tracking-[-2px] leading-[90px] font-bold  ">
            {t("heroTitle")}
          </h1>
          <p className="text-gray-500 mb-[38px]">{t("heroText")}</p>
          <button className="bg-[#2acfcf] hover:bg-[#9be3e2] text-white font-semibold py-3 px-8 rounded-[25px] ">
            {t("boost.button")}
          </button>
        </div>

        <div className="  flex justify-end">
          <img src={Work} alt="Working" width="650px" height="482px" />
        </div>
      </section>

      <AdvancedStatistics />
    </main>
  );
}
