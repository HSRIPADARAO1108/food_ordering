import React from 'react'
import './AppDownlod.css'
import { assets } from '../../assets/assets'

const AppDownlod = () => {
  return (
    <div className='app-download' id='app-downlod'>
        <p>For Better Experience Download <br/> Vegadootha App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default AppDownlod
