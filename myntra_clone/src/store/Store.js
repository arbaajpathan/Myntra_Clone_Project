import { configureStore } from "@reduxjs/toolkit";
import item_slice from "./Item_slice";
import Fetchdata_slice from "./Fetch_slice";
import bag_slice from "./bag_slice";

// here we made a connection between slices and store 
const Myntra_store = configureStore({
    reducer: { item: item_slice.reducer, fetch_data: Fetchdata_slice.reducer,
        bag_data:bag_slice.reducer
     }
});
export default Myntra_store;