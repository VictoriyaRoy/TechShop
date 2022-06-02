import Hits from "./hits";
import New from "./new";
import Feedback from "./feedback";
import {useContext} from "react";
import DeviceContext from '../contexts/DeviceContext';
import Related from '../product_description/related'
import Description from '../product_description/description'

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