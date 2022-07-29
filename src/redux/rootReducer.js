import { ADD_COSTS, ADD_INCOME } from './types';

let initialState = {
    counter: 1,
    costs: [],
    income: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INCOME:
            return {
                ...state,
                income: state.income.push(action.payload)
            }
        case ADD_COSTS:
            return {
                ...state,
                costs: state.costs.push(action.payload)
            }
        default:
            return state;
    };
};

export default rootReducer;
