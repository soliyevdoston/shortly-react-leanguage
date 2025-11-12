import React from "react";
import { useTranslation } from "react-i18next";
import Insta from "../assets/Shape (1).svg";
import Facebook from "../assets/Path.svg";
import Twitter from "../assets/Path (1).svg";
import P from "../assets/Path (2).svg";
export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#232127] text-white  py-[71px] px-[163px] w-[1440px]">
      <div className="mx-auto grid md:grid-cols-3 gap-8">
        <div className="flex items-center gap-2 ">
          <h1 className="text-2xl font-bold">{t("header.logo")}</h1>
        </div>

        <div className="max-w-xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-bold text-lg mb-4">
              {t("footer.features.title")}
            </h3>
            <ul className="space-y-2">
              <li className="text-[#9E9AA8]">
                {t("footer.features.linkShortening")}
              </li>
              <li className="text-[#9E9AA8]">
                {t("footer.features.brandedLinks")}
              </li>
              <li className="text-[#9E9AA8]">
                {t("footer.features.analytics")}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">
              {t("footer.resources.title")}
            </h3>
            <ul className="space-y-2">
              <li className="text-[#9E9AA8]">{t("footer.resources.blog")}</li>
              <li className="text-[#9E9AA8]">
                {t("footer.resources.developers")}
              </li>
              <li className="text-[#9E9AA8]">
                {t("footer.resources.support")}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">
              {t("footer.company.title")}
            </h3>
            <ul className="space-y-2">
              <li className="text-[#9E9AA8]">{t("footer.company.about")}</li>
              <li className="text-[#9E9AA8]">{t("footer.company.ourTeam")}</li>
              <li className="text-[#9E9AA8]">{t("footer.company.careers")}</li>
              <li className="text-[#9E9AA8]">{t("footer.company.contact")}</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-[10px] pl-[120px] ">
          <img src={Facebook} alt="" width="24px" height="24px" />
          <img src={Twitter} alt="" width="24px" height="24px" />
          <img src={P} alt="" width="24px" height="24px" />
          <img src={Insta} alt="" width="24px" height="24px" />
        </div>
      </div>
    </footer>
  );
}
