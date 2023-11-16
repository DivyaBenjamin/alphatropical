import React from 'react'
import './Products.css'
import Bg from '../../assets/bg.jpg'
import PRO1 from '../../assets/product-2.jpg'
import PRO2 from '../../assets/product-6.jpg'
import PRO3 from '../../assets/product-4.jpg'
import PRO4 from '../../assets/product-5.jpg'
function Products() {
  return (
    <div className='Products'>
        <h1 className='Product-text'>Products List</h1>
        <p>Life Looks Better Underwater.</p>
        <div className='Container'>
            <img className='Order-1' src={Bg} alt=""/>
            <img className='Order-2' src={PRO1} alt=""/>
            <img className='Order-3' src={PRO2} alt=""/>
            <img className='Order-4' src={PRO3} alt=""/>
            <img className='Order-5' src={PRO4} alt=""/>
        </div>
        <div className='Span-2-Right-img-details'>
                <p>Where Land Meets Sea, Magic Happens.</p>
                <button className='Btn'>View List</button>
        </div>
    </div>
  )
}

export default Products