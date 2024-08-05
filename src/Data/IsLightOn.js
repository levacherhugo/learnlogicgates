function IsLightOn(currentGate, switch1, switch2 = null) {
  switch (currentGate.name) {
    case "AND":
      return switch1 && switch2;
    case "OR":
      return switch1 || switch2;
    case "NOT":
      return !switch1;
    case "NAND":
      return !(switch1 && switch2);
    case "NOR":
      return !(switch1 || switch2);
    case "XOR":
      return switch1 !== switch2;
    case "XNOR":
      return switch1 === switch2;
    default:
      return false;
  }
}
export default IsLightOn;
