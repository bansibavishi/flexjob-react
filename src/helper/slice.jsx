import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        setUser: (state, action) => state = action.payload
    },
})

// Action creators are generated for each case reducer function
export const { setUser } = counterSlice.actions // function
export const userReducer = counterSlice.reducer // store value
