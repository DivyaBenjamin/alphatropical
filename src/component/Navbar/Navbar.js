import React,{useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'
import './Navbar.css'

const Navbar = () => {

const[click, setClick]  = useState(false)
const handleClick = () => setClick(!click)
  return (
    <div className='Navbar'>
        <div className='Container'>
            <h1><span><BsFillHouseFill/>AlphaTropical</span>Aquarium</h1>
            <button className='Btn'>Sign In</button>
            <ul className={click ? 'Nav-menu:active' :'Nav-menu'}>
               <li><a href="#">Home</a></li>
               <li><a href="#">Work</a></li>
               <li><a href="#">Products</a></li>
               <li><a href="#">AboutUs</a></li> 
            </ul>
            <div className='Hamburger' onClick={handleClick}>
                <HiOutlineMenuAlt4 className='Icon'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar