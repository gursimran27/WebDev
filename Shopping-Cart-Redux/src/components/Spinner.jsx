import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="flex flex-col w-full h-[80vh] justify-center items-center">
      <div className="custom-loader"></div>
      <p className="text-3xl font-semibold mt-4 text-gray-700">Loading...</p>
    </div>
  );
};

export default Spinner;
