import React from "react";

import "./sign-up.scss";

import CustomButton from "../custom-button/custom-button";

import { auth, createUserProfileDoc } from "../firebase/firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          userCredential.user.displayName = displayName;
          return userCredential;
        })
        .catch((error) => {
          console.log(error);
        });

      await createUserProfileDoc(user);

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">New User</h2>
        <form className="group" onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            className="form-input"
            name="displayName"
            value={displayName}
            type="text"
            onChange={this.handleChange}
            required
          />
          <label>Email</label>
          <input
            className="form-input"
            name="email"
            value={email}
            type="email"
            onChange={this.handleChange}
            required
          />
          <label>Password</label>
          <input
            className="form-input"
            name="password"
            value={password}
            type="password"
            onChange={this.handleChange}
            required
          />

          <label>Confirm Password</label>
          <input
            className="form-input"
            name="confirmPassword"
            value={confirmPassword}
            type="password"
            onChange={this.handleChange}
            required
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignUp;
