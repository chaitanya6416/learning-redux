import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', name: 'chaitanya'},
    {id: '2', name: 'katakam'},
    {id: '3', name: 'sharath'}
]

const userSlice = createSlice(
    {
        name: 'users',
        initialState,
        reducers: {}
    }
)

export default userSlice.reducer