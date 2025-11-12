import React from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLang = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className="flex items-center justify-between px-10 py-5 shadow-sm bg-white w-[1440px]">
      <div className="flex items-center gap-2 pl-[168px]">
        <h1 className="text-2xl font-bold">{t("header.logo")}</h1>
      </div>

      <nav>
        <ul className="flex gap-8 font-medium">
          <li>
            <a href="#" className="hover:text-black text-[#9E9AA8] ">
              {t("header.features")}
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black text-[#9E9AA8] ">
              {t("header.pricing")}
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black text-[#9E9AA8] ">
              {t("header.resources")}
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <button className="text-[#9E9AA8] hover:text-black font-medium">
          {t("header.login")}
        </button>
        <button className="bg-[#2BD0D0] text-white px-[23px] py-[9px] hover:bg-[#9be3e2] rounded-full   h-[40px]">
          {t("header.signUp")}
        </button>

        <select
          onChange={changeLang}
          value={i18n.language}
          className="border border-gray-300 rounded px-2 py-1 text-gray-700 pr-[16px] mr-[160px]"
        >
          <option value="en">EN 🇬🇧</option>
          <option value="uz">UZ 🇺🇿</option>
          <option value="ru">RU 🇷🇺</option>
          <option value="ko">KO 🇰🇷</option>
        </select>
      </div>
    </header>
  );
}
