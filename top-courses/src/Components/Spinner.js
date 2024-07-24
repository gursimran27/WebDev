import React from 'react'
import "./Spinner.css";

const Spinner = () => {
  return (
    // use https://www.cssportal.com/css-loader-generator/ for loader
    <div className='flex flex-col items-center space-y-2'>
        <div className="custom-loader"></div>
        <p className='text-lg font-semibold text-bgDark'>Loading...</p>
    </div>
    
  );
}

export default Spinner