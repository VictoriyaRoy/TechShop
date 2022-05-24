import './Header.css'
import ShoppingCart from '../shopping_cart/ShoppingCart'

const Header = () => {
    const categories = ['Smarthpones', 'Laptops', 'Tablets', 'Accessories']

    return (
        <div className='headerBody'>
            <header>
                <h1 className='shopTitle'>Tech Shop</h1>
                <input className='searchBar' type="text" placeholder="Search Products..."></input>
                <ShoppingCart/>
                

            </header>
            <nav>
                <ul className='navMenu'>
                   {
                    categories.map((title) => {
                        return <li>{title}</li>
                    })
                   } 
                </ul>
            </nav>
        </div>
    );
}

export default Header