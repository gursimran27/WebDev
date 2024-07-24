import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

function App() {

    const[Text,settext]=useState("");

    function clickHandler(e){
      // use state is scheduale not immediate
      settext(e.target.value);  
      console.log(Text);
    }

               // variation 1 => every render
    // useEffect( ()=>{
    //   console.log('UI rendering done');
    // });


             // variation 2 => on first rendering
    // useEffect( ()=>{
    //    console.log('UI rendering done');
    //   },[]);



             // variation 3 => on first rendering and on given dependies changes
    // useEffect( ()=>{
    //    console.log('UI rendering done');
    //   },[Text]);


        // variation 4 => to handle unmounting of a component
    useEffect( ()=>{
       console.log('listener added');

      //  first the below code is executed then the upper one will execute
       return ( ()=>{
        console.log('listener removed');
       })
      },[Text]);


  return (

    <div className="App">

      <input onChange={clickHandler}></input>
      
    </div>
  );
}

export default App;
