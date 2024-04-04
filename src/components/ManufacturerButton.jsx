import React, { useState } from "react";
import GoBackButton from "./GoBackButton.jsx";

function ManufacturerButton() {
  const [checked, setChecked] = useState(true);
  function chengeCheckbox() {
    setChecked(!checked);
  }
  return (
    <>
      <GoBackButton />
      <div className="button-container">
        <button
          checked={checked}
          onClick={chengeCheckbox}
          className={
            checked
              ? "button-container__item_manufacturer_active"
              : "button-container__item_manufacturer"
          }
        >
          Борисов
        </button>

        <button
          checked={checked}
          onClick={chengeCheckbox}
          className={
            checked
              ? "button-container__item_manufacturer"
              : "button-container__item_manufacturer_active"
          }
        >
          Полоцк
        </button>
      </div>
    </>
  );
}

export default ManufacturerButton;
