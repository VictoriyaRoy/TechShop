import { createContext, useEffect, useState } from "react";

const DeviceContext = createContext();

export function DeviceProvider({ children }) {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        fetch('devices').then(response => response.json()).then(devices => {
            setDevices(devices)
        })
    }, [])

    return (
        <DeviceContext.Provider value={{ devices }}>
            {children}
        </DeviceContext.Provider>
    );
}

export default DeviceContext;