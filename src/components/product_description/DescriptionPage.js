import Description from "./description"
import Related from "./related"

const DescriptionPage = ({device}) => {

    if (device == null) {
        return (<main></main>);
    }

    return (
       <main>
           <Description device={device}/>
           <Related device={device}/>
       </main>
    )
}

export default DescriptionPage