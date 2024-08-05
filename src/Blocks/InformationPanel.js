function InformationPanel({ selectedGate, handleChange, gatesList }) {
  const { name, output, explanation } = selectedGate;
  const generateRows = () => {
    if (name === "NOT") {
      return output.map((value, index) => (
        <tr>
          <td>{index}</td>
          <td>{value}</td>
        </tr>
      ));
    } else {
      const inputs = [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
      ];
      return inputs.map((input, index) => (
        <tr key={index}>
          <td>{input[0]}</td>
          <td>{input[1]}</td>
          <td>{output[index]}</td>
        </tr>
      ));
    }
  };

  return (
    <>
      <h3>Information</h3>

      <select value={name} onChange={handleChange} id="dropMenu">
        {gatesList.map((AGate) => (
          <option key={AGate.name} value={AGate.name}>
            {AGate.name}
          </option>
        ))}
      </select>

      <table>
        <thead>
          <tr>
            <th>Input 1</th>
            {name !== "NOT" && <th>Input 2</th>}
            <th>Output</th>
          </tr>
        </thead>
        <tbody>{generateRows()}</tbody>
      </table>

      <p style={{ whiteSpace: "pre-line" }}>{explanation}</p>
    </>
  );
}
export default InformationPanel;
