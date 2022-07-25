import React from "react";
import Header from "./header";
import Footer from "./footer"
import Recomposible from "./recomposible";
import Recomposible2 from "./recomposible2";
import Recomposible3 from "./recomposible3";
import Recomposible4 from "./recomposible4";
import Recomposible5 from "./recomposible5";

export default function Netflix() {
  return (
    <div className="main-container">
      <Header />
      <Recomposible />
      <Recomposible2 />
      <Recomposible3 />
      <Recomposible4 />
      <Recomposible5 />
      <Footer />
    </div>
  );
}
