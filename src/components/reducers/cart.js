// Patron de manejo local, igual a los store de vue (state, actions, getters, mutations )
// Me gusta mas vue para esto


export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REST_TO_CART: 'REST_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

// Utilizando localStorage para almacenar el listado seleccionado
export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

//Extraer del localStorage
export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

// Listado de acciones
const UPDATE_STATE_BY_ACTION = {
  // Adicionando al carrito
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const { id } = action.payload
    const productInCartIndex = state.findIndex(item => item.id === id)

    if (productInCartIndex >= 0) { 
      const newState = [
        ...state.slice(0, productInCartIndex),
        { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
        ...state.slice(productInCartIndex + 1)
      ]

      updateLocalStorage(newState)
      return newState
    }

    const newState = [
      ...state,
      {
        ...action.payload,
        quantity: 1
      }
    ]

    updateLocalStorage(newState)
    return newState
  },
  // Limpiar
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    updateLocalStorage([])
    return []
  },
  // Limpiando carrito
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload
    const newState = state.filter(item => item.id !== id)
    updateLocalStorage(newState) 
    return newState
  },
  // Eliminando del carrito
  [CART_ACTION_TYPES.REST_TO_CART]: (state, action) => {
    const { id } = action.payload
    const newState = state.filter(item => item.id !== id)
    updateLocalStorage(newState) 
    return newState
  }
}

export const cartReducer = (state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}

