import { Filters } from './Filters.jsx'

export function Header ({config}) {
  return (
    <header className="  bg-blend-color text-white h-30 ">
      <h1 className="text-3xl flex justify-center items-center  text-white  text-2xl h-10 ">Tienda 🛒</h1>

      <Filters config={config} />
    </header>
  )
}
