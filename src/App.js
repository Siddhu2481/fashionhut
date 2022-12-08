import React from "react";
import ParticlesBackground from "./components/particles-background";
import "./App.css";
import { connect } from "react-redux";
import Homepage from "./pages/homepage/homepage";
import { setCurrentUser } from "./redux/user/user-action";
import { Routes, Route } from "react-router-dom";
import FooterNav from "./components/footer-nav/footer-nav";
import { createUserProfileDoc, auth } from "./components/firebase/firebase";
import ShopPage from "./pages/shop/shop";
import SignInOut from "./pages/sign-in-out/sign-in-out";
import Header from "./components/header-component/header";
import CheckOut from "./components/checkout/checkout";
import { onSnapshot } from "firebase/firestore";
import CollectionPage from "./pages/collection/collection";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const docRef = await createUserProfileDoc(userAuth);

        onSnapshot(docRef, (doc) => {
          setCurrentUser({
            id: doc.id,
            ...doc.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <ParticlesBackground />
        <Header />
        <div className="main-body">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/signin" element={<SignInOut />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/shop/hats" element={<CollectionPage product="1" />} />
            <Route
              path="/shop/sneakers"
              element={<CollectionPage product="2" />}
            />
            <Route
              path="/shop/jackets"
              element={<CollectionPage product="3" />}
            />
            <Route
              path="/shop/women"
              element={<CollectionPage product="4" />}
            />
            <Route path="/shop/men" element={<CollectionPage product="5" />} />
          </Routes>
          <useAlan />
        </div>
        <FooterNav className="footer-nav" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
