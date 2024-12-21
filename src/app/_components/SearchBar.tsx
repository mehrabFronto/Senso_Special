import Image from "next/image";
import React from "react";
import { useDarkMode } from "../../contexts/DarkModeProvider";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onClear: () => void;
};

const SearchBar = ({ value, onChange, onSubmit, onClear }: Props) => {
  const { isDarkMode } = useDarkMode();

  return (
    <section className="px-md" dir="rtl">
      <form onSubmit={onSubmit} className="w-full flex items-center">
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="w-full bg-secondary rounded-r-lg p-2.5 placeholder:text-dark-gray border border-dark-gray border-l-0 outline-none"
          placeholder="برای جستجو قسمتی از نام محصول را بنویسید..."
        />

        <button
          type="button"
          title="search"
          onClick={value ? onClear : undefined}
          className={`bg-primary rounded-l-lg overflow-hidden py-1 px-2 relative left-[2px] border border-r-0 ${
            isDarkMode ? "border-primary" : "border-dark-gray"
          }`}
        >
          {value ? (
            <div className="w-9 h-9 relative left-[1px]">
              <span className="w-2/3 h-[3px] bg-black rounded-full rotate-45 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]"></span>
              <span className="w-2/3 h-[3px] bg-black rounded-full -rotate-45 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]"></span>
            </div>
          ) : (
            <Image
              src="/icons/search.svg"
              alt="search"
              width={50}
              height={50}
              className="w-9 h-9"
            />
          )}
        </button>
      </form>
    </section>
  );
};

export default SearchBar;
