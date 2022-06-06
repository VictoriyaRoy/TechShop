import "./sidebar.css"
import Price from "./price";
import Brands from "./brands";
import Rating from "./rating";
import FilterContext from "../contexts/FilterContext";
import { useContext } from "react";

const Sidebar = () => {
    const { allDevices, setFilterDevices, brands, rating, price, resetFilters } = useContext(FilterContext);

    const filterDevices = (devices) => {
        let new_list = []
        if (rating.length === 0 && brands.length === 0) {
            for (let i = 0; i < devices.length; i++) {
                if (price[0] <= devices[i].price && price[1] >= devices[i].price) {
                    new_list.push(devices[i]);
                }
            }
        } else if (rating.length === 0) {
            for (let i = 0; i < devices.length; i++) {
                if (price[0] <= devices[i].price && price[1] >= devices[i].price && brands.includes(devices[i].brand)) {
                    new_list.push(devices[i]);
                }
            }
        } else if (brands.length === 0) {
            for (let i = 0; i < devices.length; i++) {
                if (price[0] <= devices[i].price && price[1] >= devices[i].price && rating.includes(devices[i].rating)) {
                    new_list.push(devices[i]);
                }
            }
        } else {
            for (let i = 0; i < devices.length; i++) {
                if (price[0] <= devices[i].price && price[1] >= devices[i].price && brands.includes(devices[i].brand) && rating.includes(devices[i].rating)) {
                    new_list.push(devices[i]);
                }
            }
        }
        setFilterDevices(new_list);
    }

    return (
        <section className='sidebar'>
            <Brands />
            <Rating />
            <Price />
            <table className='buttons'>
                <tr>
                    <th>
                        <button className="apply" onClick={() => filterDevices(allDevices)}>
                            Apply
                        </button>
                    </th>
                    <th>
                        <button className="reset" onClick={resetFilters}>
                            Reset
                        </button>
                    </th>
                </tr>
            </table>
        </section>
    )
}

export default Sidebar