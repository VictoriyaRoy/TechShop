import Item from "../common/item";
import '../home_page/hits_new.css'
import { useContext } from "react";
import DeviceContext from "../contexts/DeviceContext";

const Related = ({ device }) => {
    const { devices } = useContext(DeviceContext);
    const filterRelated = devices.filter((element) => {
        return (element.title !== device.title &&
            (element.category === device.category || element.brand === device.brand))
    })

    if (!filterRelated) {
        return <section></section>
    }

    return (
        <section className="Related">
            <h3 className="section_header">
                Related
            </h3>
            <ul className="item_list">
                {filterRelated.slice(0, 4).map(filt_device => { return <Item device={filt_device} /> })}
            </ul>
        </section>
    )
}

export default Related