import React from "react";
import  {apiUrl,filterData} from "./data";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { useState, useEffect } from "react";
import {toast} from "react-toastify";
import Spinner from "./Components/Spinner"


const App = () => {

  // initilized as All
  const[category, setCategory]=useState(filterData[0].title);

    const[courses,setCourses]=useState(null);
    // because of null we were getting the issues so it was resolved by using the loader....another way is using the empty array as like useState([]);

    const [loading,setLoading]=useState(true);

    const fetchData= async () =>{
      setLoading(true);
      try{
          const res=await fetch(apiUrl);
          const output=await res.json();

          // save data into a variable
          // console.log(output);
          setCourses(output.data);
          // .data is key inside the fetched data see by json formator website
      }
      catch(error){
          toast.error("something went wrong");
      }

      setLoading(false);
    }


    useEffect(() => {
        fetchData();
    }, []); 
  //first time executed at render
  // useeffect hook is executed after app.js is rendered which mean at that time no api call was driven so thats why we were getting errors as our usestate hook variable courses was null....so to solve this problem we have make a another UI i.e loader ..... 
      


  return (

  <div className="flex flex-col min-h-screen bg-bgDark2">
  
      <div>
      <Navbar/>
      </div>

    <div className="bg-bgDark2 overflow-hidden">
      <div>
        <Filter 
        fd={filterData}
        category={category}
        setCategory={setCategory}
        />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
            {
            loading ?(<Spinner/>) : (<Cards courses={courses} category={category}/>)
            }
        </div>
    </div>
      

  </div>

  );
};

export default App;
