import React from "react";
import FlipMove from "react-flip-move";

import { useStateValue } from "../context/stateProvider";
import { REMOVE_PRODUCT } from "../context/actions";

const CheckoutProducts = ({ id, title, price, rating, image, amount }) => {
  const [, dispatch] = useStateValue();
  const removeProduct = () => {
    dispatch({
      type: REMOVE_PRODUCT,
      id,
    });
  };

  return (
    <FlipMove>
      <div key={id} className='checkout__productsItem'>
        <img src={image} alt='' />
        <div className='checkout__productInfo'>
          <h3>{title}</h3>
          <p>${price}</p>
          <div className='product__rating'>
            {Array(rating)
              .fill()
              .map((item, index) => (
                <p key={index}>
                  <span>
                    <span role='img' aria-label='rating'>
                      &#11088;
                    </span>
                  </span>
                </p>
              ))}
          </div>
          <button onClick={removeProduct}>Remove From Busket</button>
        </div>
      </div>
    </FlipMove>
  );
};

export default CheckoutProducts;
