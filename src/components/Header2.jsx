import React from 'react'
import head2 from "../assets/images/header2.png"

import {
    FaApple
} from "react-icons/fa"

const Header2 = () => {
    return (
        <div className="header2 bg-gray-200 ">
            <img src={head2} alt="" />

            <div className='header2_container text-center items-center'>




                <h1 className=' text-4xl font-bold p-2 items-center'>i-Watch</h1>
                <h2 className='  text-2xl font-sans p-2' >It'not too late to find perfect gift for Mom.</h2>

                <div className=''>
                    <button className='btn1 m-2'>Learn More</button>
                    <button className='btn2 m-2'>Shop Watch</button>
                </div>


            </div>
        </div>
    )
}

export default Header2