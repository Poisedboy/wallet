import { ADD_EXPENSE, ADD_INCOME } from './types';

let initialState = {
    counter: 1,
    expense: [],
    income: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INCOME:
            return {
                ...state,
                income: [...state.income, action.payload]
            }
        case ADD_EXPENSE:
            return {
                ...state,
                expense: [...state.expense, action.payload]
            }
        default:
            return state;
    };
};

export default rootReducer;
