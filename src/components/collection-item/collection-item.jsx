import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-action";
import "./collection-item.scss";
import Button from "@mui/material/Button";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;

  return (
    <div className="collection-item">
      <img className="image" src={imageUrl} />
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">₹ {price}</div>
      </div>
      <Button
        variant="contained"
        color="secondary"
        className="add-item"
        onClick={() => addItem(item)}
      >
        Add to Cart
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
