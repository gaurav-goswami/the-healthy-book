// import React , {useState} from 'react';
// import '../css/componentCss/ExploreSection.css';
// import { useGetRandomMealQuery } from '../services/apiData';
// import RecipeCard from './RecipeCard';

// const ExploreSection = () => {

//     const response = useGetRandomMealQuery();
    
//     const randomMeal = response?.data?.meals[0];

//     console.log(randomMeal);

//   return (
//     <>
//         <div className="explore-section">

//             <div className="explore-circle"></div>

//             <div className="explore-heading">
//                 <p>Don't Know What To Cook<br />Today? <br />Don't Worry.</p>
//                 <button className='btn-primary' onClick={() => window.location.reload()}>Get A Random Meal</button>
//             </div>

//             <div className="explore-imgs">
//                 <div className="ex-img">
//                     <img src="https://images.unsplash.com/photo-1567769541495-338ee7203e3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="image" />
//                 </div>
//                 <div className="ex-img">
//                     <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80" alt="image" />
//                 </div>
//             </div>
//         </div>
        
//         <div style = {{width : '100vw' , height : 'max-content' , margin : '2rem 0' , display : 'grid' , placeItems : 'center'}}>
//             {
//                 (response.isLoading) ? <p className='para-style'>Loading...</p> : <RecipeCard {...randomMeal}/>
//             }
//         </div>

//     </>
//   )
// }

// export default ExploreSection


import React , {useState} from 'react';
import '../css/componentCss/ExploreSection.css';
import { useGetRandomMealQuery } from '../services/apiData';
import RecipeCard from './RecipeCard';

const ExploreSection = () => {
    const [trigger, setTrigger] = useState(0);
    const response = useGetRandomMealQuery(trigger);
    
    const randomMeal = response?.data?.meals[0];

    const handleRandomMealClick = () => {
        setTrigger(trigger + 1);
    };

  return (
    <>
        <div className="explore-section">

            <div className="explore-circle"></div>

            <div className="explore-heading">
                <p>Don't Know What To Cook<br />Today? <br />Don't Worry.</p>
                <button className='btn-primary' onClick={handleRandomMealClick}>Get A Random Meal</button>
            </div>

            <div className="explore-imgs">
                <div className="ex-img">
                    <img src="https://images.unsplash.com/photo-1567769541495-338ee7203e3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="image" />
                </div>
                <div className="ex-img">
                    <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80" alt="image" />
                </div>
            </div>
        </div>
        
        <div style = {{width : '100vw' , height : 'max-content' , margin : '2rem 0' , display : 'grid' , placeItems : 'center'}}>
            {
                (response.isLoading) ? <p className='para-style'>Loading...</p> : <RecipeCard {...randomMeal}/>
            }
        </div>

    </>
  )
}

export default ExploreSection;
