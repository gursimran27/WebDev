import React, { useState } from 'react';

import Card from "./Card";
import ProductDate from "./ProductDate";
import "./ProductItem.css";


const ProductItem=(props)=>{

    // let title=props.title;

    // destructuring
    const [title,setTitle]= useState(props.title);
    
    function clickHandler(){

        // title="popcorn";
        // the above will not repaint our UI

        if(props.name)
            setTitle(props.name);
        else
            setTitle("popcorn");

        console.log('btn-clicked!');
    }

    return(

        <Card className='product-item'>

        <ProductDate date={props.date}></ProductDate>

        <div className='product-item__description'>
            <h2>{title}</h2>
        </div>

        <button onClick={clickHandler}>Add to cart</button>


        </Card>
    );

}


export default ProductItem;