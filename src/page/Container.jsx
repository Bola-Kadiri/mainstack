import React from 'react'
import SideBar from './SideBar'
import Home from './Home'
import '../styles/Container.css'

const Container = () => {
  return (
    <div className='container'>
       <SideBar/>
       <Home/>
    </div>
  )
}

export default Container