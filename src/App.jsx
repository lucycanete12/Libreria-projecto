import './App.css';
import NavBar from "./components/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer.jsx"
import CartWidget from './components/CartWidget.jsx';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer Salute='Bienvenidos'/>
      <CartWidget />
    </>
  )
}

export default App
