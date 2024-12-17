"use client";

import Image from "next/image";
import React, { useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <section className="px-md" dir="rtl">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full flex items-center"
      >
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-full bg-[#3A3A3A] rounded-r-lg p-2.5 placeholder:text-[#777] border border-[#777] border-l-0 outline-none"
          placeholder="برای جستجو قسمتی از نام محصول را بنویسید..."
        />

        <button
          type="submit"
          title="search"
          className="bg-primary border border-primary rounded-l-lg overflow-hidden py-1 px-2"
        >
          <Image
            src="/icons/search.svg"
            alt="search"
            width={50}
            height={50}
            className="w-9 h-9"
          />
        </button>
      </form>
    </section>
  );
};

export default SearchBar;
