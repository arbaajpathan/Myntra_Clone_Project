import { createSlice } from "@reduxjs/toolkit";


const item_slice = createSlice({
    name: "item",//name is use for connection with store 
    initialState: [], // initial state access by useselector hook 
    reducers: {  // reducers function access by useDispatch 
        Add_initial_item: (state, action) => {
            return action.payload
        },
        search_item: (state, action) => {
            return state.filter((product) => {
                return product.company === action.payload
            })
        }
    }
})

export default item_slice
export const itemActions = item_slice.actions