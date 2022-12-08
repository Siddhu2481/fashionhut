import alanBtn from "@alan-ai/alan-sdk-web";
import React, { useEffect } from "react";

const useAlan = () => {
  useEffect(() => {
    alanBtn({
      key: "5d157e1ef3c756b1c9cb1b6edcc680662e956eca572e1d8b807a3e2338fdd0dc/stage",
      bottom: "55px",
      right: "25px",
      zIndex: 10,
      onCommand: (commandData) => {
        if (commandData.command === "go:back") {
          // Call the client code that will react to the received command
        }
      },
    });
  }, []);
};

export default useAlan;
