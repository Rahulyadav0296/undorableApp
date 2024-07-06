import React from "react";
import CounterDisplay from "./CounterDisplay";

function UndoRedoButton({ handleRedo, handleUndo, counter }) {
  return (
    <div className="undoredo">
      <button onClick={handleUndo}>Undo</button>
      <CounterDisplay counter={counter} />
      <button onClick={handleRedo}>Redo</button>
    </div>
  );
}

export default UndoRedoButton;
