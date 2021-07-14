import React from "react"
import "./calendar.css"
import data from "./data"
class Calendar extends React.Component {
    constructor() {
        super()
        this.state = {
            date: data
        }

        this.handleChange = this.handleChange.bind(this)
    }
    handleChange() {
        alert("you clicked")

    }

    render() {

        const time = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        return (
            <div>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            AM
                            <hr />

                        </div>
                        <div className="col-md-6 text-center">
                            PM
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-center d-flex flex-row">
                            {
                                time.map(time => {
                                    return (
                                        <   div className="col">
                                            {time}
                                        </div>
                                    )
                                })


                            }
                        </div>
                        <div className="col-md-6 text-center d-flex flex-row">

                            {time.map(time => (
                                <div className="col">
                                    {time}
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                {
                    data.map((item) => (
                        <div className="days mt-3">
                            <div className="col d-flex flex-row">
                                <p style={{ position: "fixed", left: "150px" }}>  {item.day}</p>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row ml-1">
                                                {item.am.map((c) => (

                                                    <div className={"card col ml-1 " + (c.ready ? 'card' : 'card_disabled')} onClick={this.handleChange} />



                                                ))}
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">

                                                {item.pm.map((p) => (

                                                    <div style={{}} className={"card col ml-1 " + (p.ready ? 'card' : 'card_disabled')} onClick={this.handleChange} />

                                                ))}

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div >

        )
    }


}

export default Calendar