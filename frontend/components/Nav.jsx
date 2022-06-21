import Link from 'next/link'
import { FiShoppingBag } from 'react-icons/fi'
import { NavStyles, NavItems } from '../styles/NavStyles'
import { useStateContext } from '../lib/context'
import Cart from './Cart'

const Nav = () => {
  const { showCart, setShowCart } = useStateContext()
  return (
    <NavStyles>
      <Link href={`/`}>E-Photo</Link>
      <NavItems>
        <div onClick={()=> setShowCart(true)}>
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      {showCart && <Cart />}
    </NavStyles>
  )
}

export default Nav
