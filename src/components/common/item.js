import './item.css'

const Item = ({device}) => {
    return (
        <li className="item">
            <img src={device.src} alt="some picture" className="item_image"/>
            <h4 className="product_title">{device.title}</h4>
            <p className="product_description">
              {device.description}
            </p>
            <div className="price_and_order">
                <span className="price">{device.price} USD</span>
                <button className="buy_now">
                    Buy now
                </button>
            </div>
        </li>
    )
}

export default Item