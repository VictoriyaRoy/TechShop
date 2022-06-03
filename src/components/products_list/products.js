import Sidebar from "./sidebar";
import List from "./list";
import {useEffect, useState, useCallback} from "react";
import { render } from "@testing-library/react";

const ProductsBody = ({category}) => {
    const [devices, setDevices] = useState([])
    const [devices_list, setDevicesList] = useState([devices])
    const get_devices = useCallback((devices) => { setDevicesList(devices) }, []); 


    useEffect(() => {
        fetch('devices').then(response => response.json()).then(device => {
            setDevices(device)
            setDevicesList(device)
        })
    }, [])
    
    

    function check_cat(cat, devic){
        let devices_cat = []
        for (var i = 0; i< devic.length; i++){
            if (devic[i].category === cat){
                devices_cat.push(devic[i])
            }
        }
        return devices_cat
    }
    
    return (
        
        <section className='main'>
                <h3 className="section_header">
                    {category}
                </h3>
                <Sidebar devices={check_cat(category, devices)} patentHandler={get_devices}/>
                <List devices={check_cat(category, devices_list)}/>
            
        </section>
    )
}

export default ProductsBody;