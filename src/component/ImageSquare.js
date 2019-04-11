import React from "react"
import "./generalstyle.css"

function EachImage(props){

   return(
       <div className = "card">
        <div className = "img-container">
            <img 
            src={props.image} 
            alt={props.name}
            onClick = {() => props.remove(props.id, props.name)}
            // onClick = {() => props.check(props.name)}
            />
        </div>
       </div>
   );
};

export default EachImage;