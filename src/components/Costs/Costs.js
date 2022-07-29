import React from 'react';
import withHighOrderComponent from '../HOC/ComeInCostsHOC';

const Costs = ({ dataRender }) => {
    
    return (
        <ul>
            {dataRender}
        </ul>
    );
};

export default withHighOrderComponent(Costs);