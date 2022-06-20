import styled from 'styled-components'

export const ProductStyles = styled.div`
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
&:hover {
  transform: scale(1.01) translateY(-2px)
}
  img{
    width: 100%;
    cursor: pointer;
  }
  h2{
    padding: 0.5rem 0rem;
  }
`
