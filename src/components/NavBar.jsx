import React from 'react'
import { FaApple } from "react-icons/fa";
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
        <div className='Wrapper'>
        <div className='left'>
          <div className='Logo'>
            <FaApple style={{color: 'white', fontSize: '25px',marginLeft:'1rem', marginRight:'1rem'}} className='icon'/>
            <div> <Link to='/' className='Logo'>CatorOnline</Link></div>
          </div>
          <div className='Center'>
                      <Link to='/category/100' className='MenuItem'>iPhone</Link>
                      <Link to='/category/200' className='MenuItem'>iPad</Link>
                      <Link to='/category/300' className='MenuItem'>Mac</Link>
                      <Link to='/category/400' className='MenuItem'>Apple Watch</Link> 
          </div>
          <div className='Rigth'>
            <div className='iconCart'>
              <CartWidget/>
            </div>
          </div>
        </div>
      </div>
    
    
    
    </>
  )
}

export default NavBar