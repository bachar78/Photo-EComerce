import { ProductStyles } from "../styles/ProductStyle"
export default function Product({ product }) {
  //Extract the info from props
  const { price, title, description, image } = product.attributes

  return (
    <ProductStyles>
      <div>
        <img src={image.data.attributes.formats.small.url} alt='product' />
      </div>
      <h2>{title}</h2>
      <h3>{price}</h3>
    </ProductStyles>
  )
}

