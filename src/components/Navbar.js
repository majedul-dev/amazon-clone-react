import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useStateValue } from "../context/stateProvider";

const Navbar = ({ toggleMenu, handleMenu }) => {
  const [{ busket }] = useStateValue();

  return (
    <nav className='header'>
      <Link to='/'>
        <img
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt=''
          className='header__logo'
        />
      </Link>
      <div className='header__searchbar'>
        <input type='text' />
        <SearchIcon className='searchIcon' />
      </div>
      {toggleMenu ? (
        <CloseIcon onClick={handleMenu} className='header_closeMenu' />
      ) : (
        <MenuIcon onClick={handleMenu} className='header_menuIcon' />
      )}

      <div className={`header__nav ${toggleMenu ? "showMenu" : ""}`}>
        <Link to='/signin' className='header__link'>
          <div className='header__option'>
            <span>Hello, Majedul</span>
            <span>Sign In</span>
          </div>
        </Link>
        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span>Returns</span>
            <span>& Order</span>
          </div>
        </Link>
        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span>Your</span>
            <span>Prime</span>
          </div>
        </Link>
        <Link to='/checkout' className='header__link'>
          <div className='header__optionBusket'>
            <span>{busket?.length}</span>
            <ShoppingBasket className='busket-icon' />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
