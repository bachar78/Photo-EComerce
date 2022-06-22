import styled from 'styled-components'
const { motion } = require('framer-motion')

export const Wrapper = styled.div`
  margin: 0rem 15rem;
`
export const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 2rem;
  padding: 3rem 3rem;
  min-height: 80vh;
  justify-content: space-evenly;
  h2 {
    text-align: center;
  }
  button {
    color: white;
    background: var(--primary);
    font-size: 1.2rem;
    font-weight: 500;
    padding: 1rem 2rem;
    cursor: pointer;
    border: none;
  }
`

export const Address = styled.div`
  font-size: 1rem;
  p {
    margin-top: 0.3rem;
  }
`
export const OrderInfo = styled.div`
  font-size: 1rem;
  p {
    margin-top: .4rem;
  }
`
export const InforWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`