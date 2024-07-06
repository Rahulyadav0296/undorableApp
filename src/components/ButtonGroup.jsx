import React from "react";

const array = ["-100", "-10", "-1", "+1", "+10", "+100"];
function ButtonGroup({ handleButton }) {
  return (
    <div className="incre-decre">
      {array.map((value, index) => (
        <button key={index} onClick={handleButton}>
          {value}
        </button>
      ))}
    </div>
  );
}

export default ButtonGroup;
