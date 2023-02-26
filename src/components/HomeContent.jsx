import React from 'react';
import '../css/componentCss/HomeContent.css';
import { Link } from 'react-router-dom';

const HomeContent = () => {

  // what-img-urls

  const foodImgs = [
    {url : 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'},

    {url : 'https://images.unsplash.com/photo-1626082896492-766af4eb6501?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'},

    {url  : 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80'}
  ]
  const foodImgs2 = [
    {url : 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNhbGFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'},

    {url : 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmlyeWFuaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'},

    {url  : 'https://plus.unsplash.com/premium_photo-1674062990287-3a009acb8d6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}
  ]

  


  return (
    <>
        <div className="home-content-wrapper">
            <div className="left-content">
                <p className='home-heading'>Let's Start Cooking With <br /> Popular Recipes</p>
                <button className='btn-primary'>
                    <Link to = '/getstarted'>Get Started</Link>    
                </button>
            </div>

            <div className="right-content bounce-in-top"></div>
        </div>


        {/* what and why (healthy book) */}

        <div className="wh-healthybook">


          <div className="wh-img-wrapper">
              {
                foodImgs.map((currentItem , index) => {
                  return <div className="wh-img" key = {index}>
                        <img src={currentItem.url} alt="food img" />
                    </div>
                })
              }
          </div>

          <div className="wh-box">

            <p className='heading-style'>What Is The Healthy Book</p>

            <p className='para-style'>Welcome to The Healthy Book, your go-to website for delicious and healthy recipes. We provide a variety of options catering to different dietary needs and preferences, including vegetarian, gluten-free, low-carb, and high-protein meals. Our easy-to-follow recipes come with nutritional information, inspiring you to make healthy choices and live a happy and healthy life.</p>

          </div>

        </div>

        {/* why healthy book */}
        <div className="wh-healthybook">

          <div className="wh-img-wrapper why-healthy-book">
              {
                foodImgs2.map((currentItem , index) => {
                  return <div className="wh-img" key = {index}>
                        <img src={currentItem.url} alt="food img" />
                    </div>
                })
              }
          </div>

          <div className="wh-box">

            <p className='heading-style'>Why Use The Healthy Book?</p>

            <p className='para-style'>The Healthy Book is your go-to resource for anyone looking to eat healthier without compromising on taste. We provide a diverse selection of easy-to-follow recipes that cater to various dietary needs and preferences, including vegetarian, gluten-free, low-carb, and high-protein meals. Our nutritionists and chefs collaborate to ensure that our recipes are not only healthy but also delicious. Additionally, we provide nutritional information with each recipe, inspiring you to make informed and healthy choices.</p>

          </div>

        </div>


    </>
  )
}

export default HomeContent