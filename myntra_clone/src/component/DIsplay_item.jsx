import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bag_slice";

function Display_item({ item }) {
    const dispatch = useDispatch()
    const bag_button = useSelector((store) => store.bag_data)
    const check_added = bag_button.indexOf(item.id) >= 0


    return <>
        <div className="item-container">
            <img className="item-image" src={item.image} alt="item image" />
            <div className="rating">
                {item.rating.stars} ⭐ | {item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
                <span className="current-price">Rs {item.current_price}</span>
                <span className="original-price">Rs {item.original_price}</span>
                <span className="discount">({item.discount_percentage}% OFF)</span>
            </div>
            {
                check_added ? <button className="btn-add-bag btn btn-danger" onClick={() => {
                    console.log(item.id);

                    dispatch(bagActions.RemoveDataFrombag(item.id))


                }}>Remove From Bag</button> : <button className="btn-add-bag " onClick={() => {
                    
                    dispatch(bagActions.AddDataTobag(item.id))


                }}>Add to Bag</button>
            }



        </div>
    </>
}

export default Display_item;