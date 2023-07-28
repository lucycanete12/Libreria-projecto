import Button from "./Button";
import CartWidget from "./CartWidget";
import "./NavBar.css"

function NavBar() {
  return (
    <nav className="navbar">
        <h3>El Jardin de las Palabras</h3>
        <Button texto="Libros"/>
        <Button texto="Colecciones"/>
        <Button texto="Manga y Comics"/>
        <Button texto="Infantil y Novela Juvenil"/>
        <Button texto="Ficcion"/>
        <CartWidget items={9}/>
    </nav>
  );
}

export default NavBar;