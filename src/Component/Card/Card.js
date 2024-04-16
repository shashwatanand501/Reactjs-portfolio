import React from 'react'
import './Card.css'
function Card() {
  return (
    <div className='card'>
      <img src='https://via.placeholder.com/800x400' alt='Card' className='card-image' />
      <div className='card-content'>
        <h3 className='card-title'>Card Title</h3>
        <p className='card-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ligula ac mauris faucibus malesuada. Sed et nunc at est maximus elementum.</p>
        <button className='card-button'>Read More</button>
      </div>
    </div>
  )
}

export default Card
