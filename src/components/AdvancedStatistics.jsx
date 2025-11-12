import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Line from "../assets/Rectangle.svg";
export default function AdvancedStatistics() {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);

  const API_URL = import.meta.env.PROD
    ? `/api/project/shortly/${i18n.language}`
    : `https://json-api.uz/api/project/shortly/${i18n.language}`;

  useEffect(() => {
    fetch(API_URL)
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Server xatosi: ${res.status} - ${text}`);
        }
        return res.json();
      })
      .then((res) => setData(res.data))
      .catch((err) => console.error("API error:", err));
  }, [i18n.language, API_URL]);

  return (
    <section className="py-20 bg-gray-100 text-center w-[1440px]">
      <img className="absolute top-[980px]  pl-[160px] " src={Line} alt="" />
      <h2 className="text-[40px] font-bold mb-6 z-[100]">
        {t("advanced.title")}
      </h2>
      <p className="text-[18px] mx-auto mb-16 text-[#9E9AA8] z-[100]">
        {t("advanced.subtitle")}
      </p>

      <div className="flex flex-col md:flex-row gap-8 justify-center max-w-6xl mx-auto z-[100]">
        <div className="bg-white p-8 rounded-[5px] shadow w-full md:w-1/3 z-[100]">
          <h3 className="text-xl font-semibold mb-4 z-[100]">
            {data[0]?.title}
          </h3>
          <p className="text-[#9E9AA8] z-[100]">{data[0]?.text}</p>
        </div>

        <div className="bg-white p-8 rounded-[5px] shadow w-full md:w-1/3 z-[100]">
          <h3 className="text-xl font-semibold mb-4 z-[100]">
            {data[1]?.title}
          </h3>
          <p className="text-[#9E9AA8] z-[100]">{data[1]?.text}</p>
        </div>

        <div className="bg-white p-8 rounded-[5px] shadow w-full md:w-1/3 z-[100]">
          <h3 className="text-xl font-semibold mb-4 z-[100]">
            {data[2]?.title}
          </h3>
          <p className="text-[#9E9AA8] z-[100]">{data[2]?.text}</p>
        </div>
      </div>
    </section>
  );
}
