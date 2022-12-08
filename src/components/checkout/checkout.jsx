import React from "react";

import "./checkout.scss";

import { connect } from "react-redux";
import StripeCheckoutButton from "../stripe-button/stripe-button";
import {
  selectCartItems,
  selectTotalAmount,
} from "../../redux/cart/cart-selector";

import {
  addItem,
  removeItem,
  clearItemfromCart,
} from "../../redux/cart/cart-action";

import { createStructuredSelector } from "reselect";

const CheckOut = ({
  cartItems,
  totalAmount,
  clearItemfromCart,
  addItem,
  removeItem,
}) => (
  <div className="checkout-collection">
    {cartItems.length !== 0 ? (
      <div className="collection-table">
        <table>
          <tbody>
            <tr className="table-header">
              <td>ITEM</td>
              <td>NAME</td>
              <td>PRICE</td>
              <td>QTY</td>
            </tr>
            {cartItems.map((cartItem) => (
              <tr key={cartItem.id}>
                <td>
                  <img src={cartItem.imageUrl} alt="product" />
                </td>
                <td className="">{cartItem.name}</td>
                <td>₹ {cartItem.price}</td>
                <td className="quantity">
                  <button
                    className="incrementer"
                    onClick={() => removeItem(cartItem)}
                  >
                    &lt;
                  </button>
                  {cartItem.quantity}
                  <button
                    className="decrementer"
                    onClick={() => addItem(cartItem)}
                  >
                    &gt;
                  </button>
                </td>
                <td>
                  <button
                    className="remove"
                    onClick={() => clearItemfromCart(cartItem)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total-amount">
          <h2>Total Amount : ₹ {totalAmount}</h2>
          <div className="pay-now">
            <StripeCheckoutButton price={totalAmount} />
          </div>
        </div>
      </div>
    ) : (
      <h1>Cart is Empty</h1>
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalAmount: selectTotalAmount,
});

const mapDispatchToProps = (dispatch) => ({
  clearItemfromCart: (item) => dispatch(clearItemfromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
