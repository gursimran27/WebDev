import React, { useEffect } from 'react'
import Header from "./components/Header"
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"
import { useContext } from 'react'
import { AppContext } from './Context/AppContext'
import "./App.css"

const App = () => {

  const {fetchBlogPosts}=useContext(AppContext);

  useEffect(()=>{
    fetchBlogPosts();
  } , []);



  return (
    <div className='flex flex-col w-full h-full gap-y-1 justify-center items-center '>

          <Header/>

          <Blogs/>

          <Pagination/>

    </div>
  )
}

export default App