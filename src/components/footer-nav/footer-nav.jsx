import React from "react";
import { connect } from "react-redux";
import "./footer-nav.scss";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";

const FooterNav = ({ currentUser }) => (
  <div className="footer">
    <Link className="footer-icon" to="/">
      <Icon
        icon="ant-design:home-filled"
        color="white"
        widht="30"
        height="25"
      />
    </Link>
    <Link className="footer-icon" to="/shop">
      <Icon icon="bxs:shopping-bag" color="white" widht="30" height="25" />
    </Link>
    {currentUser ? (
      <Link className="footer-icon" to="/signin">
        <Icon
          icon="icomoon-free:exit"
          color="white"
          widht="30"
          height="22"
          onClick={() => auth.signOut()}
        />
      </Link>
    ) : (
      <Link className="footer-icon" to="/signin">
        <Icon icon="bxs:user" color="white" widht="30" height="25" />
      </Link>
    )}
  </div>
);

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

export default connect(mapStateToProps)(FooterNav);
