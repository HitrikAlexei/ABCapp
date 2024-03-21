import React from "react";
import ManufacturerButton from "./ManufacturerButton.jsx";
import Options from "./Options.jsx";

function OptionsSettings({
  verticalLeft,
  horizontalLeft,
  packetLengthLeft,
  weldingTimeLeft,
  stretchOutLeft,
  startDelayLeft,
  verticalRight,
  horizontalRight,
  packetLengthRight,
  weldingTimeRight,
  stretchOutRight,
  startDelayRight,
}) {
  return (
    <>
      <ManufacturerButton />
      <Options
        verticalLeft={verticalLeft}
        horizontalLeft={horizontalLeft}
        packetLengthLeft={packetLengthLeft}
        weldingTimeLeft={weldingTimeLeft}
        stretchOutLeft={stretchOutLeft}
        startDelayLeft={startDelayLeft}
        verticalRight={verticalRight}
        horizontalRight={horizontalRight}
        packetLengthRight={packetLengthRight}
        weldingTimeRight={weldingTimeRight}
        stretchOutRight={stretchOutRight}
        startDelayRight={startDelayRight}
      />
    </>
  );
}

export default OptionsSettings;
