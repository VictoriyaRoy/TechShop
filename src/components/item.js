import '../styles/item.css'

const Item = () => {
    return (
        <li className="item">
            <div className="img_wrapper"></div>
            <h4 className="product_title">Product Title</h4>
            <p className="product_description">
                Space for a small product description
            </p>
            <div className="price_and_order">
                <span className="price">1.48 USD</span>
                <button className="buy_now">
                    Buy now
                </button>
            </div>
        </li>
    )
}

export default Item