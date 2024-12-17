import React from "react";
import SearchBar from "./_components/SearchBar";
import Menu from "./_components/Menu";
import Foods from "./_components/Foods";

const HomePage = () => {
  return (
    <main className="min-h-screen container max-w-screen-lg mx-auto">
      <SearchBar />
      <Menu />
      <Foods />
    </main>
  );
};

export default HomePage;
