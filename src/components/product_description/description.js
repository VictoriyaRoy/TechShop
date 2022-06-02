import "./description.css"
import Characteristics from "./characteristics"
import StarRating from "./StarRating"
import CartContext from "../contexts/CartContext"
import { useContext, useState, useEffect } from "react"

const Description = ({device}) => {
    const {order, addToCart} = useContext(CartContext);
    const [active, setActive] = useState(true);

    useEffect(() => {
        let devicesSKU = order.map(orderItem => orderItem.SKU);
        if (devicesSKU.includes(device.SKU)) {
            setActive(false);
        } else {
            setActive(true);
        }
    }, [order]);

    return (
        <div className="Description">
            <img className="description_image" src={device.src}></img>
            <div className="second_half">
                <div>
                    <h1 className="product_title">{device.title}</h1>
                    <StarRating rating={device.rating}/>
                </div>
                <p className="product_description"> {device.detailed_description} </p>
                <Characteristics device={device}/>
                <div className="purchase">
                    <p className="description_price">{device.price} USD</p>
                    <button className="add_to_cart" onClick={() => addToCart(device)} disabled = {!active}>
                        {active? "+ Add to cart" : "Already in a cart"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Description