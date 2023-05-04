import React from 'react'
import productItems from './data'
import './FlashDeals'

const FlashCard = () => {

 
  return (
    <div className='card-content'>
      {
        productItems.map((item) => {
          return (
            <div className='card'>
              <span>{item.discount}</span>
              <img src={item.cover} alt="" />
              <h3>{item.name}</h3>
              <span>{item.price}</span>
              <button>+</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default FlashCard