import './SearchBar.css'
import { useState } from 'react'
import SearchList from './SearchList';

const SearchBar = () => {
    const [isShown, setIsShown] = useState(false);
    const [searchResult, setSearchResult] = useState([]);

    const updateSearch = (target) => {
        setIsShown(true)
    } 

    return (
        <div className='searchContainer'>
            <input className='searchBar'type="text" placeholder="Search Products..."
                onChange={updateSearch}
                onClick={() => setIsShown(true)}
                onBlur={() => setIsShown(false)}>
            </input>
            {isShown && searchResult && <SearchList devices={searchResult}/>}
        </div>
    );
}

export default SearchBar