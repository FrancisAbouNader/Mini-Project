import React from "react";
import "./index.css";

export default function Legend() {
  return (
    <div>
      <div className="Legend float-right">
        <div className="Available" />
        <p className="text"> Available</p>
      </div>
      <br />
      <div className="Legend float-right">
        <div className="Unavailable" />
        <p className="text"> Unavailable</p>
      </div>
    </div>
  );
}
