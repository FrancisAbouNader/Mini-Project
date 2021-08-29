import React, { useState, useImperativeHandle, forwardRef } from "react";
import weeklyData from "./data";
import SelectSquare from "./SelectSquare";
import "./index.css";
function SelectBox(props, ref) {
  const hours = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const [selectedDates, setSelectedDates] = useState({});

  function addToSelectedDates(day, hour) {
    console.log(selectedDates);
    let list = selectedDates;
    if (list.hasOwnProperty(day)) {
      const hourList = list[day].hours;
      if (!hourList.includes(hour)) {
        hourList.push(hour);
      }
      list[day].hours = hourList;
    } else {
      var newDay = day;
      var hourList = [hour];
      list[newDay] = {
        hours: hourList,
      };
    }

    setSelectedDates(list);
  }

  useImperativeHandle(ref, () => ({
    SubmitSelectedDates() {
      console.log("The selected dates are:", selectedDates);
    },
  }));

  return (
    <div className="container">
      <div className="selectiveBox">
        {days.map((item, i) => {
          return (
            <div key={i} className="row">
              {/* <div>
                <p>{item}</p>
              </div> */}
              {hours.map((item2, j) => {
                return (
                  <div
                    key={j}
                    onClick={() => {
                      addToSelectedDates(i + 1, item2);
                    }}
                  >
                    {weeklyData[i + 1] !== undefined ? (
                      weeklyData[i + 1].hours.includes(item2) ? (
                        <SelectSquare color="#007fc4" />
                      ) : (
                        <SelectSquare color="white" />
                      )
                    ) : (
                      <SelectSquare color="white" />
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default forwardRef(SelectBox);
