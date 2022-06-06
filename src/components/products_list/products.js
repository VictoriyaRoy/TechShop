import Sidebar from "./sidebar";
import List from "./list";
import DeviceContext from "../contexts/DeviceContext";
import FilterContext from "../contexts/FilterContext";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductsBody = () => {
    const params = useParams();
    const { devices } = useContext(DeviceContext);
    const { setAllDevices } = useContext(FilterContext);

    useEffect(() => {
        let result = [];
        for (var i = 0; i < devices.length; i++) {
            if (devices[i].category === params.category) {
                result.push(devices[i]);
            }
        }
        setAllDevices(result);
    }, [devices, params.category]);

    return (

        <section className='main'>
            <h3 className="section_header">
                {params.category}
            </h3>
            <Sidebar/>
            <List />

        </section>
    )
}

export default ProductsBody;