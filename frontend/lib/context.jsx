import React, { createContext, useContext, useState } from 'react'

const ShopContext = createContext()

export const StateContext = ({ children }) => {
  //Add date for the state
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [qty, setQty] = useState(1)
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
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
    //total price
    setTotalPrice(prevTotal => prevTotal + product.price * quantity)
    //increase total quantitie
    setTotalQuantities((prevTotal) => prevTotal + quantity)
    //Check if the product is already in the cart
    const exist = cartItems.find((item) => product.slug === item.slug)
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === exist.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }])
    }
  }

  //Remove Product
  const onRemove = (product) => {
    //total price
    setTotalPrice((prevTotal) => prevTotal - product.price)
    //decrease total quantitie
    setTotalQuantities((prevTotal) => prevTotal - 1)
    const exist = cartItems.find((item) => product.slug === item.slug)
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== exist.slug))
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === exist.slug
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      )
    }
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
        onRemove,
        totalQuantities,
        totalPrice
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

export const useStateContext = () => useContext(ShopContext)
