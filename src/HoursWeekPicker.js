import React from "react"
import Time from "./Time"
import Days from "./Days"
import Hours from "./Hours"
import SelectBox from "./SelectBox"
import "./index.css"
function HoursWeekPicker () {
        return (
            <div>
         <div className="container mt-4"> 
                    <Time/>
                    <Hours/>
        </div >
                    <Days/>
            
            
                    <SelectBox/>
            
            </div>

        )
    }




export default HoursWeekPicker