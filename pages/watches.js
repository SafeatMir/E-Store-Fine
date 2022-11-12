import React from "react";
import { client } from "../lib/client";
import WatchBanner from "../components/WatchBanner";
import Product from "../components/Product";

const watches = ({ products, introBannerData }) => {
  return (
    <div>
      <WatchBanner watchBanner={introBannerData.length && introBannerData[0]} />
      <div className="products-container">
        {products
          .filter((product) => product.value === 3)
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

export default watches;
