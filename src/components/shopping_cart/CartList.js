import './CartList.css';
import './CartText.css';
import CartItem from './CartItem';
import CartContext from '../contexts/CartContext';
import { useContext } from 'react';

const CartList = () => {
    const { order, buyCart } = useContext(CartContext);

    if (order.length === 0) {
        return (
            <div className='cartBody'>
                <h1>Shopping Cart</h1>
                <span className='emptyCart'>There is nothing here yet...</span>
            </div>
        ); 
    }

    let totalSum = 0;
    for (let device of order) {
        totalSum += device.price;
    }

return (
        <div className='cartBody'>
            <h1>Shopping Cart</h1>
            {
                order.map((device) => <CartItem key={device.id} device={device}/>)
            }
            <div className='cartFooter'>
                <div>
                    <h2>Total</h2>
                    <h1>{totalSum} USD</h1>
                </div>
                <button className='payButton' onClick={() => buyCart()} >Go to Checkout</button>
            </div>
        </div>
    );
}


export default CartList