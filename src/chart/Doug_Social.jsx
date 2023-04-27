import React, {useState, useEffect} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import  '../chart/Doug.css'

ChartJS.register(ArcElement, Tooltip, Legend);



const Doug_Social=()=>{
  const [location, setLocation] =useState({
   
    datasets: [
      {
        
        data: [],
        backgroundColor: [
          '#599EEA',
          '#844FF6',
          '#0FB77A',
          '#FAB70A'
        
        ],
       
        borderWidth: 1,
      },
    ],
    
  })
  
  

  useState(()=>{
      fetch("https://fe-task-api.mainstack.io/")
      .then((res)=>res.json())
      .then((res)=>{
        let outputs = res.top_sources
        let a= []
        let  b= []
          for(var i of outputs){
             a.push(i.country)
             b.push(i.percent)
          }
          setLocation( {
           
            datasets: [
              {
                data: b,
                backgroundColor: [
                  '#599EEA',
                  '#844FF6',
                  '#0FB77A',
                  '#FAB70A',
                  '#F09468'
                
                ],
               
                borderWidth: 1,
              },
            ],
            
          }
          
          
              
             
              
          
          
          
          )
      })
  }, [location])


     
 
 


return(
    <div className='sample'>
        <Doughnut height={100} data={location} />
    </div>
)


}

export default Doug_Social
