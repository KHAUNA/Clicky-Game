import React from "react"


function EachImage(props){

   return(
       <div className = "card">
        <div className = "imageContainer">
            <img 
            src={props.image} 
            alt={props.name}
            onClick = {() => props.remove(props.id)}
            />
        </div>
       </div>
   );
};

export default EachImage;