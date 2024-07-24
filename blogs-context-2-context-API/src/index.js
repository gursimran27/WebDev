import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContextProvider from "./Context/AppContext2"
import { BrowserRouter } from "react-router-dom";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
       <AppContextProvider>
            <App />
        </AppContextProvider> 
    </BrowserRouter>
    
);
