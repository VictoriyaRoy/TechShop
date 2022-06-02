import './CartList.css';
import './CartText.css';
import CartItem from './CartItem';

const CartList = (props) => {
    if (props.order.length === 0) {
        return (
            <div className='cartBody'>
                <h1>Shopping Cart</h1>
                <span className='emptyCart'>There is nothing here yet...</span>
            </div>
        ); 
    }

    let totalSum = 0;
    for (let device of props.order) {
        totalSum += device.price;
    }

return (
        <div className='cartBody'>
            <h1>Shopping Cart</h1>
            {
                props.order.map((device) => <CartItem key={device.id} device={device} remove={props.remove}/>)
            }
            <div className='cartFooter'>
                <div>
                    <h2>Total</h2>
                    <h1>{totalSum} USD</h1>
                </div>
                <button className='payButton'>Go to Checkout</button>
            </div>
        </div>
    );
}


export default CartList