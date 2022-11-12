import React from "react";

const AboutBanner = ({ aboutBanner }) => {
  return (
    <div className="intro-banner-container">
      <h1>{aboutBanner.largeText1}</h1>
    </div>
  );
};

export default AboutBanner;
