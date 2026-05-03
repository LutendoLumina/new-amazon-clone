import React from 'react'
import { useStateValue } from '../context/StateProvider'
import { getBasketTotal } from '../context/reducer';

export const useShop = () => {
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = (product) => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: product.id,
                title: product.title,
                image: product.image,
                price: product.price,
                rating: product.rating,
            }
        })
    }

    const removeFromBasket = (id) => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    const getCartTotal = () => {
        return getBasketTotal(basket);
    }

  return{
    cart: basket || [],
    itemCount: basket?.length || 0,
    addToBasket,
    removeFromBasket,
    getCartTotal,
  }
}