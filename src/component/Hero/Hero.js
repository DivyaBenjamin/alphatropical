import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './Hero.css'
function Hero() {
  return (
    <div className='Hero'>
        <div className='Content'>
            <h1>Beauty of nature</h1>
            <p className='Search-text'>Walking into the aquarium is like exploring a different world.</p>
            <form className='Search'>
              <div>
                <input type="text" placeholder='Enter Keyword' className='Search-input'/>
              </div>
              <div className='Radio'>
                <button type="submit"><AiOutlineSearch className='Icon'/></button>
              </div>
            </form>
        </div>
    </div>
  )
}

export default Hero