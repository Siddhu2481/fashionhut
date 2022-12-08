import React, { useRef } from "react";
import Directory from "../../components/directory/directory";
import "./homepage.scss";
import useAlan from "../../components/alanai/client-app";

const Homepage = () => {
  const alanBtnContainer = useRef();

  useAlan();
  return (
    <div className="homepage">
      <Directory />
      <div ref={alanBtnContainer} />
    </div>
  );
};

export default Homepage;
