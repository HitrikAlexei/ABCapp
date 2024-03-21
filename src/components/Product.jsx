import React from "react";

function Product(props) {
  return (
    <button className="product-container__item">
      <img
        id={props.id}
        src={props.src}
        alt=""
        className="product-container__img"
      ></img>
      <div className="product-container__description">{props.weight}</div>
    </button>
  );
}

export default Product;
