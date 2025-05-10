import React from 'react'
import head1 from "../assets/images/header1.webp"

const Header1 = () => {
  return (
    <div className="header1 bg-gray-200 ">
         <img src={head1} alt="" />

        <div className='header1_container text-center items-center'>

       

        
            <h1 className=' text-4xl font-bold p-2'>Mother's Day</h1>
            <h2 className='  text-2xl font-sans p-2' >It'not too late to find perfect gift for Mom.</h2>
            <button className='font-semibold '>Shop</button>
        
       

        </div>
    </div>
    
  )
}

export default Header1