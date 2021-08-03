import React from 'react'

export default function Hours() {
    const time = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <div>
             <div className="HourAm row">
                        <div className="col-md-6 d-flex flex-row ">
                            {
                                time.map(time => {
                                    return (
                                        <div className="col pt-1">
                                            {time}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="HourPm row">
                        <div className="col-md-6 d-flex flex-row ">

                            {time.map(time => (
                                <div className="col pt-1">
                                    {time}
                                </div>
                            ))}

                        </div>
                    </div>
        </div>
    )
}
