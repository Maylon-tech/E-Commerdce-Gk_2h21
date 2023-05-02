import React from 'react'

const FlashCard = ({ productItems }) => {
  return (
    <>

      {
        productItems.map((items) => {
          return (
            <div className="box">
              <div className="product mtop">
                <div className="img">
                  <span className="discount">{items}% Off</span>
                  <img src={items.cover} alt="" />
                  <div className="product-like">
                    <label>0</label>  <br />
                    <i className="fa-regular fa-heart"></i>
                  </div>
                </div>
                <div className="product-details">
                  <h3>{items.name}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>{items.price}.00</h4>
                    <button>
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }

    </>
  )
}

export default FlashCard