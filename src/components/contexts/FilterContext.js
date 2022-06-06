import { maxHeight } from "@mui/system";
import { createContext, useEffect, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
    const [allDevices, setAllDevices] = useState([]);
    const [filterDevices, setFilterDevices] = useState([]);
    const [brands, setBrands] = useState([])
    const [rating, setRating] = useState([])
    const [price, setPrice] = useState([])
    const [maxLimit, setMaxLimit] = useState(1)

    useEffect(() => {
        let max = 1;
        for (let i = 0; i < allDevices.length; i++) {
            if (allDevices[i].price > max) {
                max = allDevices[i].price;
            }
        }
        setMaxLimit(max);
        resetFilters();
        setPrice([1, max])
    }, [allDevices])

    const resetFilters = () => {
        setBrands([]);
        setRating([]);
        setPrice([1, maxLimit])
        setFilterDevices(allDevices)
    }

    return (
        <FilterContext.Provider value={{
            allDevices, setAllDevices,
            filterDevices, setFilterDevices,
            brands, setBrands,
            rating, setRating,
            price, setPrice,
            maxLimit, resetFilters
        }}>
            {children}
        </FilterContext.Provider>
    );
}

export default FilterContext;