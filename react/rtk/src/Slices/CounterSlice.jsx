import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name:'Counter',
    initialState:{
        count:0
    },
    reducers:{
        increment:(state,action) => {
            state.count += action.payload
        },
        decrement:(state) => {
            state.count -= 1;
        },
        reset:(state) => {
            state.count = 0;
        },
        customIncrement:(state,action) => {
                state.count += action.payload
        }
    }
})

export const {increment,decrement,reset,customIncrement} = CounterSlice.actions;
export default CounterSlice.reducer;