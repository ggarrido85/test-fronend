import ReactDOM from 'react-dom/client'
import App from './App'
import { FiltersProvider } from './context/filters.jsx'
import './App.css'


// Comun
ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
