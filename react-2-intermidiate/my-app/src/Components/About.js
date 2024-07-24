import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    const nav=useNavigate();

        function clickHandler(){
            nav("/labs");
        }

        function prvHandler(){
            nav(-1); //it switchse to previously opened page
        }

  return (
    <div>
   
         <div>this is about page</div>

         <button onClick={clickHandler}>go to labs page</button>

         <button onClick={prvHandler}>go to previous</button>

    </div>
  )
}

export default About