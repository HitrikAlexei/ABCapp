import React from "react";
import Product from "./Product.jsx";
import grill from "../images/grill.jpg";
import dvs from "../images/dvs.jpg";

function Ketcup() {
  return (
    <div className="product-container_ketchup">
      <Product src={dvs} weight={360} />
      <Product src={dvs} weight={160} />
      <Product src={grill} weight={360} />
      <Product src={grill} weight={160} />
    </div>
  );
}

export default Ketcup;
