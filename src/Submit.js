import React, { useRef } from "react";
import SelectBox from "./SelectBox";
export default function Submit() {
  const selectBox = useRef();

  return (
    <div>
      <form>
        <SelectBox ref={selectBox} />
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary btn-sm center-block mt-4"
            onClick={() => {
              selectBox.current.SubmitSelectedDates();
            }}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
