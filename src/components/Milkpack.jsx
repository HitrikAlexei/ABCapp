import React from "react";

function Milkpack(props) {
  return (
    <div className="container-milkpack-item">
      <div className="container-milkpack-item__image"></div>
      <p className="container-milkpack-item__name">{props.name}</p>
    </div>
  );
}

export default Milkpack;
