# Test para tienda en linea 0.01
 
 
## Requisitos

- react + react dom
- axios
- vite
- tailwindcss

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### TODO: Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
 
npm run test:e2e:dev
```





####  1. Pantalla de Inicio

##### Requisitos:
- [x] Mostrar una lista de productos con imagen, nombre, precio y un botón "Agregar
al carrito".
- [x] Los productos deben obtenerse de una API pública (sugerencia: Fake Store API).
- [x] Implementar un buscador y/o filtro por categoría.
####  2. Pantalla de detalle de producto
##### Requisitos:
- [X] Mostrar información completa del producto seleccionado.
- [x] Botón para agregar el producto al carrito.
####  3. Carrito de compras
##### Requisitos:
- [x] Mostrar los productos agregados al carrito con su nombre, cantidad y precio total.
- [x] Permitir eliminar productos o cambiar la cantidad.
- [X] Mostrar el precio total de todos los productos.
####  4. Pantalla de confirmación de compra
##### Requisitos:
- [] Mostrar un resumen del carrito con los datos de la compra.
- [] Permitir simular la "finalización de compra".





Todo: 
[X] Adicionar tailwincss
[] Adicionar InfiniteScroll ("react-infinite-scroll-component")
[] Reescribir la entrada inicial del componente (no me gusta como carga el listado de elementos)
[]