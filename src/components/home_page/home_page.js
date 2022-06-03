import Hits from "./hits";
import New from "./new";
import Feedback from "./feedback";
import {useContext} from "react";
import DeviceContext from '../contexts/DeviceContext';
import DescriptionPage from "../product_description/DescriptionPage";

const HomeBody = () => {
    const { devices } = useContext(DeviceContext);

    return (
        <main>
            <DescriptionPage device={devices[8]}/>
            <Hits devices={devices}/>
            <New devices={devices}/>
            <Feedback/>
        </main>
    )
}

export default HomeBody;