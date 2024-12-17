"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { menu } from "../_constants/menu";
import Image from "next/image";

const Menu = ({
  onCategoryClick,
}: {
  onCategoryClick: (category: string) => void;
}) => {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category")?.toString() || "";

  const handleCategoryClick = (category: string) => {
    onCategoryClick(category); // ارسال دسته‌بندی انتخاب‌شده
  };

  return (
    <section dir="rtl" className="p-md space-y-xs">
      <h2 className="w-full text-center font-bold flex items-center justify-center gap-x-xs">
        مـنــــو<span className="block text-primary">|</span>Menu
      </h2>

      <ul
        dir="ltr"
        className="w-full flex items-center justify-between lg:justify-around"
      >
        {menu.map(({ id, label, icon, category }) => (
          <li
            key={id}
            className="flex flex-col text-center gap-y-xs cursor-pointer relative"
            onClick={() => handleCategoryClick(category)}
          >
            <Image
              src={icon}
              alt={category}
              width={100}
              height={100}
              className={`bg-primary w-16 h-16 rounded-full p-2 ${
                currentCategory === category ? "animate-spin" : ""
              }`}
            />
            <p className="font-bold">{label}</p>

            {currentCategory === category && (
              <span className="absolute h-[1px] w-full bg-primary -bottom-2"></span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;
