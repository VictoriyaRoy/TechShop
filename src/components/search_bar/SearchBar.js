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
        setSearchResult(devices)
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