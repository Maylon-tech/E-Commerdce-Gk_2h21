import React from 'react'
// Import from React-SLick
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Slider from "react-slick"  // Importing from react-slick lib doc.

import Sdata from './Sdata'  // Slider Data Contents


const SlideCard = () => {
    // Slider Configurations
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,   // Leaving with Auto play
      appendDots: (dots) => {
        return <ul style={{ margin: "-140px 0" }}>{dots}</ul>
      },
    };
  

    return (
      <>
        <Slider {...settings}>   {/*Import from React Slick*/}
          {
            Sdata.map((value, index) => {
              return (
                <div className="box d_flex top" key={index}>
                  <div className="left">
                    <h1>{value.title}</h1>
                    <p>{value.desc}</p>
                    <button className="btn-primary">Visit Collections</button>
                  </div>
                  <div className="right">
                    <img src={value.cover} alt="img" />
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </>
    )
}

export default SlideCard