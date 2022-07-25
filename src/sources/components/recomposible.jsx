import React from "react";
import image1 from "../assets/tv.png";
import "./recomposible.css"
export default function Recomposible() {
  return (
    <div className="item-box recomposible-box">
      <div className="item">
        <h3 className="item-header">Enjoy on your TV.</h3>
        <p className="item-body">
          {" "}
          Watch on smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blueray
          players, and more.
        </p>
      </div>
      <div className="item recomposible-box">
        <img src={image1} alt="" className="item-img" />
      </div>
    </div>
  );
}
