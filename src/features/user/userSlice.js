import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"




export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {  //generates pending, fulfilled and rejected actions
   return await axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => res.data.map(user =>user.id))
}) 

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading=true
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
           })
    }
})

export default userSlice.reducer
