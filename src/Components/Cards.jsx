import React from 'react'
import Menu from '../assets/Menu'

const Cards = ({menuData}) => {
//console.log(menuData);


  return (
    <>
      <section className='container'>
    {menuData.map((currentData) => {
       
  return (
    <>
 
    
      <div  key={currentData.id}  className='cards'>
        <div className='card'>
        <div className='cardBody'>
        <span>{currentData.id}</span>
        <h4  className='category'>{currentData.category}</h4>
        <h2 className='name' >{currentData.name}</h2>
       
        <p>{currentData.detail}</p>
        
        <img className='imagebox' src={currentData.image} alt="this is a poster"></img>
        <h4 className='price'>{currentData.price}</h4>
       <button className='order'> <b>Order Now</b></button>
        </div>
        </div>
      </div>
    
    </>
  )
 
}

      )}
      </section>
</>
  )
}

export default Cards
