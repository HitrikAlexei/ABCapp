import React from "react";
import GoBackButton from "./GoBackButton.jsx";

function ManufacturerButton() {
  return (
    <>
      <GoBackButton />
      <div className="button-container">
        <div className="button-container__item_polotck">Полоцк</div>
        <div className="button-container__item_borisov">Борисов</div>
      </div>
    </>
  );
}

export default ManufacturerButton;
