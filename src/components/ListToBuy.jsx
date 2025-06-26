import './ListToBuy.css'

import { useId, useState } from "react"
import { useCart } from "../hooks/useCart"
import { AddToCartIcon, PayIcon, RemoveFromCartIcon } from "./Icons"

// Mostrar el listado a comprar
export function ListToBuy({ products }) {
    const payCheckboxId = useId()
    const [display, setDisplay] = useState(false)
    const { cart, removeFromCart, addToCart, restToCart } = useCart()
    let isProductInCart = true
    let totalValue = 0;
    cart.map(product => (
        totalValue += product.price * product.quantity
    ))
    // SI no existen productos en carro mandar a cerrar
    if(cart.length === 0 && display === true )
        setDisplay(false)

    if (display === false)
    {
        if(cart.length === 0)
            return (<></>)
        return (<>
            <label className='pay-button animate-ping' htmlFor={payCheckboxId}>
                <PayIcon />
            </label>
            <input id={payCheckboxId} onChange={() => setDisplay(true)} type='checkbox' hidden /></>)
    }


    return (

        <div id="default-modal" tabIndex="-1" className=" bg-opacity-80 flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full">

                <div className="relative bg-gray-200 rounded-lg shadow-sm dark:bg-gray-700">

                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Total a pagar: ${totalValue.toFixed(2)}
                        </h3>
                        <button onClick={() => setDisplay(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>


                    <div className="p-4 md:p-5 space-y-4">
                        <div className=" z-auto relative mx-auto flex h-72 max-w flex-col divide-y divide-gray-200 overflow-auto rounded-xl bg-white shadow-lg ring-1 ring-black/5 dark:divide-gray-200/5 dark:bg-gray-800">

                            {cart.map(product => (
                                <div className="flex items-left gap-4 p-10"><img className="h-12   w-12 rounded-full" src={product.image} />
                                    <div className="flex flex-col">
                                        <strong className="colItemStrong">{product.title}</strong>
                                        <span className="colItemSpand">{product.description.slice(0,80)+ "..."}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <strong className="colItemStrong">Precio</strong>
                                        <span className="colItemSpand">${product.price}</span>
                                    </div>
                                    <div className="flex flex-col ">
                                        <strong className="colItemStrong">{product.quantity}</strong>
                                        <span className="colItemSpand">${product.quantity * product.price}</span>
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
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pagar</button>
                        <button data-modal-hide="default-modal" type="button" onClick={() => setDisplay(false)} className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    )

}