import './SearchBar.css'
import SearchList from './SearchList'
import { useState, useContext } from 'react'
import DeviceContext from '../contexts/DeviceContext';

const SearchBar = () => {
    const [isShown, setIsShown] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const { devices } = useContext(DeviceContext);

    const updateSearch = (target) => {
        let searchText = target.value.toLowerCase();
        if (!searchText) {
            setSearchResult([]);

        } else {
            let filtered = devices.filter(device => device.title.toLowerCase().includes(searchText));
            setSearchResult(filtered.slice(0, 5));
        }
    } 

    return (
        <div className='searchContainer'>
            <input className='searchBar'type="text" placeholder="Search Products..."
                onChange={(e) => updateSearch(e.target)}
                onClick={() => setIsShown(true)}
                onBlur={() => setIsShown(false)}>
            </input>
            {isShown && <SearchList devices={searchResult}/>}
        </div>
    );
}

export default SearchBar