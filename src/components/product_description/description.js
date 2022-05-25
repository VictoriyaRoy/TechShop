import "./description.css"
import Characteristics from "./characteristics"
import StarRating from "../common/StarRating"

const Description = () => {
    return (
        <div className="Description">
            <div className="description_image" ></div>
            <div className="second_half">
                <h1 className="product_title">Iphone 12</h1>
                <StarRating rating='4'/>
                <p className="product_description"> description description description description description description description description description description description description </p>
                <Characteristics/>
                <div className="purchase">
                    <p className="price">39.14 USD</p>
                    <button className="add_to_cart"> + Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Description