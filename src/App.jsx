
import './App.css'

import NavBar from "./componentes/NavBar"
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ErrorPage from './componentes/ErrorPage'





function App() {
  

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer mensaje='>Hola, bienvenidos al e-commerce de Bjj' />} />
        <Route path='/secciones/:category' element={<ItemListContainer mensaje='Categoria:' />} />
        <Route path='/producto/:id' element={<ItemDetailContainer/>} />
        <Route path='*' element={<ErrorPage/>}/>
        
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
