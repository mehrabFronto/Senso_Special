import React from "react";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./_components/MapComponent"));

const AboutPage = () => {
  return (
    <main className="p-2xl pb-4xl max-w-screen-lg mx-auto">
      <div className="w-full space-y-xl bg-[#2A2A2A] p-xl rounded-xl border border-[#5A5A5A]">
        <div className="text-center font-bold flex flex-col items-center gap-y-xs">
          <p>کافه رستوران ایتالیایی حس خاص</p>
          <p>کرج، فردیس، فلکه سوم، خیابان سی و یکم(دهم غربی قدیم)</p>
          <p>026-36502521</p>
          <p>
            <span className="text-primary">Instagram:</span> senso_speciale
          </p>
        </div>

        <MapComponent />
      </div>
    </main>
  );
};

export default AboutPage;
