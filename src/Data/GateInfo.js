class Gate {
  constructor(name, output, explanation) {
    this.name = name;
    this.output = output;
    this.explanation = explanation;
  }
}

// Create instances for each gate
const gatesList = [
  new Gate(
    "AND",
    [0, 0, 0, 1],
    "The AND gate outputs true (1) only if both inputs are true (1)."
  ),
  new Gate(
    "OR",
    [0, 1, 1, 1],
    "The OR gate outputs true (1) if at least one input is true (1)."
  ),
  new Gate(
    "NOT",
    [1, 0],
    "The NOT gate outputs the opposite value of the input."
  ),
  new Gate(
    "NAND",
    [1, 1, 1, 0],
    "The NAND gate outputs true (1) if at least one input is false (0).\nThe output is the opposite of the AND gate."
  ),
  new Gate(
    "NOR",
    [1, 0, 0, 0],
    "The NOR gate outputs true (1) only if both inputs are false (0).\nThe output is the opposite of the OR gate."
  ),
  new Gate(
    "XOR",
    [0, 1, 1, 0],
    "The XOR gate outputs true (1) if only one input is true (1), but not both."
  ),
  new Gate(
    "XNOR",
    [1, 0, 0, 1],
    "The XNOR gate outputs true (1) if both inputs are the same."
  ),
];

export default gatesList;
