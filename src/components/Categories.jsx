import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import '../css/componentCss/Categories.css';
import { useGetAllCategoriesQuery } from '../services/apiData';
import { useDispatch } from 'react-redux';
import { selectCategory } from '../features/FoodSlice';
import { useNavigate } from 'react-router-dom';

const Categories = () => {

    let {data , isLoading} = useGetAllCategoriesQuery();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const categoryData = data?.categories; 

    // category by country

    const dispatchCategoryInfo = (name) => {
      dispatch(selectCategory({categoryName : name}));
      navigate(`/category/${name}`)
    }

    return (
        <>
          <p className = 'para-style' style = {{textAlign : 'center'}}>Categories</p>
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
                (isLoading) ? <p>Loading...</p> : 
                categoryData.filter(currentItem => currentItem.strCategory !== 'Pork').map((currentItem) => {
                    return <SwiperSlide className='category-slide' key= {currentItem.idCategory} 
                    onClick = {() => dispatchCategoryInfo(currentItem.strCategory)}
                    >

                        <img src={currentItem.strCategoryThumb} alt="food img"/>
                        <p className = 'para-style'>{currentItem.strCategory}</p>

                    </SwiperSlide>
                })
            }
          </Swiper>        
        </>
      );
}

export default Categories