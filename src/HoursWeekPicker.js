import React from "react";
import Time from "./Time";
import Hours from "./Hours";
import Days from "./Days";
import "./index.css";
import Legend from "./Legend";
import Submit from "./Submit";

function HoursWeekPicker() {
  return (
    <div>
      <div className="container mt-4">
        <Legend />
        <br />
        <br />
        <Time />
        <Hours />
        <Days />
      </div>
      <Submit />
    </div>
  );
}

export default HoursWeekPicker;
