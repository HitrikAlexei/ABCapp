import React from "react";
import { Link } from "react-router-dom";
import Milkpack from "./Milkpack";

function ContainerMilkpack() {
  return (
    <div className="container-milkpack">
      <Link to="/milkpack1">
        <Milkpack name="MILKPACK 1" id="1" to="/milkpack1" />
      </Link>
      <Link to="/milkpack2">
        <Milkpack name="MILKPACK 2" id="2" to="/milkpack2" />
      </Link>
      <Link to="/milkpack3">
        <Milkpack name="MILKPACK 3" id="3" to="/milkpack3" />
      </Link>
    </div>
  );
}

export default ContainerMilkpack;
