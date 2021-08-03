import React from 'react'

export default function Days() {
    const days=["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    return (
        <div>
            
            {
            days.map((days,index) => (
                       
                <div  key={index} className="days mt-3">
                    <div className="col d-flex flex-row">
                        <p className="col" style={{ position: "fixed", left: "150px" }}>  {days}</p>
                        </div>
                   
                </div>
            ))
            
            
            
        }
    </div>
        
    )
}
