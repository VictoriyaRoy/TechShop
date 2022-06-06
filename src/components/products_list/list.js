import "./list.css"
import Item from "../common/item";
import FilterContext from "../contexts/FilterContext";
import { useContext } from "react";


const List = () => {
    const { filterDevices } = useContext(FilterContext);

    return (
        <section className="list">
            <ul className="items">
                {filterDevices.map((device) =>
                    <Item device={device} />
                )}
            </ul>

        </section>
    )
}

export default List