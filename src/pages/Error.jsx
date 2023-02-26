import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  
  const errorStyle = {
    height : '90vh',
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center',
    gap : '1rem'
  }


  return (
    <>
      <div style = {errorStyle}>
        <span style = {{fontSize : '1.5rem' , color : 'grey'}}>404 Page Not Found</span>
        <button className='btn-primary'>
          <Link to = '/'>Back To Home Page</Link>    
        </button>
      </div>
    </>
  )
}
export default Error