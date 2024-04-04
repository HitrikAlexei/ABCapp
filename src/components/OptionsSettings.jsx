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
  photoDelayLeft,
  verticalRight,
  horizontalRight,
  packetLengthRight,
  weldingTimeRight,
  stretchOutRight,
  startDelayRight,
  photoDelayRight,
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
        photoDelayLeft={photoDelayLeft}
        verticalRight={verticalRight}
        horizontalRight={horizontalRight}
        packetLengthRight={packetLengthRight}
        weldingTimeRight={weldingTimeRight}
        stretchOutRight={stretchOutRight}
        startDelayRight={startDelayRight}
        photoDelayRight={photoDelayRight}
      />
    </>
  );
}

export default OptionsSettings;
