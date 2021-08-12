import React from 'react'
export default function Days() {
    const days=["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    return (
        <div>   
            {
                days.map((days,index) => (         
                    <div  key={index} className="days mt-3">
                            <p className="col" style={{left: "150px" }}>  {days}</p>        
                    </div>
                ))      
            }
    </div>
        
    )
}
