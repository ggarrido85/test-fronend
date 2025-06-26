import { useId } from 'react'
import { useFilters } from '../hooks/useFilters.js'
import './Filters.css'

export function Filters({ config }) {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  // Por descripcion
  const handleChangeDescription = (event) => {
    setFilters(prevState => ({
      ...prevState,
      description: event.target.value
    }))
  }

  // Segun el precio
  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  // Segun la categoria
  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  


  const valuesCategories = config.categories;//['','']
  const minMaxPrice = config.minMax;// {min:10,max:10000};

  return (
    <section className='flex justify-center items-center gap-4 '>
      <div className="gap-8">
        <label className='mr-2' htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input
          className='cursor-pointer'
          type='range'
          id={minPriceFilterId}
          min={minMaxPrice.min}
          max={minMaxPrice.max}
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span className='ml-2 mr-10'>${filters.minPrice}</span>
      </div>

      <div>
        <label className='mr-2' htmlFor={categoryFilterId}>Categoría(s):</label>
        <select className='text-black border-0 bg-blue-50' id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          {valuesCategories != null &&
            valuesCategories.map((item) => (
              <option key={item.id} value={item.id}>{item.value}</option>
            ))}
        </select>
      </div>

    </section>

  )
}
