import { useState, useEffect } from "react";

const Counter = ({counterRedux}) => {
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
        setCounter(counterRedux);
    }, [counterRedux]);

    return (
        <div className="counter">
            <h3>{counter}</h3>
        </div>
    );
};

export default Counter;
