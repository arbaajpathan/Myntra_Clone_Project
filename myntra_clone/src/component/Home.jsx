import Display_item from "./DIsplay_item";
import { useSelector } from "react-redux";
function Home() {
    const item = useSelector((store) => store.item)
    console.log("got items",item);

    return <>
        <main>
            <div className="items-container">

                {
                    item.map((product) => {
                        return <Display_item key={product.id} item={product} />
                    })
                }
            </div>
        </main>
    </>
}
export default Home;