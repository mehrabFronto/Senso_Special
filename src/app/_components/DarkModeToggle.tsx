"use client";

import Image from "next/image";
import { useDarkMode } from "../../contexts/DarkModeProvider";

const DarkModeToggle = () => {
  const { toggleDarkMode, isDarkMode } = useDarkMode();

  return (
    <div>
      <button
        onClick={toggleDarkMode}
        className="flex items-center gap-x-sm p-1"
      >
        <Image
          src="/icons/theme.svg"
          alt="icon"
          width={16}
          height={16}
          className="lg:w-5 lg:h-5"
        />
        <span>{isDarkMode ? "پوسته روشن" : "پوسته تاریک"}</span>
      </button>
    </div>
  );
};

export default DarkModeToggle;
