import Link from 'next/link'
import { FiShoppingBag } from 'react-icons/fi'
import { NavStyles, NavItems } from '../styles/NavStyles'
import { useStateContext } from '../lib/context'
import Cart from './Cart'
const { AnimatePresence, motion } = require('framer-motion')
const Nav = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext()
  return (
    <NavStyles>
      <Link href={`/`}>E-Photo</Link>
      <NavItems>
        <div onClick={() => setShowCart(true)}>
          {totalQuantities > 0 && (
            <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }}>
              {totalQuantities}
            </motion.span>
          )}
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavStyles>
  )
}

export default Nav
