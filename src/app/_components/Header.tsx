import Image from "next/image";
import React from "react";
import { headerLinks } from "../_constants/headerLinks";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <header className="p-md max-w-screen-lg mx-auto">
      <nav className="w-full flex flex-col items-center justify-center gap-y-sm lg:gap-y-md">
        <Link href="/">
          <Image
            src="/images/senso-logo.webp"
            alt="logo"
            width={100}
            height={100}
            className="lg:w-[150px] lg:h-[150px]"
          />
        </Link>

        <h1 className="font-bold text-center lg:text-xl">
          کافه رستوران ایتالیایی حس خاص
        </h1>

        <ul
          dir="rtl"
          className="w-full flex items-center justify-between lg:justify-around text-center text-xs lg:text-sm font-bold"
        >
          <li>
            <DarkModeToggle />
          </li>

          {headerLinks.map(({ id, label, icon, href }) => (
            <li key={id}>
              <Link href={href} className="flex items-center gap-x-sm p-1">
                <Image
                  src={icon}
                  alt="icon"
                  width={16}
                  height={16}
                  className="lg:w-5 lg:h-5"
                />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
