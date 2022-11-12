import React from "react";
import { urlFor } from "../lib/client";

const WatchBanner = ({ watchBanner }) => {
  return (
    <div className="intro-banner-container">
      <img
        src={urlFor(watchBanner.image[2])}
        alt="Watches"
        className="banner-image"
      />
    </div>
  );
};

export default WatchBanner;
