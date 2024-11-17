import { useSelector } from "react-redux";
import Bag_summary from "../Bag_Summary";
import Bag_item_container from "../Bag_item_Container";
function Bag() {
    const cart = useSelector((store) => store.bag_data)
    const itemmmm = useSelector((store)=>store.item)
    const final_list = itemmmm.filter((dta)=>{
        const final_data = cart.indexOf(dta.id)
        return final_data>=0
    })
    return <>

        <main>
            <div className="bag-page">
                <div className="bag-items-container">
                    {
                        final_list.map((item) => {
                            return <Bag_item_container key={item.id} item={item} />
                       })
                    }
                </div>
                <div className="bag-summary">
                    <Bag_summary />
                </div>

            </div>
        </main>

    </>
}

export default Bag;