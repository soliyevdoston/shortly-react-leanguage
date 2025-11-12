import React from "react";
import { useTranslation } from "react-i18next";
import BgImage from "../assets/Path 2.svg"; // Rasm manzilingni moslashtir

export default function BoostSection() {
  const { t } = useTranslation();

  return (
    <section
      className="bg-[#3b3054] text-white text-center py-20 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <h2 className="text-4xl font-bold mb-6">{t("boost.title")}</h2>

      <button className="bg-[#2acfcf] hover:bg-[#9be3e2] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300">
        {t("boost.button")}
      </button>
    </section>
  );
}
