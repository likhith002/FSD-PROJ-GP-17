import React from "react";
import "./Nav.css";
import {Link} from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import FavoriteIcon from "@material-ui/icons/FavoriteBorder";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Search from "@material-ui/icons/Search";

function Nav() {
  return (
    <div className="nav">
      <p><Link to = "/Mobile1">Mobile</Link></p>
      <p>Desktop</p>
      <p>Tv</p>
      <p>Air Conditioners</p>
      <div className="nav_search">
        <Search />
        <input type="text" className="nav_search_input" />
      </div>
      <div className="nav_options">
        <span className="nav_option">
          <AccountCircleIcon />
          <p>Profile</p>
        </span>
        <span className="nav_option">
          <FavoriteIcon />
          <p>Wishlist</p>
        </span>

        <span className="nav_option">
          <ShoppingBasketIcon />
          <p>Cart</p>
        </span>
      </div>
    </div>
  );
}

export default Nav;
