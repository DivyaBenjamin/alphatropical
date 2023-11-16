import React from 'react'
import { FaFacebook,FaInstagram,FaTwitter,FaPinterest } from 'react-icons/fa'
import './Footer.css'
function Footer() {
  return (
    <div className='Footer'>
        <div className='Social'>
            <FaFacebook className='Icon'/>
            <FaInstagram className='Icon'/>
            <FaTwitter className='Icon'/>
            <FaPinterest className='Icon'/> 
        </div>
        <div className='Container'>
           <div className='Col'>
                <h3>About</h3>
                <p>Benjamin Peter</p>
                <p>Owner of Alpha Tropical Aquarium Shop</p>
                <p>Contact No: +91-9847685453</p>
           </div> 
           <div className='Col'>
                <h3>Shop</h3>
                <p>Alpha Tropical Aquarium</p>
                <p>Near Palm Gardens, Iringol</p>
                <p>Opp. to Hindustan Petrol Pump,Perumbavoor,Kerala 683548</p>
           </div> 
           <div className='Col'>
                <h3>More Informations</h3>
                <p>Email:alphacd3@gmail.com</p>
           </div> 
        </div>
    </div>
  )
}

export default Footer