import React from 'react';
import { useSelector } from 'react-redux';
import { useGetMealQuery } from '../services/apiData';
import RecipeCard from '../components/RecipeCard';

const SearchResult = () => {

  const searchValue = useSelector((state) => state.foodItem.search);

  const meal = useGetMealQuery(searchValue);

  const mealInfo = meal?.data?.meals;


  if(meal.isError){
    return <>
      <div style = {{display : 'flex' , justifyContent : 'center' , alignContent : 'center' , width : '100vw', height : '100vh'}}>
        <p className='para-style' style = {{color : 'red'}}>Something Went Wrong</p>
      </div>
    </>
  }

  return (
    <>
      <div style = {{position : 'relative' , minHeight : '80vh'}}>
      {
        (meal.isLoading) ? 
        <div style = {{display : 'flex' , justifyContent : 'center' , alignItems : 'center' , width : '100vw', height : '100vh'}}>
          <p className='para-style'>Loading...</p>
        </div>
        :

        (mealInfo === null) ? <div style = {{display : 'flex' , justifyContent : 'center' , alignItems : 'center' , width : '100vw', height : '100vh'}}>
          <p className='para-style'>Meal not found</p>
        </div> 
          :
        <div style={{margin :  '2rem auto', padding : '2rem', display: 'flex', flexWrap: 'wrap' , width : '95vw' , justifyContent : 'center' ,alignItems : 'center' , gap : '2rem' , marginTop : '2rem'}}>

          {mealInfo.map((currentItem) => {
            return <RecipeCard {...currentItem} key = {currentItem.idMeal}/>
          })}
          
        </div>
      }
      </div>
    </>
  )
}

export default SearchResult