import React from "react";
import CollectionItem from "../../components/collection-item/collection-item";
import "./collection.scss";
import SHOP_DATA from "../shop/shop.data";

const func = (product) => (
  <div className="collection-items">
    <div className="title">{SHOP_DATA[product - 1].title.toUpperCase()}</div>
    <div className="items">
      {SHOP_DATA[product - 1].items.map((item) => (
        <CollectionItem item={item} />
      ))}
    </div>
  </div>
);

const CollectionPage = (product) => (
  <div className="collection-page">{func(product.product)}</div>
);

export default CollectionPage;
