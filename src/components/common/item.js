import './item.css'
import { useState, useContext, useEffect } from 'react'
import CartContext from '../contexts/CartContext';

const Item = ({device}) => {
    const {order, addToCart} = useContext(CartContext);
    const [active, setActive] = useState(true);

    useEffect(() => {
        let devicesID = order.map(orderItem => orderItem.id);
        if (devicesID.includes(device.id)) {
            setActive(false);
        } else {
            setActive(true);
        }
    }, [order]);

    return (
        <li className="item">
            <img src={device.src} alt="some picture" className="item_image"/>
            <h4 className="product_title">{device.title}</h4>
            <p className="product_short_description">
              {device.description}
            </p>
            <div className="price_and_order">
                <span className="price">{device.price} USD</span>
                <button className="buy_button" onClick={() => addToCart(device)} disabled = {!active}>
                    {active? "Buy now" : "In a cart"}
                </button>
            </div>
        </li>
    )
}

export default Item