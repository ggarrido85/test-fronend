import { Filters } from './Filters.jsx'

export function Header ({config}) {
  return (
    <header className="flex justify-center items-center text-3xl  bg-blend-color ">
      <h1 className="">Tienda 🛒</h1>
      <Filters config={config} />
    </header>
  )
}
