import React from "react";
import "../styles/checkout.css";
import Subtotal from "../components/Subtotal";
import { useStateValue } from "../context/stateProvider";
import CheckoutProducts from "./CheckoutProducts";

const Checkout = () => {
  const [{ busket }] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
          className='checkout__advertisement'
        />
        <div>
          <div className='checkout__title'>
            {busket.length === 0 ? (
              <h2>Your Shopping Busket is Empty</h2>
            ) : (
              <h2>Your Shopping Busket</h2>
            )}
          </div>
        </div>
        <div className='checkout__list'>
          {busket.map((item, index) => {
            return <CheckoutProducts key={index} {...item} />;
          })}
        </div>
      </div>
      <div className='checkout__right'>
        {busket?.length > 0 ? <Subtotal /> : ""}
      </div>
    </div>
  );
};

export default Checkout;
