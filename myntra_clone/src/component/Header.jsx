import { useRef } from "react";
import { BsPersonFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { itemActions } from "../store/Item_slice";

function Header() {
    const dispatch = useDispatch()
    const inputref = useRef("")
    const bag = useSelector((store) => store.bag_data)
    console.log(bag);
    return <>
        <header>
            <div className="logo_container">
                <Link to="/"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home" /></Link>
            </div>
            <nav className="nav_bar">
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Kids</a>
                <a href="#">Home & Living</a>
                <a href="#">Beauty</a>
                <a href="#">Studio <sup>New</sup></a>
            </nav>
            <div className="search_bar">
                <span className="search_icon">search</span>
                <input ref={inputref} onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        dispatch(
                            itemActions.search_item(inputref.current.value)
                        )
                    }

                }}
                    className="search_input" placeholder="Search for products, brands and more"
                />
            </div>
            <div className="action_bar">
                <div className="action_container">
                    <BsPersonFill />
                    <span className="action_name">Profile</span>
                </div>

                <div className="action_container">
                    <BsHeart />
                    <span className="action_name">Wishlist</span>
                </div>

                <Link className="action_container" to="/bag">
                    <BsHandbag />
                    <span className="action_name">Bag</span>
                    <span className="bag-item-count">{bag.length}</span>
                </Link>
            </div>
        </header>
    </>
}

export default Header;