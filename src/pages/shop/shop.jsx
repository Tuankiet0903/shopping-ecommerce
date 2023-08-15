import React from 'react'
import { PRODUCT } from '../../products'
import Product from './product'

const shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Ecommerce Shop</h1>
        </div>
        <div className='products'>
            {PRODUCT.map((product) => ( 
            <Product data={product}/>
            ))}
        </div>
    </div>
  )
}

export default shop 