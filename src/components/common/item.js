import './item.css'

const Item = ({device}) => {
    const addToCart = () => {
        const cartDeviceData = {
            'id': device.id,
            'src': device.src,
            'title': device.title,
            'category': device.category,
            'price': device.price
        }
        /*
        let prevCartData = ''
        fetch('shopping_cart')
          .then((response) => {
            prevCartData =  response.json();
          })
        prevCartData = JSON.parse(prevCartData)
        */
        fetch('shopping_cart', {
            method: 'POST',
            body: JSON.stringify(cartDeviceData),
            headers: {'Content-Type': 'application/json'}}
        )
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