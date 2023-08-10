import { ordered as cakeOrdered } from "../cake/cakeSlice"

import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    numIcecream: 20
}

const icecreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers:{
        ordered: (state) => {state.numIcecream--},
        restock: (state, action) => {state.numIcecream += action.payload}
    },

    //firt case
    /* extraReducers:{
        ['cake/ordered']: (state) => {   //when a cake is ordered we also reduce the icecream, example buying a cake icecream for free
            state.numIcecream--
        }
    } */
    //second case (recommended)
    extraReducers:(builder) => {
        builder.addCase(cakeOrdered, state => {
            state.numIcecream--
        })
    }
})


export default icecreamSlice.reducer
export const {ordered, restock} = icecreamSlice.actions
