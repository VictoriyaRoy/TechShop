import "./description.css"
import Characteristics from "./characteristics"
import StarRating from "./StarRating"

const Description = ({device}) => {
    const addToCart = () => {
        fetch('shopping_cart', {
            method: 'POST',
            body: JSON.stringify(device),
            headers: {'Content-Type': 'application/json'}
        })
    }

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
                    <p className="price">{device.price} USD</p>
                    <button className="add_to_cart" onClick={addToCart}> + Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Description