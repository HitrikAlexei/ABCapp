import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product.jsx";
import mokovskii from "../images/mokovskii.jpg";
import mokovskiiProvansal from "../images/mokovskii-provansal.jpg";
import evropeiskii from "../images/evropeiskii.jpg";
import solnishko from "../images/solnishko.jpg";
import napoleon from "../images/napoleon.jpg";

function Maionez() {
  return (
    <div className="product-container">
      <Link to="/product-maionez/mokovskii560_borisov">
        <Product
          to="/product-maionez/mokovskii560_borisov"
          id={"mokovskii560"}
          src={mokovskii}
          weight={560}
        />
      </Link>
      <Product id={"mokovskii360"} src={mokovskii} weight={360} />
      <Product id={"mokovskii160"} src={mokovskii} weight={160} />
      <Product id={"evropeiskii560"} src={evropeiskii} weight={560} />
      <Product id={"evropeiskii360"} src={evropeiskii} weight={360} />
      <Product id={"evropeiskii160"} src={evropeiskii} weight={160} />
      <Product id={"mokovskiiProvansal"} src={mokovskiiProvansal} />
      <Product id={"solnishko"} src={solnishko} />
      <Product id={"napoleon"} src={napoleon} />
    </div>
  );
}

export default Maionez;
