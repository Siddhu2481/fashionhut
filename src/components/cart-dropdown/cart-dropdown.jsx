import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-items/cart-items";
import "./cart-dropdown.scss";
import { selectCartItems } from "../../redux/cart/cart-selector";
import { createStructuredSelector } from "reselect";
import { toggleHidden } from "../../redux/cart/cart-action";

const CartDropdown = ({ cartItems, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(({ id, name, imageUrl, price, quantity }) => (
        <CartItem
          key={id}
          name={name}
          imageUrl={imageUrl}
          price={price}
          quantity={quantity}
        />
      ))}
    </div>
    <div className="cart-dropdown-button">
      <Link to="/checkout">
        <CustomButton
          onClick={() => {
            dispatch(toggleHidden() );
          }}
        >
          Checkout
        </CustomButton>
      </Link>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
