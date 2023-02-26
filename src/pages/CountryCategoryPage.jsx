import React from 'react';
import { useSelector } from 'react-redux';
import { useGetSeletedCategoryByCountryQuery } from '../services/apiData';
import RecipeCard from '../components/RecipeCard';

const CountryCategoryPage = () => {

    const currentCategory = useSelector((state) => state.foodItem.categoryName);

    const response = useGetSeletedCategoryByCountryQuery(currentCategory);
    
    const meals = response?.data?.meals;

    if(response.isError){
        return <>
          <div style = {{display : 'flex' , justifyContent : 'center' , alignContent : 'center' , width : '100vw', height : '100vh'}}>
            <p className='para-style' style = {{color : 'red'}}>Something Went Wrong</p>
          </div>
        </>
    }

  return (
    <>
        {
        (response.isLoading) ? 
        <div style = {{display : 'flex' , justifyContent : 'center' , alignItems : 'center' , width : '100vw', height : '100vh'}}>
          <p className='para-style'>Loading...</p>
        </div>
        :
        <div style={{margin :  '2rem auto', padding : '2rem', display: 'flex', flexWrap: 'wrap' , width : '95vw' , justifyContent : 'center' ,alignItems : 'center' , gap : '2rem' , marginTop : '2rem'}}>

          { meals.map((currentItem) => {
            return <RecipeCard {...currentItem} key = {currentItem.idMeal}/>
          })}
          
        </div>

      }
    </>
  )
}

export default CountryCategoryPage