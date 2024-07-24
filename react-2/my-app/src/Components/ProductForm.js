import "./ProductForm.css";

import { useState } from "react";


function ProductForm(props){

    const [newTitle,setTitle] =useState("");
    const [newDate,setDate] =useState("");



    function titleChangeHandler(event){
        setTitle(event.target.value);

        console.log("title change kroge!");
        console.log(event.target.value);
    }


    function dateChangeHandler(event){
        setDate(event.target.value);

        console.log("date change kroge!");
        console.log(event.target.value);

        console.log("printing");
        console.log(`${newTitle} and ${newDate}`);
    }


    function submitHandler(e){
        e.preventDefault();
        // prevents the default behaviiour of submit button

        // object
        const productDate={
            title:newTitle,
            date:newDate
        };

        console.log(productDate);

        // implement liftion up
        // sending this data to its parent i.e NewProduct.js
        props.onSaveProduct(productDate);

        setDate("");
        setTitle("");
    }



    return(
        <form onSubmit={submitHandler}>
            <div className="new-product_controls">
                <div className="new-product_control">
                <label>Title</label> 
                <input type='text' onChange={titleChangeHandler} value={newTitle}></input>
                </div>
                {/* using value={newTitle} we link the newTitle with that particular element */}

                <div className="new-product_control">
                    <lebel>Date</lebel>
                    <input type='date' min='2023-01-01' max='2023-12-12' onChange={dateChangeHandler} value={newDate}></input>
                </div>

                <div className="new-product_control">
                <button type='Submit'>Add Product</button>
                </div>

            </div>  
        </form>
    );
}

export default ProductForm;