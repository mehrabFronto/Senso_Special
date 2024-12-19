import Image from "next/image";
import React from "react";

const certificate = [
  "/images/Zarin-Pal.webp",
  "/images/E-Nemad.webp",
  "/images/Samandehi.webp",
];

const Footer = () => {
  return (
    <footer
      dir="rtl"
      className="bg-secondary flex flex-col items-center gap-y-xs p-md font-bold"
    >
      <Image
        src="/images/senso-logo.webp"
        alt="logo"
        width={100}
        height={100}
        className="lg:w-[150px] lg:h-[150px]"
      />
      <div className="text-center flex flex-col items-center">
        <p>کافه رستوران ایتالیایی حس خاص</p>
        <p>کرج، فردیس، فلکه سوم، خیابان سی و یکم(دهم غربی قدیم)</p>
        <p>026-36502521</p>
        <p>Instagram: senso_speciale</p>
      </div>

      <div className="flex items-center gap-x-md mt-sm">
        {certificate.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt="certificate"
            width={100}
            height={100}
          />
        ))}
      </div>

      <div className="flex items-center mt-lg gap-x-sm">
        <Image
          src="/icons/copy-right.svg"
          alt="copy-right"
          width={16}
          height={16}
        />
        <p className="text-sm">
          تمامی حقوق متعلق به کافه رستوران حس خاص می باشد
        </p>
      </div>
      <p className="text-xs">توسعه داده شده توسط محراب دهقان</p>
    </footer>
  );
};

export default Footer;
