import { createContext, useState } from 'react'

// La idea es crear un entorno para el componente de tal forma que haga reactiva la aplicaccion de los filtros

export const FiltersContext = createContext()


export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
