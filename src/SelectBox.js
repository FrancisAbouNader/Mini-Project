import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import weeklyData from "./data";
import SelectSquare from "./SelectSquare";
import "./index.css";
import TextareaAutosize from "react-textarea-autosize";

function SelectBox(props, ref) {
  const hours = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [selectedDates, setSelectedDates] = useState({});
  const [value, setvalue] = useState("");
  const [data, setData] = useState(weeklyData);

  function addToSelectedDates(day, hour) {
    let list = selectedDates;
    //Checking if list (the object) contain the day selected
    if (list.hasOwnProperty(day)) {
      const hourList = list[day].hours;
      //Checking if the Array of Hour hourList contain the hour selected
      if (!hourList.includes(hour)) {
        // if not selected
        hourList.push(hour);
        list[day].hours = hourList;
      } else {
        // if selected 
        // Checking the length of the array
        // if greater > 1
        if (hourList.length > 1) {
          const index = hourList.indexOf(hour);
          if (index > -1) {
            hourList.splice(index, 1);
            list[day].hours = hourList;
          }
        } else {
          // if less < or equal 1 delete the hole nested object
          delete list[day];
        }
      }
    } else {
      // if the day selected is not In the List object
      var newDay = day;
      var hourList = [hour];
      list[newDay] = {
        hours: hourList,
      };
    }
    setSelectedDates(list);
  }

  //hello

  useEffect(() => {
    if (value !== "" && Object.entries(selectedDates).length !== 0) {
      if (value === JSON.stringify(selectedDates, null, 1)) {
        console.log(value);
        console.log(selectedDates);
      }
    }
  }, [selectedDates, value]);

  useImperativeHandle(ref, () => ({
    SubmitSelectedDates() {
      setSelectedDates(JSON.parse(value));
      setData(JSON.parse(value));
      console.log(data);
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
                      setvalue(JSON.stringify(selectedDates, null, 1));
                    }}
                  >
                    {data[i + 1] !== undefined ? (
                      data[i + 1].hours.includes(item2) ? (
                        <SelectSquare
                          color="#007fc4"
                        />
                      ) : (
                        <SelectSquare color="white" index={i} item22={item2} />
                      )
                    ) : (
                      <SelectSquare color="white" index={i} item22={item2} />
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <br />
      <TextareaAutosize
        rows={5}
        maxRows={10}
        value={value}
        onChange={(e) => {
          setvalue(e.target.value);
          // setSelectedDates(JSON.stringify(value));
        }}
      />
    </div>
  );
}
export default forwardRef(SelectBox);
