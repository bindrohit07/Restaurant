import React from 'react';
import "../styles/navbar.css"

const navbar = () => {
  return (
    <>
    <nav className='navbar'> 
        <div>
            <button> Breakfast</button>
            <button> Lunch</button>
            <button> eveningSnacks</button>
            <button> Dinner</button>
        </div>
    </nav>
    </>
  )
}

export default navbar