import React from 'react';
import '../../css/Footer/Footer.css';

const Footer = () => {
  return (
    <>
        <div className="footer">
            <p>Powered By <a className='api-link' href="https://www.themealdb.com/api.php" target={'_blank'}>The Meal DB</a></p>
        </div>
    </>
  )
}

export default Footer