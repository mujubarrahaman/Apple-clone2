import {
    FaApple,FaSearch,FaShoppingBag,
} from "react-icons/fa"
import { CiMenuBurger } from "react-icons/ci";

function Navbar(){
    return(
        <nav className="navbar_section bg-gray-400" >
            
            
            <ul className="navbar_section flex justify-center gap-10 text-xs p-5 text-gray-600 items-center">
                <li className=" text-lg mr-3 text-black" >
                    <a className="" href="#"><FaApple/></a>
                </li>
                <li>
                    <a className="navs hover:text-black" href="#">Store</a>
                </li>
                <li>
                    <a className="navs hover:text-black" href="#">Mac</a>
                </li>
                <li>
                    <a className="navs hover:text-black" href="#">ipad</a>
                </li>
                <li>
                    <a className=" navs hover:text-black" href="#">iphone</a>
                </li>
                <li>
                    <a className="navs hover:text-black" href="#">Watch</a>
                </li>
                <li>
                    <a className="navs hover:text-black" href="#">Airpods</a>
                </li>
                <li>
                    <a className="navs hover:text-black" href="#">Tv&Home</a>
                </li>
                <li>
                    <a className="navs hover:text-black" href="#">Entertainment</a>
                </li>
                <li>
                    <a className="navs hover:text-black" href="#">Accessories</a>
                </li>
                <li>
                    <a className="navs hover:text-black" href="#">Support</a>
                </li>
                

                <li>
                    <a className="  text-lg text-black md:hidden" href="#"><CiMenuBurger/></a>
                </li>
                <li>
                    <a className=" text-lg text-black" href="#"><FaSearch/></a>
                </li>
                <li>
                    <a className=" logo text-lg text-black" href="#"><FaShoppingBag/></a>
                </li>
            </ul>
        <div className="bg-gray-200">
            <p className="text-center text-sm">Get up to 12 months of No Cost EMI◊ plus up to ₹8000.00 instant cashback‡ on selected products with eligible cards. Shop-</p>
            </div>
        </nav>
    )
}
export default Navbar