import React from 'react'
import macbookair from "../assets/images/macbook air.png"
import ipad from "../assets/images/ipad.jpg"
import trade from "../assets/images/trade in.jpg"
import watch from "../assets/images/watch.jpg"
import airpod4 from "../assets/images/airpod.jpg"
import macbookpro from "../assets/images/macbook pro.png"

const Product = () => {
  return (
    <section className='product '>

      <div className="product_section">
        <img src={macbookair} alt="macbook" />
        <div className='product_text '>
          <h1 className='text-4xl  font-bold '>MacBook Air</h1>
          <h2 className='font-sans m-2'>Sky Blue Colour Build Your Passion!</h2>
          <button>Buy</button>
        </div>
      </div>

      <div className="product_section">
        <img src={ipad} alt="ipad" />

        <div className="product_text2">
          <h1 className='text-4xl  font-bold '>iPad Air</h1>
          <h2 className='font-sans m-2' >Sky Blue Colour Build Your Passion!</h2>
          <button>Buy</button>
        </div>

      </div>

      <div className="product_section">
        <img src={trade} alt="Trade" />

        <div className="product_text3">
          <h1 className='text-4xl  font-bold '>TradeIn</h1>
          <h2 className='font-sans m-2' >Upgrade And Use! Its Thats easy </h2>
          <button>Buy</button>
        </div>

      </div>

      <div className="product_section">
        <img src={watch} alt="watch" />

        <div className="product_text4">
          <h1 className='text-4xl  font-bold '>Watch</h1>
          <h2 className='font-sans m-2' >Show Your Stripes With New Pride Edition Sports Band! </h2>
          <button>Buy</button>
        </div>

      </div>

      <div className="product_section">
        <img src={airpod4} alt="Airpod" />

        <div className="product_text5">
          <h1 className='text-4xl  font-bold '>AirPods-4</h1>
          <h2 className='font-sans m-2' >Iconic! Now Super Sonic, Available With Noice cancellation.</h2>
          <button>Buy</button>
        </div>

      </div>

      <div className="product_section">
        <img src={macbookpro} alt="Airpod" />

        <div className="product_text6">
          <h1 className='text-4xl  font-bold '>MacBook Pro</h1>
          <h2 className='font-sans m-2' >A Work of Smart.</h2>
          <button>Buy</button>
        </div>

      </div>


    </section>
  )
}

export default Product