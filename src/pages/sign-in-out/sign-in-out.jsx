import React from "react";

import "./sign-in-out.scss";

import SignIn from "../../components/sign-in/sign-in";

import SignUp from "../../components/sign-up/sign-up";

const SignInOut = () => (
  <div className="sign-in-out">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInOut;
