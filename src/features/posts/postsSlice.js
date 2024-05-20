import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', title: 'First Post', content: 'Hello worrld ~'},
    {id: '2', title: 'Second Post', content: 'more hellos ~'}
    
]

const postsSlice = createSlice(
    {
        name: 'posts',
        initialState,
        reducers: {}
    }
)

export default postsSlice.reducer