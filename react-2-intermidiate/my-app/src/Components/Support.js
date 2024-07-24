import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {

    const nav=useNavigate();

    function clickHandler(){
        nav("/");
    }
  return (
    <div>

                <div>this is support page</div>

                <button onClick={clickHandler}>go to home</button>
    </div>
  )
}

export default Support