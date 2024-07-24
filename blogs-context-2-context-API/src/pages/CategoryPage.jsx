import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const CategoryPage = () => {
  const nav = useNavigate();

  const location = useLocation();

  const category = location.pathname.split("/").at(-1);

  return (
    <div className="mt-24">
      <Header />

      <div className="flex flex-col">
        <div className="flex space-x-2 items-center w-[45%] max-w-[1280px] mx-auto -mb-[70px]">
          <button
            onClick={() => nav(-1)}
            className="border-[3px] rounded-md px-4 py-1 hover:border-blue-400 hover:scale-90  transition-all duration-300"
          >
            Back
          </button>

          <h2 className="font-bold text-xl">
            Blogs on <span className="underline">{category}</span>
          </h2>
        </div>

        <Blogs />
      </div>

      <Pagination />
    </div>
  );
};

export default CategoryPage;
