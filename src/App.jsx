import React, { useState } from "react";

import ButtonGroup from "./components/ButtonGroup";
import Header from "./components/Header";
import Result from "./components/Result";
import UndoRedoButton from "./components/UndoRedoButton";

function App() {
  const [counter, setCounter] = useState(0);
  const [stack, setStack] = useState([]);
  const [undo, setUndo] = useState([]);
  const handleButton = (e) => {
    const eventButton = e.target.innerText;
    let newCounter = counter;

    if (eventButton === "-100") newCounter -= 100;
    if (eventButton === "-10") newCounter -= 10;
    if (eventButton === "-1") newCounter -= 1;
    if (eventButton === "+100") newCounter += 100;
    if (eventButton === "+10") newCounter += 10;
    if (eventButton === "+1") newCounter += 1;

    setCounter(newCounter);
    setStack((prev) => [...prev, [eventButton, counter, newCounter]]);
  };
  // console.log(stack);
  const handleUndo = () => {
    if (stack.length === 0) return;
    const latestValue = stack.pop();
    setCounter(latestValue[1]);
    setUndo((prev) => [...prev, latestValue]);
  };
  // console.log(undo);

  const handleRedo = () => {
    if (undo.length === 0) return;

    const latestValue = undo.pop();
    setCounter(latestValue[2]);
    setStack((prev) => [...prev, latestValue]);
  };

  return (
    <div className="counter">
      <Header />
      <UndoRedoButton
        handleRedo={handleRedo}
        handleUndo={handleUndo}
        counter={counter}
      />
      <ButtonGroup handleButton={handleButton} />
      <Result stack={stack} />
    </div>
  );
}

export default App;
