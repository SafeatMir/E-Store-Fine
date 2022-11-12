import React from "react";
import { urlFor } from "../lib/client";

const HeadsetBanner = ({ headsetBanner }) => {
  return (
    <div className="intro-banner-container">
      <img
        src={urlFor(headsetBanner.image[0])}
        alt="headphones"
        className="banner-image"
      />
    </div>
  );
};

export default HeadsetBanner;
