import "./characteristics.css"

const Characteristic = (props) => {
    return (
        <div>
            <dt className="name">{props.name}:</dt>
            <dd className="value">{props.value}</dd>
        </div>
    )
}

const Characteristics = ({device}) => {
    return(
        <dl className="Characteristics">
            <Characteristic name="SKU" value={device.id}></Characteristic>
            <Characteristic name="Category" value={device.category}></Characteristic>
            <Characteristic name="In stock" value="Yes"></Characteristic>
            {Object.entries(device.characteristics).map( ([key, value]) => {return <Characteristic name={key} value={value}/>})}
        </dl>
    )
}

export default Characteristics