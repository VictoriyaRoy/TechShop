import './SearchBar.css'
import { useState } from 'react'
import SearchList from './SearchList';
import { useEffect } from 'react';

const SearchBar = () => {
    const [isShown, setIsShown] = useState(false);
    const [devices, setDevices] = useState([])
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        fetch('devices').then(response => response.json()).then(devices => {
            setDevices(devices)
        })
    }, [])

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