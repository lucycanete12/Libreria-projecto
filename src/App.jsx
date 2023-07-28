import './App.css';
import NavBar from "./components/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer"
import CartWidget from './components/CartWidget.jsx';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer />
      <CartWidget />
    </>
  )
}

export default App
