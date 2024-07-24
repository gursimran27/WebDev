import React from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"

const SignupForm = ({setIsLoggedIn}) => {

    const nav=useNavigate();

    const [showPassword1 , setShowPassword1]=useState(false);
    const [showPassword2 , setShowPassword2]=useState(false);

    const [accountType , setAccountType]=useState("student");


    const[formData , setFormData] =useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    });


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

        if(formData.password !== formData.confirmPassword){
            toast.error("Password do not match")
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Created"); 
        nav("/dashboard");
        // console.log(formData);

        const finalData ={
            ...formData ,
            accountType
        }

        console.log(finalData);
    }

  return (
    <div >

            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max '>

                <button 
                className={`${accountType==="student" ? ("bg-richblack-900 text-richblack-5") : ("bg-transparent text-richblack-200")}
                py-2 px-5 rounded-full transition-all duration-200`}
                onClick={ () => setAccountType("student")}
                >   Student
                </button>

                <button
                className={`${accountType==="instructor" ? ("bg-richblack-900 text-richblack-5") : ("bg-transparent text-richblack-200")}
                py-2 px-5 rounded-full transition-all duration-200`}
                onClick={ () => setAccountType("instructor")}
                >
                    Instructor
                </button>

            </div>

            

            <form onSubmit={submitHandler}>
                
                {/* first and last name */}
                <div className='flex  justify-between gap-x-4 '>
                    <label className='w-full'>
                            <p className='text-[0.875rem] text-richblack-5 leading-[1.353rem] mb-1'>
                                First Name<sup className='text-pink-200'>*</sup>
                            </p>

                            <input
                                type="text"
                                required
                                name="firstName"
                                onChange={changeHandler}
                                placeholder="Enter First Name"
                                value={formData.firstName}
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
                                />

                        </label>


                        <label className='w-full'>
                            <p className='text-[0.875rem] text-richblack-5 leading-[1.353rem] mb-1'>
                                Last Name<sup className='text-pink-200'>*</sup>
                            </p>

                            <input
                                type="text"
                                required
                                name="lastName"
                                onChange={changeHandler}
                                placeholder="Enter Last Name"
                                value={formData.lastName}
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '

                                />

                        </label>
                </div>

                    {/* email address */}
                    <div className='mt-[20px]'>
                    <label className='w-full mt-[20px]'>
                        <p className='text-[0.875rem] text-richblack-5 leading-[1.353rem] mb-1'>
                            Email Adderess<sup className='text-pink-200'>*</sup>
                        </p>

                        <input
                            type="email"
                            required
                            name="email"
                            onChange={changeHandler}
                            placeholder="Enter Email Address"
                            value={formData.email}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '

                            />

                    </label>
                    </div>
                    


                    {/* confirmpassword and create password */}
                <div className='flex justify-between gap-x-4 mt-[20px]'>

                    <label className='relative w-full'>
                            <p className='text-[0.875rem] text-richblack-5 leading-[1.353rem] mb-1'>
                                Create Password<sup className='text-pink-200'>*</sup>
                            </p>

                            <input
                                type={showPassword1 ? ("text") : ("password")}
                                required
                                name="password"
                                onChange={changeHandler}
                                placeholder="Enter Password"
                                value={formData.password}
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '

                                />

                    <span onClick={()=>{
                        setShowPassword1( (prev) =>!prev)  //insted of this is can do (!showPassword)
                                }}
                        className="absolute right-3 top-[38px] cursor-pointer"
                        >
                        {
                            showPassword1 ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) :
                            (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)
                        }
                    </span>

                        </label>


                    <label className='relative w-full'>
                            <p className='text-[0.875rem] text-richblack-5 leading-[1.353rem] mb-1'> 
                                Confirm Password<sup className='text-pink-200'>*</sup>
                            </p>

                            <input
                                type={showPassword2 ? ("text") : ("password")}
                                required
                                name="confirmPassword"
                                onChange={changeHandler}
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '

                                />


                    <span onClick={()=>{
                        setShowPassword2( (prev) =>!prev)  //insted of this is can do (!showPassword)
                                }}
                        className="absolute right-3 top-[38px] cursor-pointer"
                        >
                        {
                            showPassword2 ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) :
                            (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)
                        }
                    </span>

                    </label>

                </div>
    

                <button 
                className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-10 w-full'>
                    Create Account
                </button>

            </form>

    </div>
  )
}

export default SignupForm