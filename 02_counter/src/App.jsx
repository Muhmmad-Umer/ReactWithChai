import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter >= 20) return;
    setCounter(counter + 1);
  };

  const deductValue = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value </button>
      <br />
      <button onClick={deductValue}>Reduce Value</button>
    </>
  );
}

export default App;
