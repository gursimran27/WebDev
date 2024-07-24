import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div >
      <div className="custom-loader"></div>  
      <p className='text-3xl font-bold text-cener mt-16'>Loading...</p>
    </div>
    
  )
}

export default Spinner