import { ADD_TO_CART, REMOVE_PRODUCT } from "./actions";

export const initialState = {
  busket: [],
};

export const getTotalAmount = (busket) =>
  busket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        busket: [...state.busket, action.payload],
      };
    case REMOVE_PRODUCT:
      const index = state.busket.findIndex((item) => item.id === action.id);
      let newBusket = [...state.busket];

      if (index >= 0) {
        newBusket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in index`
        );
      }
      return {
        ...state,
        busket: newBusket,
      };
    default:
      return state;
  }
};

export default reducer;
