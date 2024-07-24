
import './App.css';
import Home from "./Components/Home"
import About from "./Components/About"
import Support from "./Components/Support"
import Labs from "./Components/Labs"
import NoPath from "./Components/NoPath"
import {Route , Routes , NavLink} from "react-router-dom"
import MainHeader from "./Components/MainHeader"

function App() {
  return (
    <div className="App">


            <ul>
                  <li>
                  {/* navlink also adds an active class to the element that is selected */}
                    <NavLink NavLink to="/">Home</NavLink><br/>    
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink><br/>               
                  </li>
                  <li>
                    <NavLink to="/support">Support</NavLink><br/>               
                  </li>
                  <li>
                    <NavLink to="/labs">Labs</NavLink>
                  </li>
            </ul>
            <br/>
            <br/>



          {/* <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/support' element={<Support/>}/>
                <Route path='/labs' element={<Labs/>}/>
                <Route path='*' element={<NoPath/>}/>
          </Routes> */}




                    {/* nesting routing */}
            <Routes>
                <Route path='/' element={<MainHeader/>}>  
                       {/*index mean that it is default  */}
                      <Route index element={<Home/>}/>
                      <Route path='/about' element={<About/>}/>
                      <Route path='/support' element={<Support/>}/>
                      <Route path='/labs' element={<Labs/>}/>
                      <Route path='*' element={<NoPath/>}/>
                </Route>

          </Routes>



    </div>
  );
}

export default App;
