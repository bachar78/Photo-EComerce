import React, { createContext, useContext, useState } from 'react'

const ShopContext = createContext()

export const StateContext = ({ children }) => {
  //Add date for the state
  const [showCart, setShowCart] = useState(false)
  const [cartItem, setCartItem] = useState([])
  const [qty, setQty] = useState(1)

  //Increase product quantity
  const increaseQty = () => {
    setQty((prev) => prev + 1)
  }
  //decrease product quantity
  const decreaseQty = () => {
    setQty((prev) => prev - 1)
  }
  return (
    <ShopContext.Provider
      value={{ qty, increaseQty, decreaseQty, showCart, setShowCart }}
    >
      {children}
    </ShopContext.Provider>
  )
}

export const useStateContext = () => useContext(ShopContext)
