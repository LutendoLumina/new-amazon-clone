import React from 'react'
import { useStateValue } from '../context/StateProvider'

export const useShop = () => {
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = (product) => {
        console.log("Action triggered for:", product.title);
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

  return{
    basket,
    addToBasket,
    removeFromBasket
  }
}