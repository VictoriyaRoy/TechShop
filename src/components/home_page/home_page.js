import Hits from "./hits";
import New from "./new";
import Feedback from "./feedback";
import {useContext} from "react";
import DeviceContext from '../contexts/DeviceContext';
import ProductsBody from "../products_list/products";

const HomeBody = () => {
    const { devices } = useContext(DeviceContext);

    return (
        <main>
            <ProductsBody category="Smartphone"/>
            <Hits devices={devices}/>
            <New devices={devices}/>
            <Feedback/>
        </main>
    )
}

export default HomeBody;