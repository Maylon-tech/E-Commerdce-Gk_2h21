import React from 'react'
// import GiClothes from 'react-icons/gi'
// import AiFillCar from 'react-icons/ai'
import Clothe from '../../common/assets/images/clotheIcon.png'
import Car from '../../common/assets/images/carIcon.png'
import Gift from '../../common/assets/images/giftsIcon.png'
import Music from '../../common/assets/images/musicIcon.png'
import Eletronic from '../../common/assets/images/eletronicIcon.png'
import Books from '../../common/assets/images/booksIcon.png'

const Categories = () => {

  const data = [
    {
      cateImg: Clothe,
      cateName: "Fashion",
    },
    {
      cateImg: Eletronic,
      cateName: "Electronic",
    },
    {
      cateImg: Car,
      cateName: "Cars",
    },
    {
      cateImg: Books,
      cateName: "Books",
    },
    {
      cateImg: Gift,
      cateName: "Gifts",
    },
    {
      cateImg: Music,
      cateName: "Music",
    },
  ]


  return (
    <>
      <div className="category">
        {
          data.map((value, index) => {
            return (
              <div className="box f_flex">
                <img src={value.cateImg} alt="iIMG" />
                <span>{value.cateName}</span>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Categories