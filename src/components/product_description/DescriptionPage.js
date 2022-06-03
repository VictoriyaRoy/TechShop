import { useParams } from "react-router-dom";
import { useContext } from "react";
import DeviceContext from "../contexts/DeviceContext";
import Description from "./description"
import Related from "./related"

const DescriptionPage = (() => {
    const { devices } = useContext(DeviceContext);
    const params = useParams();

    let thisDevice = devices.filter(device => device.id == params.id)[0];

    if (thisDevice == null) {
        return (<main></main>);
    }

    return (
       <main>
           <Description device={thisDevice}/>
           <Related device={thisDevice}/>
       </main>
    )
})

export default DescriptionPage