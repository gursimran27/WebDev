import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {

        const nav=useNavigate();


function clickHandler(){
            nav("/support");
}


  return (
    <div>

            <div>this is labs page</div>

            <button onClick={clickHandler}>go to support page</button>

    </div>
  )
}

export default Labs