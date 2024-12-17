import React, { Suspense } from "react";
import SearchBar from "./_components/SearchBar";
import Foods from "./_components/Foods";
import Loading from "./_components/Loading";

const HomePage = () => {
  return (
    <main className="container max-w-screen-lg mx-auto mb-4xl">
      <SearchBar />
      <Suspense fallback={<Loading />}>
        <Foods />
      </Suspense>
    </main>
  );
};

export default HomePage;
