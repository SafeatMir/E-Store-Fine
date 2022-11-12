import React from "react";
import { client } from "../lib/client";
import HeadsetBanner from "../components/HeadsetBanner";
import Product from "../components/Product";

const headsets = ({ products, introBannerData }) => {
  return (
    <div>
      <HeadsetBanner
        headsetBanner={introBannerData.length && introBannerData[0]}
      />
      <div className="products-container">
        {products
          .filter((product) => product.value === 1)
          .map((filtered) => (
            <Product key={filtered._id} product={filtered} />
          ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const introBannerQuery = '*[_type == "introBanner"]';
  const introBannerData = await client.fetch(introBannerQuery);

  return {
    props: { products, introBannerData },
  };
};

export default headsets;
