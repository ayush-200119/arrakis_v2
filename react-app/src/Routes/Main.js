import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../styles/Styles.css'

const Main = () => {
  
  return (
    <div className='main_wrapper_component'>
    
        {/* <Navbar
          t={t}
        /> */}
          <div className='Main_wrapper'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Main