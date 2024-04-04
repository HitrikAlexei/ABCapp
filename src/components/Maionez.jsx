import React from "react";
import Product from "./Product.jsx";
import mokovskii from "../images/mokovskii.jpg";
import mokovskiiProvansal from "../images/mokovskii-provansal.jpg";
import evropeiskii from "../images/evropeiskii.jpg";
import solnishko from "../images/solnishko.jpg";
import napoleon from "../images/napoleon.jpg";
import { Link } from "react-router-dom";

function Maionez(props) {
  return (
    <div className="product-container">
      <Link to={`/milkpack${props.milkNumber}/mokovskii560_borisov`}>
        <Product
          src={mokovskii}
          weight={560}
          to={`/milkpack${props.milkNumber}/mokovskii560_borisov`}
        />
      </Link>
      <Link to={`/milkpack${props.milkNumber}/mokovskii360_borisov`}>
        <Product
          src={mokovskii}
          weight={360}
          to={`/milkpack${props.milkNumber}/mokovskii360_borisov`}
        />
      </Link>
      <Link to={`/milkpack${props.milkNumber}/mokovskii160_borisov`}>
        <Product
          src={mokovskii}
          weight={160}
          to={`/milkpack${props.milkNumber}/mokovskii160_borisov`}
        />
      </Link>
      <Link to={`/milkpack${props.milkNumber}/evropeiskii560_borisov`}>
        <Product
          src={evropeiskii}
          weight={560}
          to={`/milkpack${props.milkNumber}/evropeiskii560_borisov`}
        />
      </Link>
      <Link to={`/milkpack${props.milkNumber}/evropeiskii360_borisov`}>
        <Product
          src={evropeiskii}
          weight={360}
          to={`/milkpack${props.milkNumber}/evropeiskii360_borisov`}
        />
      </Link>
      <Link to={`/milkpack${props.milkNumber}/evropeiskii160_borisov`}>
        <Product
          src={evropeiskii}
          weight={160}
          to={`/milkpack${props.milkNumber}/evropeiskii160_borisov`}
        />
      </Link>
      <Link to={`/milkpack${props.milkNumber}/mokovskiiProvansal_borisov`}>
        <Product
          src={mokovskiiProvansal}
          to={`/milkpack${props.milkNumber}/mokovskiiProvansal_borisov`}
        />
      </Link>
      <Link to={`/milkpack${props.milkNumber}/solnishko_borisov`}>
        <Product
          src={solnishko}
          to={`/milkpack${props.milkNumber}/solnishko_borisov`}
        />
      </Link>
      <Link to={`/milkpack${props.milkNumber}/napoleon_borisov`}>
        <Product
          src={napoleon}
          to={`/milkpack${props.milkNumber}/napoleon_borisov`}
        />
      </Link>
    </div>
  );
}

export default Maionez;
