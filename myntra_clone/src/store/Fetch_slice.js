import { createSlice } from "@reduxjs/toolkit";

const Fetchdata_slice = createSlice({
    name: "fetch_data",
    initialState: {   // useselectoer hook access initialstate
        fetch_done: false,  // this is initial state object where we can set the initial state of perticular variable where we want to perform operation
        fetch_processing: false
    },
    reducers: {
        mark_fetch_done: (state) => {
            state.fetch_done = true
        },
        mark_fetch_Processing: (state) => {
            state.fetch_processing = true
        },
        mark_fetch_Not_processing: (state) => {
            state.fetch_processing = false
        }
    }
})

export default Fetchdata_slice
export const fetch_data_action = Fetchdata_slice.actions;