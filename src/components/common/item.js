import './item.css'

const Item = ({device}) => {
    const addToCart = () => {
        fetch('shopping_cart', {
            method: 'POST',
            body: JSON.stringify(device),
            headers: {'Content-Type': 'application/json'}
        })
    }

    return (
        <li className="item">
            <img src={device.src} alt="some picture" className="item_image"/>
            <h4 className="product_title">{device.title}</h4>
            <p className="product_description">
              {device.description}
            </p>
            <div className="price_and_order">
                <span className="price">{device.price} USD</span>
                <button className="buy_now" onClick={addToCart}>
                    Buy now
                </button>
            </div>
        </li>
    )
}

export default Item