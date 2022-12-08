import React from "react";

import CollectionItem from "../collection-item/collection-item";

import "./preview-collection.scss";

import { Link } from "react-router-dom";

const CollectionPreview = ({ title, items, routeName }) => {
  console.log(title, items);
  return (
    <div className="collection-preview">
      <Link className="collection-title" to={`/shop/${routeName}`}>
        {title.toUpperCase()} &gt;&gt;
      </Link>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
