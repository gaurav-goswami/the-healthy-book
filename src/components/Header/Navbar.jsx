import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Header/Navbar.css';
import {MdMenu , MdRestaurantMenu} from 'react-icons/md';
import { searchAction } from '../../features/FoodSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [isOpen , setIsOpen] = useState(false);
    const [search , setSearch] = useState('');
    const menuRef = useRef();

    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handleClick = () => {
        setIsOpen(!isOpen);
    }    

    
    useEffect(() => {
        let handleClose = (event) => {
            if(!menuRef.current.contains(event.target)){
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown' , handleClose);

        // clean up function
        
        return () => {
            document.removeEventListener('mousedown' , handleClose);
        }
    })

    // search function

    const searchHandle = (event) => {
        event.preventDefault();
        dispatch(searchAction(search));
        navigate(`/search/${search}`)
        setIsOpen(false)
        setSearch('');
    }


  return (
    <>
        <nav className='navbar'>

            {/* logo */}

            <div className='logo-container'>
                <Link to = '/' className='logo'>
                    <p>The Healthy <span style = {{color : 'green'}}> Book </span></p>
                </Link>
            </div>

            <ul className={`nav ${(isOpen) ? 'active' : 'inactive'}`} ref = {menuRef}>
                
                <Link to = '/'>
                    <li className="nav-items" onClick={() => setIsOpen(false)}>Home</li>
                </Link>

                <Link to = '/getstarted'>
                    <li className="nav-items" onClick={() => setIsOpen(false)}>Get Started</li>
                </Link>

                <Link to = '/explore'>
                    <li className="nav-items" onClick={() => setIsOpen(false)}>Explore</li>
                </Link>

                {/* search bar */}

                <form onSubmit={searchHandle}>
                    <input type="search" placeholder='Search Recipe...' className='search-bar' value = {search} 
                        onChange = {(event) => setSearch(event.target.value)}
                    />
                </form>

            </ul>

            <div className="hamburger">
                {
                    (isOpen) ? <MdRestaurantMenu onClick = { () => handleClick()} className='hamburger-icon'/> : <MdMenu onClick = { () => handleClick()} className='hamburger-icon'/> 
                }
            </div>

        </nav>
    </>
  )
}

export default Navbar