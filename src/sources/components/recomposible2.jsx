import React from "react";
import image1 from "../assets/mobile-0819.jpg";
import "./recomposible2.css";
import floatimg from "../assets/download-icon.gif";
import floatbookcover from "../assets/boxshot.png";
import { Component } from "react";



export default function Recomposible2() {
  return (
    // The item--box wraps the second Component
    <div className="item--box">
      <div className="item2-">
        <h3 className="item-header-">Download your shows to watch offline.</h3>
        <p className="item-body-">
          {" "}
          Save your favorites easily and always have something to watch.
        </p>
      </div>
       {/* This contains the two image one is indexed */}
      <div className="wrap--">
        <div className="float">
          <img
            src={floatbookcover}
            alt=""
          />
          <span className="float-text">
            Stranger Things <span className="inner-float-text">downloading....</span>{" "}
          </span>
          {/* This is the z-indexed-image */}
          <img
            src={floatimg}
            alt=""
          />
        </div>

        <img
          src="
        "
          alt=""
        />
        <img src={image1} alt="" className="item-img-" />
      </div>
    </div>
  );
}
