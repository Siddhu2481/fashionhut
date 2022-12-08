import React from "react";
import "./menu-item.scss";
import { Link } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, url }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <Link to={url}>
        <h1 className="title">{title.toUpperCase()}</h1>
      </Link>
    </div>
  </div>
);

export default MenuItem;
