import { useEffect, useState } from 'react'
import axios from 'axios'


import { Header } from './components/Header.jsx'
import { useFilters } from './hooks/useFilters.js'
import { Products } from './components/Products.jsx'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'
import apis from "./api/urls.jsx"



function App() {

  // Utilizar el filtro general que contiene contexto reactivo para actualizar la interfaz
  const { filterProducts } = useFilters()

  //const p = [{ "id": 1, "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", "price": 109.95, "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", "category": "men's clothing", "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", "rating": { "rate": 3.9, "count": 120 } }, { "id": 2, "title": "Mens Casual Premium Slim Fit T-Shirts ", "price": 22.3, "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.", "category": "men's clothing", "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg", "rating": { "rate": 4.1, "count": 259 } }, { "id": 3, "title": "Mens Cotton Jacket", "price": 55.99, "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.", "category": "men's clothing", "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", "rating": { "rate": 4.7, "count": 500 } }];

  // Solo para la carga inicial (si deseo extender es mas facil desde un contento general)
  const [loadedProducts, setloadedProducts] = useState([]);
  const [minMaxPrice, setminMaxPrice] = useState({ min: 0, max: 1000 });
  const [listCategories, setlistCategories] = useState([]);
  useEffect(() => {
    if (loadedProducts.length === 0) {
      // Fetch
      axios.get(apis.getAll, {
        //params: , not need
      })
        .then((response) => {
          // TODO: Manejar 400

          const listProducst = response.data;
          let vlistCategories = {};
          let vminMaxPrice = { min: 10000, max: 0 }
          // Cargar categorias  y precio minimo y maximo
          listProducst.map((item) => {
            vminMaxPrice = {
              min: vminMaxPrice.min > item.price ? item.price : vminMaxPrice.min,
              max: vminMaxPrice.max < item.price ? item.price : vminMaxPrice.max
            }
            vlistCategories[item.category] = item.category;
          })

          var categ = []
          for(let i in vlistCategories)
            if(vlistCategories.hasOwnProperty(i)) 
            categ.push({ id: i, value: i })
 
          setloadedProducts(listProducst)
          setminMaxPrice(vminMaxPrice);
          setlistCategories( categ)
        }, []);
    }
  }
  )

  const filteredProducts = filterProducts(loadedProducts)

  return (
    <CartProvider  >
      <Header config={{ minMax: minMaxPrice, categories: listCategories }} />
      {loadedProducts.length > 0 && <Cart />}
      {loadedProducts.length > 0 && <Products products={filteredProducts} />}
    </CartProvider>
  )
}

export default App
