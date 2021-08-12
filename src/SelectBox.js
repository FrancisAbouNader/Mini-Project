import React from 'react'
import weeklyData from './data'
import SelectSquare from "./SelectSquare"

function SelectBox() {
   const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]



    // const hour = (hours) => { 
    //     let content = [];
    //     for (let i = 0; i < hours.length; i++) {
    //         content.push
    //             (
    //                 <div onClick={() =>
    //                 {
    //                  console.log(`You selected ${hours[i]}`)
    //                  }}>
    //                 <SelectSquare/>
    //                 </div>
    //             );    
    //     }
    //     return content;  
    // };
    // const day = (days) => { 
    //     let d = [];
    //     for (let i = 0; i < days.length; i++) {
    //         d.push
    //         (
    //             <div className="row">
    //                 {hour(hours)}
    //             </div>
    //         );
    //     }
    //     return d;  
    // };

    return (
            <div className="container">
                <div className="selectiveBox">
                {
                    
                    days.forEach((item, i) => {
                        return (
                            <div className="row">
                                {hours.forEach((item2, j) => {
                                    return (
                                      <p style={{color:"black"}}>hi</p>
                                    
    
                                                 
                                    )
                                })}
                            </div>
                        )
                    })
                    // day(days)
                
                            
                        }
                
                     </div>
            </div>
        )
    
}
export default SelectBox