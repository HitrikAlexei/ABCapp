import React from "react";
import { Link } from "react-router-dom";

function GoBackButton() {
  return (
    <div className="button-container">
      <Link to="/">
        <div className="button-container__item"></div>
      </Link>
    </div>
  );
}

export default GoBackButton;
