
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from './components/Error'

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer mensaje='Bienvenida a tu momento de calma. Tu refugio de tranquilidad y cuidado personal te espera.🌿'/>}/>
        <Route path='/category/:type' element={<ItemListContainer mensaje='Categorias'/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
