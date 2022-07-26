import React from "react";
import image4 from "../assets/kidsValueProp.png";
import "./recomposible2.css";

export default function Recomposible4() {
    
       return (
         // The style for Recomposible2 was imported and used here
         <div className="item-box">
           <div className="item">
             <h3 className="item-header"> Create profile for kids</h3>
             <p className="item-body">
               Send some kids on an advanture with thier favourite chararcter in
               a space made just for them--free with your membership
             </p>
           </div>
           <div className="item">
             <img src={image4} alt="" className="item-img" />
           </div>
         </div>
       );
}
