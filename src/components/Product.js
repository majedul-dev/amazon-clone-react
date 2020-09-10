import React from "react";
import "../styles/product.css";
import { useStateValue } from "../context/stateProvider";

const Product = ({ id, title, price, rating, image, amount }) => {
  const [, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, title, price, rating, image, amount },
    });
  };
  return (
    <>
      <div key={id} className='product container'>
        <div className='product__info'>
          <p>{title}</p>
          <p className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className='product__rating'>
            {Array(rating)
              .fill()
              .map((item, index) => (
                <p key={index}>
                  <span role='img' aria-label='rating'>
                    &#11088;
                  </span>
                </p>
              ))}
          </div>
        </div>
        <img className='product__image' src={image} alt='' />
        <button onClick={addToCart}>Add to Basket</button>
      </div>
    </>
  );
};

export default Product;
