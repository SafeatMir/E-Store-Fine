import React from "react";
import { client } from "../lib/client";
import AboutBanner from "../components/AboutBanner";

const about = ({ introBannerData }) => {
  return (
    <div>
      <AboutBanner aboutBanner={introBannerData.length && introBannerData[0]} />
      <div className="about-container">
        <h1>Our History</h1>
        <p>
          laboris cupidatat minim nostrud pariatur fugiat velit anim sint. Ipsum
          ipsum dolore deserunt elit laborum ea anim laborum. Nostrud sit duis
          tempor id. Dolor tempor qui ex reprehenderit ea qui occaecat aliquip
          fugiat reprehenderit reprehenderit consequat. Duis dolor Lorem
          adipisicing veniam. Elit occaecat qui ea do incididunt dolor.
          Consectetur cillum aute exercitation consequat in excepteur
          reprehenderit fugiat dolore tempor duis.laboris cupidatat minim
          nostrud pariatur fugiat velit anim sint. Ipsum ipsum dolore deserunt
          elit laborum ea anim laborum. Nostrud sit duis tempor id. Dolor tempor
          qui ex reprehenderit ea qui occaecat aliquip fugiat reprehenderit
          reprehenderit consequat. Duis dolor Lorem adipisicing veniam. Elit
          occaecat qui ea do incididunt dolor. Consectetur cillum aute
          exercitation consequat in excepteur reprehenderit fugiat dolore tempor
          duis.
        </p>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const introBannerQuery = '*[_type == "introBanner"]';
  const introBannerData = await client.fetch(introBannerQuery);

  return {
    props: { introBannerData },
  };
};

export default about;
