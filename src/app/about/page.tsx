import React from "react";
import { openingHours } from "./_constants/openingHours";
import MapWrapper from "./_components/MapWrapper";

const AboutPage = () => {
  return (
    <main className="p-2xl pb-4xl max-w-screen-lg mx-auto">
      <div className="w-full space-y-xl bg-secondary p-xl rounded-xl border border-light-gray">
        <div className="text-center font-bold flex flex-col items-center gap-y-xs">
          <p>کافه رستوران ایتالیایی حس خاص</p>
          <p>کرج، فردیس، فلکه سوم، خیابان سی و یکم(دهم غربی قدیم)</p>
          <p>026-36502521</p>
          <p>
            <span className="text-primary">Instagram:</span> senso_speciale
          </p>
        </div>

        <MapWrapper />

        <div dir="rtl" className="flex flex-col items-center gap-y-xs">
          {openingHours.map(({ day, hours }, index) => (
            <div key={index} className="flex items-center gap-x-xs font-bold">
              <span className="text-primary">{day}:</span>
              <span>{hours}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
