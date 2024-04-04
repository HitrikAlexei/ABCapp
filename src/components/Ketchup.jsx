import React from "react";
import Product from "./Product.jsx";
import grill from "../images/grill.jpg";
import dvs from "../images/dvs.jpg";
import { Link } from "react-router-dom";

function Ketcup(props) {
  return (
    <div className="product-container_ketchup">
      <Link to={`/milkpack${props.milkNumber}/dvs360_borisov`}>
        <Product
          src={dvs}
          weight={360}
          to={`/milkpack${props.milkNumber}/dvs360_borisov`}
        />
      </Link>
      <Link to={`/milkpack${props.milkNumber}/dvs160_borisov`}>
        <Product
          src={dvs}
          weight={160}
          to={`/milkpack${props.milkNumber}/dvs160_borisov`}
        />
      </Link>
      <Link to={`/milkpack${props.milkNumber}/grill360_borisov`}>
        <Product
          src={grill}
          weight={360}
          to={`/milkpack${props.milkNumber}/grill360_borisov`}
        />
      </Link>
      <Link to={`/milkpack${props.milkNumber}/grill160_borisov`}>
        <Product
          src={grill}
          weight={160}
          to={`/milkpack${props.milkNumber}/grill160_borisov`}
        />
      </Link>
    </div>
  );
}

export default Ketcup;
