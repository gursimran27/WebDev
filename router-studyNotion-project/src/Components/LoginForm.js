import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const LoginForm = ({setIsLoggedIn}) => {

    const nav=useNavigate();

    const[showPassword , setShowPassword]=useState(false);

        const[formData, setFormData]=useState(
            {
                email:"",
                password:""
            }
        )


            function changeHandler(e){
                setFormData(
                    (prev)=>{
                        return(
                            {
                                ...prev ,
                                [e.target.name]:e.target.value
                            }
                        )
                    }
                )
            }

            function submitHandler(e){
                e.preventDefault();    

                setIsLoggedIn(true);
                toast.success("Logged In");

                nav("/dashboard");

                console.log(formData);
            }



  return (
        <form onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-4 mt-6"
        >

                {/* insted of using htmlfor we simply place the input tag inside label */}
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 leading-[1.353rem] mb-1'>
                    Email Address<sup className='text-pink- 200'>*</sup>
                </p>

                <input 
                required
                type="email"
                value={formData.email}
                name="email"
                onChange={changeHandler}
                placeholder="Enter Email Addressd"
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
                />

            </label>



            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 leading-[1.353rem] mb-1'>
                    Password<sup className='text-pink-200'>*</sup>
                </p>

                <input 
                required
                type={showPassword ? ("text") :("password")}
                value={formData.password}
                name="password"
                onChange={changeHandler}
                placeholder="Enter password"
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />

                <span onClick={()=>{
                    setShowPassword( (prev) =>!prev)  //insted of this is can do (!showPassword)
                }}
                className="absolute right-3 top-[38px] cursor-pointer"
                >
                    {
                        showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) :
                        (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)
                    }
                </span>

                

                <Link to="#">
                    <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                        Forgot Password
                    </p>               
                </Link>

            </label>



            <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                Sign In
            </button>

            


        </form>
  )
}

export default LoginForm