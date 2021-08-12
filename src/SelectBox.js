import React from 'react'
import weeklyData from './data'
import SelectSquare from "./SelectSquare"

function SelectBox() {
   const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    return (
            <div className="container">
                <div className="selectiveBox">
                {  
                    days.map((item,i) =>
                    {   
                        return (        
                                    <div className="row">                                        
                                        {hours.map((item2,j) => {
                                            return (
                                                    
                                                  <div onClick={() => {
                                                    console.log(`You selected ${days[i]} @ ${hours[j]}`)
                                                    }}>
                                                    {weeklyData[i+1] !== undefined ? weeklyData[i+1].hours.includes(item2) ? <SelectSquare color="#047dc4"/>
                                                    :  <SelectSquare color="null" /> : <SelectSquare color = "null"/>} 
                                                </div>
                                             )})}        
                                    </div>  
                        )})     
                    }
                     </div>
            </div>
        )
    
}
export default SelectBox