import React from 'react'
import './Work.css'
import IMG1 from '../../assets/img1.jpg'
import IMG2 from '../../assets/img2.jpg'
function Work() {
  return (
    <div className='Work'>
        <h1>Work</h1>
        <div className='Container'>
            <img src={IMG1} className='Img1' alt=""/>
            <img src={IMG2} alt=""/>
        </div>
        <button className='Btn'>View</button>
    </div>
  )
}

export default Work