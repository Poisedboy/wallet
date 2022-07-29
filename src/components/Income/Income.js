import React from 'react';
import withHighOrderComponent from '../HOC/ComeInCostsHOC';

const Income = ({ dataRender }) => {
    
    return (
        <ul>
            {dataRender}
        </ul>
    )
};

export default withHighOrderComponent(Income);
