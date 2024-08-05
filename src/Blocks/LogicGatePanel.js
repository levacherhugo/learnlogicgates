import { useEffect, useState } from "react";
import IsLightOn from "../Data/IsLightOn";

function LogicGatePanel({ selectedGate }) {
  const picturePath = `${process.env.PUBLIC_URL}/pictures/`;
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false);

  useEffect(() => {
    const ligthStatus = IsLightOn(selectedGate, switch1, switch2);
    setIsLightOn(ligthStatus);
  }, [selectedGate, switch1, switch2]);

  const toggleSwitch1 = () => {
    setSwitch1((prevState) => !prevState);
  };

  const toggleSwitch2 = () => {
    setSwitch2((prevState) => !prevState);
  };
  return (
    <>
      <h3>{selectedGate.name} gate</h3>
      <div className="row justify-content-center align-items-center">
        {selectedGate.name !== "NOT" ? (
          <div className="col-2">
            <img
              src={picturePath + (switch1 ? "on" : "off") + ".png"}
              alt="on"
              className="OnOff img-fluid d-block"
              onClick={toggleSwitch1}
            ></img>
            <img
              src={picturePath + (switch2 ? "on" : "off") + ".png"}
              alt="off"
              className="OnOff img-fluid d-block"
              onClick={toggleSwitch2}
            ></img>
          </div>
        ) : (
          <div className="col-2">
            <img
              src={picturePath + (switch1 ? "on" : "off") + ".png"}
              alt="on"
              className="OnOff img-fluid d-block"
              onClick={toggleSwitch1}
            ></img>
          </div>
        )}

        <div className="col-10">
          <img
            src={picturePath + selectedGate.name.toLowerCase() + ".png"}
            alt={selectedGate.name}
            id="picture"
            className="img-fluid d-inline w-50"
          ></img>
          <div id="bulbContainer">
            <img
              src={picturePath + "lightbulb.png"}
              alt="lightbulb"
              className="img-fluid d-inline"
              id="lightbulb"
            ></img>
            <div id="glow" className={isLightOn ? "active" : ""}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogicGatePanel;
