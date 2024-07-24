import "./App.css";
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import NavBar from "./Components/NavBar"
import { useState  } from "react";
import PrivateRoute from "./Components/PrivateRoute";



function App() {

      const[ isLoggedIn , setIsLoggedIn]=useState(false);


  return (
          <div className="w-[100vw] md:h-[100vh]  bg-richblack-900 flex flex-col overflow-auto ">
            
                <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>


                {/* all routes */}

                    <Routes>

                        <Route path="/" element={<Home/>}/>

                                    
                        <Route path="/dashboard" element={
                            //*!   <PrivateRoute/> is a component 
                            <PrivateRoute isLoggedIn={isLoggedIn}>
                                    <Dashboard/>
                            </PrivateRoute>
                        }/>
                         

                        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
                             
                        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>

                    </Routes>


          </div>
  );
}

export default App;
