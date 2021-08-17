import React from "react"
import Time from "./Time"
import Days from "./Days"
import Hours from "./Hours"
import "./index.css"
import Legend from "./Legend"
import Submit from "./Submit"
function HoursWeekPicker () {
        return (
            <div>
                <div className="container mt-4">
                    <Legend />
                    <br/>
                    <br/>
                    <Time/>
                    <Hours/>
                </div >
                    <Days/>
                    <Submit/>
            </div>

        )
}
    
export default HoursWeekPicker