import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetMealQuery } from '../services/apiData';
import '../css/componentCss/FullMeal.css';

const FullMeal = () => {
    
    const mealName = useParams();
    
    const response = useGetMealQuery(mealName.name);

    let mealDetail = response?.data?.meals[0];

    if(response.isError){
        return <>
          <div style = {{display : 'flex' , justifyContent : 'center' , alignContent : 'center' , width : '100vw', height : '100vh'}}>
            <p className='para-style' style = {{color : 'red'}}>Something Went Wrong</p>
          </div>
        </>
    }
    
    // ingredients array (this array is created because the ingredients provided by the mealbd api is not in a proper structure)

    if(mealDetail === undefined){
        mealDetail = [];
    }

    const ingredients = [
        {ingredientName : mealDetail.strIngredient1},
        {ingredientName : mealDetail.strIngredient2},
        {ingredientName : mealDetail.strIngredient3},
        {ingredientName : mealDetail.strIngredient4},
        {ingredientName : mealDetail.strIngredient5},
        {ingredientName : mealDetail.strIngredient7},
        {ingredientName : mealDetail.strIngredient8},
        {ingredientName : mealDetail.strIngredient9},
        {ingredientName : mealDetail.strIngredient10},
        {ingredientName : mealDetail.strIngredient11},
        {ingredientName : mealDetail.strIngredient12},
        {ingredientName : mealDetail.strIngredient13},
        {ingredientName : mealDetail.strIngredient14},
        {ingredientName : mealDetail.strIngredient15},
        {ingredientName : mealDetail.strIngredient16},
        {ingredientName : mealDetail.strIngredient17},
        {ingredientName : mealDetail.strIngredient18},
        {ingredientName : mealDetail.strIngredient19},
        {ingredientName : mealDetail.strIngredient20},
    ]

  return (
    <>
    {
        (response.isLoading) ? 
        <div style = {{display : 'flex' , justifyContent : 'center' , alignItems : 'center' , width : '100vw', height : '100vh'}}>
          <p className='para-style'>Loading...</p>
        </div>

        :
        
        <div className="meal-container">

            <div className="meal-info">

                <div className="meal-section">

                    <div className="meal-img">
                    {
                    (mealDetail.strMealThumb === null) ? <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/image-unavailable-2311594-1917454.png?f=avif&w=512" alt="Food Item Image" /> : <img src={mealDetail.strMealThumb} alt="Food Item Image" />
                    }
                    </div>

                    <div className="meal-detail">
                        <p className = 'meal-name' >{mealDetail.strMeal}</p>
                        <button className='meal-btn'>{mealDetail.strCategory}</button>
                        <button className='meal-btn'>{mealDetail.strArea}</button>
                    </div>

                </div>

                <div className="meal-ingredients">
                    {
                        ingredients.map((currentIngredient , index) => {
                            return <div className="ingredient" key = {index}>
                                {
                                    (currentIngredient.ingredientName === '') ?  <img src={`https://cdn.iconscout.com/icon/premium/png-512-thumb/image-unavailable-2311594-1917454.png?f=avif&w=512`} alt="ingredient image"/> :
                                    <>
                                    <img src={`https://www.themealdb.com/images/ingredients/${currentIngredient.ingredientName}.png`} alt="ingredient image" />
                                    <p style = {{textAlign : 'center' , fontSize : '1.5rem' , color : 'grey'}}>{currentIngredient.ingredientName}</p>
                                    </>
                                }
                            </div>
                        })
                    }
                </div>

            </div>

            <div className="instructions">
                <span style = {{fontSize : '1.5rem' , fontWeight : '600'}}>Instructions :</span>
                <p>{mealDetail.strInstructions}</p>
                {
                    (mealDetail.strYoutube) ? <a href={mealDetail.strYoutube} target = '_blank'><button className='btn-primary'>Watch Video Tutorial</button></a> : null

                }
            </div>  

        </div>

        

    }
    </>
  )
}

export default FullMeal