import Sidebar from "./sidebar";
import List from "./list";

const ProductsBody = () => {
    return (
        <main className='main'>
            <h3 className="section_header">
                Smartphones
            </h3>
            <Sidebar/>
            <List/>
        </main>
    )
}

export default ProductsBody;