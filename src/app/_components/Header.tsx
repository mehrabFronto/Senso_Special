import Image from "next/image";
import React from "react";
import { headerLinks } from "../_constants/headerLinks";
import Link from "next/link";

const Header = () => {
  return (
    <header className="p-md">
      <nav className="w-full flex flex-col items-center justify-center gap-y-sm">
        <Image
          src="/images/senso-logo.webp"
          alt="logo"
          width={100}
          height={100}
        />

        <h1 className="font-bold text-center">کافه رستوران ایتالیایی حس خاص</h1>

        <ul className="w-full flex items-center justify-between text-center text-xs font-bold">
          <li>
            <button className="flex items-center gap-x-sm p-1">
              <Image src="/icons/theme.svg" alt="icon" width={16} height={16} />
              <span>پوسته روشن</span>
            </button>
          </li>

          {headerLinks.map(({ id, label, icon, href }) => (
            <li key={id}>
              <Link href={href} className="flex items-center gap-x-sm p-1">
                <Image src={icon} alt="icon" width={16} height={16} />
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
