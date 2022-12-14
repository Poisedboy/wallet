import React from 'react';
import withHighOrderComponent from '../HOC/IncomeExpenseHOC';

const Income = ({dataRender}) => {
    return (
        <div>
            <h5>Дохід</h5>
            <ul>
                {dataRender}
            </ul>
        </div>
    )
};

export default withHighOrderComponent(Income);
