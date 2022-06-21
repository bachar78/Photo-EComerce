import React, { createContext, useContext, useState } from 'react'

const ShopContext = createContext()

export const StateContext = ({ children }) => {
  //Add date for the state
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [qty, setQty] = useState(1)

  //Increase product quantity
  const increaseQty = () => {
    setQty((prev) => prev + 1)
  }
  //decrease product quantity
  const decreaseQty = () => {
    setQty((prev) => prev - 1)
  }
  //Add product to cart
  const onAdd = (product, quantity) => {
    //Check if the product is already in the cart
    const exist = cartItems.find((item) => product.slug === item.slug)
    if (exist) {
      setCartItems(cartItems.map((item) =>
        item.slug === exist.slug
          ? { ...exist, quantity: quantity }
          : item
      ))
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }])
    }
    setQty(1)
  }
  return (
    <ShopContext.Provider
      value={{
        qty,
        increaseQty,
        decreaseQty,
        showCart,
        setShowCart,
        cartItems,
        onAdd,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

export const useStateContext = () => useContext(ShopContext)
