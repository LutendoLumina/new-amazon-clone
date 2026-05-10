// Check if there is a saved basket in the browser's localStorage
const savedBasket = JSON.parse(localStorage.getItem("basket"));
const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];

export const initialState = {
  basket: savedBasket || [], // Use the saved basket if it exists, otherwise start empty
  orders: savedOrders, // Load saved orders from localStorage
  searchTerm: "",
  user: null,
  address: {}
};

// Selector to calculate the total price
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => amount + item.price * (item.quantity || 1), 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Check if the item already exists in the basket
      const existingItemIndex = state.basket.findIndex(
        (item) => item.id === action.item.id
      );

      let updatedBasketAdd;

      if (existingItemIndex >= 0) {
        // Item exists, increment quantity
        updatedBasketAdd = [...state.basket];
        updatedBasketAdd[existingItemIndex] = {
          ...updatedBasketAdd[existingItemIndex],
          quantity: (updatedBasketAdd[existingItemIndex].quantity || 1) + 1,
        };
      } else {
        // Item doesn't exist, add it with quantity 1
        updatedBasketAdd = [...state.basket, { ...action.item, quantity: 1 }];
      }

      // Save the updated basket to localStorage
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
        const item = newBasket[index];
        
        // If quantity is greater than 1, decrement it
        if ((item.quantity || 1) > 1) {
          newBasket[index] = {
            ...item,
            quantity: (item.quantity || 1) - 1,
          };
        } else {
          // If quantity is 1, remove the item
          newBasket.splice(index, 1);
        }
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

    case "EMPTY_BASKET":
      // Save current basket as an order before clearing
      if (state.basket.length > 0) {
        const newOrder = {
          id: `#AMZ-${Math.floor(Math.random() * 1000000)}-${new Date().getFullYear()}`,
          items: state.basket,
          total: state.basket.reduce((amount, item) => amount + item.price * (item.quantity || 1), 0),
          date: new Date().toLocaleDateString(),
          timestamp: Date.now()
        };
        const updatedOrders = [newOrder, ...(state.orders || [])];
        localStorage.setItem("orders", JSON.stringify(updatedOrders));
        
        return {
          ...state,
          basket: [],
          orders: updatedOrders,
        };
      }
      
      // If basket is already empty, just return state
      return {
        ...state,
        basket: [],
      }

    default:
      return state;
  }
};

export default reducer;