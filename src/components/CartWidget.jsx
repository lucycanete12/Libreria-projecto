import cart from "./images/cart.svg"

export const CartWidget = () => {
    return (
        <div className="cart-image">
            <img src={cart} alt="Carrito de compra"/>
            <span>8</span>
        </div>
    )
}

export default CartWidget


