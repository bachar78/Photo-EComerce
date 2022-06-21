import Link from 'next/link'
import { FiShoppingBag } from 'react-icons/fi'
import { NavStyles, NavItems } from '../styles/NavStyles'
import Cart from './Cart'
const Nav = () => {
  return (
    <NavStyles>
      <Link href={`/`}>E-Photo</Link>
      <NavItems>
        <div>
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      <Cart />
    </NavStyles>
  )
}

export default Nav
