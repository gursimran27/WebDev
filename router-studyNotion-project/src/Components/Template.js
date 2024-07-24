import React from 'react'
import frameImg from "../assets/frame.png"
import SignupForm from "../Components/SignupForm"
import LoginForm from '../Components/LoginForm'
// import { Link } from 'react-router-dom'
import {FcGoogle} from "react-icons/fc"

// basically in template we add the common part of  both the login and signup


const Template = ({title , desc1 , desc2 , image , formtype , setIsLoggedIn}) => {
  return (
    <div className='flex md:flex-row flex-col-reverse justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 md:items-start items-center'>

            <div className='w-11/12 max-w-[450px] mx-0'>
                <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>

                <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                    <span className='text-richblack-100 '>{desc1}</span>
                      <br/>
                    <span className='text-blue-100 italic'>{desc2}</span>
                </p>

                {
                    formtype==='signup'? 
                    (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) :
                    (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
                }


                <div className='flex w-full items-center my-4 gap-x-2 '>
                        <div className='h-[1px] w-full bg-richblack-700 '></div>
                        <p className='text-richblack-700 font-medium leading-[1.175rem]'>OR</p>
                        <div className='h-[1px] w-full bg-richblack-700 '></div>
                </div>


                <button className='flex justify-center items-center w-full rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'><FcGoogle/>Sign Up with Google</button>

            </div>



            <div className='relative w-11/12 max-w-[450px]'>
                <img 
                src={frameImg} 
                alt="pattern" 
                width={558} 
                height={584} 
                loading="lazy"
                className=''
                 />


                <img 
                src={image} 
                alt="student" 
                width={558} 
                height={584} 
                loading="lazy" 
                className='absolute -top-4 right-4'
                />

            </div>

    </div>
  )
}

export default Template