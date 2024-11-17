import { useSelector } from "react-redux";

function Bag_summary() {
    const cart = useSelector((store) => store.bag_data)
    const itemmmm = useSelector((store) => store.item)
    const final_list = itemmmm.filter((dta) => {
        const final_data = cart.indexOf(dta.id)
        return final_data >= 0
    })
    let totalItem = final_list.length;
    let totalMRP = 0;
    let totalDiscount = 0;
    let CONVENIENCE_FEES=99;

    final_list.forEach(bagItem => {
        totalMRP += bagItem.original_price;
        totalDiscount += bagItem.original_price - bagItem.current_price;
    });

    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;


    // const bag_summary = { totalItem: 3, totalDiscount: 99, totalMRP: 5999, finalPayment: 5900 }
    return <>
        <div className="bag-details-container">
            <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
            <div className="price-item">
                <span className="price-item-tag">Total MRP</span>
                <span className="price-item-value">₹{totalMRP}</span>
            </div>
            <div className="price-item">
                <span className="price-item-tag">Discount on MRP</span>
                <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
            </div>
            <div className="price-item">
                <span className="price-item-tag">Convenience Fee</span>
                <span className="price-item-value">₹99</span>
            </div>
            <hr />
            <div className="price-footer">
                <span className="price-item-tag">Total Amount</span>
                <span className="price-item-value">₹{finalPayment}</span>
            </div>
        </div>
        <button className="btn-place-order" onClick={()=>alert("Thank You From Myntra.....!!!")}>
            <div className="css-xjhrni">PLACE ORDER</div>
        </button>
    </>
}

export default Bag_summary;