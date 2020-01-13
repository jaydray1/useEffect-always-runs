import React from "react";
import Check from "./Check";
import "./styles.css";

const App = () => {
  const [checkedBool, setBool] = React.useState(false);
  const [random, setRandom] = React.useState(1);

  const updateRandom = () => {
    setRandom(Math.random() * 2);
  };

  const updateChecker = () => {
    setBool(!checkedBool);
  };

  return (
    <div className="App">
      <p>{random}</p>
      <p>{checkedBool.toString().toUpperCase()}</p>
      <h1>Test useEffect</h1>
      <Check
        random={updateRandom}
        checker={updateChecker}
        checkedNumber={checkedBool}
      />
    </div>
  );
};

export default App;
