import React from "react";

import { useNavigate } from "react-router-dom";

function GoBackButton() {
  const navigate = useNavigate();
  return (
    <div className="button-container">
      <button
        className="button-container__item"
        onClick={() => navigate(-1)}
      ></button>
    </div>
  );
}

export default GoBackButton;
