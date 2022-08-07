import React from 'react';
import withHighOrderComponent from '../HOC/IncomeExpenseHOC';

const Expense = ({ dataRender }) => {
    return (
        <div>
            <h5>Витрати</h5>
            <ul>
                {dataRender}
            </ul>
        </div>
    );
};

export default withHighOrderComponent(Expense);