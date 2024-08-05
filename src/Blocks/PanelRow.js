import LogicGatePanel from "./LogicGatePanel";
import InformationPanel from "./InformationPanel";
import gatesList from "../Data/GateInfo";
import { useState } from "react";

function PanelRow() {
  const [selectedGate, setSelectedGate] = useState(gatesList[0]);

  const handleChange = (e) => {
    const selectedGateName = e.target.value;
    const gate = gatesList.find((g) => g.name === selectedGateName);
    setSelectedGate(gate);
  };

  return (
    <div className="row mt-2">
      <div className="col-12 col-md-8 me-2 mb-2" id="LogicGatePanel">
        <LogicGatePanel selectedGate={selectedGate} />
      </div>
      <div className="col" id="InformationPanel">
        <InformationPanel
          selectedGate={selectedGate}
          handleChange={handleChange}
          gatesList={gatesList}
        />
      </div>
    </div>
  );
}

export default PanelRow;
