import React from 'react'
import Template from '../Components/Template'
import logImg from "../assets/login.png"

const Login = ({setIsLoggedIn}) => {

  return (
    <div>

          <Template
            title="Welcome Back"
            desc1="Build skills for today, tomorrow ,and beyond."
            desc2="Education to future-proof your carrer."
            image={logImg}
            formtype="login"
            setIsLoggedIn={setIsLoggedIn}
          />

    </div>
  )
}

export default Login