import { useQuery } from 'urql'
import { GET_PRODUCT_QUERY } from '../../lib/query'
import { useRouter } from 'next/router'
import { DetailsStyles, ProductInfo, Quantity, Buy } from '../../styles/ProductDetails'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

export default function ProductDetails() {
  //Fetch Slug
  const { query } = useRouter()

  //Fetch Graphql data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  })
  const { data, fetching, error } = results

  //Check for the data coming in
  if (fetching) return <p>Loading ....</p>
  if (error) return <p>Oh no... {error.message}</p>
  //extract our data
  const { title, description, image, price } = data.products.data[0].attributes

  return (
    <DetailsStyles>
      <img src={image.data.attributes.formats.medium.url} alt={title} />
      <ProductInfo>
        <h2>{title}</h2>
        <h3>${price}</h3>
        <p>{description}</p>
        <Quantity>
          <span>Quantity</span>
          <button><AiFillMinusCircle/></button>
          <p>0</p>
          <button><AiFillPlusCircle/></button>
        </Quantity>
        <Buy>Add to cart</Buy>
      </ProductInfo>
    </DetailsStyles>
  )
}
