import Hits from "./hits";
import New from "./new";
import Feedback from "./feedback";
import {useEffect, useState} from "react";

const HomeBody = () => {
    const [devices, setDevices] = useState([])

    useEffect(() => {
        fetch('devices').then(response => response.json()).then(device => {
            setDevices(device)
        })
    }, [])

    return (
        <main>
            <Hits devices={devices}/>
            <New devices={devices}/>
            <Feedback/>
        </main>
    )
}

export default HomeBody;