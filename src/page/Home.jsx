import React, {useState, useEffect} from 'react'
import '../styles/Home.css'
import BarChart from '../chart/BarChart'
import Doug from '../chart/Doug'
import nigeria from '../asset/nigeria.png'
// import usa from '../asset/usa.png'
// import netherland from '../asset/netherland.png'
// import andorra from '../asset/andorra.png'
import facebook from '../asset/facebook.png'
// import instagram from '../asset/instagram.png'
// import linkedin from '../asset/linkedin.png'
// import twitter from '../asset/twitter.png'
import Doug_Social from '../chart/Doug_Social'





const Home = () => {
      const [country, setContry] = useState([])
      const [source, setSource] = useState([])
      

  
      

      useEffect(()=>{
            fetch("https://fe-task-api.mainstack.io/")
            .then(res=>res.json())
            .then(response=>{
                  setContry(response.top_locations)
                  

            })
      }, [])

      useEffect(()=>{
            fetch("https://fe-task-api.mainstack.io/")
            .then(res=>res.json())
            .then(response=>{
                  setSource(response.top_sources)
                  

            })
      }, [])




      const output_location = country.map((item)=>{
           
                          
            
            return(
                  <div  className='location' key={item.count}>
                  <img src={nigeria}/>
                  <span>{item.country}</span>
                  <span>{item.percent}%</span>
                  </div>
            )
      })


      const output_source = source.map((item)=>{
            return(
                  <div  className='location' key={item.count}>
                  <img src={facebook}/>
                  <span>{item.source}</span>
                  <span>{item.percent}%</span>
                  </div>
            )
      })

     
                            
      

  return (
    <div className='home-container'>
        <div className='home-header'>
              <h3>Dashboard</h3>
              <div className='empty'></div>
        </div>
        <div className='header-greeting'>
              <div className='inner-greet'>
                    <h3>Good morning, Blessing</h3>
                    <p>Check out your dashboard summary</p>
              </div>
              <span>View analytics</span>
        </div>
        <div className='days-row'>
               <div className='real-days'>
                    <span>1 Day</span>
                    <span>3 Days</span>
                    <span>7 Days</span>
                    <span>30 Days</span>
                    <button>All times</button>
                    <span className='date'>Custom Date</span>
               </div>
               <div></div>
        </div>
        <div className='line-graph'>
               <div className='inner-graph'>
                  <BarChart/>
               </div>
        </div>
        <div className='doughourt'>
        <div className='sample'>
        <h3>Top Locations</h3>
        <span className='view'>View full reports</span>
        <h3>Top Locations</h3>
        <div className='view'>View full reports</div>
    </div>
               <div className='inner-doughourt'>
                    
                     <div className='info1'>
                        
                               {output_location}
                         
                        
                        
                     </div>
                    <div className='chart'>
                       <Doug/>
                    </div>
                        
                     
                    
                        <div className='info1'>
                       
                          {output_source}
                    </div>
                    <div className='chart'>
                       <Doug_Social/>
                    </div>
                     
               </div>
               
        </div>
    </div>
  )
}

export default Home