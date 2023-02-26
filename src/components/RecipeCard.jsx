import React from 'react';
import '../css/componentCss/RecipeCard.css';
import { useNavigate} from 'react-router-dom';

const RecipeCard = (props) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`/meal/${props.strMeal}`)
    }

  return (
    <>
        <div className="recipe-card" onClick={() => handleClick()}>

            <div className="item-id">
                <span className='r-id'>#{props.idMeal}</span>
            </div>

            <div className="recipe-img">
                <img src={props.strMealThumb} alt="Food Item Image" />
            </div>

            <div className="recipe-name">
                <p className='r-name'>{props.strMeal}</p>
            </div>

        </div>
    </>
  )
}

export default RecipeCard