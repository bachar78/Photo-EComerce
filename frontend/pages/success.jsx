import { useRouter } from 'next/router'
import Image from 'next/image'
import shiba from '../public/shiba.png'
import {
  Wrapper,
  Card,
  Address,
  OrderInfo,
  InforWrapper,
} from '../styles/success'

const stripe = require('stripe')(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`)

//Fetch the session with stripe
export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ['line_items'],
    }
  )
  return { props: { order } }
}

export default function Success({ order }) {
  const route = useRouter()
  return (
    <Wrapper>
      <Card
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.75 }}
        transition={{ duration: 0.75 }}
      >
        <h1>Thank you for your order!</h1>
        <h2>
          A confirmation email has been sent to {order.customer_details.email}
        </h2>
        <InforWrapper>
          <Address>
            <h3>Address</h3>
            {Object.entries(order.customer_details.address).map(
              ([key, val]) => {
                return val !== null ? (
                  <p key={key}>
                    {key === 'line1' ? 'street' : key}:{val}
                  </p>
                ) : (
                  ''
                )
              }
            )}
          </Address>
          <OrderInfo>
            <h3>Products</h3>
            {order.line_items.data.map((item) => (
              <div key={item.id}>
                <p>Product: {item.description}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.price.unit_amount}</p>
              </div>
            ))}
          </OrderInfo>
        </InforWrapper>
        <button onClick={() => route.push('/')}>Continue Shopping</button>
        <Image src={shiba} />
      </Card>
    </Wrapper>
  )
}
