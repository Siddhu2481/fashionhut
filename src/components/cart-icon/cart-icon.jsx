import React from "react";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart-selector";
import { toggleHidden } from "../../redux/cart/cart-action";
import { createStructuredSelector } from "reselect";
import { ReactComponent as BagIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.scss";

const CartIcon = ({ toggleHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleHidden}>
    <BagIcon className="bag-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapToDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(toggleHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapToDispatchToProps)(CartIcon);
