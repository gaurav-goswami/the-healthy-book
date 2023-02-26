import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/componentCss/Carousel.css";
import { Autoplay, Pagination, Navigation } from "swiper";

import carouselImg1 from '../images/c-img-1.jpg';
import carouselImg2 from '../images/c-img-2.jpg';
import carouselImg3 from '../images/c-img-3.jpg';
import carouselImg4 from '../images/c-img-4.jpg';


const Carousel = () => {

    const carouselUrl = [
        {imgUrl : carouselImg1},
        {imgUrl : carouselImg2},
        {imgUrl : carouselImg3},
        {imgUrl : carouselImg4}
    ]

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="swiper"
        >

        {
            carouselUrl.map((currentSlide , index) => {
                return <SwiperSlide key = {index} className= 'slide'>
                    <img src={currentSlide.imgUrl} alt="carousel image" />
                </SwiperSlide>
            })
        }

      </Swiper>
    </>
  );
}


export default Carousel;