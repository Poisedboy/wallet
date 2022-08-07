import { useState, useEffect } from "react";
import Income from "../Income/Income";
import Expense from "../Expense/Expense";

const Counter = ({counterRedux, expense, income}) => {
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
        setCounter(counterRedux);
    }, [counterRedux]);

    return (
        <div className="counter">
            <h3>{counter}</h3>
            <Income data={income} />
            <Expense data={expense} />
        </div>
    );
};

export default Counter;
