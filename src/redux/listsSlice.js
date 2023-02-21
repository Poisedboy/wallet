import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    expense: [],
    income: []
};

export const listsSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.expense.push(action.payload);
        },
        addIncome: (state, action) => {
            state.income.push(action.payload);
        },
    },
});

export const { addExpense, addIncome } = listsSlice.actions;
export default listsSlice.reducer;
