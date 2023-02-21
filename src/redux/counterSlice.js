import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    counter: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementCounter: (state, action) => {
            state.counter = +state.counter + +action.payload;
        },
        decrementCounter: (state, action) => {
            state.counter = +state.counter - +action.payload;
        },
    },
});

export const { incrementCounter, decrementCounter } = counterSlice.actions;
export default counterSlice.reducer
