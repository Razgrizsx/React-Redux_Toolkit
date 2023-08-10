import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    numCakes: 10
}

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers:{
        ordered: (state) => {state.numCakes--},
        restock: (state, action) => {state.numCakes += action.payload}
    }  
})

export default cakeSlice.reducer
export const {ordered, restock} =  cakeSlice.actions