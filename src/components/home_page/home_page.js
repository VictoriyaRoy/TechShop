import Hits from "./hits";
import New from "./new";
import Feedback from "./feedback";
import {useContext} from "react";
import DeviceContext from '../contexts/DeviceContext';

const HomeBody = () => {
    const { devices } = useContext(DeviceContext);

    return (
        <main>
            <Hits devices={devices}/>
            <New devices={devices}/>
            <Feedback/>
        </main>
    )
}

export default HomeBody;