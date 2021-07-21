import React,{useState} from 'react'
import "./square.css"
import weeklyData from './data'
function BlueSquare() {
     console.log(weeklyData[2].hour)
     const [hours] = useState({
         hours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
         days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
         color:"#FFFFFF"
   })
  

        return (

            <div>
                {
                    hours.days.map((item, i) =>
                    {
                        return (
                        <div>
                            <div className="container ">
                                    <div className="row">
                                        
                                        {hours.hours.map((item2, j) => {
                                        
                                            return (
                                                <div onClick={() => {
                                                    console.log(`You have selected ${item} @ ${item2}`)
                                                }}>
                                                    {/* If weekleydata[i][j]==iteem2 betlawwin bleu  */}
                                                    {weeklyData[i].hour.includes(item2) ?  <div style={{ backgroundColor: "#047dc4"}} className="card" /> :  <div style={{ backgroundColor: hours.color }} className="card" />}
                                                    
                                                </div>
                                        )
                                    })}
                                    </div>
                                </div>
                                
                        </div>  

                        )
                    })
                }



            </div>
        )
    
}
export default BlueSquare