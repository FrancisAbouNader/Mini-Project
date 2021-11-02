import React, { useState } from "react";
import "./selectSquare.css";

export default function SelectSquare(props) {
  const [selected, setSelected] = useState(false);
  function handleFunction() {
    //Changing state onClick
      setSelected(!selected);
      console.log(props.index, props.item22);
  }
  return (
    <div>
      <div
        className="card"
        onClick={handleFunction}
        style={
          selected
            ? { backgroundColor: "#007fc4" }
            : { backgroundColor: props.color }
        }
      />
    </div>
  );
}
