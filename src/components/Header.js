import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <div className='nav-bar'>
      <h1 className='main-title'>Movie Rater</h1> 
      <ul className='nav-options'>
        <Link to='/' className='navbar-item'> <p> Home</p>  </Link>
        <Link to='/movies' className='navbar-item'> New Movies! </Link>
        <Link to='/game' className='navbar-item'> Guess Movie Ratings! </Link>
      </ul>
    </div>
  </header>
  
)

export default Header