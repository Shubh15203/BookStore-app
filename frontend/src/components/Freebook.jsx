import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from '../../public/list.json'
import Card from './Card';
function Freebook() {
    const filterData=list.filter((data)=> data.category==="Free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
        }
        ]};
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 my-20 '>
            <div>
            <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta unde nesciunt, rem nulla fugit nihil quod dignissimos ipsum iusto in qui voluptates saepe deserunt ullam minima est nisi maxime quaerat!</p>

            
        </div>
        <div className=''>
        <Slider {...settings}>
        {filterData.map((item)=>(
            <Card item={item} key={item.id}/>
        ))}
      </Slider>
        </div>
        </div>
    </>
  )
}

export default Freebook