
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer mensaje='Bienvenida a tu momento de calma. Tu refugio de tranquilidad y cuidado personal te espera.🌿'/>
      <ItemDetailContainer/>
      <Footer/>
    </>
  )
}

export default App
