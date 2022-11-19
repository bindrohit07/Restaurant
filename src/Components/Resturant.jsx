import React from 'react'
import Cards from './Cards'
//import Navbar from './Navbar'
import '../App.css' 
import Menu from '../assets/Menu'
import { useState } from 'react'

const resturant = () => {
 const [menuData,setMenuData]=useState(Menu);
 const filterDice =(category)=>{
  const updatedDice=Menu.filter((currentData)=>{
    return currentData.category ===category;
  });
  setMenuData(updatedDice);
 }

  return (
   <>
  
   <nav> 
    <div className='navItems'> 
        <button onClick={()=> filterDice("Breakfast")}> Breakfast</button>
        <button onClick={()=> filterDice("Lunch")}> Lunch</button>
        <button onClick={()=> filterDice("Snacks")}> Snacks</button>
        <button onClick={()=> filterDice("Dinner")}> Dinner</button>
      </div>
<div className='title'><b>Welcome to <span className='naam'>Rohit's Restaurant</span></b></div>
</nav>
   <Cards menuData={menuData} 
   />
   <h4 className='footer'>© 2022 Restaurant</h4>
   </>
  )
}

export default resturant
