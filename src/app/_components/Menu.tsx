import React from "react";
import { menu } from "../_constants/menu";
import Image from "next/image";

const Menu = () => {
  return (
    <section className="p-md">
      <h2 className="w-full text-center font-bold flex items-center justify-center gap-x-xs">
        مـنــــو<span className="block text-primary">|</span>Menu
      </h2>

      <ul className="w-full flex items-center justify-between">
        {menu.map(({ id, label, icon, category }) => (
          <li key={id} className="flex flex-col text-center gap-y-xs">
            <Image
              src={icon}
              alt={category}
              width={100}
              height={100}
              className="bg-primary w-16 h-16 rounded-full p-2"
            />
            <p className="font-bold">{label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;
