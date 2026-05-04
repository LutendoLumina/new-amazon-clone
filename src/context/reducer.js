// Check if there is a saved basket in the browser's localStorage
const savedBasket = JSON.parse(localStorage.getItem("basket"));

export const initialState = {
  basket: savedBasket || [], // Use the saved basket if it exists, otherwise start empty
  searchTerm: "",
  user: null,
  address: {}
};

// Selector to calculate the total price
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const updatedBasketAdd = [...state.basket, action.item];
      //Save the updated basket to localStorage
      localStorage.setItem("basket", JSON.stringify(updatedBasketAdd));
      return {
        ...state,
        basket: updatedBasketAdd,
      };

    case "REMOVE_FROM_BASKET":
      // Find index of specific item
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id,
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1); // Removes only the specific item found
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in the basket!`,
        );
      }

      // Save the updated basket after removal
      localStorage.setItem("basket", JSON.stringify(newBasket));

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.term,
      };

    case "SET_ADDRESS":
      return {
        ...state,
        address: action.address,
      }

    default:
      return state;
  }
};

export default reducer;
