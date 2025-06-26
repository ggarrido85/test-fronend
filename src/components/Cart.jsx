import './Cart.css'

import { useId, useState } from 'react'
import { CartIcon, ClearCartIcon, PayIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'

function CartItem ({ image, price, title, quantity, addToCart, restToCart }) {
  return (
    <li className='text-white   max-h-max'>
      <img className='flex justify-center items-center' src={image} alt={title}
      />
      <div >
        <strong>{title.slice(0, 30)}</strong> - ${price}
      </div>

      <footer>
        <small>
          Unidades: {quantity}
        </small>
        <button className="p12 size-10 flex bg-blue-500" onClick={addToCart}>+</button>
        <button className="p12 size-10 flex bg-red-500" onClick={restToCart}>-</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const cartCheckboxId = useId()
  const { addToCart, clearCart, cart, restToCart} = useCart()
 
  // Diplay list an descriptions
  const makePay = ()=>{

  }

  let totalValue = 0;
  cart.map(product => (
            totalValue +=product.price * product.quantity 
          )) 

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
     
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart bg-blue-950'>
         <label className='text-white ' >
        Importe: ${  totalValue.toFixed(2)} 
      </label>
      <div className='overflow-visible ... '>
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              restToCart={() => restToCart(product)}
              {...product}
            />
          ))}
        </ul>
      </div>
        <button className='bg-red-400' onClick={clearCart}>
          <ClearCartIcon />
        </button>
        <button onClick={makePay}>
          <PayIcon />
        </button>
      </aside>
    </>
  )
}
