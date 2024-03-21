import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SelectMaionez from "./components/SelectMaionez.jsx";
import SelectKetchup from "./components/SelectKetchup.jsx";
import Main from "./components/Main.jsx";
import OptionsSettings from "./components/OptionsSettings.jsx";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="product-maionez" element={<SelectMaionez />} />
          <Route path="product-ketchup" element={<SelectKetchup />} />
          <Route
            path="/product-maionez/mokovskii560_borisov"
            element={
              <OptionsSettings
                verticalLeft={1111}
                horizontalLeft={222}
                packetLengthLeft={3333}
                weldingTimeLeft={444}
                stretchOutLeft={555}
                startDelayLeft={666}
                verticalRight={777}
                horizontalRight={888}
                packetLengthRight={999}
                weldingTimeRight={30}
                stretchOutRight={555}
                startDelayRight={666}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
