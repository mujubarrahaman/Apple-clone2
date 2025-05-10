import React from 'react'
import one from "../assets/images/header.jpg"

const Header = () => {
  return (

    <header className='bg-gray-200'>


      <img src={one} alt="iphone" />

      <div className='container '>


        <div className="header_section text-center">
          <h1 className='text-4xl font-bold p-2'>iPhone</h1>
          <h2 className='text-2xl  font-sans p-2'>Meet the iPhone 16 family</h2>
        </div>
        <div className='header_btn '>
          <button className='learn m-2'>Learn More</button>
          <button className='shop m-2' >Shop iPhone</button>


        </div>
      </div>
    </header>
  )
}

export default Header