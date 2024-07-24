import React from "react";
import Testmonial from "./Components/Testimonial";
import reviews from "./data";

const App = () => {
  return (
    <div className="flex flex-col md:w-[100vw] md:h-[100vh] justify-center items-center bg-gray-200 overflow-auto">
    
        <div className="text-center">
            
            <h1 className="text-4xl font-bold">Our Testimonials</h1>
            
            <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
            
            <Testmonial reviews={reviews}></Testmonial>
        </div>

    </div>
  );
};

export default App;
