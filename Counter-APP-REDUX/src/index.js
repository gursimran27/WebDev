import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {Provider} from "react-redux"
import {store}  from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  {/* provider links the redux code to react code */}
      <Provider store={store}> 
         <App />
      </Provider>
   
  </>
);
