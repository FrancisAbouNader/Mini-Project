import React from "react";
import "./index.css";

export default function Hours() {
  const time = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div>
      <div className="HourAm row">
        <div className="col-md-6 d-flex flex-row ">
          {time.map((time, index) => {
            return (
              <div key={index} className="col pt-1">
                {time}
              </div>
            );
          })}
        </div>
      </div>
      <div className="HourPm row">
        <div className="col-md-6 d-flex flex-row ">
          {time.map((time, index) => {
            return (
              <div key={index} className="col pt-1">
                {time}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
