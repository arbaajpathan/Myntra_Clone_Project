import { createSlice } from "@reduxjs/toolkit";


const bag_slice = createSlice({
    name: "bag_data",
     initialState: [], 
     reducers: {
        AddDataTobag: (state, action) => {
            // console.log("reducer",store,action);
            
           state.push(action.payload)

        }
        ,   RemoveDataFrombag: (state, action) => {
            // console.log("reducer",store,action);
            
          return state.filter((item)=>{
          return  item !==action.payload;
           })

        }

    }
})

export default bag_slice
export const bagActions = bag_slice.actions
