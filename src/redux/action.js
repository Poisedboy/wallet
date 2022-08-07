import { ADD_INCOME, ADD_EXPENSE } from './types';

export const addIncome = (income) => {
    return {
        type: ADD_INCOME,
        payload: income
    };
};

export const addExpense = (expense) => {
    return {
        type: ADD_EXPENSE,
        payload: expense
    };
};