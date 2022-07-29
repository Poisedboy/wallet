import { ADD_INCOME, ADD_COSTS } from './types';

export const addIncome = (income) => {
    return {
        type: ADD_INCOME,
        payload: income
    };
};

export const addCosts = (costs) => {
    return {
        type: ADD_COSTS,
        payload: costs
    };
};