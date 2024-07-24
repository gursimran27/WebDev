import React from "react";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Header />

      <div className="w-screen flex flex-col items-center justify-center">
        <Blogs />
      </div>
      <Pagination />
    </div>
  );
};

export default Home;
