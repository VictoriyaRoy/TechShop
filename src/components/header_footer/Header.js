import './Header.css'
import ShoppingCart from '../shopping_cart/ShoppingCart'
import SearchBar from '../search_bar/SearchBar';

const Header = () => {
    const categories = ['Smarthpones', 'Laptops', 'Tablets', 'Accessories']

    return (
        <div className='headerBody'>
            <header>
                <h1 className='shopTitle'>Tech Shop</h1>
                <SearchBar/>
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