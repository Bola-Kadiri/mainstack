import React from 'react'
import '../styles/SideBar.css'
import logo from '../asset/mainstack-logo.png'
import dashboard from '../asset/dashboard.png'
import image from '../asset/unsplash_F16KPYxfm6s.png'
import edit from '../asset/edit.png'
import group from '../asset/group.png'
import hourglass_empty from '../asset/hourglass_empty.png'
import delete2 from '../asset/delete.png';
import add_a_photo from '../asset/add_a_photo.png'
import subscription from '../asset/subscriptions.png'
import file from '../asset/file_present.png'
import alarm from '../asset/alarm.png'
const SideBar = () => {
  return (
   <div className='side-container'>
               <div className='logo'>
                     <img src={logo} alt={logo} className='logos'/>
               </div>
              
               <div className='dash-board'>
                     <img src={dashboard} alt={dashboard}/>
                     <span className='dash'>Dashboard</span>
               </div>
               <div className='content'>
                     <img src={edit} alt={edit}/>
                     <span>Item 1</span>
               </div>
               <div className='content'>
                     <img src={group} alt={group}/>
                     <span>Item 2</span>
               </div>
               <div className='content'>
                     <img src={hourglass_empty} alt={hourglass_empty}/>
                     <span>Item 3</span>
               </div>
               <h5 className='other1'>OTHER 1</h5>
               <div className='content'>
                     <img src={add_a_photo} alt={add_a_photo}/>
                     <span>Item 4</span>
               </div>
               <div className='content'>
                     <img src={delete2} alt={delete2}/>
                     <span>Item 5</span>
               </div>
               <h5 className='other2'>OTHER 2</h5>
               <div className='content'>
                     <img src={subscription} alt={subscription}/>
                     <span>Item 6</span>
               </div>
               <div className='content'>
                     <img src={file} alt={file}/>
                     <span>Item 7</span>
               </div>
               <div className='content'>
                     <img src={alarm} alt={alarm}/>
                     <span>Item 8</span>
               </div>
       
               <div className='person-container'>
                     <img src={image} className='person'/>
                     <span >Blessing Daniels</span>
               </div>
   </div>
  )
}

export default SideBar