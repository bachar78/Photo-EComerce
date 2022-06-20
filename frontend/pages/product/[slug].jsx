import { useQuery } from 'urql'
import { GET_PRODUCT_QUERY } from '../../lib/query'
import {useRouter} from 'next/router'
export default function ProductDetails() {
  //Fetch Slug
  const {query} = useRouter()
  console.log()
  //Fetch Graphql data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  })
  const { data, fetching, error } = results

  //Check for the data coming in
  if (fetching) return <p>Loading ....</p>
  if (error) return <p>Oh no... {error.message}</p>
  console.log(data)
  return (
    <div>
      <img src='' alt='' />
      <div>
        <h3>Title</h3>
        <p>description</p>
      </div>
      <div>
        <span>Quantity</span>
        <button>Plus</button>
        <p>0</p>
        <button>Minus</button>
      </div>
      <button>Add to cart</button>
    </div>
  )
}
