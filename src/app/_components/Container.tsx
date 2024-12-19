"use client";

import React, { Suspense, useState } from "react";
import SearchBar from "./SearchBar";
import Foods from "./Foods";
import { foodsData } from "../_data/foodsData";
import Loading from "./Loading";
import { menu } from "../_constants/menu";

const Container = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredFoods, setFilteredFoods] = useState(foodsData);
  const [availableCategories, setAvailableCategories] = useState(menu);

  const handleSearchFoods = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newFoods = foodsData.filter((food) =>
      food.label.trim().toLowerCase().includes(searchValue.trim().toLowerCase())
    );

    setFilteredFoods(newFoods);

    const newCategories = menu.filter((item) =>
      newFoods.some((food) => food.category === item.category)
    );

    setAvailableCategories(newCategories);
  };

  return (
    <div className="container max-w-screen-lg mx-auto mb-4xl space-y-8">
      <SearchBar
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onSubmit={handleSearchFoods}
      />

      {/* Menu and Foods with integrated functionality */}
      <Suspense fallback={<Loading />}>
        {!!filteredFoods.length ? (
          <Foods
            foodsData={filteredFoods}
            availableCategories={availableCategories}
          />
        ) : (
          <p
            dir="rtl"
            className="w-full text-center text-primary text-2xl font-bold py-20"
          >
            محصول مورد نظر پیدا نشد!
          </p>
        )}
      </Suspense>
    </div>
  );
};

export default Container;
