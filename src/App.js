import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SelectMaionez1 from "./components/Milkpack1.jsx";
import SelectMaionez2 from "./components/Milkpack2.jsx";
import SelectKetchup from "./components/Milkpack3.jsx";
import Main from "./components/Main.jsx";
import OptionsSettings from "./components/OptionsSettings.jsx";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/milkpack1" element={<SelectMaionez1 />} />
          <Route
            path="/milkpack1/mokovskii560_borisov"
            element={
              <OptionsSettings
                verticalLeft={140}
                horizontalLeft={150}
                packetLengthLeft={197}
                weldingTimeLeft={490}
                stretchOutLeft={750}
                startDelayLeft={12}
                photoDelayLeft={0}
                verticalRight={160}
                horizontalRight={175}
                packetLengthRight={194}
                weldingTimeRight={480}
                stretchOutRight={750}
                startDelayRight={17}
                photoDelayRight={0}
              />
            }
          />
          <Route
            path="/milkpack1/mokovskii360_borisov"
            element={
              <OptionsSettings
                verticalLeft={135}
                horizontalLeft={160}
                packetLengthLeft={180}
                weldingTimeLeft={480}
                stretchOutLeft={750}
                startDelayLeft={60}
                photoDelayLeft={47}
                verticalRight={160}
                horizontalRight={195}
                packetLengthRight={180}
                weldingTimeRight={490}
                stretchOutRight={750}
                startDelayRight={27}
                photoDelayRight={32}
              />
            }
          />
          <Route
            path="/milkpack1/mokovskii160_borisov"
            element={
              <OptionsSettings
                verticalLeft={128}
                horizontalLeft={160}
                packetLengthLeft={130}
                weldingTimeLeft={440}
                stretchOutLeft={750}
                startDelayLeft={30}
                photoDelayLeft={44}
                verticalRight={145}
                horizontalRight={170}
                packetLengthRight={130}
                weldingTimeRight={490}
                stretchOutRight={750}
                startDelayRight={60}
                photoDelayRight={30}
              />
            }
          />
          <Route
            path="/milkpack1/evropeiskii560_borisov"
            element={
              <OptionsSettings
                verticalLeft={140}
                horizontalLeft={150}
                packetLengthLeft={197}
                weldingTimeLeft={490}
                stretchOutLeft={750}
                startDelayLeft={12}
                photoDelayLeft={0}
                verticalRight={160}
                horizontalRight={175}
                packetLengthRight={194}
                weldingTimeRight={480}
                stretchOutRight={750}
                startDelayRight={17}
                photoDelayRight={0}
              />
            }
          />
          <Route
            path="/milkpack1/evropeiskii360_borisov"
            element={
              <OptionsSettings
                verticalLeft={150}
                horizontalLeft={160}
                packetLengthLeft={163}
                weldingTimeLeft={490}
                stretchOutLeft={750}
                startDelayLeft={60}
                photoDelayLeft={0}
                verticalRight={160}
                horizontalRight={195}
                packetLengthRight={156}
                weldingTimeRight={490}
                stretchOutRight={750}
                startDelayRight={27}
                photoDelayRight={0}
              />
            }
          />
          <Route
            path="/milkpack1/evropeiskii160_borisov"
            element={
              <OptionsSettings
                verticalLeft={128}
                horizontalLeft={160}
                packetLengthLeft={114}
                weldingTimeLeft={440}
                stretchOutLeft={750}
                startDelayLeft={30}
                photoDelayLeft={0}
                verticalRight={145}
                horizontalRight={195}
                packetLengthRight={116}
                weldingTimeRight={440}
                stretchOutRight={750}
                startDelayRight={60}
                photoDelayRight={0}
              />
            }
          />
          <Route
            path="/milkpack1/mokovskiiProvansal_borisov"
            element={
              <OptionsSettings
                verticalLeft={135}
                horizontalLeft={160}
                packetLengthLeft={180}
                weldingTimeLeft={480}
                stretchOutLeft={750}
                startDelayLeft={60}
                photoDelayLeft={52}
                verticalRight={160}
                horizontalRight={208}
                packetLengthRight={180}
                weldingTimeRight={440}
                stretchOutRight={750}
                startDelayRight={27}
                photoDelayRight={53}
              />
            }
          />
          <Route
            path="/milkpack1/solnishko_borisov"
            element={
              <OptionsSettings
                verticalLeft={135}
                horizontalLeft={160}
                packetLengthLeft={166}
                weldingTimeLeft={480}
                stretchOutLeft={750}
                startDelayLeft={60}
                photoDelayLeft={0}
                verticalRight={160}
                horizontalRight={208}
                packetLengthRight={160}
                weldingTimeRight={440}
                stretchOutRight={750}
                startDelayRight={27}
                photoDelayRight={0}
              />
            }
          />
          <Route
            path="/milkpack1/napoleon_borisov"
            element={
              <OptionsSettings
                verticalLeft={135}
                horizontalLeft={160}
                packetLengthLeft={180}
                weldingTimeLeft={480}
                stretchOutLeft={750}
                startDelayLeft={60}
                photoDelayLeft={52}
                verticalRight={160}
                horizontalRight={208}
                packetLengthRight={180}
                weldingTimeRight={440}
                stretchOutRight={750}
                startDelayRight={27}
                photoDelayRight={53}
              />
            }
          />
          <Route path="/milkpack2" element={<SelectMaionez2 />} />
          <Route
            path="/milkpack2/mokovskii560_borisov"
            element={
              <OptionsSettings
                verticalLeft={140}
                horizontalLeft={225}
                packetLengthLeft={210}
                weldingTimeLeft={470}
                stretchOutLeft={750}
                startDelayLeft={17}
                photoDelayLeft={0}
                verticalRight={155}
                horizontalRight={170}
                packetLengthRight={210}
                weldingTimeRight={490}
                stretchOutRight={750}
                startDelayRight={17}
                photoDelayRight={0}
              />
            }
          />
          <Route
            path="/milkpack2/mokovskii360_borisov"
            element={
              <OptionsSettings
                verticalLeft={130}
                horizontalLeft={220}
                packetLengthLeft={180}
                weldingTimeLeft={480}
                stretchOutLeft={750}
                startDelayLeft={30}
                photoDelayLeft={50}
                verticalRight={160}
                horizontalRight={170}
                packetLengthRight={180}
                weldingTimeRight={470}
                stretchOutRight={750}
                startDelayRight={20}
                photoDelayRight={57}
              />
            }
          />
          <Route
            path="/milkpack2/mokovskii160_borisov"
            element={
              <OptionsSettings
                verticalLeft={115}
                horizontalLeft={225}
                packetLengthLeft={130}
                weldingTimeLeft={430}
                stretchOutLeft={750}
                startDelayLeft={60}
                photoDelayLeft={40}
                verticalRight={130}
                horizontalRight={175}
                packetLengthRight={130}
                weldingTimeRight={470}
                stretchOutRight={750}
                startDelayRight={23}
                photoDelayRight={50}
              />
            }
          />
          <Route
            path="/milkpack2/evropeiskii560_borisov"
            element={
              <OptionsSettings
                verticalLeft={130}
                horizontalLeft={220}
                packetLengthLeft={207}
                weldingTimeLeft={500}
                stretchOutLeft={750}
                startDelayLeft={17}
                photoDelayLeft={0}
                verticalRight={160}
                horizontalRight={160}
                packetLengthRight={207}
                weldingTimeRight={480}
                stretchOutRight={750}
                startDelayRight={17}
                photoDelayRight={0}
              />
            }
          />
          <Route
            path="/milkpack2/evropeiskii360_borisov"
            element={
              <OptionsSettings
                verticalLeft={135}
                horizontalLeft={220}
                packetLengthLeft={175}
                weldingTimeLeft={480}
                stretchOutLeft={750}
                startDelayLeft={22}
                photoDelayLeft={0}
                verticalRight={152}
                horizontalRight={160}
                packetLengthRight={175}
                weldingTimeRight={470}
                stretchOutRight={750}
                startDelayRight={20}
                photoDelayRight={0}
              />
            }
          />
          <Route
            path="/milkpack2/evropeiskii160_borisov"
            element={
              <OptionsSettings
                verticalLeft={124}
                horizontalLeft={220}
                packetLengthLeft={123}
                weldingTimeLeft={420}
                stretchOutLeft={750}
                startDelayLeft={60}
                photoDelayLeft={0}
                verticalRight={135}
                horizontalRight={165}
                packetLengthRight={123}
                weldingTimeRight={450}
                stretchOutRight={750}
                startDelayRight={33}
                photoDelayRight={0}
              />
            }
          />
          <Route
            path="/milkpack2/mokovskiiProvansal_borisov"
            element={
              <OptionsSettings
                verticalLeft={130}
                horizontalLeft={225}
                packetLengthLeft={180}
                weldingTimeLeft={490}
                stretchOutLeft={750}
                startDelayLeft={20}
                photoDelayLeft={56}
                verticalRight={160}
                horizontalRight={170}
                packetLengthRight={180}
                weldingTimeRight={490}
                stretchOutRight={650}
                startDelayRight={18}
                photoDelayRight={51}
              />
            }
          />
          <Route
            path="/milkpack2/solnishko_borisov"
            element={
              <OptionsSettings
                verticalLeft={140}
                horizontalLeft={220}
                packetLengthLeft={175}
                weldingTimeLeft={450}
                stretchOutLeft={750}
                startDelayLeft={23}
                photoDelayLeft={0}
                verticalRight={160}
                horizontalRight={170}
                packetLengthRight={175}
                weldingTimeRight={480}
                stretchOutRight={750}
                startDelayRight={20}
                photoDelayRight={0}
              />
            }
          />
          <Route
            path="/milkpack2/napoleon_borisov"
            element={
              <OptionsSettings
                verticalLeft={140}
                horizontalLeft={220}
                packetLengthLeft={180}
                weldingTimeLeft={450}
                stretchOutLeft={750}
                startDelayLeft={26}
                photoDelayLeft={43}
                verticalRight={149}
                horizontalRight={162}
                packetLengthRight={180}
                weldingTimeRight={460}
                stretchOutRight={750}
                startDelayRight={18}
                photoDelayRight={43}
              />
            }
          />
          <Route path="/milkpack3" element={<SelectKetchup />} />
          <Route
            path="/milkpack3/dvs360_borisov"
            element={
              <OptionsSettings
                verticalLeft={145}
                horizontalLeft={165}
                packetLengthLeft={160}
                weldingTimeLeft={470}
                stretchOutLeft={600}
                startDelayLeft={17}
                photoDelayLeft={52}
                verticalRight={160}
                horizontalRight={170}
                packetLengthRight={160}
                weldingTimeRight={470}
                stretchOutRight={750}
                startDelayRight={17}
                photoDelayRight={54}
              />
            }
          />
          <Route
            path="/milkpack3/dvs160_borisov"
            element={
              <OptionsSettings
                verticalLeft={125}
                horizontalLeft={149}
                packetLengthLeft={130}
                weldingTimeLeft={420}
                stretchOutLeft={600}
                startDelayLeft={13}
                photoDelayLeft={52}
                verticalRight={142}
                horizontalRight={180}
                packetLengthRight={130}
                weldingTimeRight={450}
                stretchOutRight={600}
                startDelayRight={16}
                photoDelayRight={50}
              />
            }
          />
          <Route
            path="/milkpack3/grill360_borisov"
            element={
              <OptionsSettings
                verticalLeft={145}
                horizontalLeft={165}
                packetLengthLeft={160}
                weldingTimeLeft={470}
                stretchOutLeft={600}
                startDelayLeft={17}
                photoDelayLeft={52}
                verticalRight={160}
                horizontalRight={170}
                packetLengthRight={160}
                weldingTimeRight={470}
                stretchOutRight={750}
                startDelayRight={17}
                photoDelayRight={55}
              />
            }
          />
          <Route
            path="/milkpack3/grill160_borisov"
            element={
              <OptionsSettings
                verticalLeft={125}
                horizontalLeft={149}
                packetLengthLeft={130}
                weldingTimeLeft={420}
                stretchOutLeft={600}
                startDelayLeft={13}
                photoDelayLeft={52}
                verticalRight={142}
                horizontalRight={180}
                packetLengthRight={130}
                weldingTimeRight={450}
                stretchOutRight={600}
                startDelayRight={16}
                photoDelayRight={50}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
