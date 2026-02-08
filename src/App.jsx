
import './App.css'

import NavBar from "./componentes/NavBar"
import ItemListContainer from './componentes/ItemListContainer'
import FetchApi from './componentes/FetchApi'

function App() {
  

  return (
    <>
      <NavBar/>
      <FetchApi/>
      <ItemListContainer mensaje='>Hola, bienvenidos al e-commerce de Bjj' />
    </>
  )
}

export default App
