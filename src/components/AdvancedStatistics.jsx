import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function AdvancedStatistics() {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://json-api.uz/api/project/shortly/${i18n.language}`)
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch((err) => console.error("API error:", err));
  }, [i18n.language]);

  return (
    <section className="py-20 bg-gray-100 text-center w-[1440px]">
      {/* 🔹 Tarjima qilingan sarlavha va matn */}
      <h2 className="text-3xl font-bold mb-6">{t("advanced.title")}</h2>
      <p className="max-w-xl mx-auto mb-16 text-gray-500">
        {t("advanced.subtitle")}
      </p>

      {/* 🔹 Uchta alohida div */}
      <div className="flex flex-col md:flex-row gap-8 justify-center max-w-6xl mx-auto">
        {/* 1-div */}
        <div className="bg-white p-8 rounded-[5px] shadow w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">
            {data[0]?.title || "—"}
          </h3>
          <p className="text-gray-600">{data[0]?.text}</p>
        </div>

        {/* 2-div */}
        <div className="bg-white p-8 rounded-[5px] shadow w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">{data[1]?.title}</h3>
          <p className="text-gray-600">{data[1]?.text}</p>
        </div>

        {/* 3-div */}
        <div className="bg-white p-8 rounded-[5px] shadow w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">
            {data[2]?.title || "—"}
          </h3>
          <p className="text-gray-600">{data[2]?.text}</p>
        </div>
      </div>
    </section>
  );
}
