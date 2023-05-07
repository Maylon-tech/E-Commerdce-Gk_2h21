import React from 'react'
import productItems from './data'


const FlashCard = ({ addToCart }) => {

 
  return (
    <div className='card-content'>
      {
        productItems.map((item) => {
          return (
            <div className='card'>
              
              <img src={item.cover} alt="" />
              <h3>{item.name}</h3>
              <div className='buttons'>
                <div className='btn-seeMore'>
                  <button className='btn-card'>Veja Mais</button>
                </div>
                <div className='button-icon'>
                  <i class="fa-regular fa-heart"></i>
                  <button className='btn-cart' onclick={() => addToCart()}>
                    <i class="fa-sharp fa-solid fa-plus"></i>
                  </button>              
                </div>
              </div>

            </div>
          )
        })
      }
    </div>
  )
}

export default FlashCard