import React from 'react';

const withHighOrderComponent = (Component) => (props) => {
    const dataRender = props.data.map(item => {
        return (
            <li key={item.price}>
                <p>{`${item.name} - ${item.price}`}</p>
            </li>
        );
    });

    return <Component dataRender={dataRender} />
};

export default withHighOrderComponent;
