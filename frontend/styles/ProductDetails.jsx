import styled from 'styled-components'

export const DetailsStyles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  height: 30vh;
  img {
    width: 40%;
    height: 30vh;
    object-fit: cover;
  }
`

export const ProductInfo = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  button {
    font-size: 1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`
export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
    padding: 0rem 1rem;
  }
  p {
    width: 1rem;
    text-align: center;
  }
  span {
    color: var(--secondary)
  }
  svg {
    color: #494949;
  }
`
export const Buy =styled.button`
  width: 100%;
  background: var(--primary);
  color: white;
  font-weight: 500;
  border: none;
  outline: none;
`
