import React from "react";
import Header from "./_components/Header";
import SearchBar from "./_components/SearchBar";
import Menu from "./_components/Menu";
import Foods from "./_components/Foods";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SearchBar />
      <Menu />
      <Foods />
    </div>
  );
};

export default HomePage;
