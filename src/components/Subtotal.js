import React from "react";
import "../styles/subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../context/stateProvider";
import { getTotalAmount } from "../context/reducer";

const Subtotal = () => {
  const [{ busket }] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotals ({busket?.length} Items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotalAmount(busket)}
        displayType={"text"}
        thousandSeparetor={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
