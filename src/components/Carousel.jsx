import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/componentCss/Carousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel = () => {

    const carouselUrl = [
        {imgUrl : 'https://images.unsplash.com/photo-1617692855027-33b14f061079?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
        {imgUrl : 'https://images.unsplash.com/photo-1567121938596-6d9d015d348b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
        {imgUrl : 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'},
        {imgUrl : 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
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