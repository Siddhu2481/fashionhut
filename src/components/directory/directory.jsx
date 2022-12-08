import React from "react";
import MenuItem from "../menu-item/menu-item";
import "./directory.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=600",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "shoes",
          imageUrl: "https://bit.ly/3RkkTnf",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "women",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/women",
        },
        {
          title: "men",
          imageUrl: "https://bit.ly/3rauimz",
          size: "large",
          id: 5,
          linkUrl: "shop/men",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, id, imageUrl, size, linkUrl }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            url={linkUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
