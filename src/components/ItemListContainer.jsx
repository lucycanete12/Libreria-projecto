import "./styles.css"

function ItemListContainer(props) {
    const greeting = props.greeting;
    return (
        <div className="item-list-container">
            <p>{greeting}</p>
        </div>
    );
}

export default ItemListContainer;