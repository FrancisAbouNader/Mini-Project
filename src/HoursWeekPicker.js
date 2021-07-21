import React from "react"
import SelectBox from "./SelectBox"
function HoursWeekPicker () {
    

    const time = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const days=["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        return (
            <div>
                <div className="container mt-4">
                <div className="time">
                    <div className="row">
                        <div className="col-md-6  text-center">
                            AM
                            <hr />

                        </div>
                           
                        <div className="col-md-6 text-center">
                            PM
                            <hr />
                        </div>
                        </div>
                 </div>
                    <div className="Hour row">
                        <div className="col-md-6 text-center d-flex flex-row ">
                            {
                                time.map(time => {
                                    return (
                                        <div className="col ">
                                            {time}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-md-6 text-center d-flex flex-row ">

                            {time.map(time => (
                                <div className="col">
                                    {time}
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                {
                    days.map(days => (
                        <div className="days mt-3">
                            <div className="col d-flex flex-row">
                               

                                <p className="col" style={{ position: "fixed", left: "150px" }}>  {days}</p>
                                </div>
                           
                        </div>
                    ))
                    
                    
                    
                }
                <div className="SelectiveBox">
                    <SelectBox/>
             </div>
            </div >

        )
    }




export default HoursWeekPicker