import { useGetAllCategoriesByCountryQuery } from '../services/apiData';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import '../css/componentCss/Categories.css';;
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectCategory } from '../features/FoodSlice';


const CountryCategories = () => {

    let response = useGetAllCategoriesByCountryQuery();
    const countryCategory = response?.data?.meals;

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const dispatchCategoryInfo = (name) => {
        dispatch(selectCategory({categoryName : name}));
        navigate(`/country-category/${name}`)
    }
    
  return (
    <>
        <p className = 'para-style' style = {{textAlign : 'center'}}>Categories By Area</p>
          <Swiper
            // slidesPerView={6}
            spaceBetween={50}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="Swiper"
            breakpoints= {{
            // when window width is >= 320px
            320: {
            slidesPerView: 2,
            spaceBetween: 20
            },
            // when window width is >= 480px
            520: {
            slidesPerView: 3,
            spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
            slidesPerView: 5,
            spaceBetween: 40
            }}
        }
          >
            {   
                (response.isLoading) ? <p>Loading...</p> : 

                countryCategory.filter((currentItem) => {
                    return currentItem.strArea != 'Unknown'
                }).map((currentItem, index) => {
                    return <SwiperSlide className='category-slide' key= {index}
                    onClick = {() => dispatchCategoryInfo(currentItem.strArea)}
                    >
                        <button className='btn-primary'><p>{currentItem.strArea}</p></button>
                    </SwiperSlide>
                })
            }
          </Swiper>

    </>
  )
}

export default CountryCategories