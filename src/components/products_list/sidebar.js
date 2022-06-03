import Price from "./price";
import Brands from "./brands";
import Rating from "./rating";
import "./sidebar.css"
import { Component, useCallback, useState } from "react";

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

const Sidebar = ({devices, patentHandler}) => {

    const forceUpdate = useForceUpdate();

    const [brands, setbrands] = useState([])
    const [rate, setrate] = useState([])
    const [price, setprice] = useState([])

    const get_brandes = useCallback((brandes) => {setbrands(brandes)});
    const get_rate = useCallback((rate) => {setrate(rate)});
    const get_price = useCallback((price) => {setprice(price)});

    
    const aply = (event) => {
        //console.log(devices_new())
        patentHandler(devices_new());
    };

    const reset_button = (event) => {
        window.location.reload(); 
    };


    const devices_new = () => {
        let new_list = []
        if (price.length === 0){
            if (rate.length === 0 && brands.length === 0){
                for (var i = 0; i< devices.length; i++){
                    new_list.push(devices[i]) 
                }
            } else if (rate.length === 0){
                for (var i = 0; i< devices.length; i++){
                    if ( brands.includes(devices[i].brand)){
                        new_list.push(devices[i])
                    }
                }
            } else if(brands.length === 0){
                for (var i = 0; i< devices.length; i++){
                    if ( rate.includes(devices[i].rating)){
                        new_list.push(devices[i])
                    }
                }
            } else {
                for (var i = 0; i< devices.length; i++){
                    if (brands.includes(devices[i].brand) && rate.includes(devices[i].rating)){
                        new_list.push(devices[i])
                    }
                } 
            }
        } else {
            if (rate.length === 0 && brands.length === 0){
                for (var i = 0; i< devices.length; i++){
                    if ( price[0] <= devices[i].price && price[1] >= devices[i].price){
                        new_list.push(devices[i])
                    }
                }
            } else if (rate.length === 0){
                for (var i = 0; i< devices.length; i++){
                    if (price[0] <= devices[i].price && price[1] >= devices[i].price && brands.includes(devices[i].brand)){
                        new_list.push(devices[i])
                    }
                }
            } else if(brands.length === 0){
                for (var i = 0; i< devices.length; i++){
                    if (price[0] <= devices[i].price && price[1] >= devices[i].price && rate.includes(devices[i].rating)){
                        new_list.push(devices[i])
                    }
                }
            } else {
                for (var i = 0; i< devices.length; i++){
                    if (price[0] <= devices[i].price && price[1] >= devices[i].price && brands.includes(devices[i].brand) && rate.includes(devices[i].rating)){
                        new_list.push(devices[i])
                    }
                } 
            } 
        }
        return new_list
    }
    return (
        <section className='sidebar'>
            <Brands devices = {devices} patentHandlerbrand = {get_brandes}/>
            <Rating  patentHandlerrate = {get_rate}/>
            <Price  devices = {devices} patentHandler = {get_price}/>
            <table className = 'buttons'>
            <tr>
                <th>
                    <button className="aply" onClick={aply}>
                        Aply
                    </button>
                </th>

                <th>
                    <button className="reset"  onClick={reset_button}>
                        Reset
                    </button>
                </th>
            </tr>
            </table>
        </section>
    )
}

export default Sidebar