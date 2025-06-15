import React, {useContext} from 'react'
import { SiShopee } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { StoreContext } from '../../context/StoreContext';

const Navbar = () => {
  const {cartCount}=useContext(StoreContext)
  return (
    <div className='nav'>
      <div className="top-nav">
        <Link to="/">
        <div className="logo">
          <span>ShopNova</span>
          <SiShopee />
        </div>
        </Link>
        

        <form className='search-box'>
          <input type="text" placeholder='Search Items..' />
          <button><IoIosSearch /></button>
        </form>
        <div className="cart">
          <Link to='/Cart'><FaCartShopping /></Link>
          
          <span>{cartCount}</span>
        </div>
      </div>

      <div className="bottom-nav">
        <Link to=""><li>Home</li></Link>
        <Link to="/Shop"><li>Shop</li></Link>
        <Link to="/Cart"><li>Cart</li></Link>
        <Link to="/Contact"><li>Contact</li></Link>
      </div>
    </div>
  )
}

export default Navbar