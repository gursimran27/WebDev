import React from "react";
import { useState } from "react";

import data from "./data";
import Tours from "./Components/Tours";

const App = () => {

    const [tours, setTours] = useState(data);
    // used to modify the data of tour

    // this func will be called when user click the btn present in card.js
    function removeTour(id){
        const newTours= tours.filter( tour =>tour .id!==id
        );
        setTours(newTours);
    }


    // no city left
     if(tours.length=== 0){
      // new UI
      return (
          <div className="refresh">

            <h2>No Tours Left</h2>

            <button className="btn-white" onClick={()=> setTours(data)}>Refresh</button>
            {/* not to write onClick={removeTour(id)}    because it will be called immediatly when the component get render */}
          </div>
      );
     }




  return(
      <div className="App">

        <Tours tours={tours} removeTour={removeTour}></Tours>

      </div>
  );
};

export default App;
