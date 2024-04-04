import React from "react";

import Ketcup from "./Ketchup.jsx";
import GoBackButton from "./GoBackButton.jsx";

function SelectKetchup() {
  return (
    <>
      <GoBackButton />
      <Ketcup milkNumber="3" />
    </>
  );
}

export default SelectKetchup;
