import React from "react";

function Result({ stack }) {
  return (
    <>
      <div className="result">
        {stack.map((value, index) => (
          <div className="values" key={index}>
            <span>{value[0]}</span>
            <p className="stages">
              <span>{value[1]}</span> &rarr; <span>{value[2]}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Result;
