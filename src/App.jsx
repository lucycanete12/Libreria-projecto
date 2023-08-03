import './App.css'
import ItemListContainer from './components/ItemListContainer.jsx';
import Navbar from './components/NavBar';
import CartWidget from "./components/CartWidget";

function App() {
    return (
          <main className='main'>
            <Navbar />   
            <ItemListContainer greeting="Bienvenidos!!" />  
          </main>
    );
}


export default App;

