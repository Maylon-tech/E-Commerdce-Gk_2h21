import React from 'react'
import productItems from './data'


const FlashCard = () => {

 
  return (
    <div className='card-content'>
      {
        productItems.map((item) => {
          return (
            <div className='card'>
              
              <img src={item.cover} alt="" />
              <h3>{item.name}</h3>
              <button className='btn-card'>Veja Mais</button>
              <img className='favorite' src={item.icon} alt="" />
            </div>
          )
        })
      }
    </div>
  )
}

export default FlashCard