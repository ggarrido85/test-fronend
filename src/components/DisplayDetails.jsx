import './DisplayDetails.css'

import { useId, useState } from "react"
import { useCart } from "../hooks/useCart"
import { AddToCartIcon, PayIcon, RemoveFromCartIcon } from "./Icons"

// Mostrar el listado a comprar
export function DisplayDetails({ product, fClose, addToCart, removeFromCart, checkProductInCart }) {

    // Sobre escribir
    const isProductInCart = checkProductInCart(product)
    const rating = product!== false ? parseInt(product.rating.rate) : 0;
    const N = 5
    let i = 1
    return (

        <div id="static-modal" data-modal-backdrop="static" tabindex="-1" className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full">

                <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">

                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Detalles del producto:
                        </h3>
                        <button onClick={() => fClose(null)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Cerrar</span>
                        </button>
                    </div>

                    <div className="p-4 md:p-5 space-y-4">
                        <div className='flex  items-center justify-center'>
                        <img className="rounded w-50 aspect-[9/9] block object-cover" src={product.image} />
                        </div>
                        <strong className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            {product.title}
                        </strong>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            {product.description}
                        </p>

                        <div className="flex items-center">
                            {Array.apply(null, { length: N }).map(() => {
                                let style = (i <= rating ) ? "w-4 h-4  ms-1 text-yellow-300" : "w-4 h-4  ms-1 text-gray-300 dark:text-gray-500";
                                i++
                                return ( <>
                                    <svg key={i+"svg"} className={style} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                            </>  )})
                            }
                        </div>


                    </div>

                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
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
                </div>
            </div>
        </div>


    )

}