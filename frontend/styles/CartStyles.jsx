import styled from "styled-components";
import {FaShooingCart} from 'react-icons/fa'
export const CartWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
/* display: none; */
`

export const CartStyle = styled.div`
  width: 35%;
  background: #f1f1f1eb;
  padding: 2rem 5rem;
  overflow-y: scroll;
  position: relative;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  padding: 2rem;
  margin: 2rem 0rem;
  img {
    width: 8rem;
  }
`

export const CardInfo = styled.div`
  width: 50%;
  div {
    display:flex;
    justify-content: space-between;
  }
`

export const EmptyStyle = styled.div`
position: absolute;
top: 0;
left: 50%;
transform: translate(-50%, 0%);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
h1 {
  font-size: 1.8rem;
  padding: 2rem;
}
svg {
  font-size: 10rem;
  color: var(--secondary);
}
`

export const Quantity = styled.div`
  
`