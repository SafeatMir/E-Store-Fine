import React from "react";
import { urlFor } from "../lib/client";

const SpeakerBanner = ({ speakerBanner }) => {
  return (
    <div className="intro-banner-container">
      <img
        src={urlFor(speakerBanner.image[1])}
        alt="speakers"
        className="banner-image"
      />
    </div>
  );
};

export default SpeakerBanner;
