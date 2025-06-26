import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'
import BackToTopButton from './BackToTopButton.jsx'
import { DisplayDetails } from './DisplayDetails.jsx'
import { useState } from 'react'

export function Products ({ products }) {
  const[selectProduc, setSelectProduc] = useState(null);
  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }
  // Podia dejar el listado detras pero me gustaba mas dejarlo igual
  if(selectProduc !== null )
  return (
          <DisplayDetails product={selectProduc} fClose={setSelectProduc} addToCart={addToCart} removeFromCart={removeFromCart}  checkProductInCart={checkProductInCart} />)

  return (
    <main className='products'>
      <ul>
        {products.map(product => {
          const isProductInCart = checkProductInCart(product)

          return (
            <li key={product.id+'idProducto'} className="flex items-center space-x-2 px-4 py-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 border-l-0 border-white  cursor-pointer" >
              <img className='w-3/4' onClick={()=>setSelectProduc(product)}
                src={product.image}
                alt={product.title}
              />
              <div className='h-20' onClick={()=>setSelectProduc(product)}>
                <strong>{product.title}</strong>
              </div>
              <div onClick={()=>setSelectProduc(product)} > ${product.price}</div>
              <div >
                <button className='button-add'
                  style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }} onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }}
                >
                  {
                    isProductInCart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                  }
                </button>
              </div>
            </li>
          )
        })}
      </ul><BackToTopButton></BackToTopButton>
    </main>
  )
}
