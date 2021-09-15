import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
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
  const [value, setvalue] = useState("");

  function addToSelectedDates(day, hour) {
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

  useEffect(() => {
    if (value !== "" && Object.entries(selectedDates).length !== 0) {
      if (value === JSON.stringify(selectedDates, null, 1)) {
        setTimeout(() => {
          console.log(value);
          console.log(selectedDates);
        }, 500);
      }
    }
  });

  useImperativeHandle(ref, () => ({
    SubmitSelectedDates() {
      setSelectedDates(JSON.parse(value));
      // console.log(selectedDates);
    },
  }));

  return (
    <div className="container">
      <div className="selectiveBox">
        {days.map((item, i) => {
          return (
            <div key={i} className="row">
              {hours.map((item2, j) => {
                return (
                  <div
                    className="square"
                    key={j}
                    onClick={() => {
                      addToSelectedDates(i + 1, item2);
                      setvalue(() => {
                        setvalue(JSON.stringify(selectedDates, null, 1));
                      });
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

      <textarea
        type="text"
        value={value}
        onChange={(e) => {
          setvalue(e.target.value);
        }}
      />
    </div>
  );
}
export default forwardRef(SelectBox);
