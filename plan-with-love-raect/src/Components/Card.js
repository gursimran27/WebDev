import { useState } from "react";


        // or by using props
function Card({id ,image,info,price,name , removeTour}){

    const [readmore,setReadmore]=useState(false);

    // if readmore is true the show all description else show less
    const description= readmore? info : `${info.substring(0,200)}....`;
    
    function readmoreHAndler(){
        // switch b/w true and flase of readmore variable
        setReadmore(!readmore);
    }


    return(

        <div className="card">

            <img src={image} className="image"></img>

            <div className="tour-info">
            <div className="tour-details">
                <h4 className="tour-price">₹ {price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>

            <div className="description">
                {description}
                <span className="read-more" onClick={readmoreHAndler}>
                    {readmore ? "Show Less" : "Read More"}
                    {/* if read-more is true then show show less else show show more */}
                </span>
            </div>
        </div>

            <button className="btn-red" onClick={()=>removeTour(id)}>Not Interested</button>
            {/* not to write onClick={removeTour(id)}    because it will be called immediatly when the component get render */}

        </div>
    );

}

export default Card;