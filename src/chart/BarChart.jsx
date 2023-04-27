

import React,{useState,  useEffect} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const BarChart = () => {

  const  [bar, setBar] = useState({})



  useEffect(()=>{
    fetch("https://fe-task-api.mainstack.io/")
    .then(response=>response.json())
    .then((data)=>setBar(data.graph_data.views))
  }, [bar])

  // "2022-07-31": 1,
  // "2022-08-01": 3,
  // "2022-08-02": 3,
  // "2022-08-03": 7,
  // "2022-08-04": 8,
  // "2022-08-05": 5,
  // "2022-08-06": 20,
  // "2022-08-07": 50,
  // "2022-08-08": 100,
  // "2022-08-09": 2

    var data= {
        labels: ['31 July', '1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug', '7 Aug', '8 Aug', '9 Aug'],
        datasets: [{
          label: "Pay views",
          data: [bar["2022-07-31"], bar["2022-08-01"], bar["2022-08-02"], bar["2022-08-03"], bar["2022-08-04"], bar["2022-08-05"], bar["2022-08-06"], bar["2022-08-07"], bar["2022-08-08"], bar["2022-08-09"]  ],
          
          
          borderWidth: 1
        }]
      }

      var options= {
        maintainAspectRatio: false,
        
        legend:{
            label:{
                fontSize: 26
            }
        }
        
    }
    
  return (
   
        <div>
         <Line height={400} data={data} options={options}/>
        </div>
  )
}

export default BarChart