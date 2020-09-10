import React from "react";
import { data } from "../data";
import Product from "../components/Product";
import "../styles/products.css";

const Products = () => {
  return (
    <>
      <div className='products'>
        {data.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Products;
