import Sidebar from "./sidebar";
import List from "./list";
import DeviceContext from "../contexts/DeviceContext";
import { useContext, useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductsBody = () => {
    const params = useParams();
    const { devices } = useContext(DeviceContext);

    const [category_devices, setCategoryDevices] = useState([]);
    const [devices_list, setDevicesList] = useState([]);

    const get_devices = useCallback((devices) => { setDevicesList(devices) }, []);

    useEffect(() => {
        const result = check_cat(params.category, devices)
        setCategoryDevices(result);
        setDevicesList(result);
    }, [devices, params.category]);

    function check_cat(cat, devic) {
        let devices_cat = []
        for (var i = 0; i < devic.length; i++) {
            if (devic[i].category === cat) {
                devices_cat.push(devic[i])
            }
        }
        return devices_cat
    }

    return (

        <section className='main'>
            <h3 className="section_header">
                {params.category}
            </h3>
            <Sidebar devices={category_devices} patentHandler={get_devices} />
            <List devices={devices_list} />

        </section>
    )
}

export default ProductsBody;