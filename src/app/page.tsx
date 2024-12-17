import React from "react";
import SearchBar from "./_components/SearchBar";
import Foods from "./_components/Foods";

const HomePage = () => {
  return (
    <main className="container max-w-screen-lg mx-auto mb-4xl">
      <SearchBar />
      <Foods />
    </main>
  );
};

export default HomePage;
